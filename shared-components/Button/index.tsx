import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`bg-accent text-white py-2 px-6 rounded font-medium hover:bg-red-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}