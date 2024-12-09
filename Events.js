// src/pages/Events.jsx
import React from "react";

const Events = () => {
  const eventsList = [
    {
      title: "Annual General Meeting 2024",
      date: "March 30, 2024",
      location: "Lesotho Nurses Association Headquarters, Maseru",
      description:
        "Join our Annual General Meeting to review key achievements, elect leadership, and discuss future nursing initiatives.",
      registrationLink: "#",
    },
    {
      title: "Nursing Leadership Workshop",
      date: "April 15, 2024",
      location: "Lesotho Training Center, Maseru",
      description:
        "A leadership workshop focusing on building management and leadership skills among senior nurses and healthcare managers.",
      registrationLink: "#",
    },
    {
      title: "Community Health Awareness Campaign",
      date: "May 10-12, 2024",
      location: "Various Rural Communities, Lesotho",
      description:
        "A nationwide campaign to promote healthcare awareness, immunization drives, and health screenings in underserved communities.",
      registrationLink: "#",
    },
    {
      title: "Continuing Education Seminar",
      date: "June 20, 2024",
      location: "Lesotho Health Institute, Maseru",
      description:
        "Expand your clinical knowledge with hands-on sessions on patient care, infection control, and emerging healthcare technologies.",
      registrationLink: "#",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Upcoming Events</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeader}>Events Calendar</h2>
        <ul style={styles.list}>
          {eventsList.map((event, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{event.title}</h3>
              <p style={styles.metaData}>
                <strong>Date:</strong> {event.date}
              </p>
              <p style={styles.metaData}>
                <strong>Location:</strong> {event.location}
              </p>
              <p>{event.description}</p>
              <a href={event.registrationLink} style={styles.link}>
                Register Now
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
  metaData: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "0.5rem",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default Events;
