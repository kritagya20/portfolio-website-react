export const profile = {
  name: 'Kritagya Singh Chouhan',
  role: 'Software Engineer',
  tagline: 'Backend-focused software engineer building reliable APIs, scalable Go & Java architectures, and database-driven systems.',
  location: 'Ahmedabad, Gujarat, India',
  email: 'kritagya2022@gmail.com',
  emailAlt: 'kritagya2022@gmail.com',
  phone: '+91 7987322906',
  phoneAlt: '+91 7987322906',
  resumeUrl: './Resume_Kritagya_Singh_Chouhan.pdf',
  socials: {
    github: 'https://github.com/kritagya20',
    linkedin: 'https://linkedin.com/in/kritagyasinghchouhan/',
    leetcode: 'https://leetcode.com/u/kritagya20/',
    medium: 'https://medium.com/@kritagya2022',
  },
  typewriter: 'Software Engineer — Backend Systems',
};

export const satellites = [
  { label: 'Go & REST APIs', color: '#38bdf8', projectIndex: 0 },
  { label: 'Java & Spring Boot', color: '#e76f51', projectIndex: 3 },
  { label: 'PostgreSQL & SQL', color: '#22c55e', projectIndex: 0 },
  { label: 'Redis & Caching', color: '#f59e0b', projectIndex: 1 },
  { label: 'Docker & Linux', color: '#ec4899', projectIndex: 3 },
  { label: 'API Reliability & k6', color: '#06b6d4', projectIndex: 3 },
  { label: 'System Reliability', color: '#6366f1', projectIndex: 3 },
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
  sub: 'Architecting reliable backend services, database-backed platforms, and high-concurrency automated verification pipelines.',
  terminal: {
    promptUser: 'kritagya@core ~ %',
    profileJson: {
      name: 'Kritagya Singh Chouhan',
      role: 'Software Engineer',
      experience: '3+ years',
      primaryStack: ['Go', 'Java', 'React', 'SQL'],
      databases: ['PostgreSQL', 'MySQL', 'Redis'],
      systems: ['REST APIs', 'k6', 'REST Assured', 'Docker'],
      testing: ['k6 Stress Testing', 'REST Assured', 'Selenium'],
      masters: 'IIT Patna',
    },
    architectureSpecs: [
      {
        section: '[01. BACKEND & APIS]',
        details: '→ Golang REST APIs, Java / Spring Boot',
      },
      {
        section: '[02. Frontend & INTERNAL PLATFORMS]',
        details: '→ JavaScript, React, AngularJS',
      },
      {
        section: '[03. DATABASE ARCHITECTURE]',
        details: '→ PostgreSQL, MySQL, MongoDB, Redis',
      },
      {
        section: '[04. RELIABILITY & DEVOPS]',
        details: '→ k6, REST Assured,  Selenium, Docker, Jenkins, GitHub Actions, Linux',
      },
    ],
  },
  story: {
    lead: 'Building resilient backend systems engineered for reliability, data integrity, and high performance.',
    paragraphs: [
      'I am a Software Engineer with 3 years of experience designing and building backend services, internal developer platforms, and data-driven systems. Working extensively with distributed architectures gives me an inherent edge: I design systems with failure modes in mind—guaranteeing transactional consistency, resilient API contracts, and predictable performance under high load.',
      'At Medkart, I build backend platform tooling and services across core retail products including Warehouse Management Systems (WMS), Point of Sale (POS), and Central Admin portals. Among key initiatives, our team engineered an in-house testcase management platform with automated CI/CD reporting pipelines, complemented by high-concurrency k6 stress testing and multi-service API automation frameworks.',
      'I am actively channeling my engineering depth into core backend development with Go, Java/Spring Boot, and PostgreSQL. Furthermore, I am pursuing my Master of Computer Applications (MCA) through the IIT Patna program to deepen my theoretical and technical skills.',
    ],
    quote: {
      body: '“Great software isn’t just shipped fast—it is engineered to perform reliably under high scale.”',
      author: '— KRITAGYA SINGH CHOUHAN',
    },
  },
};

