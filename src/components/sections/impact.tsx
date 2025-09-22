"use client";

import { useState, useEffect, useRef } from "react";
import { Users, Briefcase, TrendingUp, Sparkles, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
  {
    icon: Briefcase,
    value: 1500,
    label: "Professionals Trained Annually",
    suffix: "+",
  },
  {
    icon: Users,
    value: 700,
    label: "Artisans Engaged (3-Year Goal)",
    suffix: "+",
  },
   {
    icon: Sparkles,
    value: 10,
    label: "Unique Art Forms Integrated",
    suffix: "+",
  },
  {
    icon: TrendingUp,
    value: 25,
    label: "Avg. Increase in Leadership Scores",
    suffix: "%",
  },
  {
    icon: Scale,
    value: 1000000,
    label: "Revenue Reinvested into Communities",
    prefix: "$",
    suffix: "+",
  },
];

function AnimatedCounter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string; }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2000;
      const startTime = Date.now();

      const easeOutExpo = (t: number) => {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      };
      
      const step = () => {
        const now = Date.now();
        const time = now - startTime;
        const progress = easeOutExpo(Math.min(time / duration, 1));
        const current = Math.floor(progress * end);
        setCount(current);

        if (time < duration) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, value]);

  const formatValue = (val: number) => {
    if (val >= 1000000) return `${(val / 1000000).toFixed(val % 1000000 !== 0 ? 1 : 0)}M`;
    if (val >= 1000) return `${(val / 1000).toFixed(val % 1000 !== 0 ? 1 : 0)}K`;
    return val.toLocaleString();
  }

  return (
    <p ref={ref} className="text-5xl font-bold font-headline text-primary">
      {prefix}{formatValue(count)}{suffix}
    </p>
  );
}

function useInView(ref: React.RefObject<Element>, options?: IntersectionObserverInit) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return isInView;
}


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
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
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
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix}/>
                <p className="mt-2 text-foreground/70">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
