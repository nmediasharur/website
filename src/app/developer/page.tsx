"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./developer.module.css";
import { ArrowLeft } from "lucide-react";

export default function DeveloperPage() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Default to dark since nmedias is dark theme
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
  };

  const skills = [
    "Python", "Java", "JavaFX", "C", "C++", "SQL", "Postgres SQL", 
    "Networking", "Basic Cybersecurity", "Git", "GitHub", "Machine Learning", 
    "Basic RL", "Vercel", "Supabase", "Firebase", "Database Administration", 
    "Docker Basics"
  ];

  return (
    <div className={styles.themeWrapper} data-theme={theme}>
      <div className={styles.container}>
        {/* Back and Theme Toggle Nav */}
        <nav className={styles.navHeader} style={{ justifyContent: "space-between" }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: 0.7 }}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <button onClick={toggleTheme} className={styles.themeToggle} aria-label="Toggle theme">
            {theme === "light" ? (
              <><span>☾</span> Dark Mode</>
            ) : (
              <><span>☀</span> Light Mode</>
            )}
          </button>
        </nav>

        {/* Header / Hero */}
        <header className={`${styles.section} ${styles.heroLayout}`}>
          <div className={styles.heroImageWrapper}>
            <Image 
              src="/asset/profile.jpeg" 
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
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {skills.map(skill => (
              <span key={skill} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <footer style={{ textAlign: "center", padding: "2rem 0", borderTop: "1px solid var(--card-border)", fontSize: "0.9rem", opacity: 0.7 }}>
          <p>© 2026 Hemapriyan R K. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
