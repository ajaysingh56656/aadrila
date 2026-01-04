import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FormSvg from "./FormSvg";
import AnalyticsSvg from "./AnalyticsSvg";

// License Image component to match the SVG component pattern
const LicenseImage = () => (
  <div className="w-[300px] h-[400px] relative">
    <Image
      src="/License.png"
      alt="License"
      fill
      className="object-contain"
      priority
    />
  </div>
);

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  const cards = [
    { id: "license", Component: LicenseImage },
    { id: "form", Component: FormSvg },
    { id: "analytics", Component: AnalyticsSvg },
  ];

  // Logic to move to the next card
  const nextStep = useCallback(() => {
    setIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  // Infinite Loop Effect
  useEffect(() => {
    const interval = setInterval(nextStep, 4000); // Change card every 4 seconds
    return () => clearInterval(interval);
  }, [nextStep]);

  // Manual click handler
  const handleCardClick = (clickedIndex: number) => {
    setIndex(clickedIndex);
  };

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible bg-transparent">
      <div className="relative flex items-center justify-center w-full max-w-6xl">
        {cards.map((card, i) => {
          // Calculate relative position (-1 for left, 0 for center, 1 for right)
          // This logic works specifically for a 3-card loop
          let position = i - index;
          if (position < -1) position += cards.length;
          if (position > 1) position -= cards.length;

          const isCenter = position === 0;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x: position * 260, // Distance between cards
                scale: isCenter ? 1 : 0.5,
                opacity: 1,
                filter: isCenter ? "blur(0px)" : "blur(4px)",
                zIndex: isCenter ? 20 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              onClick={() => handleCardClick(i)}
              className="absolute cursor-pointer"
              style={{
                transformOrigin: "center center",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Note: No container styling, just the SVG component */}
              <card.Component />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCarousel;
