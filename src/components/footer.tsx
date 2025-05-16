
import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react'; 

// Updated WhatsApp SVG Icon to a more standard representation
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.465.13-.611.13-.13.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
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
      icon: WhatsAppIcon, 
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
              className="group bg-card p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-accent/10 transition-all duration-300 flex flex-col items-center justify-center aspect-square border border-transparent hover:border-accent/50"
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
