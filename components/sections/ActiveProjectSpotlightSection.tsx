"use client";

import { useRef } from "react";
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
      <div className="relative overflow-hidden rounded-3xl border border-sky-200/70 bg-linear-to-br from-sky-50 via-blue-50 to-cyan-50 p-6 shadow-xl dark:border-sky-900/50 dark:from-slate-950 dark:via-sky-950/50 dark:to-blue-950/40 md:p-10">
        <NavalGridBackground className="spotlight-grid-layer" hostRef={containerRef} />

        <div className="relative grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <div className="space-y-5">
            <Badge
              variant="outline"
              className="spotlight-reveal border-sky-300/80 bg-white/70 px-3 py-1 text-sky-800 backdrop-blur-sm dark:border-sky-700 dark:bg-slate-900/60 dark:text-sky-300"
            >
              <Radar className="size-3.5" /> {activeProjectSpotlight.missionLabel}
            </Badge>

            <div className="space-y-3">
              <p className="spotlight-reveal text-xs font-semibold tracking-[0.2em] text-sky-800/80 uppercase dark:text-sky-200/80">
                {activeProjectSpotlight.eyebrow}
              </p>
              <h2 id="active-project-spotlight-heading" className="spotlight-reveal text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
                {activeProjectSpotlight.displayTitle}
              </h2>
              <p id="active-project-spotlight-description" className="spotlight-reveal max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {activeProjectSpotlight.description}
              </p>
            </div>

            <div className="spotlight-reveal flex flex-wrap items-center gap-3">
              <Badge className={cn("border", project?.statusColor)}>{projectStatus}</Badge>
              <Badge variant="secondary" className="bg-slate-900 text-slate-100 dark:bg-sky-100 dark:text-slate-900">
                {activeProjectSpotlight.audienceLabel}
              </Badge>
            </div>

            <div
              className="spotlight-reveal flex flex-wrap gap-3"
              role="group"
              aria-label="Active project spotlight actions"
            >
              <Button asChild size="lg" className="bg-sky-700 text-white hover:bg-sky-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400">
                <Link href={projectHref} aria-describedby="active-project-spotlight-description">
                  Explore {activeProjectSpotlight.displayTitle}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-sky-400/70 bg-white/70 text-sky-900 hover:bg-sky-100 dark:border-sky-700 dark:bg-slate-900/60 dark:text-sky-200 dark:hover:bg-sky-950/60">
                <Link href={projectRepoUrl} target="_blank" rel="noreferrer noopener" aria-label={`View source code for ${activeProjectSpotlight.displayTitle} on GitHub`}>
                  View Source on GitHub
                  <ExternalLink className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="spotlight-reveal rounded-2xl border border-sky-300/70 bg-white/80 p-5 backdrop-blur-sm dark:border-sky-900/70 dark:bg-slate-900/70">
            <p className="text-xs font-semibold tracking-[0.16em] text-sky-900 uppercase dark:text-sky-200">Development Pulse</p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {activeProjectSpotlight.progressLabel}
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm font-medium text-slate-800 dark:text-slate-200">
                <span>
                  {activeProjectSpotlight.completedInitiatives}/
                  {activeProjectSpotlight.totalInitiatives} complete
                </span>
                <span>{Math.round(COMPLETION_PERCENT)}%</span>
              </div>
              <Progress value={COMPLETION_PERCENT} className="h-2.5 bg-sky-200/70 dark:bg-sky-950/70" />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {activeProjectSpotlight.progressFootnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
