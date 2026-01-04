"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import HeaderText from "../ui/HeaderText";
import GradientText from "../ui/GradientText";
import BackgroundRingSvg from "../svg/BackgroundRingSvg";
import SmallDotSvg from "../svg/SmallDotSvg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const team = [
  {
    id: 1,
    name: "MANSI SHUKLA",
    role: "CEO FutureSphere",
    quote:
      "For this time-constrained generation in a NOW economy, we would want to play our parts. We intend to make Banking not feel out of place.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 2,
    name: "ARJUN MEHTA",
    role: "CTO TechPulse",
    quote:
      "Innovation is not just about technology; it's about solving human problems with elegant digital solutions.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    id: 3,
    name: "CHRIS YANG",
    role: "Lead Designer",
    quote:
      "Design is a silent ambassador of your brand. We focus on creating experiences that resonate with users instantly.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
];

// Animation variants
const ringVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.3 },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: 0.1 },
  },
};

const navButtonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const, delay: 0.2 },
  },
};

const avatarContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const cardContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay: 0.4 },
  },
};

export default function TeamSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % team.length);
  };
  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  // Helper to get relative indices for the "Left", "Center", "Right" display
  const getIndex = (offset: number) =>
    (index + offset + team.length) % team.length;

  const activeMember = team[index];
  const leftMember = team[getIndex(-1)];
  const rightMember = team[getIndex(1)];

  return (
    <section className="relative w-full max-w-[1440px] mx-auto py-12 lg:py-24 flex flex-col items-center overflow-hidden px-4">
      {/* 1. Background Decorative Ring (Partial Circle on Left) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={ringVariants}
        className="absolute top-0 -left-20 pointer-events-none -z-10 hidden lg:block"
      >
        <BackgroundRingSvg />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className="absolute top-40 right-20 hidden md:block"
      >
        <SmallDotSvg />
      </motion.div>

      {/* 2. Header Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={headerVariants}
      >
        <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px]">
          Meet our team
        </HeaderText>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={descriptionVariants}
      >
        <GradientText className="text-[14px] sm:text-[16px] lg:text-[20px] text-center px-4">
          <span className="max-w-[750px] text-center mt-[16px] mb-[32px]">
            Meet our passionate and talented team, committed to delivering
            exceptional results, driving innovation, and transforming your
            vision into reality.
          </span>
        </GradientText>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={navButtonVariants}
        className="flex gap-4 mb-8 lg:mb-12"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevStep}
          className="p-2 bg-[#3B71B9] rounded-md hover:bg-blue-600 transition-colors text-white"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextStep}
          className="p-2 bg-[#3B71B9] rounded-md hover:bg-blue-600 transition-colors text-white"
        >
          <ChevronRight size={24} />
        </motion.button>
      </motion.div>

      {/* Avatars Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={avatarContainerVariants}
        className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 h-[200px] sm:h-[250px] lg:h-[300px] w-full max-w-4xl"
      >
        {/* Left Circle (Small) - Hidden on mobile */}
        <motion.div
          layout
          key={`left-${leftMember.id}`}
          className="hidden sm:block w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border border-white opacity-60 grayscale"
        >
          <img
            src={leftMember.image}
            alt="prev"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Center Circle (Large) */}
        <motion.div
          layout
          key={`center-${activeMember.id}`}
          style={{ border: "0.95px solid #CD6028" }}
          className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[250px] lg:h-[250px] rounded-full overflow-hidden bg-[#D9D9D9] z-10"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={activeMember.image}
            alt="active"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Circle (Small) - Hidden on mobile */}
        <motion.div
          layout
          key={`right-${rightMember.id}`}
          className="hidden sm:block w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden border border-white opacity-60 grayscale"
        >
          <img
            src={rightMember.image}
            alt="next"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Blue Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={cardContainerVariants}
        className="relative mt-6 lg:mt-8 w-full max-w-[884px] px-4 lg:px-0"
      >
        {/* The Triangle Pointer - Animated */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`pointer-${activeMember.id}`}
            initial={{
              x: direction === 0 ? 0 : direction * 100,
              opacity: 0,
              scale: 0.5,
              rotate: direction * 180,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              rotate: 45,
            }}
            exit={{
              x: direction * -100,
              opacity: 0,
              scale: 0.5,
              rotate: direction * -180,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              duration: 0.4,
            }}
            className="absolute -top-3 left-1/2 -translate-x-1/2 w-[24px] h-[24px] bg-[#3B71B9] z-10"
            style={{
              // clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              transformOrigin: "center center",
            }}
          />
        </AnimatePresence>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeMember.id}
            initial={{
              opacity: 0,
              x: direction * 50,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: direction * -50,
              scale: 0.98,
            }}
            transition={{
              duration: 0.35,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col bg-blue rounded-[16px] justify-start items-center min-h-[200px] lg:h-[239px] py-6 lg:py-[40px] px-4 lg:px-[20px] gap-2 lg:gap-4"
          >
            <h2 className="font-bold tracking-wider flex uppercase text-[20px] sm:text-[28px] lg:text-[36px] text-white mb-1 lg:mb-[10px] font-raleway text-center">
              {activeMember.name}
            </h2>
            <p className="text-orange font-medium uppercase font-manrope text-[16px] sm:text-[20px] lg:text-[24px]">
              {activeMember.role}
            </p>
            <p className="text-center text-white text-[14px] sm:text-[15px] lg:text-[16px] font-manrope mt-2 lg:mt-[30px] leading-relaxed">{`"${activeMember.quote}"`}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
