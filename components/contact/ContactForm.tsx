"use client";

import { motion, Variants } from "framer-motion";
import Input from "../ui/Input";
import Button from "../ui/Button";

// Animation variants for form fields
const formContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// 2. Add : Variants here
const fieldVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// 3. Add : Variants here
const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ContactForm() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={formContainerVariants}
      className="bg-white rounded-[20px] shadow-[0px_0px_20px_0px_#0000001F] z-50 w-full max-w-[684px] mx-auto p-6 sm:p-10 lg:p-[50px_50px]"
    >
      <form className="flex flex-col h-full">
        {/* Row 1 */}
        <motion.div
          variants={fieldVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-[24px]"
        >
          <Input placeholder="Full Name" name="fullName" />
          <Input type="email" placeholder="Email" name="email" />
        </motion.div>

        {/* Row 2 */}
        <motion.div
          variants={fieldVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-[24px]"
        >
          <Input type="tel" placeholder="Phone Number" name="phone" />
          <Input placeholder="Company Name" name="company" />
        </motion.div>

        {/* Single Row */}
        <motion.div variants={fieldVariants} className="mb-4 sm:mb-[24px]">
          <Input placeholder="Inquiry Type" name="inquiry" />
        </motion.div>

        {/* Textarea */}
        <motion.div variants={fieldVariants} className="mb-4 sm:mb-[24px] grow">
          <Input
            isTextArea
            placeholder="Message"
            name="message"
            className="h-full min-h-[150px] lg:min-h-[200px]"
          />
        </motion.div>

        <motion.div variants={buttonVariants}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full" type="submit">
              Send Inquiry
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </motion.div>
  );
}
