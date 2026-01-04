"use client";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import FeatureList from "./FeatureList";
import { motion, Variants } from "framer-motion";

const features = [
  "Detects near-duplicates and tampered documents.",
  "Identifies fraudulent patterns across large repositories.",
  "Multi-language support for global adaptability.",
];

const benefits = [
  "Save 30% time on manual checks.",
  "Reduce document fraud by up to 40%.",
];

const containerVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: -30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function ProductFeature() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={containerVariants}
      className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left mr-[20px]"
    >
      <motion.div variants={badgeVariants}>
        <Badge>DocSim</Badge>
      </motion.div>

      <motion.h3
        variants={itemVariants}
        className="font-raleway text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-black-deep mt-[16px] leading-[1.4] lg:leading-[48px]"
      >
        AI-Powered Document Similarity Engine
      </motion.h3>

      <motion.div variants={itemVariants}>
        <FeatureList title="Features:" items={features} />
      </motion.div>

      <motion.div variants={itemVariants}>
        <FeatureList title="Benefits:" items={benefits} />
      </motion.div>

      <motion.div
        variants={buttonVariants}
        className="flex flex-col sm:flex-row items-center lg:items-end gap-4 sm:gap-[28px] flex-1 mt-6 lg:mt-0 w-full sm:w-auto"
      >
        <Button className="w-full sm:w-auto">Learn More</Button>
        <Button className="w-full sm:w-auto">Schedule a Demo</Button>
      </motion.div>
    </motion.div>
  );
}
