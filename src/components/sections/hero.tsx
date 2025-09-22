"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SinceBadge } from '@/components/since-badge';

const slidingTexts = [
  "Fostering Innovation.",
  "Empowering Artisans.",
  "Building Legacies.",
  "Cultivating Mindfulness."
];

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slidingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-primary/30 lg:bg-gradient-to-r lg:from-primary/90 lg:via-primary/70 lg:to-transparent" />
      <div className="relative z-10 container flex h-full items-center justify-center text-center lg:justify-start lg:text-left pt-20 pb-12 lg:py-0 px-4">
        <div className="max-w-xl text-white">
          <div className={`transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <SinceBadge />
            <h1 className="font-headline mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="text-accent">Crafting Leaders.</span>
              <br />
              Cultivating Legacies.
            </h1>
            <p className="mt-6 text-md md:text-lg leading-8 text-gray-200 text-balance">
              Transform your leadership through immersive experiences that blend ancient Indian wisdom with modern practices. Because leadership is not just a skill — it's a mindset.
            </p>
            <div className="mt-8 h-10 text-accent font-semibold text-lg md:text-xl flex justify-center lg:justify-start items-center overflow-hidden">
              <div className="relative h-full w-full max-w-sm">
                {slidingTexts.map((text, index) => (
                  <span
                    key={index}
                    className="absolute w-full h-full transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: `translateY(${(index - currentTextIndex) * 100}%)`,
                      top: 0,
                      left: 0
                    }}
                  >
                    {text}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className={`mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-x-6 gap-y-4 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <Button asChild size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              <Link href="#programs">Explore Programs</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white w-full sm:w-auto">
              <Link href="#experience">Learn Our Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
