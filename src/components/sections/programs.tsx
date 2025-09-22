import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const programs = [
  {
    id: 'program-academy',
    title: 'Leadership Academy',
    description: 'A 3-day immersive program for senior leaders to disconnect from routine and reconnect with their core purpose through art-based interventions.',
    audience: 'Senior Leaders & Executives',
    themes: ['"Quiet Quitting → Quiet Leading"', 'Leading Gen Z'],
  },
  {
    id: 'program-escape',
    title: "Founders' Escape",
    description: 'A curated retreat for entrepreneurs to combat burnout, foster creativity, and develop sustainable strategies for their ventures.',
    audience: 'Founders & Entrepreneurs',
    themes: ['Design Thinking for Frugal Innovation'],
  },
  {
    id: 'program-corporate',
    title: 'Corporate & Experiential Tourism',
    description: "Custom experiential programs and retreats for corporate teams, blending leadership development with the unique cultural heritage of Odisha.",
    audience: 'Corporate Teams',
    themes: ['Team Cohesion', 'Cross-cultural Leadership'],
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
            const image = PlaceHolderImages.find(p => p.id === program.id);
            return (
              <Card key={program.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {image && (
                  <div className="relative h-56 w-full">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      data-ai-hint={image.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
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
                  <Button variant="link" asChild className="p-0 text-primary font-bold group">
                    <Link href="#contact">
                      Book This Program <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
