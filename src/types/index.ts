export interface ResumeItem {
  title: string;
  subtitle?: string; // Made optional
  date?: string;
  description?: string; // Made optional
  url?: string; // Added optional URL field for links (e.g., certifications)
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
  date?: string; // Added optional date field
}
