
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; 

// Updated WhatsApp SVG Icon
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor" // Changed to currentColor for filled icon
    {...props}
  >
    <path d="M12.04 2C6.48 2 2 6.48 2 12s4.48 10 10.04 10H12c5.52 0 10-4.48 10-10S17.52 2 12 2h-.04zm0 1.67c4.6 0 8.33 3.73 8.33 8.33s-3.73 8.33-8.33 8.33H11.96c-4.6 0-8.33-3.73-8.33-8.33S7.4 3.67 12 3.67zM17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.67-.82-.92-1c-.25-.15-.5-.17-.67-.17-.17 0-.37 0-.57 0s-.37.02-.57.22c-.2.2-.77.77-.77 1.85s.79 2.15.92 2.32c.12.17 1.52 2.46 3.79 3.35.44.2.78.33 1.05.42.41.13.78.11 1.05.07.3-.05.89-.36 1.02-.72.13-.36.13-.66.1-.72s-.17-.1-.37-.2z" />
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
      icon: WhatsAppIcon, // Using the updated inline SVG WhatsAppIcon
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
