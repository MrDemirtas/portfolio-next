"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/types";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Emoji mapping for project types
  const projectEmoji =
    {
      "E-Ticaret Platformu": "🛒",
      "Task Yönetim Uygulaması": "✅",
      "Mobil Fitness Uygulaması": "💪",
      "Blog Platformu": "✍️",
    }[project.title] || "🚀";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden border-none shadow-xl h-full group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-black/50 text-white"
                  >
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge
                    variant="outline"
                    className="bg-black/50 text-white border-white/20"
                  >
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{projectEmoji}</span>
            <h2 className="text-xl font-bold">{project.title}</h2>
          </div>
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {project.shortDescription}
          </p>

          <Button asChild className="w-full group rounded-full">
            <Link
              href={`/projelerim/${project.slug}`}
              className="flex items-center justify-center gap-2"
            >
              Detayları Gör
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
