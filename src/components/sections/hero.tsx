'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  // Updated with user's name
  const userName = "Chitteti Sai Bhargav";
  // Updated with user's tagline from profile summary
  const userTagline = "Aspiring Cybersecurity student with hands-on experience in VAPT, network security, and secure IoT applications.";
  // Updated image source to the new provided URL
  const profileImageUrl = "https://media-hosting.imagekit.io/79d10a40387547a6/IMG-20221017-WA0012-min%20(1).jpg?Expires=1841154289&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PvhjGuNKKJEY7cbDF4D71wA6WFDwMz3ym3Ux7KuiXZAY8YsgormringVi1rRhCuLpTg3PPMWfewuvmrZQqQp8vVJnZWmDcVvnOVWeCYR3TDapjUQCykqznUCO-5pn6N7NpEP7D7prwJQJry8Zi1RrKK1V-3GXKkWw~MyxhRBS9lLfJ4ZHLA0gz3RawiLMX1rvoFBCzoIa6S95pJ7ndiK~ye2LYgq4Bo49vYTy95hC7dX84Lj1eMrlKBm8lhFG5r~3bX0eWyt7RkwkZYfAtcZkf2Ly0wFIV-VZcU5GIS9TWGw30F~~JQ8DztLq7dX~1yaZqDmVX9vKd6S2gV7hYkL2A__";

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-secondary relative overflow-hidden">
       {/* Subtle background elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/10 rounded-full filter blur-xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/5 rounded-full filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-lg filter blur-lg opacity-40 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
              Hi, I'm <span className="text-accent">{userName}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
             {userTagline}
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#contact" onClick={handleScrollToContact}>
                  Get in Touch <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center animate-fade-in">
             {/* Using the online profile photo. */}
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 shadow-lg border-4 border-background flex items-center justify-center">
                <Image
                    src={profileImageUrl} // Using the online image URL
                    alt={`Profile photo of ${userName}`} // Updated alt text
                    width={200} // Using original image dimensions
                    height={200} // Using original image dimensions
                    className="object-cover w-full h-full"
                    priority // Add priority to preload the hero image
                    data-ai-hint="professional headshot Chitteti Sai Bhargav" // Keep AI hint
                 />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
