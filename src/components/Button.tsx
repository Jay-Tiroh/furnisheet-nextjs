"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}
const Button = ({ text, className, onClick, disabled, href }: ButtonProps) => {
  return href ? (
    <Link href={href}>
      <button
        className={`btn ${
          className
            ? className
            : "bg-secondary text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
        } `}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={`btn ${
        className
          ? className
          : "bg-secondary text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
