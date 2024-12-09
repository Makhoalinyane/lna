import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to the Lesotho Nurses Association</h1>
      <p style={styles.subHeader}>Providing support, education, and resources to nurses in Lesotho and beyond.</p>
      
      {/* Mission Statement */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Mission</h2>
        <p>
          The Lesotho Nurses Association (LNA) is dedicated to enhancing the professional development of nurses across Lesotho.
          Our mission is to support, advocate, and provide resources for nurses while advancing the nursing profession in healthcare.
          We strive to ensure that nurses are empowered, skilled, and recognized for their critical role in patient care.
        </p>
      </section>

      {/* Vision Statement */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Vision</h2>
        <p>
          To be the leading voice of the nursing profession in Lesotho, fostering excellence in nursing practice, education,
          and research, while improving healthcare outcomes for the communities we serve.
        </p>
      </section>

      {/* Objectives Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Our Objectives</h2>
        <ul style={styles.list}>
          <li>Support and advocate for the interests of nurses in all sectors of healthcare.</li>
          <li>Provide opportunities for continuing education and professional development.</li>
          <li>Improve nursing care and healthcare standards in Lesotho.</li>
          <li>Collaborate with local and international healthcare organizations to improve nursing practice and policy.</li>
        </ul>
      </section>

      {/* Membership Invitation */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Join Us</h2>
        <p>
          Becoming a member of the Lesotho Nurses Association offers you the opportunity to be part of a community that is shaping the future of healthcare.
          Our members benefit from training programs, leadership opportunities, and access to a network of professionals who are committed to nursing excellence.
        </p>
        <p><strong>Join us today and make a difference!</strong></p>
      </section>

      {/* Call to Action */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Get Involved</h2>
        <p>
          Whether you're a student nurse, a seasoned professional, or an advocate for nursing, there's a place for you in our community.
          Get involved by attending events, enrolling in training programs, or volunteering for healthcare outreach initiatives.
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "'Roboto', sans-serif",
    lineHeight: "1.6",
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
    marginBottom: "1.5rem",
    letterSpacing: "1px",
  },
  subHeader: {
    fontSize: "1.8rem",
    color: "#0056b3",
    marginBottom: "1rem",
  },
  section: {
    marginBottom: "2rem",
    maxWidth: "800px",
    width: "100%",
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
    padding: 0,
    fontSize: "1.1rem",
    color: "#555",
  },
};

export default Home;
