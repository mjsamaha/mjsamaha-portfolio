"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackToProjectsProps {
    className?: string;
}

export function BackToProjects({ className }: BackToProjectsProps) {
    return (
        <div className={cn("py-6", className)}>
            <Link href="/projects" className="inline-flex items-center group">
                <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: -4 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowLeft className="w-4 h-4 mr-2 text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Back to Projects
                </span>
            </Link>
        </div>
    );
}
