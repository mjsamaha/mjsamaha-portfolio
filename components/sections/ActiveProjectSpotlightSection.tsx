"use client";

import { type CSSProperties, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Radar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { NavalGridBackground } from "@/components/ui/naval-grid-background";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap-utils";
import { getProjectBySlug } from "@/src/content/projects";
import { activeProjectSpotlight } from "@/src/content/spotlight";

const COMPLETION_PERCENT =
  (activeProjectSpotlight.completedInitiatives /
    activeProjectSpotlight.totalInitiatives) *
  100;

const spotlightContainerStyle: CSSProperties = {
  borderColor: "var(--border-default)",
  backgroundImage:
    "linear-gradient(135deg, var(--surface-gradient-from), var(--surface-gradient-via), var(--surface-gradient-to))",
  boxShadow: "var(--shadow-elevated)",
};

const spotlightBadgeStyle: CSSProperties = {
  borderColor: "var(--border-strong)",
  backgroundColor: "var(--bg-elevated-60)",
  color: "var(--text-accent)",
};

const spotlightCardStyle: CSSProperties = {
  borderColor: "var(--border-default)",
  backgroundColor: "var(--bg-elevated-70)",
};

export default function ActiveProjectSpotlightSection() {
  const containerRef = useRef<HTMLElement>(null);
  const project = getProjectBySlug(activeProjectSpotlight.slug);
  const projectHref = project?.href ?? `/projects/${activeProjectSpotlight.slug}`;
  const projectRepoUrl =
    project?.repoUrl ?? "https://github.com/mjsamaha/oaksignal-signalsmaster";
  const projectStatus = project?.status ?? "In Development";

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(".spotlight-reveal", { opacity: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        ".spotlight-reveal",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".spotlight-grid-layer",
        { opacity: 0.2 },
        {
          opacity: 0.45,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative py-16 md:py-20" aria-labelledby="active-project-spotlight-heading">
      <div className="relative overflow-hidden rounded-3xl border p-6 md:p-10" style={spotlightContainerStyle}>
        <NavalGridBackground className="spotlight-grid-layer" hostRef={containerRef} />

        <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="spotlight-reveal px-3 py-1 backdrop-blur-sm"
              style={spotlightBadgeStyle}
            >
              <Radar className="size-3.5" /> {activeProjectSpotlight.missionLabel}
            </Badge>

            <div className="space-y-3">
              <p className="spotlight-reveal text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--text-accent)", opacity: 0.8 }}>
                {activeProjectSpotlight.eyebrow}
              </p>
              <h2 id="active-project-spotlight-heading" className="spotlight-reveal text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--text-primary)" }}>
                {activeProjectSpotlight.displayTitle}
              </h2>
              <p id="active-project-spotlight-description" className="spotlight-reveal max-w-3xl text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {activeProjectSpotlight.description}
              </p>
            </div>

            <div className="spotlight-reveal flex flex-wrap items-center gap-3">
              <Badge className={cn("border", project?.statusColor)}>{projectStatus}</Badge>
              <Badge variant="secondary" style={{ backgroundColor: "var(--accent-subtle)", color: "var(--text-primary)" }}>
                {activeProjectSpotlight.audienceLabel}
              </Badge>
            </div>

            <div
              className="spotlight-reveal flex flex-wrap gap-3"
              role="group"
              aria-label="Active project spotlight actions"
            >
              <Button
                asChild
                size="lg"
                className="bg-(--accent-primary) text-(--accent-foreground-strong) hover:bg-(--accent-primary-hover)"
              >
                <Link href={projectHref} aria-describedby="active-project-spotlight-description">
                  Explore {activeProjectSpotlight.displayTitle}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-(--border-strong) bg-(--bg-elevated-60) text-(--text-accent) hover:bg-(--state-hover-overlay)"
              >
                <Link href={projectRepoUrl} target="_blank" rel="noreferrer noopener" aria-label={`View source code for ${activeProjectSpotlight.displayTitle} on GitHub`}>
                  View Source on GitHub
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="spotlight-reveal rounded-2xl border p-5 backdrop-blur-sm" style={spotlightCardStyle}>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: "var(--text-accent)" }}>Development Pulse</p>
            <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              {activeProjectSpotlight.progressLabel}
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                <span>
                  {activeProjectSpotlight.completedInitiatives}/
                  {activeProjectSpotlight.totalInitiatives} complete
                </span>
                <span>{Math.round(COMPLETION_PERCENT)}%</span>
              </div>
              <Progress value={COMPLETION_PERCENT} className="h-2.5 bg-(--bg-tertiary)" />
            </div>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {activeProjectSpotlight.progressFootnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
