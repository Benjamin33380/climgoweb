"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    image?: {
      src: string;
      alt: string;
    };
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
      className="min-h-[20rem] sm:h-[25rem] lg:h-[30rem] overflow-y-auto flex flex-col lg:flex-row justify-center relative lg:space-x-10 p-4 sm:p-2 lg:p-0 bg-white dark:bg-black"
      ref={ref}
    >
      <div className="relative flex items-start px-2 sm:px-4 w-full lg:w-auto">
        <div className="w-full max-w-full lg:max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-8 sm:mb-12 lg:my-20 p-4 sm:p-6 lg:p-0 bg-white dark:bg-black lg:bg-transparent lg:dark:bg-transparent rounded-lg lg:rounded-none border lg:border-none border-black dark:border-white">
              {/* Image pour mobile/tablette uniquement */}
              {item.image && (
                <div className="flex justify-center lg:hidden mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white dark:bg-black rounded-full flex items-center justify-center">
                    <Image 
                      src={item.image.src}
                      alt={item.image.alt}
                      width={40}
                      height={40}
                      className="object-contain sm:w-12 sm:h-12"
                    />
                  </div>
                </div>
              )}
              
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-base sm:text-lg lg:text-2xl font-bold text-black dark:text-white mb-3 sm:mb-4 lg:mb-8 text-center lg:text-left"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.6,
                }}
                className="text-xs sm:text-sm lg:text-lg text-black dark:text-white max-w-full lg:max-w-sm leading-relaxed text-center lg:text-left"
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
          "hidden lg:block lg:w-80 lg:h-60 bg-white dark:bg-black lg:sticky lg:top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};
