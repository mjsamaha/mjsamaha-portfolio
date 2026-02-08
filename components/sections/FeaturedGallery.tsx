"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";
import { getFeaturedPhotos } from "@/src/content/photos";

export default function FeaturedGallery() {
  const featuredPhotos = getFeaturedPhotos();

  // Map to the format expected by the gallery for display
  const galleryPhotos = featuredPhotos.map(photo => ({
    src: photo.fullSize, // Using fullSize as it contains the web-accessible path
    alt: photo.alt,
    caption: photo.commonName,
    id: photo.id
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || galleryPhotos.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, galleryPhotos.length]);

  const nextSlide = () => {
    if (galleryPhotos.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length);
  };

  const prevSlide = () => {
    if (galleryPhotos.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? galleryPhotos.length - 1 : prev - 1));
  };

  if (galleryPhotos.length === 0) {
    return null; // Don't render if no photos
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Photography</h2>
            <p className="text-muted-foreground text-lg">Capturing moments in nature</p>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <Link href="https://flickr.com" target="_blank">
                <ExternalLink className="w-5 h-5" />
                <span className="sr-only">Flickr</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        <div
          className="relative aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-muted"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={galleryPhotos[currentIndex].id}
              src={galleryPhotos[currentIndex].src}
              alt={galleryPhotos[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-4 backdrop-blur-sm">
            <p className="text-white text-lg font-medium text-center">
              {galleryPhotos[currentIndex].caption}
            </p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors backdrop-blur-sm"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
