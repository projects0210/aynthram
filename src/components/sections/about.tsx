import { CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const uniquePoints = [
  "Art-Led Immersion: Deeply engaging experiences that foster creativity and innovative thinking.",
  "Odisha Heritage Roots: Programs grounded in the rich cultural and artistic traditions of Odisha.",
  "Sustainable Leadership: A focus on creating lasting, positive impact for individuals and communities."
];

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-section');
  
  return (
    <section id="about" className="w-full py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Mission</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Transforming Leaders, Empowering Artisans, Preserving Heritage.
            </h2>
            <p className="text-lg text-foreground/80 text-balance">
              We provide transformative leadership programs that integrate the wisdom of traditional arts to cultivate mindful, innovative, and impactful leaders. Our unique methodology fosters a deep connection between personal growth, cultural preservation, and sustainable business practices.
            </p>
             <ul className="space-y-4 mt-6">
                {uniquePoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                    </div>
                    <span className="ml-3 text-lg text-foreground/90">{point}</span>
                  </li>
                ))}
              </ul>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    data-ai-hint={aboutImage.imageHint}
                    fill
                    className="object-cover"
                />
            )}
             <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
