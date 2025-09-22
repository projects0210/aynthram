import { Drama, Brain, Leaf, BookOpen, HeartHandshake, Sparkles, TrendingDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const differencePoints = [
  {
    icon: Drama,
    title: "Immersive Art-Based Learning",
    description: "Learn from master artisans while fostering creative problem-solving through traditional Indian art forms.",
  },
  {
    icon: Brain,
    title: "Cognitive Reframing",
    description: "Neuroscience-backed approaches to reshape thinking patterns and decision-making processes.",
  },
  {
    icon: Leaf,
    title: "Sustainability Focus",
    description: "Integrating eco-conscious practices and ethical development aligned with modern sustainability goals.",
  },
  {
    icon: BookOpen,
    title: "Timeless Wisdom",
    description: "Ancient Indian philosophical teachings applied to contemporary leadership challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Cultural Depth",
    description: "Deep connections with indigenous heritage creating authentic and meaningful experiences.",
  },
  {
    icon: Sparkles,
    title: "Transformative Experiences",
    description: "Emotionally resonant journeys that create lasting behavioral and cultural shifts.",
  },
];

const stats = [
    {
        value: "77%",
        label: "Of employees are either not engaged or actively disengaged at work",
    },
    {
        value: "45%",
        label: "Of workplace interventions show no effect on work engagement",
    },
    {
        value: "$8.9T",
        label: "Lost annually due to low employee engagement (9% of global GDP)",
    }
]

export function Difference() {
  return (
    <section id="difference" className="w-full py-20 lg:py-32 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
            The Aynthram Difference
          </h2>
          <p className="mt-6 text-lg text-foreground/80 text-balance">
            We restore meaning and depth to leadership development through immersive experiences that engage people emotionally, culturally, and collectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {differencePoints.map((point) => (
            <Card key={point.title} className="text-center bg-primary/5 border-primary/10 shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                 <div className="p-4 bg-accent/10 rounded-full text-accent">
                    <point.icon className="h-8 w-8" />
                 </div>
                <CardTitle className="font-headline text-2xl text-primary pt-2">{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 lg:mt-32 rounded-xl bg-primary/90 text-primary-foreground p-8 md:p-16">
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-headline text-3xl md:text-4xl font-bold">Why Traditional Interventions Fall Short</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-12 text-center">
                {stats.map(stat => (
                    <div key={stat.value} className="flex flex-col items-center">
                        <p className="text-5xl lg:text-6xl font-bold text-accent">{stat.value}</p>
                        <p className="mt-4 text-base text-primary-foreground/80 max-w-xs">{stat.label}</p>
                    </div>
                ))}
            </div>
             <p className="text-center text-lg text-balance mt-16 font-medium text-primary-foreground/90">
                Aynthram reimagines leadership development with depth, authenticity, and cultural resonance.
            </p>
        </div>

      </div>
    </section>
  );
}
