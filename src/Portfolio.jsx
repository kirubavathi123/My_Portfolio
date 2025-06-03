
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, black, #3a0ca3, orange)",
        color: "#F8EBDD",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <h1 style={{ color: "#800020", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Kirubavathi Baskaran
      </h1>
      <h2 style={{ color: "#800020", fontSize: "1.5rem", marginBottom: "2rem" }}>
        CTO & Founder | Vision Engineered. Intelligence Delivered.
      </h2>

      <p style={{ maxWidth: "600px", lineHeight: "1.6", marginBottom: "2rem" }}>
        I'm a visionary leader in tech with a proven track record of building powerful solutions
        in AI, data, and software engineering. Currently leading the innovation at Pikkpro.
      </p>

      <h3 style={{ color: "#800020", marginBottom: "1rem" }}>Featured Project – Pikkpro</h3>
      <p style={{ maxWidth: "600px", lineHeight: "1.6" }}>
        Pikkpro is a dynamic service and gig platform redefining professionalism. As the CTO &
        Founder, I architected the system and lead the tech roadmap across frontend, backend, and AI
        integrations.
      </p>

      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", fontSize: "1.5rem" }}>
        <a
          href="https://github.com/kirubavathi123"
          style={{ color: "#F8EBDD" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kirubavathi-b-b212944b"
          style={{ color: "#F8EBDD" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:kirubavathibaskaran@gmail.com"
          style={{ color: "#F8EBDD" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
}
