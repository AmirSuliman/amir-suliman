import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = ({
  props,
  className,
  children,
}: {
  props?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      {...props}
      className={`px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
