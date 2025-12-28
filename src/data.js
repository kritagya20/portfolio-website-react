const hostedProjectList = [
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
  
const archiveProjectList = [  
  {
    key: 'ap9',
    githubLink: "https://github.com/kritagya20/Codify---Your-Coding-Assistant",
    title: "Codify",
    description: "AI based coding assistant. The website is built using OpenAI API to test and use the ChatGPT expert services without interruption for personal assistence. The project deployment is private due to limited token availability for response",
    tech: ["Vite", "NodeJS", "Open-AI"],
  },  
  {
    key: 'ap8',
    githubLink: "https://github.com/kritagya20/Word-Tracker",
    title: "Word Tracker",
    description: "A website designed to help you expand your vocabulary by looking up the best synonyms and antonyms for an expression.  The website retrieves the data using the Datamuse API. Using API, the website offers the most accurate synonyms and antonyms for the searched term.",
    tech: ["JavaScript", "API", "CSS"],
  },    
  {
    key: 'ap7',
    githubLink: "https://github.com/kritagya20/React-Admin-Dashboard",
    title: "React Sales Dashboard",
    description: "Fully functioning and dynamic sales dashboard with rich patterns and data visualization that is intended to help general enterprises. The multi-page functionality is added using advanced React practices.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    key: 'ap6',
    githubLink: "https://github.com/kritagya20/Weather-App",
    title: "Weather App",
    description: "An online application that shows the most pertinent data currently available on the weather across the world. The website forecasts the majority of credible reports using the Open Weather API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    key: 'ap5',
    githubLink: "https://github.com/kritagya20/AstoPic",
    title: "AstroPic",
    description: "An authentic application to display most spectacular and aesthetically pleasing images of space every day along with pertinent information. This is an old version of the Cosmic website that also uses the NASA APOD API for fetching the data.",
    tech: ["JavaScript", "NASA-API", "CSS"],
  },
  {
    key: 'ap4',
    githubLink: "https://github.com/kritagya20/dashboard-static-page",
    title: "Dashboard",
    description: "Static UI dashboard page for a demo business with intricate patterns and data visualization. The Page is updated using dynamic data insertion via JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    key: 'ap3',
    githubLink: "https://github.com/kritagya20/netflix-clone",
    title: "Netflix Clone",
    description: "A movie rendering application that adopts the Netflix user interface. IMDB API is used to show all the details of the movies including cast, date of release, genre, rating, and trailer. Movie recommendation section is also merged.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    key: 'ap2',
    githubLink: "https://github.com/kritagya20/YouTube-UI-Clone/",
    title: "YouTube UI Clone",
    description: "A website for rendering videos that adopts the YouTube user interface. To display the video list, the website uses the YouTube API. Additionally, a search bar that works is included.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    key: 'ap1',
    githubLink: "https://github.com/kritagya20/school-website",
    title: "School Website",
    description: "The website's navigation bar and footer are both useful. There are four pages on the website: 'home,' 'about,' 'courses,' and 'contact'. The pages have all been designed with full responsiveness in mind.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    key: 'ap0',
    githubLink: "https://github.com/kritagya20/tribute-page/",
    title: "Tribute Page",
    description: "The website is intended to give a tribute to Mahendra Singh Dhoni, a living legend. It contains all the information on accomplishments, statistics, and records. It skillfully presents the challenging numbers in the most appealing graphs, charts, and animations.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];



const workData =  [
    {
      tab: 'Developer',  
      title: 'JPL',
      link: 'https://www.linkedin.com/company/jioplatforms/mycompany/',
      date: 'Nov 2023 - Present',
      content: [
        'Working as software developer at Jio',
        "Automated various test cases using Robot FrameWork.",
        'Handles all the scripts and maintained the existing codebase using Git and GitHub',
        "Contributed to the development of an in-house website for storing automation-generated reports, monitoring team tasks, dynamically fetching report data, and visualizing it through graphs and tables."
      ],
    },
    {
      tab: 'Internship',  
      title: 'Cashe',
      link: 'https://www.cashe.co.in/',
      date: 'May 2022 - Sep 2022',
      content: [
        'Analysed entire codebase and reported any bugs detected',
        'Contributed to the creation of the company training portal',
        'Worked with a variety of different languages, platforms, frameworks, and CMS such as CSS, PHP, JavaScript, AngularJS, JQuery, and WordPress',
        'Interacted with multi-disciplinary teams of engineers, developers, and managers on a daily basis',
      ],
    },
    {
      tab: 'Portfolio',
      title: 'Portfolio Website',
      link: 'https://kritagya.in/',
      date: 'Dec 2022 - Present',
      content: [
        'Developed optimized, modern, responsive website using React',
        'Designed and developed entire portfolio website from scratch to showcase my technical and designing capabilities',
        'Worked on different frameworks like NextJS, React and AngularJS to build various industry level projects',
      ],
    },
];



const techstackData = [
  {
    tab: 'Selenium',
    title: 'Web Automation Framework Engineering',
    content: [
      'Designed and owned a modular Selenium–TestNG framework with clear separation of concerns.',
      'Implemented Page Object Model with reusable components for scalable test development.',
      'Built robust synchronization layers using custom waits and retry mechanisms.',
      'Handled complex UI scenarios including dynamic elements, iframes, alerts, and multi-window flows.',
      'Enabled parallel execution and cross-browser support through framework-level configurations.'
    ]
  },
  {
    tab: 'Appium',
    title: 'Mobile Automation Architecture',
    content: [
      'Designed a reusable Appium automation framework supporting Android and iOS platforms.',
      'Abstracted mobile interactions into platform-agnostic utilities for better maintainability.',
      'Implemented gesture handling, scrolling, and device-specific wait strategies.',
      'Enabled role-based and environment-driven executions via external configuration files.',
      'Integrated mobile automation seamlessly with existing CI and reporting layers.'
    ]
  },
  {
    tab: 'REST Assured',
    title: 'API Automation & Service Validation',
    content: [
      'Built a REST Assured-based API automation layer for backend validation.',
      'Implemented request builders and response validators for consistent API testing.',
      'Used APIs for dynamic test data creation and teardown to stabilize UI and mobile tests.',
      'Validated schema contracts, error handling, and edge-case scenarios.',
      'Integrated API checks into end-to-end workflows for full system validation.'
    ]
  },
  {
    tab: 'Jenkins',
    title: 'CI/CD & Automation Orchestration',
    content: [
      'Designed Jenkins pipelines to orchestrate UI, API, and mobile automation suites.',
      'Implemented parameterized builds for environment, role, and suite-level execution.',
      'Enabled scheduled, on-demand, and branch-based regression runs.',
      'Automated report publishing and log archival for traceability.',
      'Used CI feedback loops to support faster and safer release cycles.'
    ]
  },
  {
    tab: 'SQL',
    title: 'Database & Backend Validation',
    content: [
      'Designed database validation layers to assert backend state against UI actions.',
      'Wrote optimized SQL queries to verify transactional integrity and business rules.',
      'Integrated database assertions directly into automation flows.',
      'Used backend checks to detect data inconsistencies early in the test lifecycle.',
      'Ensured reliability of critical fintech workflows through backend validation.'
    ]
  },
  {
    tab: 'Reporting',
    title: 'Test Observability & Reporting Systems',
    content: [
      'Designed a unified reporting strategy using ExtentReports and Allure.',
      'Implemented custom TestNG listeners to capture granular execution details.',
      'Structured reports to highlight failures, trends, and actionable insights.',
      'Improved debugging efficiency through logs, screenshots, and step-level visibility.',
      'Enabled non-QA stakeholders to consume automation results effectively.'
    ]
  },
  {
    tab: 'React',
    title: 'Automation Tooling & Developer Experience',
    content: [
      'Built internal dashboards using React to visualize automation health and trends.',
      'Designed UI components to consume automation APIs and execution data.',
      'Improved test visibility through charts, filters, and historical views.',
      'Used frontend expertise to enhance testability and locator strategies.',
      'Bridged the gap between automation data and engineering decision-making.'
    ]
  }
];



  
const workList = [
   {
    key: 'work2',
    organisation: "Bhanix Finance and Investment Limited",
    designation: "Software Development Engineer in Test (SDET)",
    time: "Dec 2024 - Present",
    description:
      "Working as an SDET on a large-scale fintech web and app platform, responsible for designing, developing, and maintaining a robust end-to-end automation framework. The focus is on improving regression reliability, increasing test coverage across critical business flows, and enabling faster, more confident releases through CI-driven automation and high-quality reporting.",

    highlights:       [
        "Designed and owned a scalable Selenium–TestNG automation framework using Java and Maven.",
        "Automated 2000+ end-to-end test cases covering critical fintech business workflows.",
        "Built role-based automation suites for Agent, Admin, and Agency Admin personas.",
        "Reduced regression execution time by 55% through parallel TestNG execution.",
        "Integrated REST Assured with UI automation for complete API and UI validation.",
        "Implemented data-driven testing using Apache POI, improving test coverage by 30%.",
        "Enhanced reporting using ExtentReports and Allure for faster failure analysis.",
        "Validated transactional accuracy using automated MySQL database assertions.",
        "Improved test stability by 40% through optimized waits and locator strategies.",
        "Configured Maven profiles for environment-specific and suite-based executions.",
        "Integrated Jenkins CI pipelines for scheduled and on-demand regression execution.",
        "Applied Page Object Model to improve framework maintainability and scalability.",
        "Collaborated with developers to reduce flaky tests and improve locator reliability."
      ],

    tech: [
      "Java 17",
      "JavaScript",
      "Selenium",
      "Appium",
      "TestNG",
      "REST Assured",
      "Maven",
      "Jenkins",
      "MySQL",
      "ExtentReports",
      "Allure",
      "ChartJS"
    ]
  },
  {
    key: 'work1',
    organisation: "Jio Platforms Limited",
    designation: "Assistant Manager",
    time: "Oct 2023 - Dec 2024",
    description:
      "Worked on large-scale web automation and internal tooling to improve regression coverage, execution efficiency, and test observability.",
    highlights: [
      "Automated 100% of regression test cases for Jio.com using the Robot Framework.",
      "Improved test reliability and significantly reduced manual QA effort across releases.",
      "Developed Bash scripts to automate backend and server-level tasks, reducing test setup time by ~30%.",
      "Contributed to an internal automation reporting portal for execution tracking and analytics.",
      "Built dashboards to visualize historical test results using graphs and tabular reports."
    ],
    tech: ["Robot Framework", "Selenium", "Bash", "Linux", "Git", "JavaScript", "React", "ChartJS"]
  },
  {
    key: 'ap0',
    organisation: "CASHe",
    designation: "Intern",
    time: "Jun 2022 - Nov 2022",
    description:
      "Worked as a development intern, gaining exposure to real-world codebases, frontend systems, and quality analysis.",
    highlights: [
      "Contributed to the development of the company’s internal training portal.",
      "Worked across multiple frontend technologies including AngularJS and JavaScript.",
      "Analyzed the complete codebase and reported functional and UI-related bugs.",
      "Collaborated with developers and managers in an agile environment."
    ],
    tech: ["JavaScript", "AngularJS","CSS", "Git", "WordPress"]
  }
];




export {
  hostedProjectList,
  archiveProjectList,
  workData,
  techstackData,
  workList
}


    
