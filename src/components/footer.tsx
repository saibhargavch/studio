import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; 

// WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);


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
      icon: WhatsAppIcon, // Using the inline SVG WhatsAppIcon
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
