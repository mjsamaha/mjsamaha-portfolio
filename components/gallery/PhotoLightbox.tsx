"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Photo, AlbumCategory, Album } from "@/src/content/photos";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    ChevronLeft,
    ChevronRight,
    X,
    MapPin,
    Camera,
    Aperture,
    Timer,
    Focus,
    Maximize2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface PhotoLightboxProps {
    photos: Photo[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (direction: 'prev' | 'next') => void;
    currentAlbum?: AlbumCategory | null;
    albumMetadata?: Album; // Optional album metadata for context
}

export function PhotoLightbox({
    photos,
    currentIndex,
    isOpen,
    onClose,
    onNavigate,
    currentAlbum,
    albumMetadata
}: PhotoLightboxProps) {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const photo = photos[currentIndex];

    // Reset loading state when photo changes
    useEffect(() => {
        setIsImageLoading(true);
    }, [currentIndex]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') onNavigate('prev');
            if (e.key === 'ArrowRight') onNavigate('next');
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onNavigate, onClose]);

    if (!photo) return null;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-[95vw] lg:max-w-7xl h-[90vh] p-0 gap-0 overflow-hidden bg-background/95 backdrop-blur-xl border-border/50">
                <div className="flex flex-col lg:flex-row h-full w-full">

                    {/* Left Side: Image Viewer */}
                    <div className="relative flex-1 bg-black/5 lg:bg-black/20 flex items-center justify-center p-4 lg:p-8 min-h-[50vh] lg:min-h-full overflow-hidden">

                        {/* Navigation Buttons (Desktop: Internal, Mobile: Hidden/Swipe) */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 z-20 hidden lg:flex h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm text-foreground transition-all disabled:opacity-0"
                            onClick={() => onNavigate('prev')}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-8 w-8" />
                            <span className="sr-only">Previous Photo</span>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 z-20 hidden lg:flex h-12 w-12 rounded-full bg-background/20 hover:bg-background/40 backdrop-blur-sm text-foreground transition-all disabled:opacity-0"
                            onClick={() => onNavigate('next')}
                            disabled={currentIndex === photos.length - 1}
                        >
                            <ChevronRight className="h-8 w-8" />
                            <span className="sr-only">Next Photo</span>
                        </Button>

                        {/* Image Container with AnimatePresence */}
                        <div className="relative w-full h-full max-h-[85vh] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={photo.id}
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative w-full h-full"
                                >
                                    {/* Fallback / Loading State */}
                                    {isImageLoading && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                                        </div>
                                    )}

                                    <Image
                                        src={photo.fullSize}
                                        alt={photo.alt}
                                        fill
                                        className={cn(
                                            "object-contain transition-opacity duration-300",
                                            isImageLoading ? "opacity-0" : "opacity-100"
                                        )}
                                        onLoad={() => setIsImageLoading(false)}
                                        sizes="(max-width: 1024px) 100vw, 70vw"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile Navigation Hints */}
                        <div className="absolute bottom-4 left-0 right-0 py-2 flex justify-center gap-8 lg:hidden pointer-events-none">
                            <Button
                                variant="secondary"
                                size="sm"
                                className="pointer-events-auto opacity-70 hover:opacity-100 h-8 w-8 rounded-full p-0"
                                onClick={() => onNavigate('prev')}
                                disabled={currentIndex === 0}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                className="pointer-events-auto opacity-70 hover:opacity-100 h-8 w-8 rounded-full p-0"
                                onClick={() => onNavigate('next')}
                                disabled={currentIndex === photos.length - 1}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>

                    </div>

                    {/* Right Side: Metadata Panel */}
                    <div className="w-full lg:w-[380px] xl:w-[420px] flex flex-col border-t lg:border-t-0 lg:border-l border-border bg-background lg:h-full">

                        {/* Header / Custom Close */}
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center gap-2">
                                {albumMetadata ? (
                                    <Badge variant="outline" className="text-xs font-normal">
                                        {albumMetadata.name}
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="text-xs font-normal">
                                        Gallery
                                    </Badge>
                                )}
                                <span className="text-xs text-muted-foreground">
                                    {currentIndex + 1} / {photos.length}
                                </span>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={onClose}>
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">

                            {/* Titles */}
                            <div className="space-y-1">
                                <DialogTitle className="text-2xl font-bold font-heading tracking-tight">
                                    {photo.commonName}
                                </DialogTitle>
                                <DialogDescription className="text-lg italic text-muted-foreground font-serif">
                                    {photo.scientificName}
                                </DialogDescription>
                            </div>

                            {/* Location & Year */}
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                {photo.location && (
                                    <div className="flex items-center gap-1.5">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span>{photo.location}</span>
                                    </div>
                                )}
                                <div className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs font-medium border border-border">
                                    {photo.year}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {photo.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="capitalize font-normal text-xs">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>

                            {/* Technical Details (Accordion) */}
                            <Accordion type="single" collapsible className="w-full" defaultValue="camera-details">
                                <AccordionItem value="camera-details">
                                    <AccordionTrigger className="text-sm font-medium">
                                        Technical Specification
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="grid grid-cols-2 gap-4 py-2">
                                            <div className="space-y-1">
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                    <Camera className="w-3 h-3" /> Camera
                                                </span>
                                                <p className="text-sm font-medium truncate">{photo.camera || "Unknown"}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                    <Maximize2 className="w-3 h-3" /> Lens
                                                </span>
                                                <p className="text-sm font-medium truncate" title={photo.lens}>{photo.lens || "Unknown"}</p>
                                            </div>

                                            {photo.settings && (
                                                <>
                                                    <div className="space-y-1">
                                                        <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                            <Aperture className="w-3 h-3" /> Aperture
                                                        </span>
                                                        <p className="text-sm font-medium">{photo.settings.aperture || "-"}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                            <Timer className="w-3 h-3" /> Shutter
                                                        </span>
                                                        <p className="text-sm font-medium">{photo.settings.shutterSpeed || "-"}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                            ISO
                                                        </span>
                                                        <p className="text-sm font-medium">{photo.settings.iso || "-"}</p>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <span className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                                                            <Focus className="w-3 h-3" /> Focal Length
                                                        </span>
                                                        <p className="text-sm font-medium">{photo.settings.focalLength || "-"}</p>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Footer / Keyboard Hint */}
                        <div className="p-4 border-t border-border bg-muted/20 hidden lg:block">
                            <div className="flex justify-between text-xs text-muted-foreground">
                                <span>← → Navigate</span>
                                <span>ESC Close</span>
                            </div>
                        </div>

                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
