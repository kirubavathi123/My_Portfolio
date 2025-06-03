
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import QRCode from 'react-qr-code';

const Portfolio = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, black, #6a0dad, #ff8c00)',
      minHeight: '100vh',
      color: '#E6B0AA',  // Classy dark rose-gold/champagne tone
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#A93226', fontSize: '3rem' }}>Kirubavathi Baskaran</h1>
        <h2 style={{ color: '#F5B041', marginTop: '0.5rem' }}>CTO & Founder</h2>
        <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
          Vision Engineered. Intelligence Delivered.
        </p>
      </header>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <a href="https://github.com/kirubavathi123" style={{ margin: '0 1rem', color: '#E6B0AA' }}>
          <FaGithub size={32} />
        </a>
        <a href="https://www.linkedin.com/in/kirubavathi-b-b212944b" style={{ margin: '0 1rem', color: '#E6B0AA' }}>
          <FaLinkedin size={32} />
        </a>
        <a href="mailto:kirubavathibaskaran@gmail.com" style={{ margin: '0 1rem', color: '#E6B0AA' }}>
          <FaEnvelope size={32} />
        </a>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h3 style={{ color: '#CD6155' }}>Scan to View My Blog</h3>
        <QRCode value="https://kiruba.netlify.app/" size={128} bgColor="white" fgColor="black" />
      </section>

      <section>
        <h2 style={{ color: '#CD6155' }}>🌟 Highlight: Pikkpro</h2>
        <p>
          Pikkpro is my flagship tech startup, aiming to simplify service access across multiple industries with a scalable, user-friendly platform.
          I lead the company vision, architecture, and growth strategy.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
