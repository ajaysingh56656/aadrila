"use client";

import { motion } from "framer-motion";
import IndustryCard from "./IndustryCard";
import BackgroundRingSvg from "@/components/svg/BackgroundRingSvg";
import SmallDotSvg from "@/components/svg/SmallDotSvg";
import BigDotSvg from "@/components/svg/BigDotSvg";
import HeaderText from "./ui/HeaderText";
import GradientText from "./ui/GradientText";
import Shield from "@/components/svg/Shield";
import HealthCareSvg from "@/components/svg/HealthCareSvg";
import LendingSvg from "@/components/svg/LendingSvg";

// Animation variants with smooth transitions for both directions
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ringVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative w-full min-h-[600px] lg:h-[781px] mx-auto overflow-hidden"
    >
      {/* 1. Background Ring SVG - Positioned Top Left */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={ringVariants}
        className="absolute top-0 -left-20 pointer-events-none hidden md:block"
      >
        <BackgroundRingSvg />
      </motion.div>

      {/* 2. Small Dot Center SVG */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className="absolute top-25 right-100 hidden lg:block"
      >
        <SmallDotSvg />
      </motion.div>

      {/* 3. Bottom Right Dots SVG */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className="absolute bottom-20 right-0 hidden md:block"
      >
        <BigDotSvg />
      </motion.div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col items-center lg:items-start pt-12 lg:pt-20 h-full">
        {/* Header with animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={headerVariants}
          className="text-center lg:text-left px-4 sm:px-8 lg:px-20 mb-8 lg:mb-12"
        >
          <GradientText className="block text-[18px] sm:text-[20px] lg:text-[24px] font-bold justify-center lg:justify-start">
            AI-driven innovation for growth.
          </GradientText>
          <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px] justify-center lg:justify-start">
            Industries We Empower
          </HeaderText>
        </motion.div>

        {/* Industry Cards Grid with staggered animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row w-full justify-center lg:justify-between items-center gap-6 lg:gap-[20px] px-4 sm:px-8 md:px-12 lg:px-[160px]"
        >
          <IndustryCard
            title="Insurance"
            desc="Automate claims processing with accurate document validation."
            className="mt-0 lg:mt-52"
            icon={<Shield />}
            variants={cardVariants}
            index={2}
          />
          <IndustryCard
            title="Lending"
            desc="Ensure faster loan approvals with fraud detection and instant verification."
            className="mt-0 lg:mt-10"
            icon={<LendingSvg />}
            variants={cardVariants}
            index={1}
          />
          <IndustryCard
            title="Healthcare"
            desc="Streamline patient record management and ensure compliance with HIPAA standards."
            className="mt-0 lg:-mt-30"
            icon={<HealthCareSvg />}
            variants={cardVariants}
            index={0}
          />
        </motion.div>
      </div>
    </section>
  );
}
