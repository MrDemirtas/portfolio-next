"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} görsel ${index + 1}`}
              fill
              className="object-contain"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-medium">
                Büyütmek için tıkla
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={title}
                  fill
                  className="object-contain"
                />
              </div>

              <Button
                size="icon"
                variant="secondary"
                className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              {images.length > 1 && (
                <>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = images.indexOf(selectedImage);
                      const prevIndex =
                        currentIndex === 0
                          ? images.length - 1
                          : currentIndex - 1;
                      setSelectedImage(images[prevIndex]);
                    }}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 hover:bg-black/70"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = images.indexOf(selectedImage);
                      const nextIndex =
                        currentIndex === images.length - 1
                          ? 0
                          : currentIndex + 1;
                      setSelectedImage(images[nextIndex]);
                    }}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
