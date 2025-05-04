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
  const userTagline = "Aspiring Cybersecurity professional with hands-on experience in VAPT, network security, and secure IoT applications.";

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
                <Link href="#contact">Get in Touch <ArrowDown className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center animate-fade-in">
             {/* Using the previously uploaded profile photo. Replace '/profile-photo.jpg' if needed. */}
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 shadow-lg border-4 border-background flex items-center justify-center">
                <Image
                    src="/profile-photo.jpg" // Assumes 'profile-photo.jpg' in /public is the desired image (e.g., from LinkedIn)
                    alt={`Profile photo of ${userName}`} // Updated alt text
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    priority // Add priority to preload the hero image
                    data-ai-hint="professional headshot Sai Bhargav Chitteti" // Updated AI hint
                 />
             </div>
          </div>
        </div>
      </div>
       {/* Styles are removed as they are not allowed in server components */}
    </section>
  );
}
