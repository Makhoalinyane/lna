// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Membership from "./Pages/Membership";
import Education from "./Pages/Education";
import News from "./Pages/News";
import Advocacy from "./Pages/Advocacy";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/education" element={<Education />} />
          <Route path="/news" element={<News />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

