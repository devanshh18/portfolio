import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { MapPin, Mail, Briefcase, GraduationCap } from "lucide-react";
import "./About.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            About Me
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Building at the intersection of{" "}
            <span className="gradient-text">Data & Business</span>
          </motion.h2>

          <div className="about-grid">
            <motion.div className="about-text" variants={fadeInUp}>
              <p className="about-description">{personalInfo.about}</p>

              <div className="about-stats">
                {personalInfo.stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="about-stat glass-card"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="about-stat-value">{stat.value}</div>
                    <div className="about-stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="about-visual" variants={fadeInUp}>
              <div className="about-code-card glass-card">
                <span className="code-comment">{"// devansh.config.js"}</span>
                <br />
                <span className="code-keyword">const</span>{" "}
                <span className="code-property">profile</span>{" "}
                <span className="code-bracket">= {"{"}</span>
                <br />
                &nbsp;&nbsp;
                <span className="code-property">name</span>:{" "}
                <span className="code-string">"Devansh Patil"</span>,
                <br />
                &nbsp;&nbsp;
                <span className="code-property">focus</span>:{" "}
                <span className="code-string">
                  "Business × Data × Technology"
                </span>
                ,
                <br />
                &nbsp;&nbsp;
                <span className="code-property">approach</span>:{" "}
                <span className="code-string">"Understand → Analyze → Build"</span>,
                <br />
                &nbsp;&nbsp;
                <span className="code-property">strengths</span>:{" "}
                <span className="code-string">"Product thinking + technical depth"</span>,
                <br />
                &nbsp;&nbsp;
                <span className="code-property">mindset</span>:{" "}
                <span className="code-string">"Data-driven decision making"</span>,
                <br />
                <span className="code-bracket">{"};"}</span>
              </div>

              <div className="about-info-cards">
                <div className="about-info-card glass-card">
                  <div className="about-info-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="about-info-content">
                    <span className="about-info-label">Location</span>
                    <span className="about-info-value">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="about-info-card glass-card"
                >
                  <div className="about-info-icon">
                    <Mail size={18} />
                  </div>
                  <div className="about-info-content">
                    <span className="about-info-label">Email</span>
                    <span className="about-info-value">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>
                <div className="about-info-card glass-card">
                  <div className="about-info-icon">
                    <Briefcase size={18} />
                  </div>
                  <div className="about-info-content">
                    <span className="about-info-label">Experience</span>
                    <span className="about-info-value">
                      Data Science Intern
                    </span>
                  </div>
                </div>
                <div className="about-info-card glass-card">
                  <div className="about-info-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div className="about-info-content">
                    <span className="about-info-label">Education</span>
                    <span className="about-info-value">
                      PGDM - Data Science & Analytics
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
