"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { aboutMe } from "@/src/content/resume";
import { gsap, useGSAP } from "@/lib/gsap-utils";
import { AuroraText } from "@/components/ui/aurora-text";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade and slide up the entire container on scroll
    gsap.fromTo(
      ".about-content > *",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-background py-16 md:py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Avatar Placeholder - Optional */}
          {/* 
          <div className="about-avatar opacity-0 relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-muted">
             <img src="/avatar.jpg" alt="Profile" className="object-cover w-full h-full" />
          </div> 
          */}

          <div className="about-content flex-1 space-y-6 text-center md:text-left">
            <h1 className="opacity-0 text-4xl md:text-6xl font-bold tracking-tight">
              <AuroraText>Matthew Samaha</AuroraText>
            </h1>

            <h2 className="opacity-0 text-xl md:text-2xl text-muted-foreground font-medium">
              {aboutMe.tagline}
            </h2>

            <p className="opacity-0 text-lg text-muted-foreground leading-relaxed">
              {aboutMe.intro}
            </p>

            <div className="opacity-0 flex flex-wrap justify-center md:justify-start gap-3 pt-2">
              {aboutMe.highlights.map((highlight, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
