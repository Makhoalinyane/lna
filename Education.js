// src/pages/Education.jsx
import React from "react";

const Education = () => {
  const programs = [
    {
      title: "Workshops and Symposiums",
      description: "Regular training workshops and symposiums focusing on evidence-based nursing practices, new technologies, and specialized healthcare skills.",
      duration: "Varies by program",
    },
    {
      title: "Continuing Professional Development (CPD)",
      description: "CPD programs help nurses enhance their skills, meet licensing requirements, and stay updated with modern medical advancements.",
      duration: "Year-round",
    },
    {
      title: "Research and Development Support",
      description: "Support for conducting research and publishing studies in healthcare innovations and nursing best practices.",
      duration: "On-demand",
    },
  ];

  const resources = [
    "Nursing Research Journals",
    "Training Manuals and Study Guides",
    "Webinars by International Experts",
    "Mentorship and Coaching Programs",
  ];

  const scholarshipInfo = {
    description:
      "The Lesotho Nurses Association offers scholarships to members pursuing higher education and specialized training programs. Scholarships are awarded based on academic merit, financial need, and commitment to professional growth.",
    applicationDeadline: "June 30, 2024",
    eligibility: [
      "Must be an active, registered member of the Lesotho Nurses Association.",
      "Demonstrated academic excellence and professional dedication.",
      "Involvement in community health programs and volunteer activities.",
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Education and Training</h1>

      {/* Educational Programs Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Programs</h2>
        <ul style={styles.list}>
          {programs.map((program, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <p><strong>Duration:</strong> {program.duration}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Resources Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Educational Resources</h2>
        <ul style={styles.resourceList}>
          {resources.map((resource, index) => (
            <li key={index} style={styles.resourceItem}>
              {resource}
            </li>
          ))}
        </ul>
      </section>

      {/* Scholarship Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Scholarship Opportunities</h2>
        <p>{scholarshipInfo.description}</p>
        <p><strong>Application Deadline:</strong> {scholarshipInfo.applicationDeadline}</p>
        <h3>Eligibility Criteria:</h3>
        <ul style={styles.list}>
          {scholarshipInfo.eligibility.map((criteria, index) => (
            <li key={index} style={styles.listItem}>
              {criteria}
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
    padding: "1rem",
    border: "1px solid #007BFF",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  resourceList: {
    listStyleType: "circle",
    paddingLeft: "2rem",
  },
  resourceItem: {
    marginBottom: "0.5rem",
  },
};

export default Education;
