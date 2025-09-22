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
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Approach</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            The Aynthram Experience
          </h2>
          <p className="mt-6 text-lg text-foreground/80">
            Our methodology is built on a foundation of art-based experiential interventions, cognitive reframing, and modular theme-based programs.
          </p>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border" />

          {experienceSteps.map((step, index) => (
             <div key={index} className="relative mb-16 flex justify-center items-center">
                {/* Left Side */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-2 pl-8 text-left'}`}>
                    <h3 className="font-headline text-2xl font-semibold text-primary">{step.title}</h3>
                    <p className="mt-2 text-foreground/80">{step.description}</p>
                </div>
                
                {/* Icon in the middle */}
                <div className="w-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-background px-2">
                    <div className="bg-accent/10 p-4 rounded-full border-2 border-accent/20">
                    <step.icon className="h-8 w-8 text-accent" />
                    </div>
                </div>

                {/* Right side (spacer) */}
                <div className={`w-1/2 ${index % 2 === 0 ? '' : 'order-1'}`} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
