import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2 className={cn("text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center", className)}>
      {children}
    </h2>
  );
}
