"use client";

import { motion, Variants } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  className?: string;
  icon: React.ReactElement;
  variants?: Variants;
  index?: number;
}

// Icon animation variants for scroll sync
const iconVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring", // TypeScript now knows this is a valid spring type
      stiffness: 200,
    },
  },
};

export default function IndustryCard({
  title,
  desc,
  className,
  icon,
  variants,
}: Props) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`w-full max-w-[320px] h-auto min-h-[280px] md:h-[320px] bg-white rounded-[32px] p-6 md:p-10 flex flex-col items-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 ${className}`}
    >
      <motion.div
        variants={iconVariants}
        className="w-[50px] h-[50px] md:w-[57px] md:h-[57px] flex items-center justify-center mb-[16px]"
      >
        {icon}
      </motion.div>
      <h3 className="font-raleway text-[20px] md:text-[24px] font-bold text-black-light mb-[16px]">
        {title}
      </h3>
      <p className="font-manrope text-[14px] md:text-[16px] text-[#64748B] leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
