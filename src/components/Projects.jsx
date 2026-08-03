/**
 * Projects.jsx — Project showcase cards.
 * 
 * Features:
 * - Cards with hover lift + glow effect
 * - Tech stack tags
 * - GitHub + Live demo icon links (open in new tab)
 * - Placeholder URLs from data.js
 */
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data';
import './Projects.css';

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section__header">
            <h2 className="section__title">Projects</h2>
            <p className="section__subtitle">
              Things I've built and contributed to
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.15} direction="up">
              <div className="projects__card">
                {/* Card Header */}
                <div className="projects__card-header">
                  <div className="projects__card-folder">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <div className="projects__card-links">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <FiGithub />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects__card-link"
                        aria-label={`${project.title} live demo`}
                      >
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>

                {/* Tech Stack Tags */}
                <div className="projects__card-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="projects__card-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
