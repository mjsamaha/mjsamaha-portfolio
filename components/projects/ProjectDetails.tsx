"use client";

import { Project } from "@/src/content/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ProjectDetailsProps {
    project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
    return (
        <div className="py-12 space-y-12">
            {/* Full Description */}
            {project.detailedOverview && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-3xl prose prose-neutral dark:prose-invert"
                >
                        <h3 className="text-2xl font-bold mb-4 text-(--text-primary)">Overview</h3>
                        <p className="text-lg leading-relaxed text-(--text-secondary)">
                        {project.detailedOverview}
                    </p>
                </motion.div>
            )}

            {/* Details Grid */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Problem Card */}
                <motion.div variants={fadeInUp} className="h-full">
                    <Card className="h-full bg-(--bg-elevated-60) backdrop-blur border-(--border-default)">
                        <CardHeader>
                            <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 text-destructive">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg">The Challenge</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-(--text-secondary)">
                                {project.problem}
                            </p>
                            {project.problemDomain && (
                                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-(--text-muted)">
                                    {project.problemDomain.points.slice(0, 3).map((point: string, i: number) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Solution Card */}
                <motion.div variants={fadeInUp} className="h-full">
                    <Card className="h-full bg-(--bg-elevated-60) backdrop-blur border-(--border-default)">
                        <CardHeader>
                            <div className="w-10 h-10 rounded-lg bg-(--state-hover-overlay) flex items-center justify-center mb-4 text-(--text-accent)">
                                <Lightbulb className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg">The Solution</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-(--text-secondary)">
                                {project.solution.headline}
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-(--text-muted)">
                                {project.solution.points.slice(0, 3).map((point: string, i: number) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Impact/Outcome Card */}
                <motion.div variants={fadeInUp} className="h-full">
                    <Card className="h-full bg-(--bg-elevated-60) backdrop-blur border-(--border-default)">
                        <CardHeader>
                            <div className="w-10 h-10 rounded-lg bg-(--status-active-bg) flex items-center justify-center mb-4 text-(--status-active-text)">
                                <TrendingUp className="w-5 h-5" />
                            </div>
                            <CardTitle className="text-lg">The Impact</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-(--text-secondary)">
                                {project.outcome}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.features.slice(0, 3).map((feature: string, i: number) => (
                                    <Badge key={i} variant="outline" className="text-xs">
                                        {feature}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>

            {/* Metrics Row */}
            {project.metrics && (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-(--border-default)"
                >
                    {project.metrics.map((metric: { label: string; value: string }, i: number) => (
                        <motion.div key={i} variants={fadeInUp}>
                            <Card className="bg-(--bg-elevated-60) border-(--border-soft)">
                                <CardContent className="p-6 text-center">
                                    <p className="text-sm text-(--text-muted) mb-1 font-medium tracking-wide uppercase">
                                        {metric.label}
                                    </p>
                                    <p className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-br from-foreground to-foreground/70">
                                        {metric.value}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    );
}
