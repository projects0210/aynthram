import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const teamMembers = [
  {
    id: 'vasudev-vangara',
    name: 'Vasudev Vangara',
    role: 'Founder & CEO',
  },
  {
    id: 'gaman-palem',
    name: 'Gaman Palem',
    role: 'Artist & Co-Creator',
  },
  {
    id: 'adarsh-chintalapti',
    name: 'Adarsh Chintalapti',
    role: 'Strategic Advisor',
  },
  {
    id: 'chaitanya-muppala',
    name: 'Chaitanya Muppala',
    role: 'Partnerships Lead',
  },
  {
    id: 'yamini-rapeti',
    name: 'Yamini Rapeti',
    role: 'Program Manager',
  },
];

export function Team() {
  return (
    <section id="team" className="w-full py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Team</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">
            The Minds Behind the Mission
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A collective of visionaries, artists, and strategists dedicated to redefining leadership.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12">
          {teamMembers.map((member) => {
            const image = PlaceHolderImages.find(p => p.id === member.id);
            return (
              <div key={member.name} className="text-center group">
                <Card className="overflow-hidden border-0 shadow-none bg-transparent">
                  <CardContent className="p-0">
                    <div className="relative aspect-square w-full">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          fill
                          className="object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
                <h3 className="mt-4 font-headline text-lg font-semibold text-primary">{member.name}</h3>
                <p className="text-sm text-foreground/70">{member.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
