"use client";

import { useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/src/content/skills";
import { gsap, useGSAP } from "@/lib/gsap-utils";

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header reveal
    gsap.fromTo(
      ".skills-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
          once: true,
        },
      }
    );

    // Cards and Progress Bars timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top 85%",
        once: true,
      },
      defaults: { ease: "power2.out" },
    });

    // 1. Reveal cards staggered
    tl.fromTo(
      ".skill-card",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }
    );

    // 2. Animate all progress bars growing to their set widths
    // We select the internal primitive created by Radix inside the Progress component
    // radix-progress-indicator is the class we need to target to animate the width/transform
    tl.fromTo(
      ".skill-card [data-state]",
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1, duration: 1, ease: "power3.out", stagger: 0.05 },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="container max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-12">
        <div className="skills-header opacity-0 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((category) => (
            <div key={category.category} className="skill-card opacity-0">
              <Card className="h-full hover:shadow-md transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2 group">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium group-hover:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level ?? 0} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
