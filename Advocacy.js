// src/pages/Advocacy.jsx
import React from "react";

const Advocacy = () => {
  const initiatives = [
    {
      title: "Advocating for Nurses’ Rights",
      description:
        "We represent nurses in both public and private sectors by negotiating fair compensation, improved working conditions, and enhanced professional recognition.",
      link: "#",
    },
    {
      title: "Representation in Local & International Forums",
      description:
        "We ensure nurses have a voice at key national and international forums, promoting best practices and setting industry standards in healthcare delivery.",
      link: "#",
    },
    {
      title: "Policy Influence & Collective Bargaining",
      description:
        "Our association actively engages with policymakers to influence healthcare policy, ensuring a safe and supportive environment for nurses and their patients.",
      link: "#",
    },
  ];

  const successStories = [
    {
      title: "Collective Bargaining Agreements",
      description:
        "Through successful negotiations, we've secured better employment contracts, ensuring job security, competitive salaries, and improved healthcare benefits.",
      link: "#",
    },
    {
      title: "Nursing Leadership Recognition",
      description:
        "Our advocacy efforts have led to increased recognition of nurses' leadership roles in both healthcare management and public health policy development.",
      link: "#",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Advocacy and Policy</h1>

      {/* Advocacy Initiatives Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Advocacy Initiatives</h2>
        <ul style={styles.list}>
          {initiatives.map((initiative, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{initiative.title}</h3>
              <p>{initiative.description}</p>
              <a href={initiative.link} style={styles.link}>Learn More</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Advocacy Success Stories Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Success Stories</h2>
        <ul style={styles.list}>
          {successStories.map((story, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
              <a href={story.link} style={styles.link}>Read More</a>
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

export default Advocacy;
