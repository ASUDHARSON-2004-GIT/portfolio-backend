/**
 * data.js — Central content file for the portfolio.
 * 
 * Edit this file to update ALL content across the site.
 * No need to touch any component files to change text, links, or skills.
 */

// ─── Personal Info ───────────────────────────────────────────────
export const personalInfo = {
  name: "Sudharson A",
  title: "Backend Developer",
  tagline: "Building robust, scalable APIs that power real-time systems.",
  // Short intro paragraph shown in the hero right panel (about/objective)
  heroIntro:
    "Backend developer building production APIs for a real-time freight & logistics platform. Comfortable across schema design, service logic, and real-time features — from database to deployment.",
  email: "dharsonsudharson@gmail.com",
  phone: "+918098187264",
  // Place your profile photo in /public/profile.jpg (or .png)
  profileImage: "/profile.jpg",
  // Place your resume PDF in /public/resume.pdf
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
    "I'm a backend developer with hands-on experience building production-grade APIs for a real-time freight and logistics platform. At Pro 17 Analytics, I work across the full backend stack — from database schema design to service logic and real-time features.",
    "My day-to-day involves Node.js, TypeScript, Express, Prisma ORM, and PostgreSQL on Azure, with Socket.io powering live communication layers. I'm passionate about writing clean, maintainable code that scales."
  ],
  highlights: [
    { label: "Experince", value: "Backend Developer at Pro 17 Analytics" },
    { label: "Specialization", value: "Production REST APIs & Real-Time Systems" },
    { label: "Core Stack", value: "Node.js · TypeScript · Express · PostgreSQL" },
    { label: "Focus", value: "Schema Design · Service Architecture · Live Features" },
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
    items: ["Node.js", "Express.js", "Prisma ORM", "REST APIs", "Socket.io", "Agora RTC"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL (Azure)", "MySQL", "MongoDB"],
  },
  {
    category: "Cloud & Deployment",
    items: ["Azure (Blob Storage, Key Vault)", "Render", "Vercel", "Netlify"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Firebase", "Supabase"],
  },
  {
    category: "AI Tools",
    items: ["ChatGPT", "Claude", "Copilot", "Loveable","Anti-Gravity","Cursor"],
  },
];

// ─── Experience ──────────────────────────────────────────────────
export const experience = [
  {
    company: "Pro 17 Analytics",
    role: "Backend Developer",
    period: "May 2026 – Jul 2026",
    description: [
      "Building and maintaining production REST APIs for a real-time freight and logistics platform.",
      "Designing database schemas with Prisma ORM on PostgreSQL (Azure-hosted).",
      "Implementing real-time communication features using Socket.io and Agora RTC.",
      "Working with Azure services including Blob Storage and Key Vault for secure file and secret management.",
    ],
  },
  {
    company: "Iconix Software Solutions",
    role: "Front-End Developer Intern",
    period: "Jun 2024 – Jul 2024",
    description: [
      "Developed responsive UI components and contributed to client-facing web applications.",
      "Collaborated with design and backend teams to deliver features on schedule.",
    ],
  },
];

// ─── Projects ────────────────────────────────────────────────────
export const projects = [
  {
    title: "FreightKey",
    description:
      "A comprehensive freight and logistics backend platform powering real-time load tracking, driver management, and shipment workflows with live communication capabilities.",
    techStack: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Azure", "Socket.io", "Agora RTC"],
    // Replace with your actual URLs:
    githubUrl: "https://github.com/ASUDHARSON-2004-GIT",
    liveUrl: null, // Set to null if no live demo
  },
  {
    title: "Collaborative Code Editor",
    description:
      "A real-time collaborative code editor enabling multiple users to write, edit, and execute code simultaneously with instant synchronization.",
    techStack: ["Node.js", "Express", "MongoDB", "Socket.io"],
    // Replace with your actual URLs:
    githubUrl: "https://github.com/ASUDHARSON-2004-GIT/Code-Sync",
    liveUrl: "https://code-sync-six-woad.vercel.app/",
  },
];

// ─── Social / Contact Links ─────────────────────────────────────
export const socialLinks = {
  github: "https://github.com/ASUDHARSON-2004-GIT",       // Replace with your actual GitHub
  linkedin: "https://www.linkedin.com/in/sudharson-a-2004cse/", // Replace with your actual LinkedIn
  portfolio: "#hero", // This portfolio itself — will scroll to top
  email: "mailto:dharsonsudharson@gmail.com",
  whatsapp: "https://wa.me/918098187264?text=Hi%20Sudharson%21%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.",
};
