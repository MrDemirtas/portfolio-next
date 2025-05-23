"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";

interface HeroNameProps {
  name: string;
}

export function HeroName({ name }: HeroNameProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return <h1 className="text-5xl md:text-7xl font-bold">{name}</h1>;

  const words = name.split(" ");

  return (
    <h1 className="text-5xl md:text-7xl font-bold relative">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: (wordIndex * word.length + letterIndex) * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
              whileHover={{
                scale: 1.2,
                rotate: Math.random() * 10 - 5,
                color: "#fff",
                transition: { duration: 0.2 },
              }}
            >
              {letter}
              <motion.span
                className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 opacity-0"
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay:
                    (wordIndex * word.length + letterIndex) * 0.1 +
                    Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: Math.random() * 10 + 5,
                }}
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </span>
      ))}
      <div className="glitch-effect" data-text={name}></div>
    </h1>
  );
}
