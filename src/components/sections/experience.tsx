import { HandMetal, MessageSquareQuote, BrainCircuit, Flame, ListChecks } from 'lucide-react';

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
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Method</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mt-2">
            The Aynthram Experience
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Our methodology is built on a foundation of art-based experiential interventions, cognitive reframing, and modular theme-based programs.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-border -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12">
            {experienceSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Mobile/Tablet connecting line */}
                {index < experienceSteps.length -1 && (
                    <div className="lg:hidden absolute top-0 left-1/2 -translate-x-1/2 h-full w-0.5 bg-border -z-10" />
                )}
                <div className="bg-accent/10 p-4 rounded-full border border-accent/20">
                    <step.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mt-6 font-headline text-xl font-semibold text-primary">{step.title}</h3>
                <p className="mt-2 text-foreground/80 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
