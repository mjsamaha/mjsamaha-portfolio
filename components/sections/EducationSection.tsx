"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { education } from "@/src/content/resume";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { slideInRight, fadeInUp } from "@/lib/animations";

export function EducationSection() {
  return (
    <section className="space-y-6">
      <motion.h2
        className="text-3xl font-bold tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInRight}
      >
        Education
      </motion.h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            variants={fadeInUp}
          >
            <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-xl flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.institution}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-foreground">
                      {edu.program}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {edu.description}
                </p>

                {edu.technologies && edu.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 mt-auto">
                    {edu.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
