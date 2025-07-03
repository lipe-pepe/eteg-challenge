interface ModalProps {
  type: "error" | "success";
  message: string;
  onClose: () => void;
}

export const Modal = ({ type, message, onClose }: ModalProps) => {
  const borderColor =
    type === "success" ? "border-green-500" : "border-red-500";
  const bgColor = type === "success" ? "bg-green-50" : "bg-red-50";
  const textColor = type === "success" ? "text-green-600" : "text-red-600";

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`rounded-xl p-6 shadow-xl w-full relative max-w-md text-center border-2 ${borderColor} ${bgColor} ${textColor}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`absolute top-2 right-4 text-xl font-bold hover:opacity-80 ${textColor}`}
          onClick={onClose}
        >
          ×
        </button>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};
