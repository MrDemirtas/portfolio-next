"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface CodeBlock {
  id: number
  x: number
  y: number
  width: number
  height: number
  opacity: number
  delay: number
  duration: number
  language: string
}

const codeSnippets = [
  `function calculateTotal(items) {
  return items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
}`,
  `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`,
  `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`,
  `class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  getInfo() {
    return \`\${this.name}: \${this.email}\`;
  }
}`,
  `const router = express.Router();

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});`,
]

export function CodeRain() {
  const [codeBlocks, setCodeBlocks] = useState<CodeBlock[]>([])
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const blocks: CodeBlock[] = []
    for (let i = 0; i < 10; i++) {
      blocks.push({
        id: i,
        x: Math.random() * 80,
        y: Math.random() * 100 - 50,
        width: Math.random() * 20 + 15,
        height: Math.random() * 10 + 10,
        opacity: Math.random() * 0.5 + 0.2,
        delay: Math.random() * 2,
        duration: Math.random() * 10 + 20,
        language: ["javascript", "typescript", "jsx", "html", "css"][Math.floor(Math.random() * 5)],
      })
    }

    setCodeBlocks(blocks)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeBlocks.map((block) => (
        <motion.div
          key={block.id}
          className={`absolute rounded-md p-4 ${
            isDark ? "bg-gray-800/40 text-blue-300/70" : "bg-gray-100/40 text-blue-800/70"
          }`}
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.width}%`,
            opacity: block.opacity,
            fontSize: "10px",
            fontFamily: "monospace",
            overflow: "hidden",
            backdropFilter: "blur(2px)",
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: [0, block.opacity, block.opacity / 2, block.opacity, 0],
            y: ["0%", "110%"],
            x: [0, Math.random() * 10 - 5],
          }}
          transition={{
            duration: block.duration,
            delay: block.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5,
          }}
        >
          <pre className="whitespace-pre-wrap break-all">{codeSnippets[block.id % codeSnippets.length]}</pre>
        </motion.div>
      ))}
    </div>
  )
}
