'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active link based on scroll position
      let currentSection = '#home';
      const sections = navLinks.map(link => document.getElementById(link.hash.substring(1))).filter(Boolean);

      // Ensure sections array is not empty before proceeding
      if (sections.length > 0) {
        for (const section of sections) {
            if (section && section.offsetTop <= window.scrollY + 100) {
                currentSection = `#${section.id}`;
            } else if (section && section.offsetTop > window.scrollY + 100) {
                 // If the current section is below the scroll position + offset, break
                 // This prevents later sections from incorrectly becoming active when scrolling up fast
                 break;
            }
        }
         // Special case for reaching the bottom of the page
         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
             const lastSection = sections[sections.length - 1];
             if (lastSection) {
                 currentSection = `#${lastSection.id}`;
             }
         }
      } else if (window.scrollY < 100) { // Default to home if no sections or at top
            currentSection = '#home';
      }


      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, isSheetLink = false }: { href: string; children: React.ReactNode; isSheetLink?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md',
         // Apply different active styles based on context (sheet vs header)
         isSheetLink
           ? activeLink === href ? 'bg-muted text-primary' : 'text-muted-foreground'
           : activeLink === href ? 'bg-secondary text-primary' : 'text-muted-foreground'
      )}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
           const offset = 80; // Adjust this value based on your header height
           const bodyRect = document.body.getBoundingClientRect().top;
           const elementRect = element.getBoundingClientRect().top;
           const elementPosition = elementRect - bodyRect;
           const offsetPosition = elementPosition - offset;

           window.scrollTo({
             top: offsetPosition,
             behavior: 'smooth'
           });
        }

        setActiveLink(href);
        // If it's a sheet link, we might want to close the sheet - handled by SheetTrigger asChild below
      }}
    >
      {children}
    </Link>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Updated with user's full name */}
        <Link href="#home" className="text-xl font-bold text-primary" onClick={() => setActiveLink('#home')}>
          Sai Bhargav Chitteti
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.hash} href={link.hash}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] bg-background">
            <div className="flex flex-col p-6 pt-12">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                    // Use SheetTrigger asChild to close the sheet on link click
                    <SheetTrigger key={link.hash} asChild>
                       <NavLink href={link.hash} isSheetLink={true}>
                        {link.name}
                      </NavLink>
                    </SheetTrigger>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
