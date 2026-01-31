"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1444464666117-439d5c4375b4?q=80&w=2000&auto=format&fit=crop",
    alt: "Bird in flight",
    caption: "Peregrine Falcon"
  },
  {
    src: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?q=80&w=2000&auto=format&fit=crop",
    alt: "Colorful parrot",
    caption: "Scarlet Macaw"
  },
  {
    src: "https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=2000&auto=format&fit=crop",
    alt: "Owl resting",
    caption: "Great Horned Owl"
  }
];

export default function FeaturedGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

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
              key={currentIndex}
              src={photos[currentIndex].src}
              alt={photos[currentIndex].alt}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          <div className="absolute inset-x-0 bottom-0 bg-black/50 p-4 backdrop-blur-sm">
            <p className="text-white text-lg font-medium text-center">
                {photos[currentIndex].caption}
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
            {photos.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex ? "bg-white w-4" : "bg-white/50"
                    }`}
                />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
