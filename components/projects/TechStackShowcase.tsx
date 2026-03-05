"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerGrid, fadeInUp } from "@/lib/animations";
import { Project } from "@/src/content/projects";
import { Layers, Database, Shield, Server, HardDrive, Key, Cloud, type LucideIcon } from "lucide-react";

type TechnicalDetails = NonNullable<Project["technicalDetails"]>;

interface TechStackShowcaseProps {
    technicalDetails: TechnicalDetails;
}

const iconMap: Record<string, LucideIcon> = {
    frontend: Layers,
    backend: Server,
    database: Database,
    auth: Key,
    storage: HardDrive,
    security: Shield,
    infrastructure: Cloud,
};

const labelMap: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    auth: "Authentication",
    storage: "Storage",
    security: "Security",
    infrastructure: "Infrastructure",
};

export function TechStackShowcase({ technicalDetails }: TechStackShowcaseProps) {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight text-(--text-primary)">Technical Architecture</h3>
                <p className="text-(--text-secondary)">
                    Deep dive into the technology stack and infrastructure decisions.
                </p>
            </div>

            <motion.div
                variants={staggerGrid}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {(Object.entries(technicalDetails) as [keyof TechnicalDetails, string][]).map(([key, value]) => {
                    const Icon = iconMap[key] || Layers;
                    const label = labelMap[key] || key;

                    return (
                        <motion.div key={key} variants={fadeInUp} className="h-full">
                            <Card className="h-full hover:shadow-md transition-shadow duration-300">
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-md bg-secondary text-secondary-foreground">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <CardTitle className="text-base">{label}</CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-(--text-secondary) leading-relaxed">
                                        {value}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </div>
    );
}

