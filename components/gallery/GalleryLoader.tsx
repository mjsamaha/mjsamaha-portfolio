/**
 * Gallery Loading States
 * 
 * Skeleton loaders that match the exact layout of AlbumGrid and PhotoGrid.
 * Provides visual feedback during data loading with theme-aware shimmer effects.
 */

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Album Grid Skeleton Loader
 * Matches the 4-column grid layout of AlbumGrid component
 */
export function AlbumGridLoader() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="overflow-hidden border-border">
                    {/* Cover Image Skeleton */}
                    <Skeleton className="aspect-video w-full" />

                    {/* Content */}
                    <CardContent className="p-4 space-y-2">
                        <Skeleton className="h-5 w-3/4" /> {/* Title */}
                        <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
                        <Skeleton className="h-4 w-5/6" /> {/* Description line 2 */}
                    </CardContent>

                    {/* Footer */}
                    <CardFooter className="p-4 pt-0 flex justify-end">
                        <Skeleton className="h-5 w-20" /> {/* Badge */}
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}

/**
 * Photo Grid Skeleton Loader
 * Matches the responsive grid layout of PhotoGrid component
 * 
 * @param count - Number of photo skeletons to display (default: 12)
 */
export function PhotoGridLoader({ count = 12 }: { count?: number }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: count }).map((_, i) => (
                <Card
                    key={i}
                    className="aspect-square overflow-hidden border-border bg-card"
                >
                    <Skeleton className="w-full h-full" />
                </Card>
            ))}
        </div>
    );
}
