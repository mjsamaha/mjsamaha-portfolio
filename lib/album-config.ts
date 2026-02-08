/**
 * Album Configuration Module
 * 
 * Centralized configuration for album theming, icons, and colors.
 * Provides theme-aware styling for the bird photography gallery.
 */

import { AlbumCategory } from "@/src/content/photos";
import { Bird, Waves, Music, Shell, LucideIcon } from "lucide-react";

/**
 * Album visual configuration
 */
export interface AlbumConfig {
    /** Lucide icon component */
    icon: LucideIcon;
    /** Accent color class (works in light/dark) */
    accentColor: string;
    /** Light theme background class */
    lightBg: string;
    /** Dark theme background class */
    darkBg: string;
}

/**
 * Complete album configuration mapping
 */
export const albumConfig: Record<AlbumCategory, AlbumConfig> = {
    "birds-of-prey": {
        icon: Bird,
        accentColor: "text-amber-500",
        lightBg: "bg-amber-50",
        darkBg: "dark:bg-amber-950",
    },
    "waterfowl": {
        icon: Waves,
        accentColor: "text-blue-500",
        lightBg: "bg-blue-50",
        darkBg: "dark:bg-blue-950",
    },
    "songbirds": {
        icon: Music,
        accentColor: "text-emerald-500",
        lightBg: "bg-emerald-50",
        darkBg: "dark:bg-emerald-950",
    },
    "shorebirds": {
        icon: Shell,
        accentColor: "text-cyan-500",
        lightBg: "bg-cyan-50",
        darkBg: "dark:bg-cyan-950",
    },
};

/**
 * Get icon component for a specific album
 * @param album - Album category
 * @returns LucideIcon component
 */
export function getAlbumIcon(album: AlbumCategory): LucideIcon {
    return albumConfig[album].icon;
}

/**
 * Get accent color class for a specific album
 * @param album - Album category
 * @returns Tailwind color class string
 */
export function getAlbumAccent(album: AlbumCategory): string {
    return albumConfig[album].accentColor;
}

/**
 * Get complete configuration for a specific album
 * @param album - Album category
 * @returns Complete AlbumConfig object
 */
export function getAlbumConfig(album: AlbumCategory): AlbumConfig {
    return albumConfig[album];
}
