/**
 * Experience.jsx — Work experience timeline.
 * 
 * Features:
 * - Vertical timeline with connecting line
 * - Cards slide in from alternating directions
 * - Company, role, period, and bullet points
 */
import ScrollReveal from './ScrollReveal';
import { experience } from '../data';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section__header">
            <h2 className="section__title">Experience</h2>
            <p className="section__subtitle">
              My professional journey so far
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="experience__timeline">
          {experience.map((exp, index) => (
            <ScrollReveal
              key={index}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.15}
            >
              <div className={`experience__card ${index % 2 === 0 ? 'experience__card--left' : 'experience__card--right'}`}>
                {/* Timeline dot */}
                <div className="experience__dot" />
                
                {/* Card content */}
                <div className="experience__content">
                  <div className="experience__header">
                    <h3 className="experience__company">{exp.company}</h3>
                    <span className="experience__period">{exp.period}</span>
                  </div>
                  <p className="experience__role">{exp.role}</p>
                  <ul className="experience__bullets">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
