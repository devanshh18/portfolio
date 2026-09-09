import { motion } from "framer-motion";
import { experience } from "../../data/portfolioData";
import { ChevronRight, MapPin } from "lucide-react";
import "./Experience.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Experience
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Where I've <span className="gradient-text">Worked</span>
          </motion.h2>

          <div
            className="experience-timeline"
            style={{ marginTop: "var(--space-2xl)" }}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="experience-item glass-card"
                variants={fadeInUp}
              >
                <div className="experience-header">
                  <div>
                    <div className="experience-role">{exp.role}</div>
                    <div className="experience-company">
                      {exp.company}
                      <span style={{ color: "var(--text-muted)" }}>•</span>
                      <MapPin size={13} />
                      {exp.location}
                    </div>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <div className="experience-highlights">
                  {exp.highlights.map((h, j) => (
                    <motion.div
                      key={j}
                      className="experience-highlight"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 + 0.3 }}
                    >
                      <ChevronRight
                        className="experience-highlight-icon"
                        size={16}
                      />
                      <span>{h}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
