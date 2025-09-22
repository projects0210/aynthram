"use client";

import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import Image from 'next/image'
import { Quote } from "lucide-react";


const testimonials = [
    {
        id: "testimonial-1",
        quote: "Aynthram's program was a revelation. It connected me to a deeper sense of purpose and gave me practical tools to lead my team with more empathy and creativity. Truly transformative.",
        author: "Priya Sharma",
        title: "CEO, Innovate Inc.",
    },
    {
        id: "testimonial-2",
        quote: "As a founder, burnout is a real threat. The Founders' Escape was the perfect antidote. I came back recharged, with a new perspective on sustainable leadership and a network of fellow entrepreneurs.",
        author: "Rohan Mehta",
        title: "Founder, Techify Solutions",
    },
    {
        id: "testimonial-3",
        quote: "The blend of ancient art and modern business challenges is unique and incredibly effective. Our team's communication and collaboration have improved significantly since the retreat.",
        author: "Anjali Gupta",
        title: "HR Director, GlobalCorp",
    }
]

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="w-full py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-sm font-bold uppercase tracking-wider text-accent">Testimonials</span>
                <h2 className="font-headline text-4xl md:text-5xl font-bold mt-4 leading-tight">
                    What Our Participants Say
                </h2>
            </div>
            <Carousel
                plugins={[plugin.current]}
                opts={{
                    align: "start",
                    loop: true,
                }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                className="w-full max-w-4xl mx-auto mt-16"
            >
                <CarouselContent className="-ml-4">
                    {testimonials.map((testimonial) => {
                        const image = PlaceHolderImages.find(p => p.id === testimonial.id);
                        return (
                            <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/1">
                                <div className="p-1 h-full">
                                    <Card className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground h-full">
                                        <CardContent className="flex flex-col items-center justify-center p-8 md:p-12 text-center h-full">
                                            <Quote className="h-10 w-10 text-accent" />
                                            <p className="mt-6 text-xl md:text-2xl font-light text-balance flex-grow">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="mt-8 flex items-center gap-4">
                                                {image && (
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={testimonial.author}
                                                        data-ai-hint="person face"
                                                        width={64}
                                                        height={64}
                                                        className="rounded-full object-cover"
                                                    />
                                                )}
                                                <div>
                                                    <p className="font-semibold text-lg">{testimonial.author}</p>
                                                    <p className="text-primary-foreground/70">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20" />
                <CarouselNext className="text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/20" />
            </Carousel>
        </div>
    </section>
  )
}
