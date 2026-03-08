import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins globally
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Ensure smooth scrolling behavior matches Next.js / CSS configurations
gsap.config({
    nullTargetWarn: false,
});

/**
 * Reusable utility to fade elements in with a stagger effect.
 * Useful for grid lists, feature tags, etc.
 */
export const staggerFadeIn = (
    selector: string,
    trigger?: string | Element,
    stagger: number = 0.1,
    yOffset: number = 20
) => {
    return gsap.fromTo(
        selector,
        { opacity: 0, y: yOffset },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger,
            ease: "power2.out",
            scrollTrigger: trigger
                ? {
                    trigger,
                    start: "top 85%",
                    once: true,
                }
                : undefined,
        }
    );
};

// Export pre-configured GSAP tools
export { gsap, ScrollTrigger, useGSAP };
