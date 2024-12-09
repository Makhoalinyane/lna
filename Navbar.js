// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#007BFF", color: "#FFF" }}>
      <ul style={{ listStyleType: "none", display: "flex", gap: "1rem" }}>
        <li><Link to="/" style={{ color: "#FFF", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#FFF", textDecoration: "none" }}>About Us</Link></li>
        <li><Link to="/membership" style={{ color: "#FFF", textDecoration: "none" }}>Membership</Link></li>
        <li><Link to="/education" style={{ color: "#FFF", textDecoration: "none" }}>Education & Training</Link></li>
        <li><Link to="/news" style={{ color: "#FFF", textDecoration: "none" }}>News</Link></li>
        <li><Link to="/advocacy" style={{ color: "#FFF", textDecoration: "none" }}>Advocacy</Link></li>
        <li><Link to="/events" style={{ color: "#FFF", textDecoration: "none" }}>Events</Link></li>
        <li><Link to="/resources" style={{ color: "#FFF", textDecoration: "none" }}>Resources</Link></li>
        <li><Link to="/careers" style={{ color: "#FFF", textDecoration: "none" }}>Careers</Link></li>
        <li><Link to="/contact" style={{ color: "#FFF", textDecoration: "none" }}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
