
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

      let currentSection = '#home';
      const sections = navLinks.map(link => document.getElementById(link.hash.substring(1))).filter(Boolean);
      
      // Include footer as a potential active section if 'Contact' was previously a navLink
      const contactFooter = document.getElementById('contact');
      if (contactFooter && !navLinks.find(link => link.hash === '#contact')) {
        sections.push(contactFooter);
      }


      if (sections.length > 0) {
        for (const section of sections) {
            if (section && section.offsetTop <= window.scrollY + 100) {
                currentSection = `#${section.id}`;
            } else if (section && section.offsetTop > window.scrollY + 100) {
                 break;
            }
        }
         if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
             const lastNavigableSection = sections.find(s => s?.id === 'contact') || sections[sections.length - 1];
             if (lastNavigableSection) {
                 currentSection = `#${lastNavigableSection.id}`;
             }
         }
      } else if (window.scrollY < 100) { 
            currentSection = '#home';
      }


      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children, isSheetLink = false }: { href: string; children: React.ReactNode; isSheetLink?: boolean }) => (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary px-3 py-2 rounded-md',
         isSheetLink
           ? activeLink === href ? 'bg-muted text-primary' : 'text-muted-foreground'
           : activeLink === href ? 'bg-secondary text-primary' : 'text-muted-foreground'
      )}
      onClick={(e) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
           const offset = href === '#contact' ? 0 : 80; // No offset for footer contact
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
        <Link href="#home" className="text-xl font-bold text-primary" onClick={(e) => {
          e.preventDefault();
          setActiveLink('#home');
          window.scrollTo({ top: 0, behavior: 'smooth'});
        }}>
          Sai Bhargav Chitteti
        </Link>

        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink key={link.hash} href={link.hash}>
              {link.name}
            </NavLink>
          ))}
           {/* Manually add Contact link to header if not in navLinks, pointing to footer */}
          {!navLinks.find(link => link.name === 'Contact') && (
             <NavLink href="#contact">Contact</NavLink>
           )}
        </nav>

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
                    <SheetTrigger key={link.hash} asChild>
                       <NavLink href={link.hash} isSheetLink={true}>
                        {link.name}
                      </NavLink>
                    </SheetTrigger>
                ))}
                 {/* Manually add Contact link to sheet if not in navLinks, pointing to footer */}
                {!navLinks.find(link => link.name === 'Contact') && (
                   <SheetTrigger asChild>
                     <NavLink href="#contact" isSheetLink={true}>Contact</NavLink>
                   </SheetTrigger>
                )}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
