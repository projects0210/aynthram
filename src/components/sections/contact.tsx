"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const initialState: ContactFormState = {
  message: "",
  success: false,
};

const programs = [
  'Leadership Academy',
  "Founders' Escape",
  'Corporate & Experiential Tourism',
  'General Inquiry'
];

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full uppercase tracking-wider font-bold" size="lg" disabled={pending}>
      {pending ? "Submitting..." : "Enquire Now"}
    </Button>
  );
}

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
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
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
         <div className="space-y-6">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">Let's Connect</span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Begin Your Transformation
            </h2>
            <p className="text-lg text-foreground/80 text-balance">
              Whether you're looking to book a program, explore a partnership, or simply learn more about our unique approach, we'd love to hear from you. Fill out the form, and our program manager will be in touch within 48 hours.
            </p>
             <div className="space-y-4 text-lg">
                <p><strong>Email:</strong> <a href="mailto:vasudev.aynthram@gmail.com" className="text-primary hover:underline">vasudev.aynthram@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919703831819" className="text-primary hover:underline">+91 9703831819</a></p>
            </div>
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-primary">Book a Program</CardTitle>
            <CardDescription>
              Start your leadership transformation today.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required />
                  {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input id="organization" name="organization" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" required />
                   {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="program">Program of Interest</Label>
                <Select name="program">
                  <SelectTrigger id="program">
                    <SelectValue placeholder="Select a program" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map(p => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" name="message" rows={4} required />
                 {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
              </div>

              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
