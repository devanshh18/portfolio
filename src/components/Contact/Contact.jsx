import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { Mail, Phone, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import "./Contact.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // "idle" | "submitting" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setErrorMessage("");

    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject") || "Portfolio Inquiry";
    const message = formData.get("message");

    setSenderName(name);

    try {
      const response = await fetch("https://formsubmit.co/ajax/devanshpatil2202@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: `Portfolio Inquiry from ${name}: ${subject}`,
          message: message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === "true" || result.success === true)) {
        setFormStatus("success");
        form.reset();
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setFormStatus("error");
      setErrorMessage(
        "Could not send message automatically. Please try again or email devanshpatil2202@gmail.com directly."
      );
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="section-label" variants={fadeInUp}>
            Get In Touch
          </motion.span>

          <div className="contact-wrapper">
            <motion.div className="contact-info" variants={fadeInUp}>
              <h2 className="contact-heading">
                Let's Build Something{" "}
                <span className="gradient-text">Together</span>
              </h2>
              <p className="contact-description">
                Have a project in mind, want to collaborate, or just want to
                say hi? I'd love to hear from you. Drop me a message and I'll
                get back to you as soon as possible.
              </p>

              <div className="contact-links">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <Mail size={18} />
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <FiLinkedin size={18} />
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">
                      linkedin.com/in/devansh-patil
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <FiGithub size={18} />
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">
                      github.com/devanshh18
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="contact-link-card glass-card"
                >
                  <div className="contact-link-icon">
                    <Phone size={18} />
                  </div>
                  <div className="contact-link-content">
                    <span className="contact-link-label">Phone</span>
                    <span className="contact-link-value">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-card glass-card"
              variants={fadeInUp}
            >
              {formStatus === "success" ? (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="contact-success-icon">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="contact-success-title">Message Delivered!</h3>
                  <p className="contact-success-desc">
                    Thank you{senderName ? `, ${senderName}` : ""}! Your message has been sent directly to Devansh's inbox at <strong>{personalInfo.email}</strong>. I'll get back to you shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-outline contact-reset-btn"
                    onClick={() => setFormStatus("idle")}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="contact-form-title">Send a Message</h3>

                  {formStatus === "error" && (
                    <div className="contact-error-banner">
                      <AlertCircle size={18} />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-input"
                        placeholder="Your name"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="form-input"
                        placeholder="you@example.com"
                        required
                        disabled={formStatus === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      className="form-input"
                      placeholder="What's this about?"
                      disabled={formStatus === "submitting"}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="form-textarea"
                      placeholder="Tell me about your project or idea..."
                      required
                      disabled={formStatus === "submitting"}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary form-submit"
                    disabled={formStatus === "submitting"}
                    whileHover={{ scale: formStatus === "submitting" ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === "submitting" ? 1 : 0.98 }}
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <Loader2 size={16} className="contact-spinner" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
