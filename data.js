// Content mirrors https://www.onurravli.com (see /llms.txt).

// Set a section to false to leave it out; `--all` shows everything.
export const sections = {
  experience: false,
  projects: false,
  skills: false,
  education: false,
  writing: true,
  contact: true,
};

export const profile = {
  name: "Onur Ravli",
  role: "Full-Stack Developer",
  tagline: "Software developer delivering scalable, type-safe web and cross-platform applications.",
  location: "Türkiye",
  avatar: "https://avatars.githubusercontent.com/u/47084109",
  website: "https://www.onurravli.com",
  cv: "https://www.onurravli.com/cv",
  email: "onur@onurravli.com",
  motto: "Fikri hür, vicdanı hür, irfanı hür.",
};

export const experience = [
  {
    position: "Software Developer",
    company: "Insider One",
    url: "https://insiderone.com",
    location: "İstanbul, Türkiye (Remote)",
    start: "Jul 2025",
    end: "Present",
    highlights: [
      "Supported 900+ global partners (including Singapore Airlines, AirArabia, Turkish Airlines, Samsung, ING, Allianz, IKEA, and more) by delivering user-facing web application features end-to-end in an agile cycle.",
      "Conducted code reviews, ensuring high code quality and maintainability standards.",
      "Delivered real-time technical guidance in live international client sessions, translating technical issues into clear, actionable solutions for enterprise stakeholders.",
    ],
    tech: ["Node.js", "TypeScript", "Go", "JavaScript", "React.js", "TailwindCSS", "PostgreSQL"],
  },
  {
    position: "Full-stack Engineer",
    company: "Acanio, LLC.",
    hidden: true,
    url: "https://acanio.com",
    location: "Orlando, FL (Remote)",
    start: "Feb 2025",
    end: "May 2025",
    highlights: [
      "Developed multiple applications for medical imaging using React, React Native, and Electron, enabling cross-platform DICOM & DCM image viewing and processing.",
      "Optimized DICOM/DCM image processing and rendering performance across web, mobile, and desktop platforms, contributing to a unified codebase.",
    ],
    tech: ["TypeScript", "Node.js", "Electron", "React Native", "DICOM"],
  },
  {
    position: "Full-stack Engineer",
    company: "Doc Design and Informatics Co. Ltd.",
    hidden: true,
    url: "https://www.dotdoc.com.tr",
    location: "İstanbul, Türkiye (Remote)",
    start: "Mar 2024",
    end: "Oct 2024",
    highlights: [
      "Built applications using Node.js, Strapi.js, React Native and Electron, focusing on innovative media and educational publishing platforms.",
    ],
    tech: ["TypeScript", "Next.js", "React", "React Native", "Electron", "Tailwind CSS", "Strapi"],
  },
  {
    position: "Summer Intern",
    company: "Jotform",
    hidden: true,
    url: "https://jotform.com",
    location: "Ankara, Türkiye (Remote)",
    start: "Aug 2023",
    end: "Sep 2023",
    highlights: [
      "Developed a revision history system for Jotform Approvals with my team, Jr. Source, as an internship project using Node.js, React.js, SCSS, PHP, and MySQL.",
    ],
    tech: ["JavaScript", "TypeScript", "React.js", "Node.js", "PostgreSQL", "Tailwind CSS", "SCSS", "PHP", "MySQL"],
  },
  {
    position: "Summer Intern",
    company: "Üstünova Engineering",
    hidden: true,
    url: "https://www.ustunova.com.tr",
    location: "Ankara, Türkiye (On-site)",
    start: "Jul 2023",
    end: "Aug 2023",
    highlights: [
      "Frontend development of a dashboard and a control panel for an EV charging station software, Electr-INN, using Next.js, Node.js, and Django.",
    ],
    tech: ["JavaScript", "TypeScript", "React.js", "Node.js", "Tailwind CSS", "Next.js", "Django"],
  },
];

export const projects = [
  {
    name: "voltran",
    description: "A local control room for running many coding agents and terminals at once.",
    url: "https://github.com/onurravli/voltran",
    languages: ["TypeScript"],
  },
  {
    name: "altab",
    description: "A premium, lightweight window switcher for macOS.",
    url: "https://github.com/onurravli/altab",
    languages: ["Swift"],
  },
  {
    name: "bowie",
    hidden: true,
    description: "A dynamically typed, interpreted scripting language written in C.",
    url: "https://github.com/bowie-lang/bowie",
    languages: ["C"],
  },
  {
    name: "flottant",
    hidden: true,
    description: "A browser-based DAW built with Next.js and the Web Audio API.",
    url: "https://github.com/onurravli/flottant",
    languages: ["TypeScript"],
  },
  {
    name: "libresuite",
    description: "The unified collaboration suite you’ve always wanted — open, flexible, limitless.",
    url: "https://github.com/libresuite/libresuite",
    languages: ["TypeScript"],
  },
  {
    name: "resume",
    hidden: true,
    description: "My resume in LaTeX, built and published by GitHub Actions on every push.",
    url: "https://github.com/onurravli/resume",
    languages: ["TeX"],
  },
];

export const skills = [
  { title: "Languages", items: ["JavaScript", "TypeScript", "Go", "Python", "Java"] },
  { title: "Backend", items: ["Node.js", "Express.js", "Nest.js", "Django", "Spring Boot", "Flask"] },
  { title: "Frontend", items: ["React.js", "React Native", "Next.js", "TailwindCSS", "Electron", "SCSS"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
  {
    title: "DevOps",
    items: ["GitHub Actions", "Docker", "Docker Compose", "AWS EC2", "AWS Lambda", "AWS S3", "Bash"],
  },
  { title: "Tools", items: ["Git", "GraphQL", "Jest", "Postman", "Swagger", "Jira", "Slack", "Notion"] },
  { title: "Design", items: ["Figma", "Photoshop", "Illustrator", "XD"] },
  { title: "Spoken", items: ["English", "Turkish"] },
];

export const education = [
  {
    degree: "B.Sc. Computer Engineering",
    school: "Konya Technical University",
    location: "Konya, Türkiye",
    start: "2022",
    end: "2026 (Expected)",
  },
  {
    degree: "B.Sc. Electrical and Electronics Engineering",
    school: "Konya Technical University",
    location: "Konya, Türkiye",
    start: "2020",
    end: "2022 (Transferred)",
  },
];

export const posts = [
  {
    title: "Voltran: One Window for All My Coding Agents",
    hidden: true,
    date: "Oct 25, 2026",
    url: "https://www.onurravli.com/blog/voltran-one-window-for-all-my-coding-agents",
  },
];

export const links = [
  { title: "Website", url: "https://www.onurravli.com" },
  { title: "Email", url: "mailto:onur@onurravli.com" },
  { title: "GitHub", url: "https://github.com/onurravli" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/onurravli" },
  { title: "Medium", url: "https://medium.com/@onurravli" },
  { title: "BlueSky", url: "https://bsky.app/profile/onurravli.com" },
  { title: "X", url: "https://x.com/onurravli" },
  { title: "Instagram", url: "https://www.instagram.com/onurravli" },
];
