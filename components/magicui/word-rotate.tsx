"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export interface RotatingWords {
  word: string;
  from: string;
  to: string;
}

interface WordRotateProps {
  words: RotatingWords[];
  duration?: number;
  framerProps?: HTMLMotionProps<"div">;
  className?: string;
}

export default function WordRotate({
  words,
  duration = 3000,
  framerProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [words, duration, index]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index].word}
          {...framerProps}
          className={cn(className, "")}
        >
          <h1
            className="py-4"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundImage: `linear-gradient(to right, ${words[index].from}, ${words[index].to})`
            }}
          >
            {words[index].word}
          </h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}