# Sudharson A — Portfolio

A modern, responsive personal portfolio website built with React (Vite), Framer Motion, and plain CSS. Dark theme with teal accent.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
My-Portfolio/
├── public/
│   ├── profile.jpg          ← YOUR profile photo (replace this)
│   ├── resume.pdf           ← YOUR resume PDF (add this)
│   └── vite.svg             ← Favicon
├── src/
│   ├── components/          ← All UI sections
│   │   ├── Navbar.jsx/.css
│   │   ├── Hero.jsx/.css
│   │   ├── About.jsx/.css
│   │   ├── Skills.jsx/.css
│   │   ├── Experience.jsx/.css
│   │   ├── Projects.jsx/.css
│   │   ├── Contact.jsx/.css
│   │   ├── Footer.jsx/.css
│   │   └── ScrollReveal.jsx ← Reusable animation wrapper
│   ├── data.js              ← ⭐ ALL CONTENT LIVES HERE
│   ├── App.jsx/.css
│   ├── index.css            ← Design system / global styles
│   └── main.jsx             ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

## ✏️ How to Customize

### Profile Photo
Drop your photo into `public/profile.jpg`. If no photo is found, your initials are shown as a fallback.

### Resume
Drop your resume PDF into `public/resume.pdf`. The "Download Resume" button will link to it automatically.

### Content
**Edit `src/data.js`** — this single file controls all text, skills, experience, projects, and links across the entire site:

- `personalInfo` — Name, title, tagline, email, phone
- `skills` — Grouped skill categories and items
- `experience` — Work history entries
- `projects` — Project cards with GitHub/live URLs
- `socialLinks` — GitHub, LinkedIn, email, WhatsApp links

### Project URLs
In `data.js`, update the `githubUrl` and `liveUrl` fields in the `projects` array:

```js
{
  title: "FreightKey",
  githubUrl: "https://github.com/your-username/freightkey",  // ← Replace
  liveUrl: "https://freightkey.app",                          // ← Replace (or null)
}
```

### Social Links
Update the `socialLinks` object in `data.js`:

```js
export const socialLinks = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-profile",
  // ...
};
```

## 🌐 Deployment

### Vercel (Recommended — Free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Netlify (Alternative — Free)
```bash
# Build first
npm run build

# Drag & drop the `dist/` folder at netlify.com
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Framer Motion | Scroll-triggered animations |
| React Icons | Icon library (Feather + Font Awesome) |
| Plain CSS | Styling with custom properties |
| Inter | Typography (Google Fonts) |

## 📄 License

MIT
