/**
 * Empty Album State Component
 * 
 * Displays when a selected album has no photos.
 * Provides helpful messaging and navigation back to all albums.
 */

"use client";

import { Album } from "@/src/content/photos";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { getAlbumIcon } from "@/lib/album-config";

interface EmptyAlbumProps {
    /** Album that has no photos */
    album: Album;
    /** Callback to navigate back to all albums */
    onBackToAlbums: () => void;
}

/**
 * Empty state component for albums with no photos
 */
export function EmptyAlbum({ album, onBackToAlbums }: EmptyAlbumProps) {
    const IconComponent = getAlbumIcon(album.id);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center py-20"
        >
            <Card className="max-w-md text-center p-12 bg-card border-border shadow-sm">
                {/* Album Icon */}
                <IconComponent className="mx-auto h-16 w-16 text-muted-foreground mb-4" />

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 font-heading">
                    No photos in {album.name} yet
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6">
                    Check back soon for new additions to this collection.
                </p>

                {/* Back Button */}
                <Button variant="outline" onClick={onBackToAlbums}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    View All Albums
                </Button>
            </Card>
        </motion.div>
    );
}
