export interface ResumeItem {
  title: string;
  subtitle?: string;
  date?: string;
  description: string;
}

export interface ResumeSection {
  title: string;
  items: ResumeItem[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  aiHint?: string;
}
