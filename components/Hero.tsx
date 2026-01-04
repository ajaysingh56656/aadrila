"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";
import HeroAnimation from "./svg/HeroAnimation";

// Animation variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.03,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 100, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const glowVariants = {
  animate: {
    opacity: [0.3, 0.6, 0.3],
    scale: [1, 1.1, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

export default function Hero() {
  const accentText = "AI-Powered";

  return (
    <section className="relative w-full min-h-[90dvh] flex items-center pt-[96px] overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute top-0 left-0 right-0 bottom-0 opacity-50" />

      {/* Animated background glow */}
      <motion.div
        variants={glowVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue/10 rounded-full blur-[100px] pointer-events-none hidden lg:block"
      />
      <motion.div
        variants={glowVariants}
        animate="animate"
        style={{ animationDelay: "1.5s" }}
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-orange/10 rounded-full blur-[80px] pointer-events-none hidden lg:block"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 lg:px-[80px] w-full flex flex-col lg:flex-row items-center">
        {/* Left Content Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 flex flex-col z-10 text-center lg:text-left items-center lg:items-start"
        >
          {/* 1. Accent Heading - Letter by letter animation */}
          <motion.div className="font-raleway text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold bg-linear-to-r from-orange from-11% to-blue bg-clip-text text-transparent overflow-visible leading-[1.4] lg:leading-[68px] flex">
            {accentText.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{ display: letter === " " ? "inline" : "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* 2. Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-raleway text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-black-light leading-[1.4] lg:leading-[68px] mb-4 lg:mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Document Automation
            </motion.span>
            <br className="hidden sm:block" />
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              & Fraud Detection
            </motion.span>
          </motion.h1>

          {/* 3. Description */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] sm:text-[18px] lg:text-[20px] text-black-light max-w-[600px] leading-relaxed mb-8 lg:mb-10 px-4 lg:px-0"
          >
            Enhance security, accuracy, and efficiency with our cutting-edge AI
            solutions for seamless document processing and fraud prevention.
          </motion.p>

          {/* 4. Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[40px] w-full sm:w-auto max-w-[540px] px-4 lg:px-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex-1 w-full sm:w-auto"
            >
              <Button className="w-full">Get a Demo</Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="flex-1 w-full sm:w-auto"
            >
              <Button className="w-full">Explore Solutions</Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content Section (Carousel) */}
        <motion.div
          variants={heroImageVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center"
        >
          <motion.div variants={floatingVariants} animate="animate">
            <HeroAnimation />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative animated particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
