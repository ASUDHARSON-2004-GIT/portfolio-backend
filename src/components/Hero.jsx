/**
 * Hero.jsx — Split-layout hero section.
 *
 * Layout:
 *   Left panel  — Big cropped photo with non-square clip-path, scale-fade
 *                 reveal, accent-colored backdrop, hover lift + sliding name badge
 *   Right panel — Greeting, name, animated tagline, about/objective intro,
 *                 CTA buttons with hover micro-interactions
 *
 * Stacks vertically on mobile (image on top).
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiMail } from 'react-icons/fi';
import { personalInfo } from '../data';
import './Hero.css';

const Hero = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Determine accent backdrop from data (or fall back to CSS variable)
  const accentBg = personalInfo.photoAccentColor || undefined;

  /* ── Animation variants ──────────────────────────────────────── */

  // Photo panel: scale-fade reveal
  const photoReveal = {
    hidden: { opacity: 0, scale: 1.08, clipPath: 'inset(8% round 24px)' },
    visible: {
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% round 24px)',
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Right panel: stagger container
  const rightContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.45 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // Tagline: typed-in / reveal effect via clipPath
  const taglineReveal = {
    hidden: { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
    visible: {
      opacity: 1,
      clipPath: 'inset(0 0% 0 0)',
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 },
    },
  };

  // Name badge (slides in on photo hover — controlled via CSS)
  const badgeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut', delay: 1.0 },
    },
  };

  return (
    <section className="hero" id="hero">
      {/* Background decoration */}
      <div className="hero__bg-glow" />
      <div className="hero__bg-grid" />

      <div className="container hero__split">
        {/* ─── LEFT PANEL: Photo ─────────────────────────────── */}
        <div className="hero__left">
          {/* Accent backdrop behind the photo */}
          <motion.div
            className="hero__photo-backdrop"
            style={accentBg ? { background: accentBg } : undefined}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          />

          {/* Photo container with non-square crop & hover effects */}
          <motion.div
            className="hero__photo-frame"
            variants={photoReveal}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__photo-inner">
              {!imgError ? (
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} — ${personalInfo.title}`}
                  className={`hero__photo-img ${imgLoaded ? 'hero__photo-img--loaded' : ''}`}
                  onLoad={() => setImgLoaded(true)}
                  onError={() => setImgError(true)}
                  loading="eager"
                />
              ) : (
                <div className="hero__photo-fallback">
                  <span>{personalInfo.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              )}

              {/* Sliding name badge (appears on hover) */}
              <motion.div
                className="hero__name-badge"
                variants={badgeVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="hero__name-badge-name">{personalInfo.name}</span>
                <span className="hero__name-badge-title">{personalInfo.title}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ─── RIGHT PANEL: Content ─────────────────────────── */}
        <motion.div
          className="hero__right"
          variants={rightContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p className="hero__greeting" variants={fadeUp}>
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1 className="hero__name" variants={fadeUp}>
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p className="hero__title" variants={fadeUp}>
            {personalInfo.title}
          </motion.p>

          {/* Animated tagline */}
          <motion.p className="hero__tagline" variants={taglineReveal}>
            {personalInfo.tagline}
          </motion.p>

          {/* About / objective intro */}
          <motion.p className="hero__intro" variants={fadeUp}>
            {personalInfo.heroIntro}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__buttons" variants={fadeUp}>
            <a href="#projects" className="btn btn--primary hero__btn">
              <span className="btn__text">View Projects</span>
              <FiArrowRight className="btn__icon" />
            </a>
            <a href="#contact" className="btn btn--outline hero__btn">
              <span className="btn__text">Contact Me</span>
              <FiMail className="btn__icon" />
            </a>
            <a
              href={personalInfo.resumeLink}
              className="btn btn--ghost hero__btn"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload className="btn__icon" />
              <span className="btn__text">Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-dot" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
