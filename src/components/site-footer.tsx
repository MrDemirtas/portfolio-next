"use client";

import { Github, Linkedin } from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";
import { personalData } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t py-12 bg-code-pattern">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve Bilgiler */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              {personalData.fullName}
            </h2>
            <p className="text-muted-foreground mt-2">{personalData.title}</p>
            <p className="text-sm text-muted-foreground mt-4">
              {personalData.location}
            </p>
          </motion.div>

          {/* Navigasyon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="font-semibold mb-4">Sayfalar</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/projelerim"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Projelerim
              </Link>
            </div>
          </motion.div>

          {/* Sosyal Medya */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex gap-4">
              <motion.a
                href={personalData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href={personalData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {personalData.fullName}. Tüm
            hakları saklıdır. ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
