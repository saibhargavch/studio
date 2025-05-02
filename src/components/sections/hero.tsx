'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
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
              Hi, I'm <span className="text-accent">Your Name</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A passionate Web Developer crafting seamless digital experiences.
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
             {/* Placeholder for a profile picture or illustration */}
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 shadow-lg border-4 border-background flex items-center justify-center">
                <Image
                    src="https://picsum.photos/seed/profile/300/300"
                    alt="Profile Picture Placeholder"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional headshot developer"
                 />
             </div>
          </div>
        </div>
      </div>
       {/* Add a subtle animation or element for visual interest */}
       <style jsx>{`
         .animate-blob {
            animation: blob 7s infinite ease-in-out;
         }
        .animation-delay-2000 {
             animation-delay: 2s;
         }
         .animation-delay-4000 {
             animation-delay: 4s;
         }
         @keyframes blob {
           0%, 100% {
             transform: translate(0, 0) scale(1);
           }
           33% {
             transform: translate(30px, -40px) scale(1.1);
           }
           66% {
             transform: translate(-20px, 20px) scale(0.9);
           }
         }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
         .animate-fade-in-up {
             animation: fade-in-up 0.8s ease-out forwards;
         }

         @keyframes fade-in {
           from { opacity: 0; }
           to { opacity: 1; }
         }
         .animate-fade-in {
           animation: fade-in 1s ease-out forwards;
           animation-delay: 0.3s; /* Delay image animation */
           opacity: 0; /* Start hidden */
         }

       `}</style>
    </section>
  );
}

// Add keyframes for animations in globals.css or use Tailwind's animation utilities if preferred
// For example, in globals.css:
/*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
*/

// Add similar keyframes for blob animation or other desired effects.
