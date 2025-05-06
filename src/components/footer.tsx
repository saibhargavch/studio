import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'; // Added MessageSquare for WhatsApp

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Updated with user's actual links and email
  const githubUrl = "https://github.com/saibhargavch"; // User's GitHub URL
  const linkedinUrl = "https://linkedin.com/in/saibhargav-chitteti"; // User's LinkedIn URL
  const emailAddress = "saibhargavchitteti@gmail.com"; // User's Email
  const whatsappNumber = "918121145834"; // User's WhatsApp number without '+'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`; // WhatsApp click-to-chat URL

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12">
      <div className="container flex flex-col items-center justify-center text-center">
         <h3 className="text-2xl font-semibold text-primary mb-6">Connect with Me</h3>
        <div className="flex space-x-6 mb-6">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-7 w-7" />
          </Link>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-7 w-7" />
          </Link>
          <Link href={`mailto:${emailAddress}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-7 w-7" />
          </Link>
          <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-primary transition-colors">
            <MessageSquare className="h-7 w-7" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
           {/* Updated with user's name */}
          &copy; {currentYear} Chitteti Sai Bhargav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
