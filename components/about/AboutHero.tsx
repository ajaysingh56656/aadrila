"use client";

import { motion } from "framer-motion";
import HeaderText from "../ui/HeaderText";
import GradientText from "../ui/GradientText";

// Animation variants
const heroCardVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const visionVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const missionVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2,
    },
  },
};

const contentContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[95dvh] flex items-center pt-[96px] overflow-hidden">
      <div className="hero-about-bg absolute top-0 left-0 right-0 bottom-0" />
      <div className="w-full flex flex-col items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={heroCardVariants}
          className="w-full max-w-[542px] min-h-[160px] lg:h-[199px] mb-8 lg:mb-[80px] bg-white/50 rounded-[15px] shadow-[0_0px_20px_rgba(0,0,0,0.05)] flex flex-col justify-center items-center gap-[16px] p-6"
        >
          <HeaderText className="text-[32px] sm:text-[40px] lg:text-[48px]">
            About Us
          </HeaderText>
          <GradientText className="text-[16px] sm:text-[18px] lg:text-[20px] text-center">
            <span>Meet the Minds Shaping Document Automation.</span>
          </GradientText>
        </motion.div>

        {/* --- VISION & MISSION INTEGRATED CONTENT --- */}
        <div className="w-full space-y-8 lg:space-y-12">
          {/* Our Vision Row (Text Left, Icon Right) */}
          <div className="relative flex items-center justify-start w-full mb-8 lg:mb-[80px]">
            {/* Mobile/Tablet Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={mobileCardVariants}
              className="lg:hidden w-full bg-white/50 rounded-[15px] shadow-[0_0px_20px_rgba(0,0,0,0.05)] flex flex-col items-center p-6 gap-4 mx-4"
            >
              <motion.div
                variants={iconVariants}
                className="relative flex-shrink-0 w-[80px] h-[80px] bg-[#3E6EB4] flex items-center justify-center rounded-full"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.1308 39.9597H14.8634C12.203 39.9597 10.0391 37.7947 10.0391 35.1351V14.8675C10.0391 12.2079 12.203 10.043 14.8634 10.043H35.1308C37.7912 10.043 39.9551 12.2079 39.9551 14.8675V35.1351C39.9551 37.7947 37.7912 39.9597 35.1308 39.9597ZM14.8634 12.6745C13.6547 12.6745 12.6705 13.6579 12.6705 14.8675V35.1351C12.6705 36.3447 13.6547 37.3281 14.8634 37.3281H35.1308C36.3395 37.3281 37.3237 36.3447 37.3237 35.1351V14.8675C37.3237 13.6579 36.3395 12.6745 35.1308 12.6745H14.8634Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
              <motion.div
                variants={contentContainerVariants}
                className="flex flex-col items-center gap-2"
              >
                <motion.h4
                  variants={contentItemVariants}
                  className="text-[18px] font-bold text-[#1E1C26]"
                >
                  Our Vision
                </motion.h4>
                <motion.div
                  variants={contentItemVariants}
                  className="w-[60px] h-[4px] bg-[#CD6028] rounded-[4px]"
                />
                <motion.p
                  variants={contentItemVariants}
                  className="text-center text-[#475569] text-[14px] sm:text-[16px] leading-relaxed"
                >
                  To redefine document management with cutting-edge technology
                  that ensures accuracy, efficiency, and trust.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Desktop Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={visionVariants}
              className="hidden lg:flex bg-white/50 w-[60dvw] h-[140px] rounded-r-full shadow-[0_0px_20px_rgba(0,0,0,0.05)] items-center justify-end px-4 gap-8"
            >
              <p className="max-w-[480px] text-right text-[#475569] text-[16px] leading-relaxed">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
              <div className="w-[4px] h-[80px] bg-[#CD6028] border-0 rounded-[4px]" />
              <div className="text-right flex flex-col justify-center">
                <h4 className="text-[20px] font-bold text-[#1E1C26] leading-tight">
                  Our
                </h4>
                <h4 className="text-[20px] font-bold text-[#1E1C26] leading-tight">
                  Vision
                </h4>
              </div>
              {/* Circular Icon Wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                className="relative flex-shrink-0 w-[112px] h-[112px] bg-[#3E6EB4] p-2 flex items-center justify-center rounded-full"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.1308 39.9597H14.8634C12.203 39.9597 10.0391 37.7947 10.0391 35.1351V14.8675C10.0391 12.2079 12.203 10.043 14.8634 10.043H35.1308C37.7912 10.043 39.9551 12.2079 39.9551 14.8675V35.1351C39.9551 37.7947 37.7912 39.9597 35.1308 39.9597ZM14.8634 12.6745C13.6547 12.6745 12.6705 13.6579 12.6705 14.8675V35.1351C12.6705 36.3447 13.6547 37.3281 14.8634 37.3281H35.1308C36.3395 37.3281 37.3237 36.3447 37.3237 35.1351V14.8675C37.3237 13.6579 36.3395 12.6745 35.1308 12.6745H14.8634Z"
                    fill="white"
                  />
                  <path
                    d="M25.0071 12.6735C24.28 12.6735 23.6914 12.084 23.6914 11.3577V6.31823C23.6914 5.59192 24.28 5.00244 25.0071 5.00244C25.7343 5.00244 26.3229 5.59192 26.3229 6.31823V11.3577C26.3229 12.084 25.7343 12.6735 25.0071 12.6735Z"
                    fill="white"
                  />
                  <path
                    d="M25.0064 7.63421C22.9021 7.63421 21.1899 5.92193 21.1899 3.81667C21.1899 1.7114 22.9021 0 25.0064 0C27.1107 0 28.8229 1.71228 28.8229 3.81667C28.8229 5.92106 27.1107 7.63421 25.0064 7.63421ZM25.0064 2.63246C24.3529 2.63246 23.8214 3.16316 23.8214 3.81755C23.8214 4.47193 24.3529 5.00351 25.0064 5.00351C25.6599 5.00351 26.1914 4.47193 26.1914 3.81755C26.1914 3.16316 25.6599 2.63246 25.0064 2.63246Z"
                    fill="white"
                  />
                  <path
                    d="M11.3574 26.3115H6.31817C5.59101 26.3115 5.00244 25.722 5.00244 24.9957C5.00244 24.2694 5.59101 23.6799 6.31817 23.6799H11.3574C12.0846 23.6799 12.6731 24.2694 12.6731 24.9957C12.6731 25.722 12.0846 26.3115 11.3574 26.3115Z"
                    fill="white"
                  />
                  <path
                    d="M3.81648 28.8124C1.7122 28.8124 0 27.1002 0 24.9958C0 22.8914 1.7122 21.1782 3.81648 21.1782C5.92076 21.1782 7.63296 22.8905 7.63296 24.9958C7.63296 27.101 5.92076 28.8124 3.81648 28.8124ZM3.81648 23.8107C3.163 23.8107 2.63145 24.3423 2.63145 24.9966C2.63145 25.651 3.163 26.1817 3.81648 26.1817C4.46996 26.1817 5.00151 25.651 5.00151 24.9966C5.00151 24.3423 4.46996 23.8107 3.81648 23.8107Z"
                    fill="white"
                  />
                  <path
                    d="M43.6806 26.3218H38.6414C37.9143 26.3218 37.3257 25.7323 37.3257 25.006C37.3257 24.2797 37.9143 23.6902 38.6414 23.6902H43.6806C44.4078 23.6902 44.9964 24.2797 44.9964 25.006C44.9964 25.7323 44.4078 26.3218 43.6806 26.3218Z"
                    fill="white"
                  />
                  <path
                    d="M46.1822 28.8227C44.0779 28.8227 42.3657 27.1104 42.3657 25.0051C42.3657 22.8999 44.0779 21.1885 46.1822 21.1885C48.2865 21.1885 49.9987 22.9008 49.9987 25.0051C49.9987 27.1095 48.2865 28.8227 46.1822 28.8227ZM46.1822 23.8209C45.5287 23.8209 44.9972 24.3516 44.9972 25.006C44.9972 25.6604 45.5287 26.192 46.1822 26.192C46.8357 26.192 47.3672 25.6604 47.3672 25.006C47.3672 24.3516 46.8357 23.8209 46.1822 23.8209Z"
                    fill="white"
                  />
                  <path
                    d="M24.9944 44.9989C24.2673 44.9989 23.6787 44.4095 23.6787 43.6831V38.6437C23.6787 37.9174 24.2673 37.3279 24.9944 37.3279C25.7216 37.3279 26.3102 37.9174 26.3102 38.6437V43.6831C26.3102 44.4095 25.7216 44.9989 24.9944 44.9989Z"
                    fill="white"
                  />
                  <path
                    d="M24.9937 50.0007C22.8894 50.0007 21.1772 48.2884 21.1772 46.184C21.1772 44.0796 22.8894 42.3665 24.9937 42.3665C27.098 42.3665 28.8102 44.0787 28.8102 46.184C28.8102 48.2893 27.098 50.0007 24.9937 50.0007ZM24.9937 44.9989C24.3402 44.9989 23.8087 45.5305 23.8087 46.1849C23.8087 46.8393 24.3402 47.37 24.9937 47.37C25.6472 47.37 26.1788 46.8393 26.1788 46.1849C26.1788 45.5305 25.6472 44.9989 24.9937 44.9989Z"
                    fill="white"
                  />
                  <path
                    d="M32.972 12.6762C32.2448 12.6762 31.6562 12.0867 31.6562 11.3604V3.94811C31.6562 3.2218 32.2448 2.63232 32.972 2.63232H36.635C37.3621 2.63232 37.9507 3.2218 37.9507 3.94811C37.9507 4.67443 37.3621 5.26391 36.635 5.26391H34.2877V11.3604C34.2877 12.0867 33.6991 12.6762 32.972 12.6762Z"
                    fill="white"
                  />
                  <path
                    d="M46.0509 18.3428H38.639C37.9118 18.3428 37.3232 17.7533 37.3232 17.027C37.3232 16.3007 37.9118 15.7112 38.639 15.7112H44.7352V13.37C44.7352 12.6437 45.3237 12.0542 46.0509 12.0542C46.778 12.0542 47.3666 12.6437 47.3666 13.37V17.027C47.3666 17.7533 46.778 18.3428 46.0509 18.3428Z"
                    fill="white"
                  />
                  <path
                    d="M46.0509 37.9537C45.3237 37.9537 44.7352 37.3642 44.7352 36.6379V34.2905H38.639C37.9118 34.2905 37.3232 33.701 37.3232 32.9747C37.3232 32.2484 37.9118 31.6589 38.639 31.6589H46.0509C46.778 31.6589 47.3666 32.2484 47.3666 32.9747V36.6379C47.3666 37.3642 46.778 37.9537 46.0509 37.9537Z"
                    fill="white"
                  />
                  <path
                    d="M36.6279 47.3693H32.972C32.2448 47.3693 31.6562 46.7798 31.6562 46.0535V38.6412C31.6562 37.9149 32.2448 37.3254 32.972 37.3254C33.6991 37.3254 34.2877 37.9149 34.2877 38.6412V44.7377H36.6279C37.3551 44.7377 37.9437 45.3272 37.9437 46.0535C37.9437 46.7798 37.3551 47.3693 36.6279 47.3693Z"
                    fill="white"
                  />
                  <path
                    d="M17.0241 47.3693H13.3611C12.634 47.3693 12.0454 46.7798 12.0454 46.0535C12.0454 45.3272 12.634 44.7377 13.3611 44.7377H15.7084V38.6412C15.7084 37.9149 16.297 37.3254 17.0241 37.3254C17.7513 37.3254 18.3398 37.9149 18.3398 38.6412V46.0535C18.3398 46.7798 17.7513 47.3693 17.0241 47.3693Z"
                    fill="white"
                  />
                  <path
                    d="M3.94561 37.9473C3.21845 37.9473 2.62988 37.3578 2.62988 36.6315V32.9745C2.62988 32.2482 3.21845 31.6587 3.94561 31.6587H11.3575C12.0847 31.6587 12.6733 32.2482 12.6733 32.9745C12.6733 33.7008 12.0847 34.2903 11.3575 34.2903H5.26133V36.6315C5.26133 37.3578 4.67277 37.9473 3.94561 37.9473Z"
                    fill="white"
                  />
                  <path
                    d="M11.3575 18.3428H3.94561C3.21845 18.3428 2.62988 17.7534 2.62988 17.027V13.3639C2.62988 12.6376 3.21845 12.0481 3.94561 12.0481C4.67277 12.0481 5.26133 12.6376 5.26133 13.3639V15.7113H11.3575C12.0847 15.7113 12.6733 16.3007 12.6733 17.027C12.6733 17.7534 12.0847 18.3428 11.3575 18.3428Z"
                    fill="white"
                  />
                  <path
                    d="M17.0239 12.6762C16.2968 12.6762 15.7082 12.0867 15.7082 11.3604V5.26391H13.368C12.6408 5.26391 12.0522 4.67443 12.0522 3.94811C12.0522 3.2218 12.6408 2.63232 13.368 2.63232H17.0239C17.7511 2.63232 18.3397 3.2218 18.3397 3.94811V11.3604C18.3397 12.0867 17.7511 12.6762 17.0239 12.6762Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M34.2087 25.4387C31.989 28.6592 28.6868 30.7019 24.9987 30.7019C21.3105 30.7019 18.0083 28.6592 15.7886 25.4387C18.0083 22.2182 21.3105 20.1755 24.9987 20.1755C28.6868 20.1755 31.989 22.2182 34.2087 25.4387ZM24.9987 27.9074C23.8971 27.9074 23.0042 26.8022 23.0042 25.4387C23.0042 25.2551 22.8839 25.1062 22.7355 25.1062C22.5872 25.1062 22.4669 25.2551 22.4669 25.4387C22.4669 27.1694 23.6005 28.5725 24.9987 28.5725C25.147 28.5725 25.2673 28.4236 25.2673 28.24C25.2673 28.0563 25.147 27.9074 24.9987 27.9074ZM26.4303 22.688C26.1053 22.688 25.8418 23.0141 25.8418 23.4164C25.8418 23.8187 26.1053 24.1447 26.4303 24.1447C26.7553 24.1447 27.0187 23.8187 27.0187 23.4164C27.0188 23.0141 26.7553 22.688 26.4303 22.688ZM24.9987 20.8354C22.9448 20.8354 21.2797 22.8964 21.2797 25.4387C21.2797 27.981 22.9448 30.042 24.9987 30.042C27.0525 30.042 28.7176 27.981 28.7176 25.4387C28.7176 22.8964 27.0525 20.8354 24.9987 20.8354ZM24.9987 21.5005C23.2414 21.5005 21.8169 23.2636 21.8169 25.4387C21.8169 27.6139 23.2414 29.377 24.9987 29.377C26.7559 29.377 28.1803 27.6138 28.1803 25.4387C28.1803 23.2636 26.7559 21.5005 24.9987 21.5005Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Our Mission Row (Icon Left, Text Right) */}
          <div className="relative flex items-center justify-end w-full">
            {/* Mobile/Tablet Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={mobileCardVariants}
              className="lg:hidden w-full bg-white/50 rounded-[15px] shadow-[0_0px_20px_rgba(0,0,0,0.05)] flex flex-col items-center p-6 gap-4 mx-4"
            >
              <motion.div
                variants={iconVariants}
                className="relative flex-shrink-0 w-[80px] h-[80px] bg-[#3E6EB4] flex items-center justify-center rounded-full"
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.0528 45.554H16.9468C13.9138 45.554 11.4468 43.086 11.4468 40.054V16.949C11.4468 13.917 13.9138 11.449 16.9468 11.449H40.0528C43.0858 11.449 45.5528 13.917 45.5528 16.949V40.054C45.5528 43.086 43.0858 45.554 40.0528 45.554ZM16.9468 14.449C15.5688 14.449 14.4468 15.57 14.4468 16.949V40.054C14.4468 41.433 15.5688 42.554 16.9468 42.554H40.0528C41.4308 42.554 42.5528 41.433 42.5528 40.054V16.949C42.5528 15.57 41.4308 14.449 40.0528 14.449H16.9468Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
              <motion.div
                variants={contentContainerVariants}
                className="flex flex-col items-center gap-2"
              >
                <motion.h4
                  variants={contentItemVariants}
                  className="text-[18px] font-bold text-[#1E1C26]"
                >
                  Our Mission
                </motion.h4>
                <motion.div
                  variants={contentItemVariants}
                  className="w-[60px] h-[4px] bg-[#CD6028] rounded-[4px]"
                />
                <motion.p
                  variants={contentItemVariants}
                  className="text-center text-[#475569] text-[14px] sm:text-[16px] leading-relaxed"
                >
                  To redefine document management with cutting-edge technology
                  that ensures accuracy, efficiency, and trust.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Desktop Layout */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              variants={missionVariants}
              className="hidden lg:flex bg-white/50 w-[60dvw] h-[140px] rounded-l-full shadow-[0_0px_20px_rgba(0,0,0,0.05)] items-center justify-start px-4 gap-8"
            >
              {/* Circular Icon Wrapper */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ amount: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.3,
                }}
                className="relative flex-shrink-0 w-[112px] h-[112px] bg-[#3E6EB4] p-2 flex items-center justify-center rounded-full"
              >
                <svg
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.0528 45.554H16.9468C13.9138 45.554 11.4468 43.086 11.4468 40.054V16.949C11.4468 13.917 13.9138 11.449 16.9468 11.449H40.0528C43.0858 11.449 45.5528 13.917 45.5528 16.949V40.054C45.5528 43.086 43.0858 45.554 40.0528 45.554ZM16.9468 14.449C15.5688 14.449 14.4468 15.57 14.4468 16.949V40.054C14.4468 41.433 15.5688 42.554 16.9468 42.554H40.0528C41.4308 42.554 42.5528 41.433 42.5528 40.054V16.949C42.5528 15.57 41.4308 14.449 40.0528 14.449H16.9468Z"
                    fill="white"
                  />
                  <path
                    d="M28.5059 14.4479C27.6769 14.4479 27.0059 13.7759 27.0059 12.9479V7.20288C27.0059 6.37488 27.6769 5.70288 28.5059 5.70288C29.3349 5.70288 30.0059 6.37488 30.0059 7.20288V12.9479C30.0059 13.7759 29.3349 14.4479 28.5059 14.4479Z"
                    fill="white"
                  />
                  <path
                    d="M28.5058 8.703C26.1068 8.703 24.1548 6.751 24.1548 4.351C24.1548 1.951 26.1068 0 28.5058 0C30.9048 0 32.8568 1.952 32.8568 4.351C32.8568 6.75 30.9048 8.703 28.5058 8.703ZM28.5058 3.001C27.7608 3.001 27.1548 3.606 27.1548 4.352C27.1548 5.098 27.7608 5.704 28.5058 5.704C29.2508 5.704 29.8568 5.098 29.8568 4.352C29.8568 3.606 29.2508 3.001 28.5058 3.001Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.4641 27.2697C27.8685 27.2697 28.248 27.3767 28.5757 27.5639L32.3082 23.8314C32.3647 23.7749 32.3867 23.6999 32.3699 23.622L31.9463 21.6561C31.9294 21.5781 31.9515 21.5031 32.0079 21.4467L35.3873 18.0673C35.5155 17.9391 35.7336 18.0034 35.7717 18.1806L36.2676 20.4814C36.2879 20.5757 36.4243 20.7121 36.5186 20.7323L38.8194 21.2282C38.9966 21.2664 39.0609 21.4844 38.9327 21.6126L35.5533 24.9921C35.4969 25.0485 35.4219 25.0706 35.3439 25.0537L33.3781 24.6301C33.3001 24.6133 33.2251 24.6353 33.1687 24.6918L29.43 28.4305C29.6075 28.7518 29.7087 29.1213 29.7087 29.5143C29.7087 30.7541 28.7037 31.759 27.4641 31.759C26.2244 31.759 25.2194 30.754 25.2194 29.5143C25.2195 28.2747 26.2245 27.2697 27.4641 27.2697Z"
                    fill="white"
                  />
                </svg>
              </motion.div>
              <div className="text-left flex flex-col justify-center">
                <h4 className="text-[20px] font-bold text-[#1E1C26] leading-tight">
                  Our
                </h4>
                <h4 className="text-[20px] font-bold text-[#1E1C26] leading-tight">
                  Mission
                </h4>
              </div>
              <div className="w-[4px] h-[80px] bg-[#CD6028] border-0 rounded-[4px]" />
              <p className="max-w-[480px] text-left text-[#475569] text-[16px] leading-relaxed">
                To redefine document management with cutting-edge technology
                that ensures accuracy, efficiency, and trust.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
