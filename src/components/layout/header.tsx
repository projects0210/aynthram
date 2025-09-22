"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AynthramLogo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Our Approach", href: "#experience" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      let currentSection: string | null = null;
      const offset = window.innerHeight * 0.4;
      
      navItems.forEach(item => {
        const id = item.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60' : 'bg-transparent'}`}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <AynthramLogo className={`h-8 w-auto transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-primary'}`} />
        </Link>
        
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const id = item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-accent',
                  isScrolled ? 'text-foreground/80 hover:text-foreground' : 'text-foreground/80 hover:text-foreground',
                  activeSection === id && 'text-accent font-semibold'
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>
        
        <div className="flex items-center space-x-2">
          <Button asChild className="hidden md:inline-flex" variant={isScrolled ? 'default' : 'default'}>
            <Link href="#contact">Get Started</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={`px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden ${isScrolled ? 'text-primary' : 'text-primary'}`}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full max-w-sm bg-background pr-0">
              <div className="flex justify-between items-center p-6 border-b">
                 <Link href="/" className="flex items-center space-x-2">
                   <AynthramLogo className="h-8 w-auto text-primary" />
                 </Link>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="px-0">
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close Menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <div className="flex flex-col space-y-3 p-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className="text-lg font-medium text-foreground transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild size="lg" className="mt-4" onClick={() => setIsSheetOpen(false)}>
                  <Link href="#contact">Get Started</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
