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
        "Interacted with multiple teams and gained knowledge of the company's different domains",
        'Pursuing various courses in different fields such as devops, testing, microservices and many more',
        "Increased the learning curve by experimenting with various new technologies"
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


export {
  hostedProjectList,
  archiveProjectList,
  workData
}