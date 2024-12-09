// src/pages/News.jsx
import React from "react";

const News = () => {
  const newsUpdates = [
    {
      title: "Membership Certificates Awarded",
      date: "December 15, 2024",
      description:
        "The Lesotho Nurses Association celebrated its annual membership recognition event, awarding certificates to newly registered members.",
      link: "#",
    },
    {
      title: "Annual General Meeting (AGM) 2024 Announced",
      date: "November 20, 2024",
      description:
        "The Annual General Meeting will be held in March 2024 at the Association's headquarters in Maseru. All members are encouraged to participate.",
      link: "#",
    },
    {
      title: "Leadership Development Workshop Success",
      date: "October 10, 2024",
      description:
        "Our latest leadership workshop was a resounding success, equipping senior nurses with essential management and leadership skills.",
      link: "#",
    },
  ];

  const upcomingEvents = [
    {
      event: "Nursing Leadership Workshop",
      date: "April 15, 2025",
      location: "Lesotho Training Center, Maseru",
    },
    {
      event: "Community Health Awareness Campaign",
      date: "May 10-12, 2025",
      location: "Various Rural Communities, Lesotho",
    },
    {
      event: "Continuing Education Seminar",
      date: "June 20, 2025",
      location: "Lesotho Health Institute, Maseru",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>News and Events</h1>

      {/* News Updates Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Latest News</h2>
        <ul style={styles.list}>
          {newsUpdates.map((news, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{news.title}</h3>
              <p style={styles.metaData}><strong>Date:</strong> {news.date}</p>
              <p>{news.description}</p>
              <a href={news.link} style={styles.link}>Read More</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Upcoming Events Section */}
      <section style={styles.section}>
        <h2 style={styles.subHeader}>Upcoming Events</h2>
        <ul style={styles.list}>
          {upcomingEvents.map((event, index) => (
            <li key={index} style={styles.listItem}>
              <h3>{event.event}</h3>
              <p style={styles.metaData}><strong>Date:</strong> {event.date}</p>
              <p style={styles.metaData}><strong>Location:</strong> {event.location}</p>
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

export default News;
