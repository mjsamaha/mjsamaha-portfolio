"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Camera, Rocket, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial Load Timeline for Hero Intro
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      ".hero-badge",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
    )
      .fromTo(
        ".hero-heading",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      )
      .fromTo(
        ".hero-feature",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      );

    // Scroll-Triggered Timeline for Left content
    gsap.fromTo(
      ".about-card",
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-card",
          start: "top 85%", // Trigger when top of element hits 85% of viewport
          once: true, // Equivalent to viewport={{ once: true }}
        },
      }
    );

    // Scroll-Triggered Timeline for Right content (staggered slightly)
    gsap.fromTo(
      ".status-card",
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".right-column",
          start: "top 85%",
          once: true,
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Background Decoration */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(135deg, var(--surface-gradient-from), var(--surface-gradient-via), var(--bg-primary))",
        }}
      />

      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        {/* Hero Intro */}
        <div className="text-center mb-16 md:mb-24 space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="hero-badge inline-block opacity-0">
            <Badge
              variant="secondary"
              className="px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium shadow-xs backdrop-blur-sm border-(--border-default) bg-(--bg-elevated-60) text-(--text-accent)"
            >
              Welcome to my portfolio
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="hero-heading opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
            Computer Systems Technology <br className="hidden md:block" />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--text-accent), var(--accent-primary), var(--accent-primary-hover))",
              }}
            >
              Student & Bird Photographer
            </span>
          </h1>

          {/* Description */}
          <p className="hero-description opacity-0 text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto leading-relaxed px-4">
            Passionate developer crafting exceptional digital experiences and capturing moments of nature through the lens.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-(--text-secondary) text-sm md:text-base font-medium">
            <div className="hero-feature opacity-0 flex items-center gap-2 hover:text-(--text-accent) transition-colors cursor-default bg-(--bg-elevated-60) px-3 py-1.5 rounded-full backdrop-blur-sm border border-(--border-soft)">
              <Laptop className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Web Development</span>
            </div>
            <div className="hero-feature opacity-0 hidden md:block h-1.5 w-1.5 rounded-full bg-(--border-default)" />
            <div className="hero-feature opacity-0 flex items-center gap-2 hover:text-(--text-accent) transition-colors cursor-default bg-(--bg-elevated-60) px-3 py-1.5 rounded-full backdrop-blur-sm border border-(--border-soft)">
              <Camera className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Bird Photography</span>
            </div>
            <div className="hero-feature opacity-0 hidden md:block h-1.5 w-1.5 rounded-full bg-(--border-default)" />
            <div className="hero-feature opacity-0 flex items-center gap-2 hover:text-(--text-accent) transition-colors cursor-default bg-(--bg-elevated-60) px-3 py-1.5 rounded-full backdrop-blur-sm border border-(--border-soft)">
              <Rocket className="h-4 w-4 md:h-5 md:w-5" strokeWidth={2} />
              <span>Problem Solving</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          {/* Left Column: Story */}
          <div className="about-card opacity-0 h-full">
            <Card className="h-full bg-(--bg-elevated-70) border-(--border-default) backdrop-blur-xl shadow-(--shadow-elevated) hover:-translate-y-1 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8 space-y-6">
                <h2 className="text-2xl font-bold flex items-center md:items-start gap-3 group-hover:text-(--text-accent) transition-colors duration-300">
                  About My Journey
                </h2>
                <div className="space-y-4 text-(--text-secondary) leading-relaxed text-base">
                  <p>
                    I am a Computer Systems Technology student at Sheridan College with a strong foundation in <span className="text-(--text-primary) font-medium">Java, Python, and Web Development</span>. My passion lies in building efficient systems and solving complex problems through clean code.
                  </p>
                  <p>
                    As a Naval Reservist, I bring disciplined leadership and teamwork to every project. Currently, I am seeking opportunities to contribute to innovative software while continuing to grow as a developer and photographer.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Status & Interests */}
          <div className="right-column space-y-6 md:space-y-8 flex flex-col justify-center h-full">
            {/* Professional Status Card */}
            <div className="status-card opacity-0">
              <Card className="border-(--border-default) bg-(--bg-elevated-70) backdrop-blur-xl shadow-(--shadow-elevated) hover:-translate-y-1 transition-all duration-300 group">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div
                      className="p-4 rounded-full text-4xl shadow-inner border border-(--border-soft)"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--bg-elevated-60), var(--bg-tertiary))",
                      }}
                    >
                      👨💻
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-(--text-accent) transition-colors duration-300">Professional Status</h3>
                      <p className="text-(--text-secondary) font-medium">Student | Currently seeking new opportunities</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-(--text-muted) pt-1">
                        <MapPin className="h-4 w-4 text-(--text-accent)" />
                        <span>Toronto, ON • Remote Ready</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tech Interests Badge Card */}
            <div className="status-card opacity-0">
              <Card
                className="border-(--border-default) backdrop-blur-xl shadow-(--shadow-elevated) hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, var(--bg-elevated-60), var(--bg-elevated-70))",
                }}
              >
                <CardContent className="p-6">
                  <h4 className="text-center font-semibold mb-4 text-(--text-secondary) tracking-wide text-sm uppercase">Tech Interests</h4>
                  <div className="flex flex-wrap justify-center gap-2.5">
                    {["Full Stack Development", "Bird Photography", "Open Source"].map((interest, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className={cn(
                          "px-3 py-1.5 text-sm font-medium transition-colors duration-300 cursor-default border-(--border-default) bg-(--bg-elevated-60) text-(--text-secondary) hover:bg-(--state-hover-overlay) hover:text-(--text-primary)",
                          i === 0 && "text-(--text-accent)"
                        )}
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
