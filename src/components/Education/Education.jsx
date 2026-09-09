import { motion } from "framer-motion";
import { education, certifications } from "../../data/portfolioData";
import { GraduationCap, Award } from "lucide-react";
import "./Education.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Education
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Education &{" "}
            <span className="gradient-text">Certifications</span>
          </motion.h2>

          <div
            className="education-grid"
            style={{ marginTop: "var(--space-2xl)" }}
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="education-card glass-card"
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="education-icon">
                  <GraduationCap size={22} />
                </div>
                <div className="education-degree">{edu.degree}</div>
                <div className="education-institution">{edu.institution}</div>
                <div className="education-period">{edu.period}</div>
              </motion.div>
            ))}
          </div>

          <motion.h3 className="certifications-title" variants={fadeInUp}>
            Certifications
          </motion.h3>

          <div className="certifications-grid">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="certification-card glass-card"
                variants={fadeInUp}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="certification-icon">
                  <Award size={20} />
                </div>
                <div className="certification-content">
                  <div className="certification-title">{cert.title}</div>
                  <div className="certification-issuer">{cert.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
