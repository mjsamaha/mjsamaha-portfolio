/**
 * Gallery View Component
 * 
 * Main gallery container displaying all bird photos in a responsive grid.
 * Includes lightbox for full-size viewing with metadata.
 */

"use client";

import { useState, useEffect } from "react";
import { photos, Photo } from "@/src/content/photos";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";

export function GalleryView() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Handlers
    const handlePhotoClick = (photo: Photo, index: number) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    const handleLightboxNavigate = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentPhotoIndex(prev => (prev === 0 ? photos.length - 1 : prev - 1));
        } else {
            setCurrentPhotoIndex(prev => (prev === photos.length - 1 ? 0 : prev + 1));
        }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        if (!lightboxOpen) return;

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') handleLightboxNavigate('prev');
            if (e.key === 'ArrowRight') handleLightboxNavigate('next');
            if (e.key === 'Escape') setLightboxOpen(false);
        };

        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxOpen, currentPhotoIndex]);


    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">

            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading">
                    Bird Photography Gallery
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A collection of {photos.length} bird photographs captured in Southern Ontario
                </p>
            </div>

            {/* Photo Grid */}
            <PhotoGrid
                photos={photos}
                onPhotoClick={handlePhotoClick}
            />

            {/* Lightbox */}
            <PhotoLightbox
                photos={photos}
                currentIndex={currentPhotoIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={handleLightboxNavigate}
            />
        </div>
    );
}
