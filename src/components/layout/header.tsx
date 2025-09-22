"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Feather } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Impact", href: "#impact" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Feather className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-lg text-primary">Aynthram</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild className="hidden md:inline-flex uppercase tracking-wider font-bold">
              <Link href="#contact">Book a Program</Link>
            </Button>
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm bg-background pr-0">
                <div className="flex justify-between items-center p-6">
                  <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Feather className="h-6 w-6 text-primary" />
                    <span className="font-bold font-headline text-lg text-primary">Aynthram</span>
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
                  <Button asChild className="uppercase tracking-wider font-bold mt-4" size="lg" onClick={() => setIsSheetOpen(false)}>
                    <Link href="#contact">Book a Program</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}
