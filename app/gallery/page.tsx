import { Metadata } from "next";
import { GalleryView } from "@/components/gallery/GalleryView";

export const metadata: Metadata = {
  title: "Photography Gallery | Matthew Samaha",
  description: "Bird photography collection featuring raptors, waterfowl, songbirds, and shorebirds.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <GalleryView />
    </main>
  );
}
