"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface Education {
  degree: string
  institution: string
  years: string
}

interface EducationTimelineProps {
  education: Education[]
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary/30 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary transform -translate-x-1/2 z-10"></div>

              {/* Year badge */}
              <div className="w-full md:w-1/2 pb-8 md:pb-0 flex justify-center md:justify-end md:pr-12">
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">{edu.years}</div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 md:pl-12">
                <Card className="overflow-hidden border-none shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-muted-foreground">{edu.institution}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
