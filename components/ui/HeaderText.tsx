"use client";

import React from "react";

interface HeaderTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeaderText({
  children,
  className = "",
}: HeaderTextProps) {
  /**
   * Figma Specs applied:
   * height: 56px (h-[56px])
   * font-family: Raleway (font-raleway)
   * font-weight: 600 (font-semibold)
   * font-size: 48px (text-[48px])
   * line-height: 100% (leading-none)
   * letter-spacing: -1px (tracking-[-1px])
   * color: #141219 (text-black-deep)
   */
  return (
    <h2
      className={`
        font-raleway font-semibold leading-none 
        tracking-[-1px] text-black-deep 
        flex items-center ${className}
      `}
    >
      {children}
    </h2>
  );
}
