interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 
      transition-colors duration-200 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
