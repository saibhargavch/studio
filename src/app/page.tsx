import { HeroSection } from '@/components/sections/hero';
import { ResumeViewerSection } from '@/components/sections/resume-viewer';
import { ProjectsSection } from '@/components/sections/projects';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResumeViewerSection />
      <ProjectsSection />
    </>
  );
}
