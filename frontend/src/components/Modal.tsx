interface ModalProps {
  type: "error" | "success";
  message: string;
  onClose: () => void;
}

export const Modal = ({ type, message, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-xl p-6 shadow-xl mx-6 w-full relative max-w-md text-center ${
          type === "success"
            ? "border-2 border-green-500"
            : "border-2 border-red-500"
        }`}
      >
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <p className="text-lg">{message}</p>
      </div>
    </div>
  );
};
