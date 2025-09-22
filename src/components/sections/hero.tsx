"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full">
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
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container">
          <div className="max-w-2xl text-left text-white">
            <div className={`transition-all duration-1000 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h1 className="font-headline text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Crafting Leaders.
                <br />
                Cultivating Legacies.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-200 text-balance">
                Immersive, art-led leadership programs rooted in Odisha’s heritage.
              </p>
            </div>
            <div className={`mt-10 flex items-center gap-x-6 transition-all duration-1000 delay-300 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground uppercase tracking-wider font-bold">
                <Link href="#contact">Book a Program</Link>
              </Button>
              <Link href="#" className="text-sm font-semibold leading-6 text-white group">
                Download Brochure <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
