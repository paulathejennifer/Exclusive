import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-[#A3005A] text-white py-2 px-6 rounded font-medium hover:bg-[#B34A8A] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}