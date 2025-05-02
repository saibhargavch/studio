import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {currentYear} ResumeAce Portfolio. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="mailto:example@email.com" aria-label="Email">
            <Mail className="h-5 w-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
