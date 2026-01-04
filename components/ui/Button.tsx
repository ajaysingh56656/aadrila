"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string; // Users can pass 'w-full' here to make it 100% width
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
}: ButtonProps) {
  // Base styles:
  // - w-fit: only as wide as the text + padding
  // - px-8: horizontal padding to ensure it looks good when small

  /** * Typography Specs:
   * font-family: Raleway (font-raleway)
   * font-weight: 600 (font-semibold)
   * font-size: 16px (text-[16px])
   * line-height: 20px (leading-[20px])
   */
  const typography =
    "font-raleway font-semibold text-[16px] leading-[20px] text-center align-middle";
  const baseStyles =
    "w-fit px-8 py-4 rounded-full cursor-pointer flex items-center justify-center whitespace-nowrap overflow-hidden relative";

  const variants = {
    primary: "bg-blue text-white shadow-lg shadow-blue/30",
    secondary: "bg-orange text-white shadow-lg shadow-orange/30",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${typography} ${variants[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow:
          variant === "primary"
            ? "0 20px 40px rgba(62, 110, 180, 0.4)"
            : "0 20px 40px rgba(205, 96, 40, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17,
      }}
    >
      {/* Shine effect on hover */}
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
