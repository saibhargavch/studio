import type { Project, ResumeSection } from '@/types';

// Updated with user's details from the provided image
export const resumeData: ResumeSection[] = [
   {
    title: 'Internships', // Renamed from Experience
    items: [
      {
        title: 'Supraja Technologies',
        subtitle: 'Vijayawada, Andhra Pradesh',
        date: 'May 2024 - June 2024',
        description: 'Gained substantial experience in cybersecurity practices, enhancing both foundational and advanced skills. Acquired proficiency in network fundamentals and advanced networking security measures. Utilized Kali Linux and Windows to develop practical skills in various operating system environments. Conducted penetration tests and vulnerability scans on web and mobile applications, identifying and addressing potential security weaknesses.',
        url: 'https://drive.google.com/file/d/17T1jqvjpnPOZtp91bQ5hmT4c-A-gSwhp/view?usp=sharing',
      },
      {
        title: 'The Red Users',
        subtitle: 'Chennai, Tamil Nadu',
        date: 'October 2024 - November 2024', // Assuming current year based on context, adjust if needed
        description: 'Gained hands-on experience in Vulnerability Assessment and Penetration Testing (VAPT) methodologies. Performed penetration testing to identify security flaws and provide actionable recommendations. Conducted risk assessments for various systems and applications, ensuring robust security measures. Learned to use industry-standard tools such as Burp Suite, Nmap, Metasploit, and Wireshark for security testing. Developed an understanding of OWASP Top 10 vulnerabilities and mitigation strategies.',
        url: 'https://drive.google.com/file/d/1gyI9xGmumG_Bxf1Mj_G6vtH9cE-uYr3o/view?usp=sharing',
      },
    ],
  },
  {
    title: 'Education',
    items: [
       {
        title: 'Bachelor of Technology in Computer Science and Engineering (Cyber Security)',
        subtitle: 'Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai',
        date: '2022 - 2026',
        description: 'CGPA: 8.1',
      },
      {
        title: 'Intermediate (MPC)',
        subtitle: 'Narayana Junior College, Vijayawada',
        date: '2019 - 2021',
        description: 'Percentage: 80%',
      },
       {
        title: '10th (SSC)',
        subtitle: 'Montessori High School, Ongole',
        date: '2020',
        description: 'Percentage: 98%',
      },
    ],
  },
   {
    title: 'Achievements', // Added Achievements section
    items: [
      {
        title: 'OTP-Based Secure Locking System Using IoT',
        date: '2022',
        description: 'Selected for a prestigious project expo (exhibition).',
      },
      {
        title: 'Tantraz 2K25',
        date: '2025', // Assuming future event year based on name
        description: 'Won 1st place in the Clueless Coder technical event, organized by the SoC.',
      },
      {
        title: 'Best Performer Award',
        date: '2024',
        description: 'Exceptional contribution during the internship at Supraja Technology.',
      },
    ],
  },
  {
    title: 'Certifications', // Added Certifications section
    items: [
      { title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn', description: '', url: 'https://drive.google.com/file/d/1zeAyeHcumnlhygrTWleYyahKw4YhbkLO/view?usp=sharing' },
      { title: 'CISCO: Introduction to Cybersecurity', description: '', url: 'https://drive.google.com/file/d/1EcdKzKngMFD7tWWwa-lyw_wl7pMIXWCQ/view?usp=sharing' },
      { title: 'CCNA: Introduction to Networks', description: '', url: 'https://drive.google.com/file/d/1wA1UeoCDK4b-l_HAHz2VDUIMgLb1knWG/view?usp=sharing' },
      { title: 'CCNA: Switching, Routing, and Wireless Essentials', description: '', url: 'https://drive.google.com/file/d/1wnV0hVdOHDwCB-AJ3M9OsGYzBWasxhjq/view?usp=sharing' },
      { title: 'PCAP - Programming Essentials in Python', description: '', url: 'https://drive.goosrc/components/sections/hero.tsxgle.com/file/d/1D7WjemwnsFTL5OgelRYLxzDDrEg1HqA6/view?usp=sharing' },
    ],
  },
  {
    title: 'Technical Skills and Interests', // Combined sections
    items: [
       // Languages
       { title: 'Python', description: '' },
       // Relevant Coursework / Operating Systems / Tools
       { title: 'Operating Systems (Windows, Kali Linux, Parrot)', description: '' },
       { title: 'Computer Networks', description: '' },
       { title: 'Burp Suite', description: '' },
       { title: 'Nmap', description: '' },
       { title: 'Metasploit', description: '' },
       { title: 'Wireshark', description: '' },
       { title: 'Arduino', description: '' }, // From IoT project
       { title: 'Pandas', description: '' }, // From House Price project
       { title: 'Scikit-learn', description: '' }, // From House Price project
       { title: 'Matplotlib', description: '' }, // From House Price project
       // Areas of Interest
       { title: 'Cyber Security', description: '' },
       { title: 'Ethical Hacking', description: '' },
       { title: 'VAPT', description: '' }, // From summary
       { title: 'Network Security', description: '' }, // From summary
       { title: 'Secure IoT', description: '' }, // From summary
       { title: 'System Hardening', description: '' }, // From summary
       // Soft Skills
       { title: 'Communication', description: '' },
       { title: 'Self-learning', description: '' },
       { title: 'Commitment', description: '' },
    ]
  },
];

// Updated with user's project data from the image
export const projectsData: Project[] = [
  {
    title: 'OTP Based Secured Locking System using IoT',
    description: 'An IoT based device having two layered authentication. Designed and implemented an advanced locking mechanism incorporating OTP (One-Time Password) authentication via cellular networks. Developed the prototype using IoT technologies, including Arduino Uno and SIM modules, ensuring robust and reliable performance. Incorporated a two-tier authentication process combining RFID and OTP mechanisms to provide multi-layered security. Employed Python programming to develop the system’s logic and functionality, enabling seamless interaction between components and user authentication.',
    // Updated image path to the provided electronicsforu URL
    image: 'https://www.electronicsforu.com/wp-contents/uploads/2019/02/fig-8.jpg',
    techStack: ['IoT', 'Arduino Uno', 'SIM Modules', 'Python', 'RFID'],
    githubUrl: 'https://github.com/saibhargavch/OTP_Based_Locking_System',
    aiHint: 'circuit diagram iot lock system', // Updated AI hint
    date: 'July 2022 - November 2022' // Added date
  },
  {
    title: 'USB Physical Security using Python',
    description: 'An application to prevent unauthorized USB device connections to a system. Implemented mechanisms to block USB connections, significantly reducing the risk of malware and virus infections. Developed an application using Python to prevent unauthorized USB device connections to a system. Designed the application to enhance overall system security by preventing potential threats associated with external USB devices. Utilized Python programming to create a robust solution that integrates seamlessly with the system’s existing security protocols.',
    // Updated image URL
    image: 'https://connectivitycenter.com/wp-content/uploads/2023/03/A-Cybersecurity-Guide-to-USB-Ports.jpg',
    techStack: ['Python', 'System Security'],
    // liveUrl: '#', // No live URL provided
    githubUrl: 'https://github.com/saibhargavch/USB-Physical-Security-using-Python', // Added GitHub URL
    aiHint: 'usb security python application system',
    date: 'May 2024 - June 2024' // Added date
  },
  {
    title: 'House Price Prediction (Industry Project)',
    description: 'A machine learning model to predict house prices based on various features. Built a regression-based model to predict house prices using key attributes like location, area, and amenities. Helped identify key features impacting house prices, enabling better decision-making for stakeholders. Performed data preprocessing, visualization, and feature engineering. Technology Used: Python, Pandas, Scikit-learn, Matplotlib.',
    // Updated image URL for House Price Prediction
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*cDRFtpTiOJFrfzS5.jpg',
    techStack: ['Machine Learning', 'Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Data Preprocessing', 'Feature Engineering'],
    // liveUrl: '#', // No live URL provided
    githubUrl: 'https://github.com/saibhargavch/House-Price-Prediction-Using-Machine-Learning.git', // Added GitHub URL
    aiHint: 'machine learning prediction house price data',
    date: 'November 2024 - January 2025' // Added date
  },
];

// Navigation links - updated based on new sections
export const navLinks = [
  { name: 'Home', hash: '#home' },
  { name: 'Resume', hash: '#resume' }, // Combined Internships, Education, Achievements, Certs, Skills
  { name: 'Projects', hash: '#projects' },
  // { name: 'Contact', hash: '#contact' }, // Removed Contact link
];
