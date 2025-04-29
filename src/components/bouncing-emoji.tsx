"use client"

import { motion } from "framer-motion"

interface BouncingEmojiProps {
  emoji: string
  className?: string
}

export function BouncingEmoji({ emoji, className = "" }: BouncingEmojiProps) {
  return (
    <motion.div
      className={`text-3xl ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
      }}
    >
      {emoji}
    </motion.div>
  )
}
