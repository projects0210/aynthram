import { HandMetal, MessageSquareQuote, BrainCircuit, Flame, ListChecks, ArrowDown } from 'lucide-react';

const experienceSteps = [
  {
    icon: HandMetal,
    title: 'Live Art Performance',
    description: 'Engage with master artisans and witness the creative process firsthand.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Guided Debriefs',
    description: 'Reflect on the artistic experience to draw parallels with leadership challenges.',
  },
  {
    icon: BrainCircuit,
    title: 'Business Simulations',
    description: 'Apply newfound insights to complex, real-world business scenarios.',
  },
  {
    icon: Flame,
    title: 'Fireside Chats',
    description: 'Intimate conversations with industry veterans and thought leaders.',
  },
  {
    icon: ListChecks,
    title: 'Action Planning',
    description: 'Develop concrete, personalized action plans to implement back at work.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Approach</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            The Aynthram Experience
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Our methodology is built on a foundation of art-based experiential interventions, cognitive reframing, and modular theme-based programs.
          </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-5 h-full w-0.5 bg-border -z-10" />

            {experienceSteps.map((step, index) => (
              <div key={index} className="relative mb-12 flex items-center w-full">
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  {index % 2 === 0 && (
                    <div className="text-right">
                       <h3 className="font-headline text-2xl font-semibold text-primary">{step.title}</h3>
                       <p className="mt-2 text-foreground/80">{step.description}</p>
                    </div>
                  )}
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 bg-background z-10">
                    <div className="bg-accent/10 p-4 rounded-full border-2 border-accent/20">
                        <step.icon className="h-8 w-8 text-accent" />
                    </div>
                </div>

                 <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                   {index % 2 !== 0 && (
                     <div className="text-left">
                       <h3 className="font-headline text-2xl font-semibold text-primary">{step.title}</h3>
                       <p className="mt-2 text-foreground/80">{step.description}</p>
                    </div>
                  )}
                </div>
                 {index < experienceSteps.length - 1 && (
                     <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-8 text-border">
                        <ArrowDown className="h-4 w-4" />
                     </div>
                 )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
