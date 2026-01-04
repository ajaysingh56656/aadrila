"use client";

interface InputProps {
  type?: "text" | "email" | "tel" | "password";
  placeholder: string;
  name?: string;
  isTextArea?: boolean;
  rows?: number;
  className?: string;
}

export default function Input({
  type = "text",
  placeholder,
  name,
  isTextArea = false,
  rows = 4,
  className = "",
}: InputProps) {
  /**
   * Figma Specs applied:
   * height: 52px (h-[52px])
   * border: 1px solid #959595 (border-[#959595])
   * border-radius: 10px (rounded-[10px])
   * padding: 16px 24px (py-[16px] px-[24px])
   * gap: 10px (gap-[10px])
   */
  const baseClasses = `
    w-full bg-white border border-[#959595] rounded-[10px] 
    px-4 sm:px-[24px] py-3 sm:py-[16px] gap-[10px]
    text-[14px] sm:text-[16px] text-black-light focus:outline-none focus:border-blue 
    transition-colors placeholder:text-[#959595] font-manrope
  `;

  if (isTextArea) {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        /* For textareas, height is usually auto/flexible, 
           but we keep the same padding and border logic */
        className={`${baseClasses} resize-none ${className}`}
      />
    );
  }

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      /* Strictly locking height to 52px for standard inputs */
      className={`${baseClasses} h-[48px] sm:h-[52px] ${className}`}
    />
  );
}
