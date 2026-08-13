export const profile = {
  name: 'Kritagya Singh Chouhan',
  role: 'Full Stack Software Developer',
  tagline: 'Backend-learning engineer building reliable APIs, scalable Golang systems, and AI-powered workflows.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'kritagya2022@gmail.com',
  emailAlt: 'kritagya2022@gmail.com',
  phone: '+91 7987322906',
  phoneAlt: '+91 7987322906',
  resumeUrl: '/Resume - Kritagya Singh Chouhan.pdf',
  socials: {
    github: 'https://github.com/kritagya20',
    linkedin: 'https://linkedin.com/in/kritagyasinghchouhan/',
    leetcode: 'https://leetcode.com/kritagya20/',
  },
  typewriter: [
    'Full Stack Software Developer',
    'Golang Backend Engineer',
    'React + Node Developer',
    'Java & Automation Engineer',
  ],
};

export const stats = [
  { num: '3+', lbl: 'Years of Experience' },
  { num: 'AI-Ready', lbl: 'Workflow Automations' },
  { num: '24/7', lbl: 'Production deployment support' },
  { num: 'Optimized', lbl: '.NET Backend Systems' },
];

export const aboutHighlights = [
  {
    icon: '⚡',
    title: 'Performance Focused',
    text: 'Optimized backend APIs, SQL queries, and execution workflows to improve response times and build scalable production systems.',
  },
  {
    icon: '🏗️',
    title: 'Backend Engineering',
    text: 'Building RESTful APIs with Go, ASP.NET Core, and MySQL while following clean architecture and scalable design principles.',
  },
  {
    icon: '🐳',
    title: 'Developer Tooling',
    text: 'Experienced with Docker, Git, Postman, and automation tools to streamline development, testing, and deployment workflows.',
  },
  {
    icon: '🧪',
    title: 'Quality Engineering',
    text: 'Strong foundation in API testing, Selenium, Rest Assured, and Playwright to ensure software quality alongside development.',
  },
];

