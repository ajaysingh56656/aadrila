"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import ProductFeature from "./ProductFeature";
import BackgroundRingSvg from "../svg/BackgroundRingSvg";
import BigDotSvg from "../svg/BigDotSvg";
import HeaderText from "../ui/HeaderText";
import GradientText from "../ui/GradientText";

// Animation variants for scroll sync
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ringVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function OurProducts() {
  return (
    <section
      id="products"
      className="relative min-h-[600px] lg:h-[857px] mx-auto flex flex-col mt-12 lg:mt-20 items-center overflow-hidden"
    >
      {/* 1. Background Assets (Reusing your SVG logic) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={ringVariants}
        className="absolute bottom-0 -right-35 hidden lg:block"
      >
        <BackgroundRingSvg />
      </motion.div>

      {/* Top Left Dots */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className="absolute top-0 -left-10 hidden md:block"
      >
        <BigDotSvg />
      </motion.div>

      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={headerVariants}
        className="relative z-10 mt-4 mb-8 lg:mb-20 flex flex-col justify-center items-center px-4"
      >
        <GradientText className="block text-[18px] sm:text-[20px] lg:text-[24px] font-bold">
          features and benefits.
        </GradientText>
        <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px]">
          {" "}
          Our Products{" "}
        </HeaderText>
      </motion.div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-32 flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        {/* Left Side Content */}
        <ProductFeature />

        {/* Right Side Illustration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={imageVariants}
          className="relative w-full lg:w-[601px] h-[300px] sm:h-[400px] lg:h-[506px] rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/20"
        >
          <Image
            src="/out-product.png"
            alt="Product Similarity Engine"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
