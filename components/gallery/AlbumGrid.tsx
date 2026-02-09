"use client";

import { Album, AlbumCategory, getAlbumPhotoCount, getAlbumCoverPhoto } from "@/src/content/photos";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { getAlbumIcon } from "@/lib/album-config";

interface AlbumGridProps {
    albums: Album[];
    selectedAlbum: AlbumCategory | null;
    onAlbumSelect: (album: AlbumCategory | null) => void;
    currentPhotoCount: number; // useful for the "All Photos" card
}

// Separate component to handle data fetching for cover photo to keep main component clean
function AlbumCover({ id }: { id: AlbumCategory }) {
    const coverPhoto = getAlbumCoverPhoto(id);

    if (!coverPhoto) {
        return <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">No Cover</div>;
    }

    return (
        <Image
            src={coverPhoto.thumbnail}
            alt={`Cover for ${id}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
    );
}

export function AlbumGrid({
    albums,
    selectedAlbum,
    onAlbumSelect
}: AlbumGridProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* "All Photos" Card */}
            <Card
                className={cn(
                    "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden border-border",
                    selectedAlbum === null ? "ring-2 ring-primary" : "hover:opacity-90"
                )}
                onClick={() => onAlbumSelect(null)}
            >
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ImageIcon className="w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors" />
                    </div>
                </div>
                <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="font-semibold tracking-tight text-lg">All Photos</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                View the complete collection of bird photography sorted by date.
                            </p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                    <Badge variant="secondary" className="text-xs">
                        All Items
                    </Badge>
                </CardFooter>
            </Card>

            {/* Dynamic Album Cards */}
            {albums.map((album) => {
                const IconComponent = getAlbumIcon(album.id);
                const photoCount = getAlbumPhotoCount(album.id);
                const isActive = selectedAlbum === album.id;

                return (
                    <Card
                        key={album.id}
                        className={cn(
                            "group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] overflow-hidden border-border",
                            isActive ? "ring-2 ring-primary" : "hover:opacity-90"
                        )}
                        onClick={() => onAlbumSelect(album.id)}
                    >
                        {/* Cover Image Area */}
                        <div className="relative aspect-video w-full overflow-hidden bg-muted">
                            <AlbumCover id={album.id} />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            {/* Icon Badge */}
                            <div className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm">
                                <IconComponent className="w-4 h-4 text-foreground" />
                            </div>
                        </div>

                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="font-semibold tracking-tight text-lg group-hover:text-primary transition-colors">
                                        {album.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                                        {album.description}
                                    </p>
                                </div>
                            </div>
                        </CardContent>

                        <CardFooter className="p-4 pt-0 flex justify-end">
                            <Badge variant="secondary" className="text-xs">
                                {photoCount} Photos
                            </Badge>
                        </CardFooter>
                    </Card>
                );
            })}
        </div>
    );
}
