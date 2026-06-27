"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

interface BlockRevealWordProps {
  word: string;
  className?: string;
  delay?: number;
}

export function BlockRevealWord({ word, className = "", delay = 0 }: BlockRevealWordProps) {
  const [triggerCount, setTriggerCount] = useState(0);

  // Trigger the reveal animation once
  useEffect(() => {
    const timer = setTimeout(() => {
      setTriggerCount((prev) => prev + 1);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const characters = Array.from(word);

  // 1. Block covering and retracting animation
  const blockVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    reveal: {
      scaleX: [0, 1, 1, 0],
      originX: [0, 0, 1, 1],
      transition: {
        duration: 1.1,
        times: [0, 0.45, 0.55, 1],
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // 2. Character staggered animation
  const containerVariants: Variants = {
    hidden: {},
    reveal: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.5, // Start typing when block begins retracting
      },
    },
  };

  const charVariants: Variants = {
    hidden: { opacity: 0 },
    reveal: {
      opacity: 1,
      transition: {
        duration: 0.05,
        ease: "easeOut",
      },
    },
  };

  return (
    <span className="relative inline-block overflow-hidden align-bottom px-1">
      {/* The Animated Colored Block Overlay */}
      <motion.span
        key={`block-${triggerCount}`}
        variants={blockVariants}
        initial="hidden"
        animate="reveal"
        className="absolute inset-y-1.5 inset-x-0 z-20 rounded bg-accent"
      />

      {/* The Styled Text underneath */}
      <motion.span
        key={`text-${triggerCount}`}
        variants={containerVariants}
        initial="hidden"
        animate="reveal"
        className={`${className} inline-flex`}
      >
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
}
