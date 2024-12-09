// src/pages/Careers.jsx
import React from "react";

const Careers = () => {
  const jobListings = [
    {
      title: "President - Executive Leader",
      location: "Lesotho Nurses Association Headquarters, Maseru",
      description:
        "Lead the Lesotho Nurses Association, overseeing strategic direction, policy-making, and advocacy for nurses' welfare. The ideal candidate must have exceptional leadership experience and a deep understanding of the healthcare industry.",
      applyLink: "#",
    },
    {
      title: "Deputy President - Deputy Leader",
      location: "Lesotho Nurses Association Headquarters, Maseru",
      description:
        "Assist the President in policy development, community engagement, and project management. Applicants must have experience in executive management and healthcare administration.",
      applyLink: "#",
    },
    {
      title: "Secretary General - Chief Administrator",
      location: "Lesotho Nurses Association Headquarters, Maseru",
      description:
        "Manage daily operations, ensure policy compliance, and oversee communication within the association. The position requires experience in organizational administration and communication.",
      applyLink: "#",
    },
    {
      title: "Treasurer - Financial Controller",
      location: "Lesotho Nurses Association Headquarters, Maseru",
      description:
        "Handle financial planning, budgeting, and financial reporting for the association. A background in finance, accounting, or a related field is essential.",
      applyLink: "#",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Career Opportunities</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Current Job Openings</h2>
        <ul style={styles.list}>
          {jobListings.map((job, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{job.title}</h3>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
              <p>{job.description}</p>
              <a href={job.applyLink} style={styles.link}>
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>How to Apply</h2>
        <p>
          To apply for any of the positions listed above, click the "Apply Now" link next to the job title. You will be directed to the job application page for detailed instructions. For more information, contact our HR department at <strong>hr@lesothonurses.org</strong>.
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
    marginBottom: "1.5rem",
    border: "1px solid #007BFF",
    padding: "1.5rem",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Careers;
