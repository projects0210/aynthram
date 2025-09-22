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
      <div className="container">
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl md:text-4xl text-primary">Book a Program</CardTitle>
            <CardDescription className="text-lg">
              Start your leadership transformation today. Fill out the form below to get in touch.
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
                <Textarea id="message" name="message" rows={5} required />
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
