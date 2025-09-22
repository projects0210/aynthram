import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const programs = [
  {
    id: 'program-academy',
    title: 'Leadership Academy',
    description: 'A 3-day immersive program designed for senior leaders to disconnect from routine and reconnect with their core purpose through art-based interventions.',
    themes: ['"Quiet Quitting → Quiet Leading"', 'Leading Gen Z'],
  },
  {
    id: 'program-escape',
    title: "Founders' Escape",
    description: 'A curated retreat for entrepreneurs and founders to combat burnout, foster creativity, and develop sustainable leadership strategies for their ventures.',
    themes: ['Design Thinking for Frugal Innovation'],
  },
  {
    id: 'program-corporate',
    title: 'Corporate & Experiential Tourism',
    description: "Customized experiential programs and retreats for corporate teams, blending leadership development with the unique cultural heritage of Odisha.",
    themes: ['Team Cohesion', 'Cross-cultural Leadership'],
  },
];

export function Programs() {
  return (
    <section id="programs" className="w-full py-20 lg:py-32 bg-primary-foreground/20" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23243E55' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}>
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Offerings</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">
            Programs for a New Generation of Leaders
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Each program is a carefully crafted journey, blending ancient wisdom with modern leadership challenges.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {programs.map((program) => {
            const image = PlaceHolderImages.find(p => p.id === program.id);
            return (
              <Card key={program.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {image && (
                  <div className="relative h-48 w-full">
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
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80">{program.description}</p>
                  <div className="mt-4 space-y-1">
                    {program.themes.map(theme => (
                        <p key={theme} className="text-sm text-foreground/60">{theme}</p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="p-0 text-accent font-bold group">
                    <Link href="#contact">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