export const technicalSkills = {
  languages: [
    { name: 'Java', level: 'Proficient / Production Experience' },
    { name: 'Go (Golang)', level: 'Active Backend Focus & Projects' },
    { name: 'SQL', level: 'Proficient / Production Experience' },
    { name: 'JavaScript', level: 'Working Knowledge' },
    { name: 'Bash / Shell', level: 'Working Knowledge' },
  ],
  backendEngineering: [
    { name: 'REST API Design & Development', status: 'Core' },
    { name: 'HTTP Semantics & Status Codes', status: 'Core' },
    { name: 'Layered / Clean Architecture', status: 'Core' },
    { name: 'Spring Boot Fundamentals', status: 'Active Focus / Learning' },
    { name: 'Concurrency & Goroutines Basics', status: 'Active Focus / Learning' },
    { name: 'Authentication & JWT', status: 'Applied in Projects' },
  ],
  databases: [
    { name: 'PostgreSQL', status: 'Production & Project Usage' },
    { name: 'MySQL', status: 'Production Experience' },
    { name: 'Database Transactions & ACID', status: 'Core Focus' },
    { name: 'Schema Design & Foreign Keys', status: 'Core Focus' },
    { name: 'Redis (Caching & Key-Value)', status: 'Applied in Projects' },
  ],
  reliabilityAndAutomation: [
    { name: 'k6 Stress Testing & Benchmarking', status: 'Production Experience' },
    { name: 'REST Assured (API Testing)', status: 'Production Experience' },
    { name: 'Root Cause Debugging & Failure Analysis', status: 'Production Experience' },
    { name: 'TestNG & Automation Architecture', status: 'Production Experience' },
    { name: 'Selenium & Appium', status: 'Production Experience' },
  ],
  devopsAndTooling: [
    { name: 'Docker & Containerization', status: 'Working Knowledge' },
    { name: 'Git & GitHub Workflows', status: 'Production Experience' },
    { name: 'Linux CLI & Environments', status: 'Production Experience' },
    { name: 'Jenkins CI/CD Pipelines', status: 'Production Experience' },
    { name: 'Postman & cURL', status: 'Production Experience' },
  ],
};

export const experienceHeader = {
  eyebrow: 'Past Experience',
  title: 'Career Trajectory',
  titleAccent: 'Trajectory',
  sub: 'Leading backend platform tooling, quality engineering, and multi-service automation across enterprise products.',
};

