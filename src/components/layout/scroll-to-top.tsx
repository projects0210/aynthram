"use client";

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const calculateScrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    if (winHeightPx > 0) {
      const scrolled = (scrollPx / winHeightPx) * 100;
      setProgress(scrolled);
    } else {
      setProgress(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', calculateScrollProgress);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', calculateScrollProgress);
    };
  }, []);

  const circumference = 2 * Math.PI * 28; // 2 * pi * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        className={cn(
          'h-16 w-16 rounded-full p-0 shadow-lg transition-opacity duration-300 relative bg-muted/80 hover:bg-muted',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          className="transform -rotate-90"
        >
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="hsl(var(--accent))"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-100"
          />
        </svg>
        <ArrowUp className="absolute h-8 w-8 text-primary" />
      </Button>
    </div>
  );
}
