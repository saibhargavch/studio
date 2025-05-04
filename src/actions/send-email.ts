
'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type FormData = z.infer<typeof formSchema>;

// TODO: Replace this placeholder with a real email sending implementation.
// Options:
// 1. Nodemailer: Requires setting up an SMTP transport (e.g., Gmail with App Password, or a dedicated email service like Brevo/SendGrid).
// 2. Email Service APIs: Use Resend (resend.com), SendGrid, Mailgun, AWS SES, etc. These often have free tiers and are more robust for production.
//    Example using Resend (you'd need to install 'resend'):
//    import { Resend } from 'resend';
//    const resend = new Resend(process.env.RESEND_API_KEY);
//    await resend.emails.send({
//      from: 'Your Portfolio Contact Form <onboarding@resend.dev>', // Or a custom domain email
//      to: 'saibhargavchitteti@gmail.com', // Your destination email
//      subject: `New Contact Message from ${data.name}`,
//      reply_to: data.email,
//      html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
//    });

export async function sendContactEmail(data: FormData): Promise<{ success: boolean; message: string }> {
  // Validate data on the server side as well
  const parsedData = formSchema.safeParse(data);
  if (!parsedData.success) {
    return { success: false, message: "Invalid form data provided." };
  }

  const { name, email, message } = parsedData.data;
  const recipientEmail = "saibhargavchitteti@gmail.com"; // The user's email address

  console.log('Received Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);
  console.log('Intending to send to:', recipientEmail);


  try {
    // ** PLACEHOLDER: Simulate email sending **
    console.log('Simulating email sending...');
    // In a real implementation, replace the console.log and timeout with your actual email sending logic.
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    console.log('Email simulation complete.');
    // ** END PLACEHOLDER **

    // If using a service like Resend, check the response from the API call.
    // For example: if (resendResponse.error) throw new Error(resendResponse.error.message);

    return { success: true, message: "Message sent successfully! I'll get back to you soon." };

  } catch (error) {
    console.error("Error sending contact email:", error);
    // Provide a generic error message to the client for security.
    return { success: false, message: "Oops! Something went wrong while sending the message. Please try again later or email me directly." };
  }
}
