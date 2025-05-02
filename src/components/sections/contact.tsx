'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SectionTitle } from '@/components/section-title';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {message: "Message cannot exceed 500 characters."}), // Added max length
});

type FormData = z.infer<typeof formSchema>;

// Mock server action - replace with your actual backend logic
// Consider using a service like Formspree, Netlify Forms, or building a simple API endpoint.
async function submitForm(data: FormData): Promise<{ success: boolean; message: string }> {
  console.log('Form Data Submitted:', data);
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate success/failure
  // In a real scenario, this would involve sending the data to your backend/service
  const success = Math.random() > 0.1; // 90% success rate for demo

  if (success) {
    return { success: true, message: "Message sent successfully! I'll get back to you soon." };
  } else {
    // Provide a more specific error message if possible from your backend
    return { success: false, message: "Oops! Something went wrong. Please try again later or email me directly." };
  }
}


export function ContactSection() {
   const { toast } = useToast();
   const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormData) {
     setIsSubmitting(true);
    try {
      // TODO: Replace 'submitForm' with your actual form submission logic (e.g., API call)
      const result = await submitForm(values);
      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
        });
        form.reset(); // Clear form on success
      } else {
         toast({
          title: "Error Sending Message",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
        console.error("Form submission error:", error);
         toast({
          title: "Submission Error",
          description: "An unexpected error occurred. Please try again or contact me directly.",
          variant: "destructive",
        });
    } finally {
       setIsSubmitting(false);
    }
  }

  // Updated with user's actual email address
  const contactEmail = "saibhargavchitteti@gmail.com";

  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionTitle>Get In Touch</SectionTitle>
        <Card className="max-w-2xl mx-auto shadow-lg border border-border/50">
             <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary">Send me a message</CardTitle>
                 <CardDescription>
                    Have a question or want to collaborate? Feel free to reach out! <br/>
                    You can also email me directly at <a href={`mailto:${contactEmail}`} className="text-accent underline hover:text-accent/80">{contactEmail}</a>.
                 </CardDescription>
             </CardHeader>
             <CardContent>
                 <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} aria-required="true" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Your message here..." {...field} rows={5} aria-required="true" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full" disabled={isSubmitting} aria-live="polite">
                     {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </Form>
             </CardContent>
        </Card>
      </div>
    </section>
  );
}
