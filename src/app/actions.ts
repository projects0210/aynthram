"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  organization: z.string().optional(),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  program: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    organization?: string[];
    email?: string[];
    phone?: string[];
    program?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    organization: formData.get("organization"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    program: formData.get("program"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Form submission failed. Please check the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }
  
  // Here you would typically send an email or save to a database.
  // For this example, we'll just simulate a success response.
  console.log("Form data submitted:", validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    message: "Thanks — our program manager will contact you within 48 hours.",
    success: true,
  };
}
