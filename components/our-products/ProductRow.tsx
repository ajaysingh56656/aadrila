"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundRingSvg from "../svg/BackgroundRingSvg";
import BigDotSvg from "../svg/BigDotSvg";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import FeatureList from "./FeatureList";
import SmallDotSvg from "../svg/SmallDotSvg";

interface ProductProps {
  badge: string;
  title: string;
  features: string[];
  benefits: string[];
  imageSrc: string;
  reverse?: boolean;
  number?: number;
}

// Animation variants for scroll sync
const ringVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductRow({
  badge,
  title,
  features,
  benefits,
  imageSrc,
  reverse = false,
}: ProductProps) {
  // Dynamic variants based on direction
  const contentVariants = {
    hidden: { opacity: 0, x: reverse ? 80 : -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: reverse ? -80 : 80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div
      className={`relative flex flex-col lg:flex-row gap-8 lg:gap-20 py-12 lg:py-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* --- BACKGROUND ELEMENTS TIED TO ROW --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={ringVariants}
        className={`absolute ${
          reverse ? "-left-30 -top-10" : "-right-100 -top-10"
        } pointer-events-none hidden lg:block`}
      >
        <BackgroundRingSvg />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className={`absolute -z-10 ${
          reverse ? "right-10 top-10" : "left-35 top-5"
        } hidden md:block`}
      >
        {reverse ? <SmallDotSvg /> : <BigDotSvg />}
      </motion.div>

      {/* --- CONTENT --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={contentVariants}
        className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <motion.div variants={badgeVariants}>
          <Badge>{badge}</Badge>
        </motion.div>
        
        <motion.h3
          variants={itemVariants}
          className="font-raleway text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-black-deep mt-[16px] leading-[1.4] lg:leading-[48px]"
        >
          {title}
        </motion.h3>

        <motion.div variants={itemVariants}>
          <FeatureList title="Features:" items={features} />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <FeatureList title="Benefits:" items={benefits} />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center lg:items-end gap-4 sm:gap-[28px] flex-1 mt-6 lg:mt-0 w-full sm:w-auto"
        >
          <Button className="w-full sm:w-auto">Learn More</Button>
          <Button className="w-full sm:w-auto">Schedule a Demo</Button>
        </motion.div>
      </motion.div>

      {/* --- IMAGE --- */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={imageVariants}
        className="w-full lg:w-1/2 relative h-[280px] sm:h-[380px] lg:h-[512px] rounded-[20px] lg:rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10 z-10"
      >
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </motion.div>
    </div>
  );
}
