'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from 'lucide-react';
import { projectsData } from '@/lib/data';
import type { Project } from '@/types';
import { SectionTitle } from '@/components/section-title';
import { cn } from '@/lib/utils';

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');

  const allTechStacks = Array.from(new Set(projectsData.flatMap(p => p.techStack)));

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.techStack.includes(filter));

  return (
    <section id="projects" className="bg-secondary">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button
            variant={filter === 'All' ? 'default' : 'outline'}
            onClick={() => setFilter('All')}
            className={cn("transition-all", filter === 'All' && 'bg-accent text-accent-foreground hover:bg-accent/90')}

          >
            All
          </Button>
          {allTechStacks.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? 'default' : 'outline'}
              onClick={() => setFilter(tech)}
              className={cn("transition-all", filter === tech && 'bg-accent text-accent-foreground hover:bg-accent/90')}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col">
      <CardHeader className="p-0">
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
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl mb-2 text-primary">{project.title}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end space-x-2">
        {project.githubUrl && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
              <Github className="h-5 w-5" />
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="ghost" size="icon" asChild>
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Live Demo`}>
              <ExternalLink className="h-5 w-5" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
