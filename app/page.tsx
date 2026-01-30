import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Matthew Samaha
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
          Full-Stack Developer | Naval Reservist | Bird Photographer
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View Projects
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
