"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Briefcase } from "lucide-react";
import Link from "next/link";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full uppercase tracking-wider font-bold" size="lg" disabled={pending}>
      {pending ? "Submitting..." : "Start the Conversation"}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Message Sent!",
          description: state.message,
        });
      } else if (state.errors) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);


  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-background">
        <div className="container text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Begin Your Leadership Transformation
            </h2>
            <p className="mt-6 text-lg text-foreground/80 text-balance">
             Ready to craft your leadership legacy? Connect with us to explore how ancient wisdom can transform your modern leadership journey.
            </p>
        </div>
      <div className="container grid lg:grid-cols-2 gap-16 items-start mt-16">
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Your Name" />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required placeholder="Email Address" />
                   {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
                </div>
              </div>

              <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input id="organization" name="organization" placeholder="Your Organization"/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your leadership goals...</Label>
                <Textarea id="message" name="message" rows={4} required placeholder="Your message..."/>
                 {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        <div className="space-y-8 pt-8 lg:pt-0">
             <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Briefcase className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline text-2xl text-primary mb-0">Transform Your Organization</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80 mb-4">From individual leadership growth to organization-wide cultural transformation, discover how Aynthram can help you build leaders who don't just stay relevant but redefine the game.</p>
                     <p className="text-foreground/80"><strong>Email:</strong> <a href="mailto:vasudev.aynthram@gmail.com" className="hover:underline">vasudev.aynthram@gmail.com</a></p>
                    <p className="text-foreground/80"><strong>Phone:</strong> <a href="tel:+919703831819" className="hover:underline">+91 9703831819</a></p>
                </CardContent>
             </Card>
             <Card className="bg-primary/5 border-primary/20">
                <CardHeader className="flex flex-row items-center gap-4">
                    <MapPin className="h-8 w-8 text-accent" />
                    <CardTitle className="font-headline text-2xl text-primary mb-0">Rooted in Heritage</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/80">Our immersive programs are based in the culturally rich state of Odisha, India, providing an inspiring backdrop of ancient temples, artistic villages, and natural beauty for your leadership journey.</p>
                     <Button asChild variant="link" className="p-0 mt-2 text-primary font-bold">
                      <Link href="#experience">Discover our approach</Link>
                    </Button>
                </CardContent>
             </Card>
        </div>
      </div>
    </section>
  );
}
