"use client";

import { useRef } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { gsap, useGSAP } from "@/lib/gsap-utils";

import { Badge } from "@/components/ui/badge";

const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: ["TypeScript", "Java", "Angular", "Next.js", "Spring Boot"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS"],
  },
  {
    category: "DevOps",
    skills: ["Docker", "GitHub", "GitHub Actions", "Cpanel"],
  },
  {
    category: "Supporting Tools",
    skills: ["Clerk", "Vercel", "Postman", "JUnit 5", "Jira", "Linear"],
  },
];

const slugs = [
  "angular",
  "nextdotjs",
  "springboot",
  "typescript",
  "postgresql",
  "mongodb",
  "docker",
  "amazonaws",
  "github",
  "githubactions",
  "cpanel",
];

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

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

    // Icon Cloud reveal
    gsap.fromTo(
      ".icon-cloud-container",
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".icon-cloud-container",
          start: "top 85%",
          once: true,
        },
      }
    );

    // Skills List Stagger Reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".skills-list-container",
        start: "top 85%",
        once: true,
      },
      defaults: { ease: "power2.out" },
    });

    tl.fromTo(
      ".skill-category-title",
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1 }
    ).fromTo(
      ".skill-badge",
      { opacity: 0, scale: 0.8, y: 15 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05 },
      "-=0.3"
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="container max-w-4xl mx-auto px-4 py-16">
      <div className="space-y-12">
        <div className="skills-header opacity-0 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-(--text-primary)">Skills & Technologies</h2>
          <p className="text-(--text-secondary) max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Skills Badges */}
          <div className="skills-list-container space-y-8 order-2 lg:order-1">
            {skillsData.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="skill-category-title opacity-0 text-xl font-semibold tracking-tight text-(--text-primary)">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="skill-badge opacity-0 text-sm py-1 px-3 bg-(--bg-elevated-60) text-(--text-secondary) border border-(--border-soft) hover:bg-(--state-hover-overlay) hover:text-(--text-primary) transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Icon Cloud */}
          <div className="icon-cloud-container opacity-0 mx-auto flex items-center justify-center order-1 lg:order-2 w-full">
            <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-2xl bg-(--bg-elevated-60) backdrop-blur-xl border border-(--border-default) p-8 shadow-(--shadow-elevated)">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
