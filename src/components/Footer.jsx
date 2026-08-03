/**
 * Footer.jsx — Simple footer with copyright and social links.
 */
import { FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* Social Links */}
        <div className="footer__socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={socialLinks.portfolio} aria-label="Portfolio">
            <FiGlobe />
          </a>
        </div>

        {/* Credit */}
        <p className="footer__credit">
          Designed & Built by <span className="footer__name">{personalInfo.name}</span>
        </p>

        {/* Copyright */}
        <p className="footer__copyright">
          © {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
