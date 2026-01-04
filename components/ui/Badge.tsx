import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div
      className={`text-[16px] sm:text-[18px] lg:text-[20px] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px]
        w-fit px-4 sm:px-5 lg:px-[24px] py-3 lg:py-[16px] h-auto lg:h-[52px] rounded-full 
        bg-linear-to-r from-orange to-blue 
        text-white font-bold font-raleway 
        flex items-center justify-center
        ${className}
      `}
    >
      {children}
    </div>
  );
}
