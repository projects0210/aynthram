"use client";

import { useEffect, useState } from "react";
import { Users, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "700+",
    label: "Artisans Engaged (3-Year Goal)",
  },
  {
    icon: Briefcase,
    value: "1,500+",
    label: "Professionals Trained Annually",
  },
  {
    icon: TrendingUp,
    value: "$1M+",
    label: "Year 1 Revenue Target",
  },
];

export function Impact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="impact" className="w-full py-20 lg:py-32 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-wider text-accent">Our Impact</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mt-2">
            Measurable Growth for Leaders and Communities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center p-8 bg-primary-foreground/5 rounded-lg border border-primary-foreground/10">
              <stat.icon className="h-12 w-12 text-mustard" />
              <p className="mt-4 text-5xl font-bold font-headline text-white">
                {stat.value}
              </p>
              <p className="mt-2 text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
