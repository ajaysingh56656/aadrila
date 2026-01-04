"use client";

import { motion } from "framer-motion";
import LocationPinSvg from "@/components/svg/LocationPinSvg";
import ContactForm from "./ContactForm";
import HeaderText from "../ui/HeaderText";
import GradientText from "../ui/GradientText";
import BigDotSvg from "../svg/BigDotSvg";

interface AddressBoxProps {
  heading: string;
  subHeading?: string;
  description: string;
  index?: number;
}

// Animation variants for scroll sync
const headerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
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

const addressContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const addressItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
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

const formVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const mobileFormVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactSection() {
  return (
    /* Main Parent Container - Must be relative */
    <section id="contact" className="relative w-full mx-auto overflow-hidden">
      {/* 1. GREY TOP SECTION */}
      <div className="w-full min-h-[500px] lg:h-[650px] px-4 sm:px-8 md:px-12 lg:px-24 pt-12 lg:pt-40 pb-8 lg:pb-0">
        <div className="max-w-xl mx-auto lg:mx-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={headerVariants}
          >
            <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px] justify-center lg:justify-start">
              Contact Us
            </HeaderText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            variants={descriptionVariants}
          >
            <GradientText className="mb-6 lg:mb-[40px] mt-[16px] flex-col items-center lg:items-start text-center lg:text-left text-[16px] sm:text-[18px] lg:text-[20px]">
              <span>Lorem Ipsum is simply dummy text of the printing and</span>
              <span>
                typesetting industry. Lorem Ipsum has been the industry's.
              </span>
            </GradientText>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            variants={addressContainerVariants}
            className="space-y-8 lg:space-y-12"
          >
            {/* U.S. Office */}
            <AddressBox
              heading="U.S. Office"
              subHeading="Aadrila Technologies INC."
              description="8 The Green, Ste R, in the City of Dover County of Kent Zip Code 19901."
              index={0}
            />
            {/* India Office */}
            <AddressBox
              heading="India Office"
              subHeading="Aadrila Technologies Private Limited."
              description="Unit 707, Lotus Trade Centre, Sahakar Nagar, New Link Road, Near D.N. Nagar, Andheri West, Mumbai, Maharashtra 400053."
              index={1}
            />
          </motion.div>
        </div>

        {/* Mobile Form - shown only on mobile/tablet */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          variants={mobileFormVariants}
          className="lg:hidden mt-8"
        >
          <ContactForm />
        </motion.div>
      </div>

      {/* 2. BLUE BOTTOM SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
        variants={footerVariants}
        className="bg-[#3E6EB4] w-full min-h-[180px] lg:h-[240px] px-4 sm:px-8 md:px-12 lg:px-24 py-8 lg:py-0 flex flex-col justify-center text-white/90"
      >
        <div className="max-w-2xl text-[12px] sm:text-[14px] leading-relaxed font-manrope text-center lg:text-left">
          <p className="mb-4">
            © 2025 by Aadrila Technologies Private Limited CIN
            U74999UP2017PTC094688
          </p>
          <p>
            Registered Address: B-1, 127/K, Sector-K Aliganj, Lucknow, Lucknow,{" "}
            <br className="hidden sm:block" />
            Uttar Pradesh, India, 226024
          </p>
        </div>
      </motion.div>

      {/* 3. THE OVERLAPPING FORM - Desktop only */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={formVariants}
        className="hidden lg:block absolute right-24 bottom-[90px] z-50"
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        variants={dotVariants}
        className="absolute -left-25 top-0 hidden md:block"
      >
        <BigDotSvg />
      </motion.div>
    </section>
  );
}

function AddressBox({ heading, subHeading, description }: AddressBoxProps) {
  return (
    <motion.div variants={addressItemVariants} className="flex gap-4 items-start">
      <div className="flex flex-col">
        {/* Heading: Raleway, Bold, Black Light */}
        <h4 className="font-raleway flex gap-[8px] items-center font-bold text-black-light underline decoration-1 underline-offset-4 mb-[8px] text-[14px] sm:text-[16px]">
          <LocationPinSvg />
          {heading}
        </h4>

        {/* Optional Subheading: Manrope, Bold, Greyish */}
        {subHeading && (
          <p className="text-[#64748B] text-[13px] sm:text-[14px] leading-relaxed font-bold font-manrope">
            {subHeading}
          </p>
        )}

        {/* Description: Manrope, Regular, Greyish */}
        <p className="text-[#64748B] text-[13px] sm:text-[14px] leading-relaxed font-manrope">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
