import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <input
          className={`
            w-full
            rounded-md
            border
            border-gray-300
            px-3
            py-2
            text-sm
            placeholder:text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-transparent
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${className}
          `}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';