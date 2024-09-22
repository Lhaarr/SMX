import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = ({ ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
};
