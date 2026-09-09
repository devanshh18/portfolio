import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolioData";
import { Briefcase, Code2, Cpu, BarChart3, Server, Wrench } from "lucide-react";
import "./Skills.css";

const iconMap = {
  briefcase: Briefcase,
  code: Code2,
  brain: Cpu,
  chart: BarChart3,
  server: Server,
  tools: Wrench,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Tech Stack
          </motion.span>
          <motion.h2 className="section-title" variants={fadeInUp}>
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeInUp}
            style={{ marginBottom: "var(--space-2xl)" }}
          >
            Tools and technologies I use to bring ideas to life - from data
            pipelines to full-stack products.
          </motion.p>

          <div className="skills-bento">
            {skillCategories.map((cat, i) => {
              const Icon = iconMap[cat.icon] || Code2;
              return (
                <motion.div
                  key={cat.title}
                  className="skill-category glass-card"
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="skill-category-header">
                    <div className="skill-category-icon">
                      <Icon size={20} />
                    </div>
                    <h3 className="skill-category-title">{cat.title}</h3>
                  </div>
                  <div className="skill-list">
                    {cat.skills.map((skill, j) => (
                      <motion.span
                        key={skill}
                        className="skill-chip"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.05 + j * 0.03,
                          duration: 0.4,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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
