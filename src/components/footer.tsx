import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react'; // MessageSquare for WhatsApp

export function Footer() {
  const currentYear = new Date().getFullYear();

  const githubUrl = "https://github.com/saibhargavch";
  const linkedinUrl = "https://linkedin.com/in/saibhargav-chitteti";
  const emailAddress = "saibhargavchitteti@gmail.com";
  const whatsappNumber = "918121145834"; // User's WhatsApp number without '+'
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const socialLinks = [
    {
      href: githubUrl,
      label: 'GitHub',
      icon: Github,
    },
    {
      href: linkedinUrl,
      label: 'LinkedIn',
      icon: Linkedin,
    },
    {
      href: `mailto:${emailAddress}`,
      label: 'Email',
      icon: Mail,
    },
    {
      href: whatsappUrl,
      label: 'WhatsApp',
      icon: MessageSquare, // Using MessageSquare for WhatsApp
    },
  ];

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground py-12 md:py-16">
      <div className="container flex flex-col items-center justify-center text-center">
        <h3 className="text-3xl font-semibold text-primary mb-8">Connect with Me</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-10 w-full max-w-2xl">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="group bg-card p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-accent/10 transition-all duration-300 flex flex-col items-center justify-center aspect-square"
            >
              <link.icon className="h-10 w-10 md:h-12 md:w-12 text-primary group-hover:text-accent transition-colors" />
              <span className="mt-2 text-sm text-muted-foreground group-hover:text-accent font-medium">{link.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Chitteti Sai Bhargav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
