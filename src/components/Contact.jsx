/**
 * Contact.jsx — Contact section with direct links.
 * 
 * No form, no backend — pure client-side links:
 * - Email → mailto: opens default mail app
 * - WhatsApp → wa.me click-to-chat with prefilled greeting
 * - Social icons: GitHub, LinkedIn, Portfolio
 */
import { FiMail, FiGithub, FiLinkedin, FiGlobe } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import { personalInfo, socialLinks } from '../data';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        {/* Section Header */}
        <ScrollReveal>
          <div className="section__header">
            <h2 className="section__title">Get In Touch</h2>
            <p className="section__subtitle">
              Have a project in mind or want to collaborate? I'd like to hear from you.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Actions */}
        <div className="contact__actions">
          {/* Email Button — opens Gmail Compose directly */}
          <ScrollReveal delay={0.1}>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}&su=${encodeURIComponent('Hello from your Portfolio')}&body=${encodeURIComponent('Hi Sudharson,\n\n')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card contact__card--email"
            >
              <div className="contact__card-icon">
                <FiMail />
              </div>
              <h3 className="contact__card-title">Email Me</h3>
              <p className="contact__card-detail">{personalInfo.email}</p>
              <span className="contact__card-cta">Send Email →</span>
            </a>
          </ScrollReveal>

          {/* WhatsApp Button */}
          <ScrollReveal delay={0.2}>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card contact__card--whatsapp"
            >
              <div className="contact__card-icon contact__card-icon--whatsapp">
                <FaWhatsapp />
              </div>
              <h3 className="contact__card-title">WhatsApp</h3>
              <p className="contact__card-detail">+91 80981 87264</p>
              <span className="contact__card-cta">Send Message →</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Social Links */}
        <ScrollReveal delay={0.3}>
          <div className="contact__socials">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social-link"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href={socialLinks.portfolio}
              className="contact__social-link"
              aria-label="Portfolio"
            >
              <FiGlobe />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
