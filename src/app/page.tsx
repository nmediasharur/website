"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check system preference or default to light
    const savedTheme = localStorage.getItem("portfolio-theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container">
      {/* Theme Toggle Nav */}
      <nav className="nav-header">
        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === "light" ? (
            <><span>☾</span> Dark Mode</>
          ) : (
            <><span>☀</span> Light Mode</>
          )}
        </button>
      </nav>

      {/* Header / Hero */}
      <header className="section hero-layout">
        <div className="hero-image-wrapper">
          <Image 
            src="/profile.jpeg" 
            alt="Hemapriyan R K" 
            width={250} 
            height={250} 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
            priority
          />
        </div>
        <div>
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>HEMAPRIYAN R K</h1>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "1.2rem", color: "var(--foreground)", opacity: 0.8 }}>Student at Vellore Institute of Technology</p>
          <p style={{ margin: "0.5rem 0 2rem 0", opacity: 0.7 }}>Computer Science and Engineering (Data Science)</p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
            <a href="https://www.linkedin.com/in/hemapriyan-rk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>LinkedIn</a>
            <a href="https://github.com/hemapriyan-rk" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>GitHub</a>
            <a href="mailto:hemapriyankuppusamy07@gmail.com" style={{ textDecoration: "underline", textUnderlineOffset: "6px" }}>Email</a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Skills & Technologies</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {["Python", "Java", "JavaFX", "C", "C++", "SQL", "Postgres SQL", "Networking", "Basic Cybersecurity", "Git", "GitHub", "Machine Learning", "Basic RL", "Vercel", "Supabase", "Firebase", "Database Administration", "Docker Basics"].map(skill => (
            <span key={skill} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </section>



      <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid var(--card-border)", fontSize: "0.9rem", opacity: 0.7 }}>
        <p>© 2026 Hemapriyan R K. All rights reserved.</p>
      </footer>
    </div>
  );
}
