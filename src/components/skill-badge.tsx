"use client";

import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import { useState } from "react";

interface SkillBadgeProps {
  skill: string;
  index: number;
}

export function SkillBadge({ skill, index }: SkillBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Emoji mapping for common skills
  const skillEmojis: Record<string, string> = {
    JavaScript: "🟨",
    TypeScript: "🔷",
    React: "⚛️",
    "Next.js": "▲",
    "Node.js": "🟢",
    Git: "🔄",
    Supabase: "🔑",
  };

  const emoji = skillEmojis[skill] || "🔧";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`border-none shadow-lg overflow-hidden ${
          isHovered ? "bg-primary/10" : "bg-card"
        } transition-colors duration-300`}
      >
        <CardContent className="p-6 text-center">
          <div className="text-3xl mb-2">{emoji}</div>
          <p className="font-medium">{skill}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
