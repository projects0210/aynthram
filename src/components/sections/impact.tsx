import { Users, Briefcase, TrendingUp, Sparkles, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    icon: Briefcase,
    value: "1,500+",
    label: "Professionals Trained Annually",
  },
  {
    icon: Users,
    value: "700+",
    label: "Artisans Engaged (3-Year Goal)",
  },
   {
    icon: Sparkles,
    value: "10+",
    label: "Unique Art Forms Integrated",
  },
  {
    icon: TrendingUp,
    value: "25%",
    label: "Avg. Increase in Leadership Scores",
  },
  {
    icon: Scale,
    value: "$1M+",
    label: "Revenue Reinvested into Communities",
  },

];

export function Impact() {
  return (
    <section id="impact" className="w-full py-20 lg:py-32 bg-primary/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Impact</span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mt-4 leading-tight">
            Measurable Growth for Leaders and Communities
          </h2>
           <p className="mt-6 text-lg text-foreground/80">
            We are committed to creating a virtuous cycle of growth, where leadership development directly fuels community empowerment and cultural preservation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          {stats.slice(0, 3).map((stat, index) => (
            <Card key={index} className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-max">
                  <stat.icon className="h-10 w-10 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold font-headline text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-foreground/70">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
          {stats.slice(3).map((stat, index) => (
            <Card key={index} className="text-center shadow-lg">
              <CardHeader>
                <div className="mx-auto bg-accent/10 p-4 rounded-full w-max">
                  <stat.icon className="h-10 w-10 text-accent" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold font-headline text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-foreground/70">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
