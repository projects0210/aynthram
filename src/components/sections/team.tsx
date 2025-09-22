import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  imageHint: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'vasudev-vangara',
    name: 'Vasudev Vangara',
    role: 'Founder & CEO',
    image: '/images/vasudev-vangara.jpg',
    imageAlt: 'Profile photo of Vasudev Vangara',
    imageHint: 'man portrait',
  },
  {
    id: 'gaman-palem',
    name: 'Gaman Palem',
    role: 'Artist & Co-Creator',
    image: '/images/gaman-palem.jpg',
    imageAlt: 'Profile photo of Gaman Palem',
    imageHint: 'artist portrait',
  },
  {
    id: 'adarsh-chintalapti',
    name: 'Adarsh Chintalapti',
    role: 'Strategic Advisor',
    image: '/images/adarsh-chintalapti.jpg',
    imageAlt: 'Profile photo of Adarsh Chintalapti',
    imageHint: 'person portrait',
  },
  {
    id: 'chaitanya-muppala',
    name: 'Chaitanya Muppala',
    role: 'Partnerships Lead',
    image: '/images/chaitanya-muppala.jpg',
    imageAlt: 'Profile photo of Chaitanya Muppala',
    imageHint: 'man professional',
  },
  {
    id: 'yamini-rapeti',
    name: 'Yamini Rapeti',
    role: 'Program Manager',
    image: '/images/yamini-rapeti.jpg',
    imageAlt: 'Profile photo of Yamini Rapeti',
    imageHint: 'woman professional',
  },
];

export function Team() {
  return (
    <section id="team" className="w-full py-20 lg:py-32 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Team</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            A collective of visionaries, artists, and strategists dedicated to redefining leadership through the power of art.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 mt-16">
          {teamMembers.map((member) => {
            return (
              <div key={member.name} className="text-center group">
                 <div className="relative aspect-square w-full max-w-[200px] mx-auto">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      data-ai-hint={member.imageHint}
                      fill
                      className="object-cover rounded-full shadow-lg transition-all duration-300 group-hover:shadow-2xl"
                    />
                     <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-3 bg-white/70 backdrop-blur-sm rounded-full text-primary">
                            <Linkedin className="h-6 w-6" />
                        </div>
                    </div>
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-accent font-medium mt-1">{member.role}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
