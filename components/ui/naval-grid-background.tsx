"use client";

import { type RefObject, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NavalGridBackgroundProps {
  className?: string;
  hostRef?: RefObject<HTMLElement | null>;
}

export function NavalGridBackground({ className, hostRef }: NavalGridBackgroundProps) {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef?.current;
    if (!host || !glowRef.current) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsHoverPointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (prefersReducedMotion || !supportsHoverPointer) {
      glowRef.current.style.setProperty("--cursor-x", "50%");
      glowRef.current.style.setProperty("--cursor-y", "50%");
      return;
    }

    let frameId = 0;
    let nextX = 50;
    let nextY = 50;

    const setGlowPosition = (x: number, y: number) => {
      glowRef.current?.style.setProperty("--cursor-x", `${x}%`);
      glowRef.current?.style.setProperty("--cursor-y", `${y}%`);
    };

    const flushPosition = () => {
      setGlowPosition(nextX, nextY);
      frameId = 0;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = host.getBoundingClientRect();
      nextX = ((event.clientX - bounds.left) / bounds.width) * 100;
      nextY = ((event.clientY - bounds.top) / bounds.height) * 100;

      if (!frameId) {
        frameId = window.requestAnimationFrame(flushPosition);
      }
    };

    const handlePointerLeave = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
      setGlowPosition(50, 50);
    };

    setGlowPosition(50, 50);
    host.addEventListener("pointermove", handlePointerMove);
    host.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      host.removeEventListener("pointermove", handlePointerMove);
      host.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [hostRef]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <div className="absolute inset-0 opacity-35 bg-[linear-gradient(to_right,rgba(3,105,161,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(3,105,161,0.18)_1px,transparent_1px)] bg-size-[28px_28px] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.16)_1px,transparent_1px)]" />

      <div
        ref={glowRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at var(--cursor-x,50%) var(--cursor-y,50%), rgba(14, 165, 233, 0.22), rgba(6, 95, 165, 0.12) 20%, rgba(6, 95, 165, 0) 58%)",
        }}
      />

      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl animate-pulse dark:bg-cyan-500/20" />
      <div className="absolute -bottom-24 -left-8 h-64 w-64 rounded-full bg-blue-300/25 blur-3xl animate-pulse dark:bg-blue-500/20" />

      <div className="absolute inset-y-0 -left-1/4 w-1/2 -rotate-12 bg-linear-to-r from-transparent via-cyan-200/20 to-transparent dark:via-cyan-300/15" />
      <div className="absolute inset-y-0 right-[-20%] w-1/3 rotate-12 bg-linear-to-r from-transparent via-sky-300/15 to-transparent dark:via-sky-400/15" />
    </div>
  );
}
