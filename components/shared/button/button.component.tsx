import React from 'react';

export default function ButtonComponent({
  children,
  type = 'submit',
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="h-8 w-40 rounded bg-gradient-button text-white text-base"
    >
      {children}
    </button>
  );
}
interface ButtonProps {
  children: string;
  type?: 'submit' | 'button';
  onClick: () => void;
}
