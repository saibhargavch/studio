import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  // TODO: Replace these with your actual links and email
  const githubUrl = "https://github.com/alexchen-dev"; // Example GitHub URL
  const linkedinUrl = "https://linkedin.com/in/alexchen-dev"; // Example LinkedIn URL
  const emailAddress = "alex.chen.dev@example.com"; // Example Email

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
           {/* TODO: Replace 'Alex Chen' with your name if different */}
          &copy; {currentYear} Alex Chen Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href={`mailto:${emailAddress}`} aria-label="Email">
            <Mail className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
