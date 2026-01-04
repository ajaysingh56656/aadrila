"use client";

import { motion } from "framer-motion";

interface BlogProps {
  title: string;
  date: string;
  excerpt: string;
  index?: number;
}

export default function BlogCard({ title, date, excerpt, index = 0 }: BlogProps) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative flex flex-col items-center w-full max-w-[392px] h-[300px]"
    >
      {/* 1. Background Glow Element with 3-color Gradient */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="absolute rounded-[10px] h-[110px] z-0 top-[150px] w-full max-w-[392px]
             bg-linear-to-r from-orange/40 via-black-light/30 to-blue/40 origin-left"
      />

      {/* 2. Foremost White Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative z-10 flex flex-col w-[90%] max-w-[345px] h-[235px] bg-white border border-[#EDEDED] 
                   rounded-[10px] p-[20px] sm:p-[24px] gap-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
      >
        <div className="flex flex-col gap-[10px]">
          {/* Title: Raleway Bold 16px (Uses your black-deep variable) */}
          <h3 className="font-bold text-[15px] sm:text-[16px] leading-[1.2] text-black-deep m-0 overflow-hidden line-clamp-2 font-raleway">
            {title}
          </h3>
          {/* Date: Manrope Medium 12px (Uses your blue variable) */}
          <span className="font-manrope font-medium text-[12px] leading-none text-blue">
            {date}
          </span>
        </div>
        {/* Paragraph: Manrope Regular 14px */}
        <p className="font-manrope font-normal text-[13px] sm:text-[14px] leading-[140%] text-[#696969] m-0 line-clamp-4">
          {excerpt}
        </p>
      </motion.div>
    </motion.div>
  );
}
