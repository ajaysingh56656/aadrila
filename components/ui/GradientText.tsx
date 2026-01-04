"use client";

import React from "react";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className = "",
}: GradientTextProps) {
  /**
   * Figma Specs applied:
   * font-family: Manrope (font-manrope)
   * font-weight: 400 (font-normal)
   * font-size: 20px (text-[20px])
   * line-height: 100% (leading-none)
   * vertical-align: middle (flex items-center)
   * background: linear-gradient(90deg, #CD6028 11%, #3E6EB4 100%)
   */
  return (
    <p
      className={`
        font-manrope font-normal text-[20px] leading-[1.3]
        bg-linear-to-r from-orange from-11% to-blue
        bg-clip-text text-transparent overflow-visible
        flex items-center ${className}
      `}
    >
      {children}
    </p>
  );
}