export const experience = [
  {
    role: 'Software Engineer — Backend & Quality Automation Lead',
    company: 'Medkart',
    companyAbbr: 'Medkart',
    where: 'Ahmedabad, India',
    when: 'Feb 2026 – Present',
    summary: 'Backend-focused engineering lead architecting internal automation platforms, CI/CD reporting layers, and multi-service testing engines across Medkart’s core WMS, POS, and Central Admin enterprise products.',
    bullets: [
      'Engineered and delivered an in-house testcase management system backend, managing automated test execution pipelines, test metadata, and unified CI/CD reporting layers.',
      'Architected multi-tier backend automation frameworks covering Web, REST API integration, and high-concurrency stress testing using k6, simulating peak retail traffic loads.',
      'Led backend validation and system reliability for core enterprise retail products including Warehouse Management Systems (WMS), Point of Sale (POS), and Central Admin portals.',
      'Developed high-coverage REST Assured suites with reusable auth handlers and JSON request/response interceptors to validate complex ordering, inventory synchronization, and billing APIs.',
      'Integrated deep PostgreSQL and MySQL validations to verify ACID transaction guarantees, schema constraints, and database state transitions across financial and inventory workflows.',
      'Engineered custom polling and event-driven monitoring mechanisms to trace long-running asynchronous batch jobs, cron queues, and inter-service state updates.',
      'Collaborated directly with product teams and backend developers in a Laravel/PHP service architecture to reproduce integration race conditions, trace error logs, and ensure release stability.',
      'Led and mentored the testing engineering team, establishing automated quality gates in Jenkins CI/CD pipelines and driving sprint delivery commitments.'
    ],
    stack: [
      'Java',
      'k6',
      'REST Assured',
      'PostgreSQL',
      'MySQL',
      'Docker',
      'Jenkins',
      'Linux',
      'Git',
      'Maven',
    ]
  },
  {
    role: 'Software Development Engineer in Test',
    company: 'Bhanix Finance and Investment Limited',
    companyAbbr: 'Bhanix',
    where: 'Hyderabad, India',
    when: 'Dec 2024 – Feb 2026',
    summary: 'Engineered core fintech automation frameworks and API/DB validation pipelines for digital lending products, optimizing parallel regression execution and data verification.',
    bullets: [
      'Designed and scaled a Java-based Selenium and TestNG automation framework with thread-safe execution engines for parallel test runs.',
      'Automated end-to-end fintech lending workflows across loan origination, KYC verification, credit evaluation APIs, and repayment database ledgers.',
      'Integrated REST Assured and MySQL validations to perform multi-tier verification across UI, backend REST APIs, and transactional databases.',
      'Automated database validations to verify transaction records, EMI calculations, and ledger state consistency under dynamic user inputs.',
      'Configured Jenkins CI/CD pipeline triggers with detailed Allure and ExtentReports dashboards to ensure immediate feedback on regression runs.',
      'Conducted API payload and server-log root cause analysis to diagnose regression failures, isolating backend integration anomalies from client-side issues.'
    ],
    stack: [
      'Java',
      'REST Assured',
      'Selenium',
      'TestNG',
      'MySQL',
      'Jenkins',
      'Maven',
      'Git',
      'Allure',
      'ExtentReports',
    ],
  },
  {
    role: 'Assistant Manager',
    company: 'Jio Platforms Limited',
    companyAbbr: 'Jio Platforms',
    where: 'Navi Mumbai, India',
    when: 'Oct 2023 – Dec 2024',
    summary: 'Automated web regression suites for Jio.com, developed Bash automation scripts for environment setup, and built internal analytics dashboards for test execution telemetry.',
    bullets: [
      'Automated regression validation suites for high-traffic Jio.com user journeys using Robot Framework and Selenium.',
      'Authored Bash automation scripts to streamline local test environment setup and dependency configuration across Linux systems.',
      'Built internal reporting dashboards with React and Chart.js to track test execution telemetry, regression trends, and system stability.',
      'Collaborated with cross-functional engineering squads to review API and functional requirements, anticipating edge-case failure modes early in the release cycle.'
    ],
    stack: [
      'Robot Framework',
      'Selenium',
      'Bash',
      'Linux',
      'Git',
      'React',
      'JavaScript',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'CASHe',
    companyAbbr: 'CASHe',
    where: 'India',
    when: 'Jun 2022 – Nov 2022',
    summary: 'Contributed to frontend development of internal enterprise learning platforms using AngularJS and JavaScript within high-velocity Agile release sprints.',
    bullets: [
      'Contributed to the development of internal enterprise portals using AngularJS, JavaScript, and HTML/CSS.',
      'Implemented frontend features, resolved UI bugs, and validated API payload integration in an Agile sprint cadence.',
      'Collaborated with developers and QA engineers to ensure cross-browser compatibility and responsive UI workflows.'
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
  sub: 'A showcase of backend services, distributed platforms, and high-reliability systems I’ve architected and built.',
};

export const projects = [
  {
    title: 'Privacy-First Personal Finance Engine',
    type: 'Backend & Systems Architecture',
    desc: 'A privacy-centric personal finance backend built with Go and PostgreSQL, designed around local-first data ownership, transactional integrity, and cryptographic isolation. Features layered Clean Architecture, ACID-compliant ledger transactions, JWT authentication with bcrypt, encrypted local storage, and structured logging with error tracing.',
    tech: [
      'Go',
      'PostgreSQL',
      'Docker',
      'REST API',
      'Redis',
      'SQL',
      'Cryptography',
      'Clean Architecture'
    ],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/finance-tracker-app',
    },
    featured: true,
  },
  {
    title: 'Visitor Counter Microservice',
    type: 'Backend & Microservices',
    desc: 'A lightweight, standalone backend telemetry service written in Go that tracks unique visitors with zero third-party cookies. Implements salted HMAC-SHA256 IP hashing for privacy-safe deduplication, atomic PostgreSQL ON CONFLICT upserts, in-memory Redis caching to reduce database I/O, and dynamic SVG badge generation via Chi router.',
    tech: [
      'Go',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Chi Router',
      'HMAC-SHA256',
      'REST API'
    ],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/Visitor-Counter-Service',
    },
    featured: true,
  },
  {
    title: 'Product Activity & Testcase Management Platform',
    type: 'Backend Platform & Tooling',
    desc: 'An in-house testcase management and traceability platform backend built to orchestrate CI/CD automation pipelines and report execution telemetry. Designed to track product workflow activity across WMS, POS, and Admin services, correlating test runs with API mutations and background jobs to accelerate failure root cause analysis.',
    tech: [
      'Java',
      'REST APIs',
      'PostgreSQL',
      'Docker',
      'Jenkins CI/CD',
      'System Design',
      'Event Logging'
    ],
    links: {
      live: null,
      code: null,
    },
    featured: true,
  },
  {
    title: 'Enterprise API, Web & k6 Stress Testing Engine',
    type: 'Reliability & Quality Engineering',
    desc: 'A unified Java & k6 test engineering framework built for enterprise-grade API verification and stress testing. Features modular REST Assured request interceptors, k6 load scripts for simulated peak concurrency, automated PostgreSQL/MySQL state verification, and synchronized execution reporting.',
    tech: [
      'Java',
      'k6',
      'REST Assured',
      'Selenium',
      'PostgreSQL',
      'TestNG',
      'Maven',
      'Docker'
    ],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/selenium-web-automation',
    },
    featured: true,
  },
  {
    title: 'Desktop Chat App',
    type: 'Full Stack & WebSockets',
    desc: 'A real-time messaging application with Firebase backend integration, enabling instant messaging, user session management, custom themes, media attachments, and user blocking in a responsive interface.',
    tech: ['Next.js', 'Firebase', 'Tailwind CSS', 'WebSockets'],
    links: {
      live: null,
      code: 'https://github.com/kritagya20/chatApp',
    },
    featured: false,
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
