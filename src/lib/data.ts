import type { Project, ResumeSection } from '@/types';

export const resumeData: ResumeSection[] = [
  {
    title: 'Experience',
    items: [
      {
        title: 'Senior Web Developer',
        subtitle: 'Tech Solutions Inc.',
        date: 'Jan 2020 - Present',
        description: 'Led development of client-facing web applications using React, Next.js, and Node.js. Mentored junior developers and contributed to architectural decisions.',
      },
      {
        title: 'Web Developer',
        subtitle: 'Web Wizards LLC',
        date: 'Jun 2017 - Dec 2019',
        description: 'Developed and maintained websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and PHP frameworks.',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'B.S. in Computer Science',
        subtitle: 'State University',
        date: '2013 - 2017',
        description: 'Relevant coursework: Data Structures, Algorithms, Web Development, Database Management.',
      },
    ],
  },
  {
    title: 'Skills',
    items: [
       { title: 'JavaScript', description: '' },
       { title: 'TypeScript', description: '' },
       { title: 'React', description: '' },
       { title: 'Next.js', description: '' },
       { title: 'Node.js', description: '' },
       { title: 'HTML5', description: '' },
       { title: 'CSS3', description: '' },
       { title: 'Tailwind CSS', description: '' },
       { title: 'SQL', description: '' },
       { title: 'NoSQL', description: '' },
       { title: 'Git', description: '' },
       { title: 'Docker', description: '' },
       { title: 'UI/UX Design', description: '' },
    ]
  },
];

export const projectsData: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce site with product listings, cart, and checkout.',
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    techStack: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'online store shopping cart',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative tool for managing projects and tasks.',
    image: 'https://picsum.photos/seed/taskmanager/600/400',
    techStack: ['React', 'Firebase', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'kanban board checklist',
  },
  {
    title: 'Blog Engine',
    description: 'A simple, markdown-based blog platform.',
    image: 'https://picsum.photos/seed/blogengine/600/400',
    techStack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'writing articles posts',
  },
   {
    title: 'Portfolio Website V1',
    description: 'Previous version of my personal portfolio.',
    image: 'https://picsum.photos/seed/portfolio1/600/400',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    aiHint: 'personal website design',
  },
];

export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'Resume', hash: '#resume' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];
