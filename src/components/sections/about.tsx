import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const uniquePoints = [
  "Art-Led Immersion: Deeply engaging experiences that foster creativity and innovative thinking.",
  "Odisha Heritage Roots: Programs grounded in the rich cultural and artistic traditions of Odisha.",
  "Sustainable Leadership: A focus on creating lasting, positive impact for individuals and communities."
];

export function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-background" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='hsl(165, 45%, 19%)' fill-opacity='0.04'%3E%3Crect x='0' y='0' width='50' height='50' /%3E%3Crect x='50' y='50' width='50' height='50' /%3E%3C/g%3E%3C/svg%3E")`
    }}>
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Mission</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Transforming Leaders, Empowering Artisans, Preserving Heritage.
            </h2>
            <p className="text-lg text-foreground/80 text-balance">
              We provide transformative leadership programs that integrate the wisdom of traditional arts to cultivate mindful, innovative, and impactful leaders.
            </p>
          </div>
          <Card className="bg-card shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-headline text-2xl font-semibold text-primary mb-6">What Makes Aynthram Unique?</h3>
              <ul className="space-y-4">
                {uniquePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-accent" />
                    </div>
                    <span className="ml-3 text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
