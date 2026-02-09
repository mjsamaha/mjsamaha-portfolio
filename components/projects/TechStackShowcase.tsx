"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { staggerGrid, fadeInUp } from "@/lib/animations";
import { TechnicalDetails } from "@/src/content/projects";
import { Layers, Database, Shield, Server, HardDrive, Key } from "lucide-react";

interface TechStackShowcaseProps {
    technicalDetails: TechnicalDetails;
}

const iconMap = {
    frontend: Layers,
    backend: Server,
    database: Database,
    auth: Key,
    storage: HardDrive,
    security: Shield,
};

const labelMap = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    auth: "Authentication",
    storage: "Storage",
    security: "Security",
};

export function TechStackShowcase({ technicalDetails }: TechStackShowcaseProps) {
    return (
        <div className="space-y-8">
            <div className="space-y-2">
                <h3 className="text-2xl font-bold tracking-tight">Technical Architecture</h3>
                <p className="text-muted-foreground">
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
                                    <p className="text-sm text-muted-foreground leading-relaxed">
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

