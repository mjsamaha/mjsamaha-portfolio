'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { gsap, useGSAP } from '@/lib/gsap-utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Toggle visibility (show when scrolled down)
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.7)' }
      );
    } else if (buttonRef.current && buttonRef.current.style.opacity !== '0') {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
        y: 20,
        duration: 0.3,
        ease: 'power2.in'
      })
    }
  }, [isVisible]);

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-8 right-8 z-50 pointer-events-none opacity-0"
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className={`w-12 h-12 rounded-full shadow-lg ${isVisible ? 'pointer-events-auto' : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </div>
  );
}
