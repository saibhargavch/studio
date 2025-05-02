import type { Project, ResumeSection } from '@/types';

// TODO: Update this data with your personal details, experience, education, and skills.
export const resumeData: ResumeSection[] = [
  {
    title: 'Experience',
    items: [
      {
        title: 'Full-Stack Developer',
        subtitle: 'Innovatech Global',
        date: 'Mar 2021 - Present',
        description: 'Develop and maintain scalable web applications using Next.js, TypeScript, and GraphQL. Collaborate with cross-functional teams to define, design, and ship new features. Implemented CI/CD pipelines improving deployment frequency by 40%.',
      },
      {
        title: 'Junior Web Developer',
        subtitle: 'Creative Solutions Agency',
        date: 'Jul 2019 - Feb 2021',
        description: 'Built responsive websites and landing pages for clients using React, Node.js, and various CMS platforms. Assisted senior developers in backend tasks and database management (MongoDB, PostgreSQL).',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'B.Sc. in Software Engineering',
        subtitle: 'Metropolis University',
        date: '2015 - 2019',
        description: 'Graduated with Honors. Focus on full-stack development, algorithms, and cloud computing. Led a team project developing a real-time collaborative editor.',
      },
       {
        title: 'Certified Cloud Practitioner',
        subtitle: 'Amazon Web Services (AWS)',
        date: '2022',
        description: 'Certification covering cloud concepts, AWS services, security, architecture, pricing, and support.',
      },
    ],
  },
  {
    title: 'Skills',
    items: [
       { title: 'JavaScript (ES6+)', description: '' },
       { title: 'TypeScript', description: '' },
       { title: 'React', description: '' },
       { title: 'Next.js', description: '' },
       { title: 'Node.js', description: '' },
       { title: 'GraphQL', description: '' },
       { title: 'REST APIs', description: '' },
       { title: 'HTML5', description: '' },
       { title: 'CSS3 / SASS', description: '' },
       { title: 'Tailwind CSS', description: '' },
       { title: 'PostgreSQL', description: '' },
       { title: 'MongoDB', description: '' },
       { title: 'Git / GitHub', description: '' },
       { title: 'Docker', description: '' },
       { title: 'AWS (EC2, S3, Lambda)', description: '' },
       { title: 'Jest / Testing Library', description: '' },
       { title: 'Agile Methodologies', description: '' },
       { title: 'UI/UX Principles', description: '' },
    ]
  },
];

// TODO: Update this data with your actual projects. Replace images, links, and descriptions.
export const projectsData: Project[] = [
  {
    title: 'Project Atlas: Real-time Dashboard',
    description: 'A dynamic dashboard visualizing complex datasets with interactive charts and real-time updates via WebSockets.',
    image: 'https://picsum.photos/seed/atlas/600/400',
    techStack: ['Next.js', 'TypeScript', 'Recharts', 'GraphQL', 'Node.js', 'WebSocket'],
    liveUrl: '#', // Replace with actual link
    githubUrl: '#', // Replace with actual link
    aiHint: 'data visualization charts dashboard',
  },
  {
    title: 'ConnectSphere: Social Networking App',
    description: 'A social platform focused on professional networking, featuring profiles, connections, and group discussions.',
    image: 'https://picsum.photos/seed/connect/600/400',
    techStack: ['React Native', 'Firebase Auth', 'Firestore', 'Node.js (Cloud Functions)'],
    // liveUrl: '#', // Add link if applicable (e.g., App Store)
    githubUrl: '#', // Replace with actual link
    aiHint: 'mobile app social network profile',
  },
  {
    title: 'QuickCart: Headless E-commerce',
    description: 'A modern e-commerce storefront built with a headless CMS and integrated with Stripe for payments.',
    image: 'https://picsum.photos/seed/quickcart/600/400',
    techStack: ['Next.js', 'Tailwind CSS', 'Sanity.io', 'Stripe API', 'GraphQL'],
    liveUrl: '#', // Replace with actual link
    githubUrl: '#', // Replace with actual link
    aiHint: 'online shopping store product',
  },
   {
    title: 'Personal Blog & CMS',
    description: 'My personal blog built from scratch with a custom CMS backend for content management.',
    image: 'https://picsum.photos/seed/personalblog/600/400',
    techStack: ['Node.js', 'Express', 'MongoDB', 'React (Admin Panel)', 'Markdown'],
    liveUrl: '#', // Replace with actual link
    githubUrl: '#', // Replace with actual link
    aiHint: 'blog writing articles cms',
  },
];

// Navigation links - update if you change section IDs or titles
export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'Resume', hash: '#resume' },
  { name: 'Projects', hash: '#projects' },
  { name: 'Contact', hash: '#contact' },
];
