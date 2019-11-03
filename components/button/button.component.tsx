import React from "react";

export default function ButtonComponent({ children }: ButtonProps) {
  return (
    <button className="h-8 w-40 rounded bg-gradient-button text-white text-base">
      {children}
    </button>
  );
}
interface ButtonProps {
  children: string;
}
