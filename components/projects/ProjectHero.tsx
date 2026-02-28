"use client";

import { useRef } from "react";
import { Project } from "@/src/content/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap-utils";

interface ProjectHeroProps {
    project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            ".ph-anim",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0">
            {/* Metadata Row */}
            <div className="ph-anim opacity-0 flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-6">
                <span className={project.statusColor + " px-2 py-0.5 rounded-full text-xs font-medium border border-current/20"}>
                    {project.status}
                </span>
                <span>•</span>
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
            </div>

            {/* Title */}
            <h1 className="ph-anim opacity-0 text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                {project.title}
            </h1>

            {/* Description */}
            <p className="ph-anim opacity-0 text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
                {project.description}
            </p>

            {/* CTA Buttons */}
            <div className="ph-anim opacity-0 flex flex-col sm:flex-row gap-4">
                {project.demoUrl && (
                    <Button asChild size="lg" className="gap-2">
                        <Link href={project.demoUrl} target="_blank">
                            <ExternalLink className="w-4 h-4" />
                            View Live Demo
                        </Link>
                    </Button>
                )}

                {project.repoUrl && (
                    <Button asChild variant="outline" size="lg" className="gap-2">
                        <Link href={project.repoUrl} target="_blank">
                            <Github className="w-4 h-4" />
                            View Source Code
                        </Link>
                    </Button>
                )}
            </div>
        </div>
    );
}
