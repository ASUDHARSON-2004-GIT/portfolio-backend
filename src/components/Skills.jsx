/**
 * Skills.jsx — Grouped skill categories with animated tags.
 * 
 * Features:
 * - Grid layout of skill categories
 * - Staggered tag animation on scroll
 * - Pill/tag design for individual skills
 */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data';
import './Skills.css';

/**
 * SkillCategory — A single category card with staggered tag entrance.
 */
const SkillCategory = ({ category, items, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: index * 0.1,
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.35, ease: 'easeOut' },
    },
  };

  return (
    <div className="skills__category" ref={ref}>
      <h3 className="skills__category-title">{category}</h3>
      <motion.div
        className="skills__tags"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {items.map((skill) => (
          <motion.span
            key={skill}
            className="skills__tag"
            variants={tagVariants}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section__header">
            <h2 className="section__title">Skills</h2>
            <p className="section__subtitle">
              Technologies and tools I work with daily
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="skills__grid">
          {skills.map((group, index) => (
            <SkillCategory
              key={group.category}
              category={group.category}
              items={group.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
