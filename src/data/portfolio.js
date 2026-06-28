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
    linkedin: 'https://linkedin.com/',
    leetcode: 'https://leetcode.com/',
  },
  typewriter: [
    'Full Stack Software Developer',
    'Golang Backend Engineer',
    'React + Node Frontend Builder',
    'Java + Selenium Automation Enthusiast',
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
    title: 'Performance Obsessed',
    text: 'Cut report generation 12s → 3.5s and reduced API latency ~30% on production workflows.',
  },
  {
    icon: '🛠️',
    title: 'End-to-End Ownership',
    text: 'Requirement analysis, design, deployment, and production support — full lifecycle.',
  },
  {
    icon: '🤖',
    title: 'GenAI Integrations',
    text: 'LLMs, RAG pipelines, prompt engineering integrated into enterprise backends.',
  },
  {
    icon: '☁️',
    title: 'Cloud & CI/CD',
    text: 'Azure DevOps pipelines that reduced deployment failures by ~40%.',
  },
];

export const experience = [
    {
      role: 'Backend Engineer',
      company: 'Medkart',
      where: 'Ahmedabad, India',
      when: 'Apr 2026 – Present',
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
      when: 'Feb 2026 – Apr 2026',
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

export const projects = [
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
    desc: 'Centralized inventory platform with real-time tracking and request management. Built during my internship at Ankur Web Technology — reduced manual paperwork by ~80%.',
    tech: ['PHP', 'MySQL', 'AJAX', 'JavaScript'],
    links: { live: null, code: null },
    featured: true,
  },
  {
    title: 'Holiday Master',
    type: 'Full Stack',
    desc: 'Holiday & leave-master service to manage organizational holiday calendars, public holidays per region, and reusable holiday metadata for downstream apps.',
    tech: ['Spring Boot', 'REST API', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/HolidayMaster' },
  },
  {
    title: 'Product Review Platform',
    type: 'Full Stack',
    desc: 'REST API + Angular client for product reviews with auth, search, and admin moderation. Emphasizes coding conventions, security, and clean UX.',
    tech: ['Spring Boot', 'Angular', 'REST API', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/product_review' },
  },
  {
    title: 'Note Saver',
    type: 'Full Stack',
    desc: 'Notes app keeping the most recent 10 entries per user, hourly cleanup of older ones, length validations, and user-driven deletes.',
    tech: ['Java 8', 'Spring Boot', 'JPA', 'Angular'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/note_saver' },
  },
  {
    title: 'Result Management',
    type: 'Full Stack',
    desc: 'Web app where students view results by roll & DOB and teachers manage records — full CRUD with validation flows. Angular frontend + Node backend.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'HTML', 'CSS'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/result_management' },
  },
  {
    title: 'Blogging Thoughts',
    type: 'Web App',
    desc: 'A blogging platform for displaying posts, viewing details, adding/editing/deleting posts, and liking favourites. Uses Redux + Context API for state.',
    tech: ['React', 'Redux', 'Context API', 'Node.js'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Blogging_Thoughts' },
  },
  {
    title: 'Library Management',
    type: 'Web App',
    desc: 'Spring MVC + JSP web app exposing REST APIs (App 2) for authors & books with full CRUD via Hibernate. Showcases clean MVC + RESTful design.',
    tech: ['Spring MVC', 'Hibernate', 'JSP', 'REST'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Library_Management' },
  },
  {
    title: 'T-Shirt Shopping Companion',
    type: 'Web App',
    desc: 'Spring + Hibernate product search by Color, Size, Gender, and output preference. Dynamic CSV loading via threads, login + product search screens.',
    tech: ['Spring MVC', 'Hibernate', 'MySQL'],
    links: { live: null, code: 'https://github.com/YashaswiSrivastava1706/Tshirt_companion' },
  },
];

export const githubProfileUrl = 'https://github.com/YashaswiSrivastava1706';

export const seedReviews = [
  {
    id: 'r1',
    name: 'Rohit M.',
    role: 'Engineering Manager',
    rating: 5,
    text: 'Yashaswi consistently ships clean, optimized backend code. His SQL & API tuning saved us real production minutes.',
    date: '2025-09-12',
  },
  {
    id: 'r2',
    name: 'Priya S.',
    role: 'Product Lead',
    rating: 5,
    text: 'Reliable end-to-end developer. Took ownership of complex modules and shipped with very few defects.',
    date: '2025-08-04',
  },
  {
    id: 'r3',
    name: 'Anand K.',
    role: 'Senior Architect',
    rating: 4,
    text: 'Strong .NET fundamentals and a clear thinker around system design. Great teammate to have on a delivery-heavy sprint.',
    date: '2025-06-18',
  },
];


export const hostedProjectList = [
    {
      key: "ip3",
      link: "https://isro.kritagya.in/",
      githubLink: "https://github.com/kritagya20/isro",
      title: "ISRO Landing Page",
      description: "A multi-page website that provides an overview of all the significant developments, innovations, and missions carried out by the Indian Space Research Organization.",
      tech: ["JavaScript", "CSS", "HTML"],
    },
    {
      key: "ip2",
      link: "https://cosmic.kritagya.in/",
      githubLink: "https://github.com/kritagya20/cosmic",
      title: "Cosmic",
      description: "An authentic application to display most spectacular and aesthetically pleasing images of space every day along with pertinent information.",
      tech: ["JavaScript", "NASA-API", "CSS"],
    },
    {
      key: "ip1",
      link: "https://youtube.kritagya.in/",
      githubLink: "https://github.com/kritagya20/react-youtube-clone",
      title: "Youtube Clone",
      description: "Completely optimized & responsive YouTube Clone that has features like a functional search bar, sidebar, videos recommendation section, and playable videos.",
      tech: ["React", "Material UI", "API"],
    },
    {
      key: "ip0",
      link: "https://chat-7ch6v68g3-kritagya20.vercel.app/",
      githubLink: "https://github.com/kritagya20/chatApp",
      title: "Desktop Chat App",
      description: "A chat application with capabilities including real-time messaging, updating profiles, blocking and unblocking users, adding custom themes, and sending photos.",
      tech: ["NextJS", "Firebase", "Tailwind"],
    },
];

