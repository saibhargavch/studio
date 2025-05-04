
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
import { sendContactEmail } from '@/actions/send-email'; // Import the server action

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, {message: "Message cannot exceed 500 characters."}),
});

type FormData = z.infer<typeof formSchema>;

// Removed the mock submitForm function

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
      // Use the server action to send the email
      const result = await sendContactEmail(values);

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
        // Catch potential errors during the action call itself (e.g., network issues)
        console.error("Contact form submission error:", error);
         toast({
          title: "Submission Error",
          description: "An unexpected error occurred. Please try again or contact me directly.",
          variant: "destructive",
        });
    } finally {
       setIsSubmitting(false);
    }
  }

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
                    You can also email me directly at <a href={`mailto:${contactEmail}`} className="text-accent underline hover:text-accent/80">{contactEmail}</a>. <br/>
                    {/* Add a note about the placeholder */}
                    <span className="text-xs text-muted-foreground block mt-2">(Note: Form submission currently uses placeholder logic. Email sending needs full setup.)</span>
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
                            <Input placeholder="Your Name" {...field} aria-required="true" disabled={isSubmitting} />
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
                            <Input type="email" placeholder="your.email@example.com" {...field} aria-required="true" disabled={isSubmitting} />
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
                            <Textarea placeholder="Your message here..." {...field} rows={5} aria-required="true" disabled={isSubmitting} />
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
