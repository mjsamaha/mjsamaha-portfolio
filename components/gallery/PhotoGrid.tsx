"use client";

import { Photo, AlbumCategory } from "@/src/content/photos";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface PhotoGridProps {
    photos: Photo[];
    onPhotoClick: (photo: Photo, index: number) => void;
    currentAlbum?: AlbumCategory | null;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3 }
    }
};

export function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
    if (photos.length === 0) {
        return (
            <div className="text-center py-20 text-muted-foreground">
                <p>No photos found in this album.</p>
            </div>
        );
    }

    return (
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <AnimatePresence mode="popLayout">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        variants={itemVariants}
                        layoutId={`photo-${photo.id}`}
                        className="w-full"
                    >
                        <Card
                            className="group relative aspect-square overflow-hidden cursor-pointer border-border bg-card ring-offset-background transition-all hover:ring-2 hover:ring-primary focus-visible:outline-none focus:ring-2 focus:ring-primary"
                            onClick={() => onPhotoClick(photo, index)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    onPhotoClick(photo, index);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                            aria-label={`View ${photo.commonName}`}
                        >
                            <Image
                                src={photo.thumbnail}
                                alt={photo.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                priority={index < 8} // Prioritize specifically the first few images
                                quality={90}
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-medium text-lg leading-tight translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {photo.commonName}
                                </h3>
                                <p className="text-white/80 text-sm italic translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                    {photo.scientificName}
                                </p>
                                {photo.location && (
                                    <div className="flex items-center gap-1 mt-2 text-white/60 text-xs translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        <MapPin className="w-3 h-3" />
                                        <span className="truncate">{photo.location}</span>
                                    </div>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}
