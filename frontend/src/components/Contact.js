import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "https://my-portfolio-website-pa2y.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Could not reach the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h3>Let's Talk</h3>
          <p>
            I'm currently available for part time position and to explore new
            domains. If you have a project that you want to get started or think
            you need my help, then get in touch.
          </p>
          <div className="contact-details">
            <p>📧 sample_nakshathra@email.com</p>
            <p>📍 Ernakulam, Kerala, India</p>
            <p>📱 +91 96XXXXXXXX</p>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        {submitted ? (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h3>Message Sent! 🎉</h3>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
          </motion.div>
        ) : (
          <div>
            {error && (
              <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Contact;