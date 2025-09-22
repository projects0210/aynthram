"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import Image from 'next/image'
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type Testimonial = {
    id: string;
    quote: string;
    author: string;
    title: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: "testimonial-1",
        quote: "Aynthram's program was a revelation. It connected me to a deeper sense of purpose and gave me practical tools to lead my team with more empathy and creativity. Truly transformative.",
        author: "Priya Sharma",
        title: "CEO, Innovate Inc.",
        image: "/images/testimonial-1.jpg",
    },
    {
        id: "testimonial-2",
        quote: "As a founder, burnout is a real threat. The Founders' Escape was the perfect antidote. I came back recharged, with a new perspective on sustainable leadership and a network of fellow entrepreneurs.",
        author: "Rohan Mehta",
        title: "Founder, Techify Solutions",
        image: "/images/testimonial-2.jpg",
    },
    {
        id: "testimonial-3",
        quote: "The blend of ancient art and modern business challenges is unique and incredibly effective. Our team's communication and collaboration have improved significantly since the retreat.",
        author: "Anjali Gupta",
        title: "HR Director, GlobalCorp",
        image: "/images/testimonial-3.jpg",
    }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      };
      emblaApi.on('select', onSelect);
      onSelect();
      return () => {
        emblaApi.off('select', onSelect);
      };
    }
  }, [emblaApi]);

  return (
    <section id="testimonials" className="w-full py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Testimonials</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 leading-tight">
            What Our Participants Say
          </h2>
        </div>
        
        <div className="relative mt-16">
          <div className="embla-testimonials">
            <div className="embla__viewport-testimonials" ref={emblaRef}>
              <div className="embla__container-testimonials">
                {testimonials.map((testimonial, index) => {
                  return (
                    <div 
                      key={testimonial.id}
                      className={cn('embla__slide-testimonials', { 'is-active': index === activeIndex })}
                    >
                      <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground h-full">
                        <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center h-full">
                          <Quote className="h-10 w-10 text-accent" />
                          <p className="mt-6 text-xl md:text-2xl font-light text-balance flex-grow">
                            "{testimonial.quote}"
                          </p>
                          <div className="mt-8 flex items-center gap-4">
                              <Image
                                src={testimonial.image}
                                alt={testimonial.author}
                                data-ai-hint="person face"
                                width={64}
                                height={64}
                                className="rounded-full object-cover"
                              />
                            <div>
                              <p className="font-semibold text-lg">{testimonial.author}</p>
                              <p className="text-primary-foreground/70">{testimonial.title}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
           <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-full left-0">
             <Button
                onClick={scrollPrev}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground -ml-6"
              >
                <ArrowLeft className="h-6 w-6" />
             </Button>
             <Button
                onClick={scrollNext}
                variant="ghost"
                size="icon"
                className="w-12 h-12 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground -mr-6"
              >
                <ArrowRight className="h-6 w-6" />
             </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
