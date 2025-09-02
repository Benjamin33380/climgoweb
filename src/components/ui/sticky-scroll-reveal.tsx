"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });



  return (
    <div
      className="h-[25rem] sm:h-[30rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative lg:space-x-10 p-2 sm:p-0 bg-white dark:bg-black"
      ref={ref}
    >
      <div className="relative flex items-start px-2 sm:px-4 w-full lg:w-auto">
        <div className="w-full max-w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 sm:my-16 lg:my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6 lg:mb-8"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm sm:text-base lg:text-lg text-black dark:text-white max-w-full lg:max-w-sm leading-relaxed"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "w-full lg:w-80 h-40 sm:h-48 lg:h-60 bg-white dark:bg-black lg:sticky lg:top-10 overflow-hidden mt-6 lg:mt-0 rounded-lg lg:rounded-none",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
