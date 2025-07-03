import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#0070f3] text-white px-6 py-3 text-base border-none rounded-md cursor-pointer transition-colors duration-200 hover:bg-[#0059c9]"
    >
      {children}
    </button>
  );
};
