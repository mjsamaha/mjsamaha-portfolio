"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getFeaturedPhotos } from "@/src/content/photos";
import { gsap, useGSAP } from "@/lib/gsap-utils";

export default function FeaturedGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredPhotos = getFeaturedPhotos();

  // Map to the format expected by the gallery for display
  const galleryPhotos = featuredPhotos.map(photo => ({
    src: photo.fullSize,
    alt: photo.alt,
    caption: photo.commonName,
    id: photo.id
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useGSAP(() => {
    // Structural reveal on scroll
    gsap.fromTo(
      ".gallery-header, .gallery-viewer",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

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
    return null;
  }

  return (
    <section ref={containerRef} className="py-24 bg-(--bg-primary)">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="gallery-header opacity-0 flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-(--text-primary)">Featured Photography</h2>
            <p className="text-(--text-secondary) text-lg">Capturing moments in nature</p>
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
        </div>

        <div
          className="gallery-viewer opacity-0 relative aspect-video w-full rounded-xl overflow-hidden shadow-(--shadow-elevated) bg-(--bg-secondary) border border-(--border-default)"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Note: Keeping Framer Motion here temporarily for the image crossfade logic as instructed by plan (micro-interactions vs macro layout) */}
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

          <div className="absolute inset-x-0 bottom-0 p-4 backdrop-blur-sm bg-(--bg-elevated-70)">
            <p className="text-(--text-primary) text-lg font-medium text-center">
              {galleryPhotos[currentIndex].caption}
            </p>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-(--bg-elevated-70) text-(--text-primary) hover:bg-(--state-hover-overlay) transition-colors backdrop-blur-sm border border-(--border-soft)"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-(--bg-elevated-70) text-(--text-primary) hover:bg-(--state-hover-overlay) transition-colors backdrop-blur-sm border border-(--border-soft)"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-(--text-primary) w-4" : "bg-(--text-muted)"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
