import { HeroSection } from '@/components/sections/hero';
import { ResumeSection } from '@/components/sections/resume';
import { ProjectsSection } from '@/components/sections/projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
    </>
  );
}
