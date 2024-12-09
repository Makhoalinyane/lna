// src/pages/Resources.jsx
import React from "react";

const Resources = () => {
  const resourceList = [
    {
      title: "Lesotho Nursing Practice Guidelines",
      description:
        "Comprehensive guidelines on best practices for patient care, including nursing protocols, clinical standards, and emergency procedures.",
      link: "https://example.com/lesotho-nursing-guidelines.pdf",
      type: "PDF",
    },
    {
      title: "Community Health & Outreach Guide",
      description:
        "A guide for nurses involved in community outreach, covering health promotion strategies, vaccination programs, and public health education.",
      link: "https://example.com/community-health-guide.pdf",
      type: "PDF",
    },
    {
      title: "Leadership Development Toolkit",
      description:
        "A training manual designed for senior nurses to develop leadership, management, and team-building skills.",
      link: "https://example.com/leadership-development-toolkit.pdf",
      type: "PDF",
    },
    {
      title: "Research & Development Support",
      description:
        "Access the latest research papers and project proposals focused on advancing the nursing profession and healthcare innovations.",
      link: "https://example.com/research-development-support",
      type: "Website",
    },
    {
      title: "Emergency Response Protocols",
      description:
        "A detailed reference on handling emergency situations, including CPR, trauma management, and infection control procedures.",
      link: "https://example.com/emergency-response-protocols.pdf",
      type: "PDF",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Resources for Nurses</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Key Nursing Resources</h2>
        <ul style={styles.list}>
          {resourceList.map((resource, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <p>
                <strong>Type:</strong> {resource.type}
              </p>
              <a href={resource.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                Download/View Resource
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
  header: {
    fontSize: "2.5rem",
    color: "#007BFF",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  section: {
    marginBottom: "2rem",
  },
  subHeader: {
    fontSize: "1.8rem",
    color: "#0056b3",
    marginBottom: "1rem",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    marginBottom: "1rem",
    border: "1px solid #007BFF",
    padding: "1rem",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Resources;
