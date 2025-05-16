
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { projectsData } from '@/lib/data';
import type { Project } from '@/types';
import { SectionTitle } from '@/components/section-title';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  // Filters removed, directly use projectsData
  const displayedProjects = projectsData;

  return (
    <section id="projects" className="bg-secondary py-16 md:py-24"> {/* Added padding */}
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>

        {/* Filter Buttons Removed */}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"> {/* Added mt-10 to compensate for removed filter buttons */}
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
           {displayedProjects.length === 0 && ( // Kept this in case projectsData is empty
             <p className="text-muted-foreground text-center col-span-full">No projects to display.</p>
           )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
     // Added group class for image hover effect and enhanced card hover
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.03] flex flex-col bg-card group border border-transparent hover:border-accent/50">
      <CardHeader className="p-0 relative"> {/* Added relative positioning */}
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.aiHint || 'project screenshot application'}
          />
        </div>
         {/* Optional: Overlay for links on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 space-x-2">
              {project.githubUrl && project.githubUrl !== '#' && (
                <Button variant="secondary" size="icon" asChild className="h-9 w-9 rounded-full shadow-md hover:bg-accent/80 hover:text-accent-foreground">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub Repository`}>
                    <Github className="h-4 w-4" />
                    </Link>
                </Button>
              )}
              {project.liveUrl && project.liveUrl !== '#' && (
                <Button variant="secondary" size="icon" asChild className="h-9 w-9 rounded-full shadow-md hover:bg-accent/80 hover:text-accent-foreground">
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
                    <ExternalLink className="h-4 w-4" />
                    </Link>
                </Button>
              )}
          </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col"> {/* Ensure content grows */}
        <CardTitle className="text-xl mb-2 text-primary">{project.title}</CardTitle>
         {project.date && (
            <p className="text-xs text-muted-foreground flex items-center mb-2">
             <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70"/> {project.date}
            </p>
          )}
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p> {/* Make description grow */}
        <div className="flex flex-wrap gap-2 mt-auto"> {/* Push tech stack to bottom */}
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">{tech}</Badge>
          ))}
        </div>
      </CardContent>
       {/* Footer has been removed as links are in the hover overlay */}
    </Card>
  );
}
