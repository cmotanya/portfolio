import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

import { cn } from "../utils/cn";
import React from "react";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="text-neutral-850 opacity-0"
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-center font-semibold uppercase",
        className,
        ubuntu.className,
      )}
    >
      <div className="md:mt-4">
        <div className="animate-gradient-animation text-balance bg-gradient-to-r from-indigo-500 to-fuchsia-800 bg-clip-text text-5xl leading-snug tracking-wide text-transparent md:text-6xl">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
