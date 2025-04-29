"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxImageProps {
  src: string
  alt: string
}

export function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  if (!mounted) {
    return <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
  }

  return (
    <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
    </motion.div>
  )
}
