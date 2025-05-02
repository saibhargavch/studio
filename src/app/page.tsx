import { HeroSection } from '@/components/sections/hero';
import { ResumeSection } from '@/components/sections/resume';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
