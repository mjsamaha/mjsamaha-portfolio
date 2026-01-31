"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/src/content/resume";

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ExperienceSection() {
  // Sort experience by newest first (handling the sorting here for robustness)
  // Assuming startDate format "Jan 2022", "Sep 2023", etc.
  // For now, simpler: just reverse the imported array since we know it's oldest first in data
  const sortedExperience = [...experience].reverse();

  return (
    <section className="container max-w-4xl mx-auto px-4 py-16" id="experience">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="space-y-12"
      >
        <motion.div variants={slideInLeft} className="text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground mt-2">
            My journey through service, leadership, and development
          </p>
        </motion.div>

        <div className="relative pl-8 md:pl-10">
          {/* Vertical Timeline Line */}
          <div className="absolute left-2.75 md:left-3.75 top-2 bottom-6 w-0.5 bg-border" />

          <Accordion type="single" collapsible className="space-y-8" defaultValue={sortedExperience[0]?.id}>
            {sortedExperience.map((job) => (
              <motion.div key={job.id} variants={slideInLeft} className="relative">
                {/* Timeline Dot */}
                <div className={`
                  absolute -left-7.25 md:-left-8.25 top-5 w-4 h-4 rounded-full border-2 
                  ${job.endDate === "Present" ? "bg-primary border-primary" : "bg-background border-muted-foreground"}
                  z-10 transition-colors duration-300
                `} />

                <AccordionItem value={job.id} className="border rounded-lg bg-card px-4 md:px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left w-full">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg leading-tight">
                          {job.role} <span className="text-muted-foreground font-normal">at</span> {job.organization}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm text-muted-foreground min-w-35 text-right">
                          {job.startDate} — <span className={job.endDate === "Present" ? "text-primary font-medium" : ""}>{job.endDate}</span>
                        </span>
                        <Badge variant="outline" className="hidden sm:inline-flex">{job.location}</Badge>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <div className="space-y-4">
                        <div className="sm:hidden">
                            <Badge variant="outline">{job.location}</Badge> 
                        </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                      
                      {job.tags && job.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {job.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </section>
  );
}
