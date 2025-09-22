import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Program = {
  id: string;
  title: string;
  description: string;
  audience: string;
  themes: string[];
  image: string;
  imageAlt: string;
  imageHint: string;
}

const programs: Program[] = [
  {
    id: 'program-academy',
    title: 'Leadership Academy',
    description: 'A 3-day immersive program for senior leaders to disconnect from routine and reconnect with their core purpose through art-based interventions.',
    audience: 'Senior Leaders & Executives',
    themes: ['"Quiet Quitting → Quiet Leading"', 'Leading Gen Z'],
    image: '/images/program-academy.jpg',
    imageAlt: "Image for Leadership Academy program",
    imageHint: "leadership workshop"
  },
  {
    id: 'program-escape',
    title: "Founders' Escape",
    description: 'A curated retreat for entrepreneurs to combat burnout, foster creativity, and develop sustainable strategies for their ventures.',
    audience: 'Founders & Entrepreneurs',
    themes: ['Design Thinking for Frugal Innovation'],
    image: '/images/program-escape.jpg',
    imageAlt: "Image for Founders' Escape program",
    imageHint: "founder retreat"
  },
  {
    id: 'program-corporate',
    title: 'Corporate & Experiential Tourism',
    description: "Custom experiential programs and retreats for corporate teams, blending leadership development with the unique cultural heritage of Odisha.",
    audience: 'Corporate Teams',
    themes: ['Team Cohesion', 'Cross-cultural Leadership'],
    image: '/images/program-corporate.jpg',
    imageAlt: "Image for Corporate Retreats program",
    imageHint: "team building"
  },
];

export function Programs() {
  return (
    <section id="programs" className="w-full py-20 lg:py-32 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Offerings</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Programs for a New Generation of Leaders
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Each program is a carefully crafted journey, blending ancient wisdom with modern leadership challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {programs.map((program) => {
            return (
              <Card key={program.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    data-ai-hint={program.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-primary">{program.title}</CardTitle>
                  <CardDescription>{program.audience}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                  <p className="text-foreground/80">{program.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {program.themes.map(theme => (
                        <Badge key={theme} variant="secondary" className="font-normal">{theme}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/40 py-4">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="link" className="p-0 text-primary font-bold group">
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="font-headline text-2xl text-primary">Transformation starts here.</AlertDialogTitle>
                        <AlertDialogDescription className="text-lg text-foreground/80">
                           Ready to begin? Contact us to learn more and book your experience.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <Button variant="ghost">Cancel</Button>
                        <AlertDialogAction asChild>
                          <Link href="#contact">Contact Us</Link>
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