export const experience = [
  {
    role: 'Backend Engineer',
    company: 'Medkart',
    where: 'Ahmedabad, India',
    when: 'Feb 2026 – Present',
    bullets: [
      'Designed and developed backend services in Go for loyalty, rewards, invoicing, and transaction workflows.',
      'Optimized API execution paths and database interactions, improving response times across critical services.',
      'Built reusable service components, middleware, and utility packages, accelerating feature development.',
      'Containerized backend applications with Docker and streamlined local development and deployment workflows.',
      'Integrated PostgreSQL with backend services while ensuring data consistency through transactional validation.',
      'Collaborated with frontend, QA, and product teams to deliver production-ready features with end-to-end ownership.'
    ],
    stack: [
      'Golang',
      'PostgreSQL',
      'Docker',
      'REST APIs',
      'Git'
    ]
  },
  {
    role: 'Senior Software Development Engineer in Test',
    company: 'Medkart',
    where: 'Ahmedabad, India',
    when: 'Feb 2026 – Present',
    bullets: [
      'Architected and maintained a scalable automation framework supporting Web, Mobile, API, Database, and Batch Job validation.',
      'Built reusable framework modules for session management, reporting, data handling, and test utilities, reducing test development effort.',
      'Developed robust REST Assured automation suites with reusable request builders, validators, authentication handlers, and assertion libraries.',
      'Implemented end-to-end validation of loyalty points, rewards, invoicing, and transaction workflows using API, database, and asynchronous job verification.',
      'Created custom Excel reporting solutions using Apache POI and SXSSF for large-scale execution reporting and analysis.',
      'Integrated PostgreSQL and MySQL validations to automate backend verification of financial transactions, memberships, and rewards data.',
      'Designed polling and job-monitoring mechanisms for validating long-running background processes and scheduled workflows.',
      'Integrated Jenkins CI/CD pipelines and enhanced framework observability through detailed logging, reporting, and debugging utilities.'
    ],
    stack: [
      'Java',
      'Selenium',
      'Appium',
      'REST Assured',
      'PostgreSQL',
      'Maven',
      'Git',
    ]
  },
  {
    role: 'Software Development Engineer in Test',
    company: 'Bhanix Finance and Investment Limited',
    where: 'Hyderabad, India',
    when: 'Dec 2024 – Feb 2026',
    bullets: [
      'Designed and owned a scalable Selenium-TestNG automation framework using Java and the Page Object Model.',
      'Automated 2000+ end-to-end test cases covering critical fintech workflows across web, mobile, and APIs.',
      'Reduced regression execution time by 55% through parallel execution and framework optimization.',
      'Integrated REST Assured and MySQL validations to enable complete UI, API, and database verification.',
      'Implemented Jenkins-based CI automation with detailed reporting using Allure and ExtentReports.',
      'Improved automation reliability through reusable utilities, explicit waits, and robust synchronization.'
    ],
    stack: [
      'Java',
      'Selenium',
      'Appium',
      'TestNG',
      'REST Assured',
      'Maven',
      'Jenkins',
      'MySQL',
      'Allure',
      'ExtentReports',
    ],
  },
  {
    role: 'Assistant Manager',
    company: 'Jio Platforms Limited',
    where: 'Navi Mumbai, India',
    when: 'Oct 2023 – Dec 2024',
    bullets: [
      'Automated regression testing for Jio.com using Robot Framework and Selenium.',
      'Developed Bash scripts that reduced environment setup time by approximately 30%.',
      'Built internal dashboards for automation execution reporting and quality analytics.',
      'Collaborated with engineering teams to improve automation reliability and release confidence.'
    ],
    stack: [
      'Robot Framework',
      'Selenium',
      'Bash',
      'Linux',
      'Git',
      'JavaScript',
      'React',
      'ChartJS',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'CASHe',
    where: 'India',
    when: 'Jun 2022 – Nov 2022',
    bullets: [
      'Contributed to the development of an internal learning portal using AngularJS and JavaScript.',
      'Implemented frontend features and resolved functional and UI issues.',
      'Worked in an Agile environment alongside developers and QA engineers.'
    ],
    stack: [
      'JavaScript',
      'AngularJS',
      'CSS',
      'Git',
      'WordPress',
    ],
  },
];

export const githubProfileUrl = 'https://github.com/kritagya20?tab=repositories';

export const projects = [
  {
    title: "Enterprise Web Automation & Analytics Engine",
    type: "SDET / Test Engineering",
    desc: "An enterprise-grade Selenium & TestNG automation framework featuring cross-browser W3C native network interception, a single unified JSON execution engine, pinpoint step-correlated multi-tab Excel traces, and a sleek SaaS-grade executive dark dashboard for platform health intelligence.",
    tech: [
      "Java",
      "Selenium",
      "TestNG",
      "JavaScript",
      "ExtentReports",
      "Chart.js",
      "Apache POI",
      "Maven"
    ],
    links: {
      live: null, 
      code: "https://github.com/kritagya20/selenium-web-automation",
    },
    featured: true,
  },
  {
    title: "ISRO Landing Page",
    type: "Frontend",
    desc: "A multi-page website showcasing the Indian Space Research Organisation, highlighting its major missions, achievements, launch vehicles, satellites, and technological advancements through a clean and responsive interface.",
    tech: ["JavaScript", "HTML", "CSS"],
    links: {
      live: null,
      code: "https://github.com/kritagya20/isro",
    },
    featured: true,
  },
  {
    title: "Cosmic Space Discovery App",
    type: "Frontend",
    desc: "A space exploration application that integrates NASA APIs to display Astronomy Picture of the Day with detailed information, providing users with a visually engaging experience of daily space discoveries.",
    tech: ["JavaScript", "NASA API", "HTML", "CSS"],
    links: {
      live: null,
      code: "https://github.com/kritagya20/cosmic",
    },
    featured: true,
  },
  {
    title: "YouTube Clone",
    type: "Frontend",
    desc: "A fully responsive YouTube-inspired application featuring video search, category-based browsing, recommendations, and video playback using real-time API integration with a modern React architecture.",
    tech: ["React", "Material UI", "YouTube API"],
    links: {
      live: null,
      code: "https://github.com/kritagya20/react-youtube-clone",
    },
    featured: true,
  },
  {
    title: "Desktop Chat App",
    type: "Full Stack",
    desc: "A real-time chat application with Firebase backend support, enabling instant messaging, profile management, custom themes, image sharing, and user blocking/unblocking in a modern Next.js interface.",
    tech: ["Next.js", "Firebase", "Tailwind CSS"],
    links: {
      live: "https://chat-7ch6v68g3-kritagya20.vercel.app/",
      code: "https://github.com/kritagya20/chatApp",
    },
    featured: true,
  },
];

export const oldProjects = [
  {
    title: 'Jio Home Delivery Platform',
    type: 'Internal',
    desc: 'Core delivery workflow modules for SIM & Fiber customers. Designed service layers and optimized SQL → 50% faster queries. Built role-based access and integrated automated job schedulers.',
    tech: ['ASP.NET', 'C#', 'MySQL', 'Azure', 'JavaScript'],
    links: { live: null, code: null },
    featured: true,
  },
  {
    title: 'Inventory Store and Management',
    type: 'Internal',
    desc: 'Centralized inventory platform with real-time tracking and request management. Built during internship — reduced manual paperwork by ~80%.',
    tech: ['PHP', 'MySQL', 'AJAX', 'JavaScript'],
    links: { live: null, code: null },
    featured: true,
  },
];
