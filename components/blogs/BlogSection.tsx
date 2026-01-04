"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData";
import HeaderText from "../ui/HeaderText";
import GradientText from "../ui/GradientText";
import BigDotSvg from "../svg/BigDotSvg";
import SmallDotSvg from "../svg/SmallDotSvg";

// Animation variants for scroll sync
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const cardsContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = blogData.length - 1;

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));

  return (
    <section
      id="blog"
      className="min-h-[500px] lg:min-h-[552px] mx-auto flex flex-col justify-center py-12 lg:py-0 overflow-hidden"
    >
      {/* Header */}
      <div className="relative flex flex-col w-full items-center px-4">
        <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px]">
          Blogs
        </HeaderText>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={descriptionVariants}
        >
          <GradientText className="mb-8 lg:mb-[60px] mt-[16px] flex-col text-[16px] sm:text-[18px] lg:text-[24px] text-center px-4">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
            <span className="hidden sm:inline">
              Lorem Ipsum has been the industry's standard.
            </span>
          </GradientText>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={dotVariants}
          className="absolute left-25 -top-10 hidden lg:block"
        >
          <SmallDotSvg />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={dotVariants}
          className="absolute right-0 -bottom-10 hidden md:block"
        >
          <BigDotSvg />
        </motion.div>
      </div>

      {/* Mobile: Single card view with swipe */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={cardsContainerVariants}
        className="block lg:hidden"
      >
        <div className="relative w-full max-w-[400px] mx-auto overflow-hidden h-[320px] px-4">
          <motion.div
            className="flex gap-[16px]"
            animate={{ x: -(currentIndex * 100) + "%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center"
              >
                <BlogCard {...blog} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Desktop: 3 cards visible */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={cardsContainerVariants}
        className="hidden lg:block"
      >
        <div className="relative w-[1248px] mx-auto overflow-hidden h-[300px]">
          <motion.div
            className="flex gap-[24px]"
            animate={{ x: -(currentIndex * 416) }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {blogData.map((blog, index) => (
              <div key={index} style={{ width: "392px", flexShrink: 0 }}>
                <BlogCard {...blog} index={index} />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={navVariants}
        className="flex justify-center gap-4 mt-6 lg:mt-8"
      >
        <motion.button
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-[#4A78B6] flex items-center justify-center text-white hover:bg-[#3E6EB4] transition-all"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 lg:w-11 lg:h-11 rounded-lg bg-[#4A78B6] flex items-center justify-center text-white hover:bg-[#3E6EB4] transition-all"
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
