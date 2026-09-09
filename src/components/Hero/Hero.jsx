import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { Mail, ArrowRight, Download } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Hero.css";

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      setText(currentWord.substring(0, text.length - 1));
    } else {
      setText(currentWord.substring(0, text.length + 1));
    }

    if (!isDeleting && text === currentWord) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [text, wordIndex, isDeleting, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const typedText = useTypewriter(personalInfo.roles);

  return (
    <section className="hero" id="hero">
      {/* Ambient Background */}
      <div className="hero-bg">
        <div className="hero-bg-orb" />
        <div className="hero-bg-orb" />
        <div className="hero-bg-orb" />
        <div className="hero-grid" />
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          <span className="hero-badge-dot" />
          Open to opportunities
        </motion.div>

        <motion.h1 className="hero-name" variants={itemVariants}>
          Hi, I'm{" "}
          <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        <motion.div className="hero-typewriter-wrapper" variants={itemVariants}>
          <span className="hero-typewriter-label">I build as a </span>
          <span className="hero-typewriter-text">{typedText}</span>
          <span className="hero-cursor" />
        </motion.div>

        <motion.p className="hero-description" variants={itemVariants}>
          {personalInfo.tagline} - AI and Data Science enthusiast with hands-on experience in data analysis, machine learning and data visualization, combined with strong understanding of business and management.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#projects" className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          <a
            href={personalInfo.resumeFile}
            download
            className="btn-outline"
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-link"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        scroll
        <div className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
