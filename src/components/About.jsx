/**
 * About.jsx — Career objective / about section.
 * 
 * Features:
 * - Fade-in paragraphs on scroll
 * - Key highlight cards
 */
import ScrollReveal from './ScrollReveal';
import { about } from '../data';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section__header">
            <h2 className="section__title">{about.heading}</h2>
          </div>
        </ScrollReveal>

        <div className="about__grid">
          {/* Text content */}
          <div className="about__text">
            {about.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <p className="about__paragraph">{paragraph}</p>
              </ScrollReveal>
            ))}
          </div>

          {/* Highlight cards */}
          <div className="about__highlights">
            {about.highlights.map((highlight, index) => (
              <ScrollReveal
                key={index}
                direction="right"
                delay={index * 0.1}
              >
                <div className="about__highlight-card">
                  <span className="about__highlight-label">{highlight.label}</span>
                  <span className="about__highlight-value">{highlight.value}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
