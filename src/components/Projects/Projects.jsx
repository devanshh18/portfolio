import { motion } from "framer-motion";
import { projects } from "../../data/portfolioData";
import { ExternalLink, Star, Database, BarChart3, Cpu, LayoutDashboard } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import "./Projects.css";

const projectIcons = {
  1: Cpu,             // Krishiv — ML/IoT
  2: Database,        // AnalytixAI — Data platform
  3: BarChart3,       // Student Performance — Analytics
  4: LayoutDashboard, // Retail Dashboard — BI
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            My Work
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeInUp}
            style={{ marginBottom: "var(--space-2xl)" }}
          >
            End-to-end solutions from problem to deployment - each project tells
            a story of data-driven impact.
          </motion.p>

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = projectIcons[project.id] || Cpu;
              return (
                <motion.div
                  key={project.id}
                  className="project-card glass-card"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {/* Visual / Image */}
                  <div className="project-visual">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-placeholder">
                        <div className="project-placeholder-pattern" />
                        <div className="project-placeholder-icon">
                          <Icon size={44} />
                        </div>
                        <div className="project-placeholder-title">
                          {project.title}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="project-content">
                    <div className="project-meta">
                      <span className="project-date">{project.date}</span>
                      {project.featured && (
                        <span className="project-featured-badge">
                          <Star size={11} fill="#ffffff" strokeWidth={0} />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-subtitle">{project.subtitle}</span>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-highlights">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="project-highlight">
                          <span className="project-highlight-dot" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiGithub size={15} />
                          Source Code
                        </a>
                      )}
                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
