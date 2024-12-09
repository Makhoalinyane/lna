// src/pages/About.jsx
import React from "react";

const About = () => {
  const leadership = [
    { name: "President", title: "Executive Leader", bio: "Responsible for overall leadership and strategic direction of the association." },
    { name: "Deputy President", title: "Deputy Leader", bio: "Supports the President and oversees major organizational programs." },
    { name: "Secretary General", title: "Chief Administrator", bio: "Manages administration, communication, and governance tasks." },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Us</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Who We Are</h2>
        <p>
          Founded in 1963, the Lesotho Nurses Association (LNA) was officially registered on June 3, 1999, under Registration No. 99/39. 
          The headquarters is located at 388 Nightingale Road, Maseru, Lesotho. LNA represents and supports nurses, ensuring high 
          professional standards, advocating for their rights, and promoting professional development.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Vision</h2>
        <p>
          A strong nursing leadership for a healthy, motivated, and efficient health workforce serving the people of Lesotho.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Mission</h2>
        <p>
          The mission of the Lesotho Nurses Association is to advance members' interests through professional development, 
          advocacy, continuing education, and establishing nursing care standards.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Objectives</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Ensure efficient nursing services across Lesotho.</li>
          <li style={styles.listItem}>Raise the status and integrity of the nursing profession.</li>
          <li style={styles.listItem}>Provide continuing education through workshops and symposiums.</li>
          <li style={styles.listItem}>Encourage research in nursing practices and healthcare improvements.</li>
          <li style={styles.listItem}>Collaborate with local, national, and international organizations.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Leadership</h2>
        <ul style={styles.list}>
          {leadership.map((leader, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{leader.name} - {leader.title}</h3>
              <p>{leader.bio}</p>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our History</h2>
        <p>
          Since its founding in 1963, the Lesotho Nurses Association has grown from a small professional group 
          to a nationwide organization representing nurses across the country. Its achievements include policy 
          reforms, improved access to education, and advocacy for nurses' welfare and rights.
        </p>
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
};

export default About;
