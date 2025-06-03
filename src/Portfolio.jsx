// Portfolio.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaQrcode } from "react-icons/fa";
import QRCode from "react-qr-code";

export default function Portfolio() {
  return (
    <div className="min-h-screen px-6 py-12" style={{
      background: "linear-gradient(135deg, black, #36013F, #F27121)",
      color: "#F8EBD7"
    }}>
      <h1 className="text-5xl font-bold mb-4" style={{ color: "#8B0000" }}>Kirubavathi Baskaran</h1>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: "#B76E79" }}>CTO & Founder</h2>
      <p className="text-lg italic mb-10">Vision Engineered. Intelligence Delivered.</p>

      <div className="flex space-x-6 text-3xl mb-10">
        <a href="https://github.com/kirubavathi123" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub className="hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/kirubavathi-b-b212944b" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin className="hover:text-white" />
        </a>
        <a href="mailto:kirubavathibaskaran@gmail.com" title="Email">
          <FaEnvelope className="hover:text-white" />
        </a>
        <div title="Scan to view blog">
          <FaQrcode className="hover:text-white" />
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-3xl font-bold mb-3" style={{ color: "#8B0000" }}>Main Project: Pikkpro</h3>
        <p className="text-base leading-relaxed">
          Pikkpro is a smart tech platform founded to simplify digital bookings and service engagement.
          We are currently developing MVPs including gaming and math education apps to demonstrate
          our product ecosystem.
        </p>
      </div>

      <div className="mt-12">
        <h4 className="text-xl font-semibold mb-2" style={{ color: "#B76E79" }}>QR Code (For sharing):</h4>
        <QRCode value="https://kiruba.netlify.app" bgColor="#F8EBD7" fgColor="#36013F" size={128} />
      </div>
    </div>
  );
}
