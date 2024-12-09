// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setFormStatus("Thank you for reaching out! We will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setFormStatus("Please fill in all fields before submitting.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>

      {formStatus && (
        <p style={formStatus.includes("Thank you") ? styles.successMessage : styles.errorMessage}>
          {formStatus}
        </p>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="subject" style={styles.label}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            required
          ></textarea>
        </div>

        <button type="submit" style={styles.submitButton}>Send Message</button>
      </form>

      <section style={styles.contactInfoSection}>
        <h2 style={styles.subHeader}>Contact Information</h2>
        <p><strong>Email:</strong> 
          {/* Updated mailto link with subject parameter */}
          <a 
            href="#" 
            onClick={() => window.location.href = "mailto:info@lesothonurses.org?subject=Contact%20from%20Website"} 
            style={styles.link}
          >
            info@lesothonurses.org
          </a>

        </p>
        <p><strong>Phone:</strong> +266 555-123-456</p>
        <p><strong>Physical Address:</strong> 388 Nightingale Road, Maseru, Lesotho</p>
        <p><strong>Postal Address:</strong> P.O. Box 473, Maseru 100, Lesotho</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "3rem 2rem",
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.8",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: "3rem",
    color: "#007BFF",
    textAlign: "center",
    marginBottom: "2rem",
    letterSpacing: "1px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "600px",
    width: "100%",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "2rem",
  },
  formGroup: {
    marginBottom: "1.5rem",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
    color: "#555",
  },
  input: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    transition: "border 0.3s",
  },
  textarea: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    minHeight: "150px",
    transition: "border 0.3s",
  },
  submitButton: {
    padding: "0.8rem",
    fontSize: "1.2rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    marginTop: "1rem",
  },
  contactInfoSection: {
    marginTop: "2rem",
    textAlign: "center",
    maxWidth: "600px",
    width: "100%",
  },
  subHeader: {
    fontSize: "1.8rem",
    color: "#0056b3",
    marginBottom: "1rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  successMessage: {
    color: "green",
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.2rem",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "1.2rem",
  },
};

export default Contact;
