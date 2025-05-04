
'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { resumeData } from '@/lib/data';
import type { ResumeItem } from '@/types';
import { Briefcase, GraduationCap, Wrench, Calendar, Building, Trophy, Award, Star } from 'lucide-react'; // Added Trophy, Award, Star
import { SectionTitle } from '@/components/section-title';
import { Badge } from '@/components/ui/badge';


const iconMap: { [key: string]: React.ElementType } = {
  Internships: Briefcase, // Changed from Experience
  Education: GraduationCap,
  Achievements: Trophy, // Added icon for Achievements
  Certifications: Award, // Added icon for Certifications
  'Technical Skills and Interests': Wrench, // Updated title
};

export function ResumeSection() {
  return (
    <section id="resume" className="bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle>My Resume</SectionTitle>
        {/* Updated defaultValue to [] to have all sections closed initially */}
        <Accordion type="multiple" collapsible className="w-full max-w-4xl mx-auto" defaultValue={[]}>
          {resumeData.map((section, index) => {
            const IconComponent = iconMap[section.title] || Star; // Default to Star if no icon mapped
            const isBadgeSection = section.title === 'Technical Skills and Interests' || section.title === 'Certifications'; // Skills and Certs as badges

            return (
              <AccordionItem value={`item-${index}`} key={section.title} className="border-b border-border last:border-b-0">
                <AccordionTrigger className="text-lg md:text-xl font-semibold hover:text-accent transition-colors py-4 [&[data-state=open]>svg]:text-accent">
                  <span className="flex items-center">
                    <IconComponent className="h-5 w-5 mr-3 text-primary" />
                    {section.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pt-1 pb-4 pl-10 pr-2">
                  {isBadgeSection ? (
                     <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <Badge key={item.title} variant="secondary" className="text-sm font-medium transition-transform hover:scale-105 cursor-default">
                            {item.title}
                         </Badge>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-6 border-l border-accent pl-6 relative">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="relative before:absolute before:left-[-30.5px] before:top-[5px] before:h-3 before:w-3 before:rounded-full before:bg-accent">
                         <ResumeItemContent item={item} />
                        </li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  );
}


function ResumeItemContent({ item }: { item: ResumeItem }) {
 return (
    <div className="space-y-1">
      <h4 className="text-base font-semibold text-primary">{item.title}</h4>
      {item.subtitle && (
        <p className="text-sm text-muted-foreground flex items-center">
         <Building className="h-4 w-4 mr-1.5 text-primary/70"/> {item.subtitle}
        </p>
       )}
      {item.date && (
        <p className="text-xs text-muted-foreground flex items-center">
         <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70"/> {item.date}
        </p>
      )}
      {item.description && <p className="text-sm text-foreground leading-relaxed">{item.description}</p>}
    </div>
  );
}

