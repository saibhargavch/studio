'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, FileText } from 'lucide-react'; 
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"


export function HeroSection() {
  // Updated with user's name
  const userName = "Chitteti Sai Bhargav";
  // Updated with user's tagline from profile summary
  const userTagline = "Aspiring Cybersecurity student with hands-on experience in VAPT, network security, and secure IoT applications.";
  // Updated image source to a local file in the public directory
  const profileImageUrl = "/profile.jpg";
  
  // The resume is now loaded from the Google Drive link
  const resumeUrl = "https://drive.google.com/file/d/1MGe-cGZjKa21-jVPeQrmNP0K-0n5mnSC/view?usp=sharing";
  const resumeEmbedUrl = "https://drive.google.com/file/d/1MGe-cGZjKa21-jVPeQrmNP0K-0n5mnSC/preview";
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center bg-secondary relative overflow-hidden py-12 md:py-0">
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
              <Button size="lg" asChild className="shadow-md hover:shadow-lg hover:bg-primary/90 transition-all">
                <Link href="#projects">View Projects</Link>
              </Button>
               
               <Dialog>
                  <DialogTrigger asChild>
                     <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg hover:border-accent/70 hover:bg-accent/10 transition-all">
                        Resume <FileText className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="w-full max-w-4xl h-[90vh] p-0 flex flex-col">
                      <DialogHeader className="p-4 border-b flex-shrink-0">
                         <DialogTitle>My Resume</DialogTitle>
                      </DialogHeader>
                      <div className="flex-grow h-full">
                         <iframe
                            src={resumeEmbedUrl}
                            className="w-full h-full"
                            title="Chitteti Sai Bhargav Resume"
                            frameBorder="0"
                          >
                          Your browser does not support iframes. Please <a href={resumeUrl} target="_blank" rel="noopener noreferrer">download the resume</a> to view it.
                          </iframe>
                      </div>
                  </DialogContent>
                </Dialog>

              <Button size="lg" variant="outline" asChild className="shadow-md hover:shadow-lg hover:border-accent/70 hover:bg-accent/10 transition-all">
                <Link href="#contact" onClick={handleScrollToContact}>
                  Get in Touch <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center animate-fade-in">
             <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-accent/20 to-primary/10 shadow-lg border-4 border-background flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_25px_3px_hsla(var(--accent),0.35)]">
                <Image
                    src={profileImageUrl} 
                    alt={`Profile photo of ${userName}`}
                    width={320} 
                    height={320} 
                    className="object-cover w-full h-full"
                    priority 
                    data-ai-hint="professional headshot Chitteti Sai Bhargav"
                 />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
