"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { experience } from "@/src/content/resume";
import { gsap, useGSAP } from "@/lib/gsap-utils";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sort experience by newest first
  const sortedExperience = [...experience].reverse();

  useGSAP(() => {
    // Reveal header
    gsap.fromTo(
      ".exp-header",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 85%",
          once: true,
        },
      }
    );

    // Timeline choregrograpy
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".exp-timeline",
        start: "top 80%", // Start animating when the top of the timeline is 80% down the screen
        once: true,
      },
    });

    // 1. Draw the vertical line down
    tl.fromTo(
      ".exp-vertical-line",
      { scaleY: 0, transformOrigin: "top" },
      { scaleY: 1, duration: 1.5, ease: "power2.inOut" }
    );

    // 2. Pop in the dots and items staggered, slightly overlapping the line drawing
    tl.fromTo(
      ".exp-item",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.2, // Items appear one after another
        ease: "back.out(1.5)",
      },
      "-=1.0" // Start 1 second before the line finishes drawing
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="container max-w-4xl mx-auto px-4 py-16" id="experience">
      <div className="space-y-12">
        <div className="exp-header opacity-0 text-center md:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">Professional Experience</h2>
          <p className="text-(--text-secondary) mt-2">
            My journey through service, leadership, and development
          </p>
        </div>

        <div className="exp-timeline relative pl-8 md:pl-10">
          {/* Vertical Timeline Line */}
          <div className="exp-vertical-line absolute left-2.75 md:left-3.75 top-2 bottom-6 w-0.5 bg-(--border-default) origin-top" />

          <Accordion type="single" collapsible className="space-y-8" defaultValue={sortedExperience[0]?.id}>
            {sortedExperience.map((job) => (
              <div key={job.id} className="exp-item opacity-0 relative">
                {/* Timeline Dot */}
                <div className={`
                  absolute -left-7.25 md:-left-8.25 top-5 w-4 h-4 rounded-full border-2 
                  ${job.endDate === "Present" ? "bg-(--accent-primary) border-(--accent-primary)" : "bg-(--bg-primary) border-(--border-strong)"}
                  z-10 transition-colors duration-300
                `} />

                <AccordionItem value={job.id} className="border border-(--border-default) rounded-lg bg-(--bg-secondary) px-4 md:px-6">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-left w-full">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg leading-tight text-(--text-primary)">
                          {job.role} <span className="text-(--text-muted) font-normal">at</span> {job.organization}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm text-(--text-muted) min-w-35 text-right">
                          {job.startDate} — <span className={job.endDate === "Present" ? "text-(--text-accent) font-medium" : ""}>{job.endDate}</span>
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
                      <p className="text-(--text-secondary) leading-relaxed">
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
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
