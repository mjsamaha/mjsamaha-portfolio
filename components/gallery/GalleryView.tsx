"use client";

import { useState, useMemo } from "react";
import {
    albums,
    photos,
    AlbumCategory,
    getAlbumById,
    Photo
} from "@/src/content/photos";
import { AlbumGrid } from "@/components/gallery/AlbumGrid";
import { PhotoGrid } from "@/components/gallery/PhotoGrid";
import { PhotoLightbox } from "@/components/gallery/PhotoLightbox";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function GalleryView() {
    const [selectedAlbum, setSelectedAlbum] = useState<AlbumCategory | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // Filter photos based on selected album
    const filteredPhotos = useMemo(() => {
        if (!selectedAlbum) return photos;
        return photos.filter(photo => photo.album === selectedAlbum);
    }, [selectedAlbum]);

    const currentAlbumData = selectedAlbum ? getAlbumById(selectedAlbum) : null;

    // Handlers
    const handleAlbumSelect = (album: AlbumCategory | null) => {
        setSelectedAlbum(album);
        // Smooth scroll to photo grid if picking an album
        if (album) {
            setTimeout(() => {
                const gridElement = document.getElementById("photo-grid-anchor");
                if (gridElement) {
                    gridElement.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    const handlePhotoClick = (photo: Photo, index: number) => {
        setCurrentPhotoIndex(index);
        setLightboxOpen(true);
    };

    const handleLightboxNavigate = (direction: 'prev' | 'next') => {
        if (direction === 'prev') {
            setCurrentPhotoIndex(prev => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
        } else {
            setCurrentPhotoIndex(prev => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
        }
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16 space-y-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-heading">
                    Bird Photography Gallery
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Organized collections of avian portraits and moments hosted on Flickr.
                </p>
            </motion.div>

            {/* Album Selection Grid */}
            <section className="mb-16">
                <AlbumGrid
                    albums={albums}
                    selectedAlbum={selectedAlbum}
                    onAlbumSelect={handleAlbumSelect}
                    currentPhotoCount={filteredPhotos.length}
                />
            </section>

            {/* Active Album Header (if selected) */}
            {selectedAlbum && currentAlbumData && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border pb-6"
                >
                    <div className="flex items-center gap-3">
                        <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => setSelectedAlbum(null)}
                            className="mr-2"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            All Albums
                        </Button>
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                {currentAlbumData.name}
                                <span className="text-sm font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                                    {filteredPhotos.length}
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-sm mt-1">
                                {currentAlbumData.description}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Photo Grid Anchor for scrolling */}
            <div id="photo-grid-anchor" className="scroll-mt-24" />

            {/* Photo Grid */}
            <PhotoGrid
                photos={filteredPhotos}
                onPhotoClick={handlePhotoClick}
                currentAlbum={selectedAlbum}
            />

            {/* Lightbox */}
            <PhotoLightbox
                photos={filteredPhotos}
                currentIndex={currentPhotoIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={handleLightboxNavigate}
                currentAlbum={selectedAlbum}
                albumMetadata={currentAlbumData || undefined}
            />
        </div>
    );
}
