"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({ text }: { text: string }) {
  const colors = [
    "#6366f1", // Indigo-500
    "#8b5cf6", // Violet-500
    "#a855f7", // Purple-500
    "#d946ef", // Fuchsia-500
    "#ec4899", // Pink-500
    "#f43f5e", // Rose-500
    "#f97316", // Orange-500
    "#f59e0b", // Amber-500
    "#10b981", // Emerald-500
    "#3b82f6", // Blue-500
  ];

  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block whitespace-pre font-sans tracking-tight"
    >
      {char}
    </motion.span>
  ));
}
