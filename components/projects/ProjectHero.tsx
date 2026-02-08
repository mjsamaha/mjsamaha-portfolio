"use client";

import { Project } from "@/src/content/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Link from "next/link";

interface ProjectHeroProps {
    project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto py-12 md:py-20 px-4 md:px-0"
        >
            {/* Metadata Row */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-6"
            >
                <span className={project.statusColor + " px-2 py-0.5 rounded-full text-xs font-medium border border-current/20"}>
                    {project.status}
                </span>
                <span>•</span>
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
            >
                {project.title}
            </motion.h1>

            {/* Description */}
            <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl leading-relaxed"
            >
                {project.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
            >
                {project.liveUrl && (
                    <Button asChild size="lg" className="gap-2">
                        <Link href={project.liveUrl} target="_blank">
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
            </motion.div>
        </motion.div>
    );
}
