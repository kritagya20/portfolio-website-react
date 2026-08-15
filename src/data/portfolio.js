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
    leetcode: 'https://leetcode.com/u/kritagya20/',
    medium: 'https://medium.com/@kritagya2022',
  },
  typewriter: [
    'Full Stack Software Developer',
    'Golang Backend Engineer',
    'React + Node Developer',
    'Java & Automation Engineer',
  ],
};

export const satellites = [
  { label: 'Golang APIs', color: '#38bdf8' },
  { label: 'Java Automation', color: '#a855f7' },
  { label: 'React & Node', color: '#f59e0b' },
  { label: 'PostgreSQL & MySQL', color: '#22c55e' },
  { label: 'Docker & Containers', color: '#ec4899' },
  { label: 'System Architecture', color: '#6366f1' },
  { label: 'REST Assured', color: '#06b6d4' },
  { label: 'GenAI Workflows', color: '#10b981' },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kritagya20',
    iconName: 'github',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/kritagya20/',
    iconName: 'leetcode',
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@kritagya2022',
    iconName: 'medium',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kritagyachouhan/',
    iconName: 'linkedin',
  },
  {
    label: 'Mail',
    href: 'mailto:kritagya2022@gmail.com',
    iconName: 'mail',
  },
];

export const aboutData = {
  eyebrow: 'About Me',
  title: 'Engineering Background & Principles',
  titleAccent: 'Background',
  sub: 'Architecting scalable backend runtimes, automated quality pipelines, and high-throughput systems.',
  terminal: {
    promptUser: 'kritagya@core ~ %',
    profileJson: {
      name: 'Kritagya Singh Chouhan',
      experience: '3+ years',
      primaryStack: ['Golang', 'Java', 'React'],
      databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
      testing: ['Selenium', 'REST Assured'],
      masters: 'IIT PATNA',
    },
    architectureSpecs: [
      {
        section: '[01. BACKEND & SERVICES]',
        details: '→ Go (Golang) Microservices, REST APIs, Node.js',
      },
      {
        section: '[02. DATABASE ARCHITECTURE]',
        details: '→ PostgreSQL, MySQL, Query Optimization, Transactions',
      },
      {
        section: '[03. AUTOMATION & QUALITY]',
        details: '→ Java, Selenium, REST Assured, Appium, TestNG',
      },
      {
        section: '[04. DEVOPS & RUNTIMES]',
        details: '→ Docker , Jenkins CI/CD, Git, Linux',
      },
    ],
  },
  story: {
    lead: 'Building resilient systems engineered for high scale & minimal latency.',
    paragraphs: [
      'I’m a Software Engineer dedicated to solving complex system architecture challenges. My work centers on designing high-throughput backend services, tuning database execution plans, and establishing end-to-end automated validation pipelines.',
      'Currently at Medkart, I craft backend services primarily in Go (Golang). Drawing from a strong foundation in Java, Selenium, and REST Assured, I engineer stress-tested automation frameworks that ensure 100% backend reliability before deployment.',
      'From low-level API design to containerized runtimes with Docker, I take complete end-to-end ownership. Beyond code, I’m a passionate football and cricket follower driven by continuous technical growth.',
    ],
    quote: {
      body: '“Great software isn’t just shipped fast—it is engineered to perform reliably under high scale.”',
      author: '— KRITAGYA SINGH CHOUHAN',
    },
  },
};

export const experienceHeader = {
  eyebrow: 'Past Experience',
  title: 'Career Trajectory',
  titleAccent: 'Trajectory',
  sub: 'From automating quality engineering to architecting high-throughput Go backend services.',
};

export const experience = [
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

export const projectsHeader = {
  eyebrow: 'Recent Projects',
  title: 'Featured Missions',
  titleAccent: 'Missions',
  sub: 'A showcase of applications I\'ve built, tested, automated, and continuously improved.',
};

export const projects = [
  {
    title: 'Enterprise Web Automation & Analytics Engine',
    type: 'SDET / Test Engineering',
    desc: 'An enterprise-grade Selenium & TestNG automation framework featuring cross-browser W3C native network interception, a single unified JSON execution engine, pinpoint step-correlated multi-tab Excel traces, and a sleek SaaS-grade executive dark dashboard for platform health intelligence.',
    tech: [
      'Java',
      'Selenium',
      'TestNG',
      'JavaScript',
      'ExtentReports',
      'Chart.js',
      'Apache POI',
      'Maven'
    ],
    links: {
      live: null, 
      code: 'https://github.com/kritagya20/selenium-web-automation',
    },
    featured: true,
  },
  {
    title: 'Privacy-First Personal Finance Engine',
    type: 'Backend & Systems Architecture',
    desc: 'A privacy-focused, local-first personal finance engine and backend built with Go, encrypted SQLite (SQLCipher), and Redis. Features deterministic offline calculations, end-to-end encrypted multi-device sync, zero-trust cloud architecture, and comprehensive financial asset tracking.',
    tech: [
      'Go',
      'PostgreSQL',
      'SQLite',
      'SQLCipher',
      'Redis',
      'REST API',
      'Docker',
      'Cryptography'
    ],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/finance-tracker-app',
    },
    featured: true,
  },
  {
    title: 'Visitor Counter Service',
    type: 'Backend & Microservices',
    desc: 'A lightweight, standalone backend service written in Go that tracks unique website visitors via salted HMAC-SHA256 IP hashing, PostgreSQL ON CONFLICT upserts, Redis caching, and dynamic SVG count badges.',
    tech: [
      'Go',
      'PostgreSQL',
      'Redis',
      'Docker',
      'REST API',
      'Chi Router',
      'Cryptography'
    ],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/Visitor-Counter-Service',
    },
    featured: true,
  },
  {
    title: 'Cosmic Space Discovery App',
    type: 'Frontend',
    desc: 'A space exploration application that integrates NASA APIs to display Astronomy Picture of the Day with detailed information, providing users with a visually engaging experience of daily space discoveries.',
    tech: ['JavaScript', 'NASA API', 'HTML', 'CSS'],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/cosmic',
    },
    featured: true,
  },
  {
    title: 'Desktop Chat App',
    type: 'Full Stack',
    desc: 'A real-time chat application with Firebase backend support, enabling instant messaging, profile management, custom themes, image sharing, and user blocking/unblocking in a modern Next.js interface.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
    links: {
      live: 'null',
      code: 'https://github.com/kritagya20/chatApp',
    },
    featured: true,
  },
];

export const contactData = {
  eyebrow: 'Get In Touch',
  title: 'Establish Connection',
  titleAccent: 'Connection',
  sub: 'Have a role, a project, or just want to say hi? Send a message and I’ll get back to you.',
  validationMessage: 'Please fill in your name, email, and transmission message.',
  sendingMessage: 'Opening mail client to transmit signal…',
  formLabels: {
    name: 'Your name',
    namePlaceholder: 'Your name...',
    email: 'Your email',
    emailPlaceholder: 'Your email address...',
    message: 'Message',
    messagePlaceholder: 'Tell me a little about your project or role…',
    buttonText: 'Send Message →',
  },
};

export const footerData = {
  greeting: 'Happy to see you here',
  greetingSub: '— have a great day ahead! 👋',
  visitorTelemetryLabel: 'VISITOR COUNTER',
};

