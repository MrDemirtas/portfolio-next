"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
}

export function TypewriterEffect({ text }: TypewriterEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(text.substring(0, currentIndex + 1))
          setCurrentIndex((prevIndex) => prevIndex + 1)

          if (currentIndex === text.length) {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          setDisplayText(text.substring(0, currentIndex - 1))
          setCurrentIndex((prevIndex) => prevIndex - 1)

          if (currentIndex === 0) {
            setIsDeleting(false)
          }
        }
      },
      isDeleting ? 50 : 150,
    )

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text, mounted])

  if (!mounted) return <div className="h-full flex items-center justify-center">{text}</div>

  return (
    <div className="h-full flex items-center justify-center">
      <motion.h2
        className="text-2xl md:text-3xl font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
          className="inline-block w-1 h-6 ml-1 bg-primary"
        ></motion.span>
      </motion.h2>
    </div>
  )
}
