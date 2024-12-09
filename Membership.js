// src/pages/Membership.jsx
import React, { useState } from "react";

const Membership = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    membershipType: "Full Member",
  });

  const membershipTypes = [
    { type: "Full Member", eligibility: "Registered nurses and nursing assistants.", benefits: "Voting rights, executive eligibility, and access to training programs." },
    { type: "Associate Member", eligibility: "Student nurses, retired nurses, and specialists.", benefits: "Participation in workshops, research, and networking events." },
    { type: "Honorary Member", eligibility: "Granted by the association for exceptional contributions to the nursing profession.", benefits: "Recognition and participation in honorary events." },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}, for registering as a ${formData.membershipType} member!`);
    setFormData({ name: "", email: "", membershipType: "Full Member" }); // Reset the form
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Membership</h1>
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Why Join Us?</h2>
        <p>
          Joining the Lesotho Nurses Association gives you access to professional development programs, leadership opportunities, and a supportive
          network of healthcare professionals dedicated to advancing nursing excellence.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Membership Types</h2>
        <ul style={styles.list}>
          {membershipTypes.map((type, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{type.type}</h3>
              <p><strong>Eligibility:</strong> {type.eligibility}</p>
              <p><strong>Benefits:</strong> {type.benefits}</p>
            </li>
          ))}
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Join Now</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="membershipType">Membership Type:</label>
            <select
              id="membershipType"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              style={styles.select}
            >
              {membershipTypes.map((type, index) => (
                <option key={index} value={type.type}>{type.type}</option>
              ))}
            </select>
          </div>
          <button type="submit" style={styles.button}>Join Now</button>
        </form>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "0.5rem",
    fontWeight: "bold",
  },
  input: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  select: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "0.7rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Membership;
