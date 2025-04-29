"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Code, Database, Server, Cpu, Globe, Cloud, Layers, Terminal, Smartphone, Wifi } from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: React.ElementType
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const iconComponents = [Code, Database, Server, Cpu, Globe, Cloud, Layers, Terminal, Smartphone, Wifi]

    const newIcons: FloatingIcon[] = []

    for (let i = 0; i < 15; i++) {
      const Icon = iconComponents[Math.floor(Math.random() * iconComponents.length)]
      newIcons.push({
        id: i,
        Icon,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 2,
        duration: Math.random() * 10 + 10,
      })
    }

    setIcons(newIcons)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className="absolute text-primary/30 dark:text-primary/20"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            fontSize: icon.size,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.5, 1, 0],
            scale: [0, 1, 1.2, 1, 0],
            x: [0, -20, 20, -10, 0],
            y: [0, 20, -10, 15, 0],
          }}
          transition={{
            duration: icon.duration,
            delay: icon.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5,
          }}
        >
          <icon.Icon size={icon.size} />
        </motion.div>
      ))}
    </div>
  )
}
