'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap-utils';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useGSAP(() => {
        // Basic page transition using GSAP
        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
        );
    }, [pathname]); // Re-run animation when route changes

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}
