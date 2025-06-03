
// This would be the React component content with QR code and icons added
// but before the react-icons/react-qr-code import issues broke the build.
// Assume the base structure was working, and code uses fallback HTML/CSS for icons and QR without NPM packages.

import React from "react";

const Portfolio = () => {
  return (
    <div style={{
      background: "linear-gradient(to right, #000000, #3b0a45, #ff6a00)",
      minHeight: "100vh",
      color: "#F8EBDD",
      padding: "2rem",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#8B0000" }}>Kirubavathi Baskaran</h1>
      <h2 style={{ color: "#B22222" }}>CTO & Founder</h2>
      <p>🌟 Vision Engineered. Intelligence Delivered.</p>

      <section>
        <h3 style={{ color: "#B22222" }}>💼 About Me</h3>
        <p>7+ years of experience in software, data, and AI. Currently building Pikkpro – a platform of intelligent service tools.</p>
      </section>

      <section>
        <h3 style={{ color: "#B22222" }}>🚀 Featured Project: Pikkpro</h3>
        <p>Pikkpro is an all-in-one platform offering automation, reporting, and intelligent service flows for modern professionals.</p>
      </section>

      <section>
        <h3 style={{ color: "#B22222" }}>🔗 Connect with Me</h3>
        <ul>
          <li><a href="https://github.com/kirubavathi123" target="_blank" rel="noreferrer" style={{ color: "#F8EBDD" }}>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kirubavathi-b-b212944b" target="_blank" rel="noreferrer" style={{ color: "#F8EBDD" }}>LinkedIn</a></li>
          <li><a href="mailto:kirubavathibaskaran@gmail.com" style={{ color: "#F8EBDD" }}>Email</a></li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: "#B22222" }}>📱 Share This Portfolio</h3>
        <p>Scan this QR code to view this page on your phone:</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://kiruba.netlify.app/&size=150x150" alt="QR Code" />
      </section>
    </div>
  );
};

export default Portfolio;
