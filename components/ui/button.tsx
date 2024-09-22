import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="px-4 py-2 bg-red-700 text-white rounded hover:bg-red-500 transition"
    >
      {children}
    </button>
  );
};
