/**
 * data.js — Central content file for the portfolio.
 * 
 * Edit this file to update ALL content across the site.
 * No need to touch any component files to change text, links, or skills.
 */

// ─── Personal Info ───────────────────────────────────────────────
export const personalInfo = {
  name: "Sudharson A",
  title: "Software Developer",
  tagline: "Building robust, scalable backends in Java and Node.js.",
  // Short intro paragraph shown in the hero right panel (about/objective)
  heroIntro:
    "Entry-level software developer (B.E. CSE) with hands-on experience in Java, Spring Boot and Hibernate, plus production experience in Node.js, TypeScript and PostgreSQL on a real-time freight & logistics platform deployed on Azure.",
  email: "dharsonsudharson@gmail.com",
  phone: "+918098187264",
  // Place your profile photo in /public/profile.jpg (or .png)
  profileImage: "/profile.jpg",
  // Place your resume PDF in /public/resume.pdf  (replace it with the new MY-Resume.pdf)
  resumeLink: "/resume.pdf",

  // ─── Photo Accent Color ──────────────────────────────────────
  // This tints the backdrop behind your photo in the hero section.
  // Set it to complement your profile photo's dominant tone.
  // Examples: "#1a3a4a" (cool/dark shirt), "#2d1f3d" (warm/purple),
  //           "#1c2e1c" (green tones), "#3a2a1a" (warm/brown)
  // Set to null to use the default site accent color.
  photoAccentColor: "#1a2a3a",
};

// ─── Navigation Links ────────────────────────────────────────────
export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ─── About / Career Objective ────────────────────────────────────
export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm an entry-level software developer with a B.E. in Computer Science from Francis Xavier Engineering College. I've built production backend modules for FreightKey, a real-time freight and logistics platform, working with Node.js, TypeScript, Express, Prisma ORM and PostgreSQL on Azure, with Socket.io powering the live features.",
    "Alongside that, I've been building a strong Java foundation at Twozo Technologies, covering Spring Boot, Spring Data JPA, Hibernate, JDBC and layered architecture. I care about OOP, SOLID principles and clean, maintainable code, and I use AI tools like ChatGPT, Claude, Copilot and Cursor to move faster.",
  ],
  highlights: [
    { label: "Experience", value: "Backend Developer Intern (Java) at Twozo Technologies" },
    { label: "Previously", value: "Backend Developer at Pro 17 Analytics" },
    { label: "Core Stack", value: "Java · Spring Boot · Node.js · TypeScript · PostgreSQL" },
    { label: "Focus", value: "REST APIs · Real-Time Systems · Layered Architecture" },
  ],
};

// ─── Skills ──────────────────────────────────────────────────────
export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "JDBC",
      "Maven",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "WebSockets",
    ],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Azure (Blob Storage, Key Vault)", "Render", "Vercel", "Netlify"],
  },
  {
    category: "Concepts",
    items: [
      "OOP",
      "SOLID Principles",
      "Layered Architecture",
      "Exception Handling",
      "Transactions",
      "Authentication & Authorization",
      "Collections",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Firebase", "Supabase", "Agora RTC"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Claude", "Copilot", "Cursor", "Lovable", "Anti-Gravity"],
  },
];

// ─── Experience ──────────────────────────────────────────────────
export const experience = [
  {
    company: "Twozo Technologies",
    role: "Backend Developer Intern (Java)",
    period: "Aug 2026 – Sep 2026",
    description: [
      "Practised Java backend development: OOP, Collections, exception handling, JDBC, Spring Boot, Maven, Hibernate and layered architecture.",
      "Built a backend Event Management System using Spring Boot, Maven and Hibernate.",
      "Built a console-based Event Management System in Java (Controller, Service, DAO, Database) with CRUD operations, SQL queries, validation, transactions and exception handling.",
    ],
  },
  {
    company: "Pro 17 Analytics",
    role: "Backend Developer",
    period: "May 2026 – Jul 2026",
    description: [
      "Built backend modules for FreightKey, a real-time freight and logistics platform (Node.js, TypeScript, Express, Prisma, PostgreSQL on Azure).",
      "Developed a real-time Activity Log module using Socket.io dual-room emit, and a secure PIN validation REST API with Argon2 hashing.",
      "Migrated the codebase from a tenant-based to an organization-based architecture, and built a Location Map feature with GPS and geocoding.",
      "Integrated Twilio SMS and an Azure Communication Services email module.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
  {
    title: "FreightKey",
    description:
      "Backend for a freight and logistics platform covering load verification, inspection and real-time tracking, built on a repository, service and controller architecture. Features a real-time Activity Log with dual-room Socket.io emit, and PIN verification with Argon2 hashing, failed-attempt tracking and an inspection report status flow.",
    techStack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Azure", "Socket.io", "Agora RTC"],
    githubUrl: "https://github.com/ASUDHARSON-2004-GIT",
    liveUrl: null, // Set to null if no live demo
  },
  {
    title: "Event Management System",
    description:
      "Spring Boot backend for managing events, using Maven for build management and Hibernate for database persistence, with a layered architecture.",
    techStack: ["Java", "Spring Boot", "Maven", "Hibernate", "SQL"],
    // TODO: replace with the actual repo URL
    githubUrl: "https://github.com/ASUDHARSON-2004-GIT",
    liveUrl: null,
  },
  {
    title: "Collaborative Code Editor",
    description:
      "A real-time code editor with room-based sessions. Handles simultaneous users and data consistency using WebSocket-based sync.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    githubUrl: "https://github.com/ASUDHARSON-2004-GIT/Code-Sync",
    liveUrl: "https://code-sync-six-woad.vercel.app/",
  },
];

// ─── Social / Contact Links ─────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/ASUDHARSON-2004-GIT",
  linkedin: "https://www.linkedin.com/in/sudharson-a-2004cse/",
  portfolio: "#hero", // This portfolio itself — will scroll to top
  email: "mailto:dharsonsudharson@gmail.com",
  whatsapp: "https://wa.me/918098187264?text=Hi%20Sudharson%21%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.",
};