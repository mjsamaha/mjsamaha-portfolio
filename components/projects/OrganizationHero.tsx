"use client";

import { useRef } from "react";
import { ArrowRight, ExternalLink, Anchor, Signal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { gsap, useGSAP } from "@/lib/gsap-utils";

interface OrganizationHeroProps {
  onViewProjectsClick: () => void;
}

export function OrganizationHero({ onViewProjectsClick }: OrganizationHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-3xl mb-12 border border-(--border-default) opacity-0"
      style={{
        backgroundColor: "var(--bg-secondary)",
        color: "var(--text-primary)",
        boxShadow: "var(--shadow-elevated)",
      }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: "var(--glow-cyan)" }} />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "var(--glow-blue)" }} />

      <div className="relative z-10 px-8 py-12 md:py-16 md:px-12 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="border-(--border-strong) text-(--text-accent) bg-(--state-hover-overlay)">
              <span className="w-2 h-2 rounded-full bg-(--accent-primary) mr-2 animate-pulse" />
              Part of OakSignal
            </Badge>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-(--text-primary)">
            OakSignal
          </h2>

          <p className="text-xl md:text-2xl font-light text-(--text-secondary) mb-6">
            Building the digital infrastructure for cadet training
          </p>

          <p className="text-(--text-secondary) text-lg mb-8 leading-relaxed max-w-xl">
            OakSignal is a suite of tools designed to modernize training and operations for cadet organizations.
            From mastering naval signals to managing equipment logistics, each product addresses real operational
            challenges with practical, user-focused solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={onViewProjectsClick}
              className="bg-(--accent-primary) hover:bg-(--accent-primary-hover) text-(--accent-foreground-strong) border-none"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-(--border-default) text-(--text-secondary) hover:bg-(--state-hover-overlay) hover:text-(--text-primary) bg-transparent"
            >
              <Link href="https://mjsamaha.github.io/oaksignal-landing/" target="_blank" rel="noopener noreferrer">
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Visual Element / Brand Representation */}
        <div className="hidden md:flex flex-col gap-4">
          <div className="p-6 rounded-2xl bg-(--bg-elevated-70) backdrop-blur-sm border border-(--border-default) w-64 transform rotate-3 hover:rotate-0 transition-transform duration-300 shadow-(--shadow-elevated)">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-(--accent-primary) rounded-lg shadow-sm">
                <Signal className="w-5 h-5 text-(--accent-foreground-strong)" />
              </div>
              <span className="font-semibold text-(--text-primary)">SignalsMaster</span>
            </div>
            <div className="w-full h-2 bg-(--bg-tertiary) rounded-full mb-2">
              <div className="w-3/4 h-full bg-(--accent-primary) rounded-full" />
            </div>
            <p className="text-xs text-(--text-muted)">Interactive training suite</p>
          </div>

          <div className="p-6 rounded-2xl bg-(--bg-elevated-70) backdrop-blur-sm border border-(--border-default) w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-300 ml-8 shadow-(--shadow-elevated)">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-(--accent-subtle) rounded-lg shadow-sm">
                <Anchor className="w-5 h-5 text-(--text-primary)" />
              </div>
              <span className="font-semibold text-(--text-primary)">Quartermaster</span>
            </div>
            <div className="w-full h-2 bg-(--bg-tertiary) rounded-full mb-2">
              <div className="w-1/2 h-full bg-(--accent-subtle) rounded-full" />
            </div>
            <p className="text-xs text-(--text-muted)">Logistics management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
