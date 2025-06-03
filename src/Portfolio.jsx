import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-6 md:p-12 max-w-5xl mx-auto font-sans text-gray-800 bg-[#fdfcf9] min-h-screen">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-10">
        <motion.h1
          className="text-5xl font-extrabold text-[#1a1a40]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Kirubavathi Baskaran
        </motion.h1>
        <p className="text-xl text-[#444] font-medium">CTO & Founder</p>
        <p className="italic text-[#666]">
          "Engineering vision with elegance — where innovation meets intelligence."
        </p>
        <div className="flex justify-center gap-6 mt-4 text-[#1a1a40] font-semibold">
          <a
            href="https://github.com/kirubavathi123"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kirubavathi-b-b212944b"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:kirubavathibaskaran@gmail.com">
            Email
          </a>
        </div>
      </section>

      {/* Pikkpro Spotlight */}
      <section className="mb-12 bg-[#fffdf6] rounded-xl p-6 shadow-md border border-[#e6e0d4]">
        <h2 className="text-3xl font-bold text-[#1a1a40] mb-2">🚀 Pikkpro — Simplifying Service Access</h2>
        <p className="text-[#333]">
          As the CTO & Co-Founder of <strong>Pikkpro</strong>, I lead the tech vision to build a powerful, user-first platform 
          that helps everyday people find and access local service professionals with just a few clicks.
        </p>
        <p className="mt-2 text-sm italic text-[#666]">Currently building MVP, business model, and scalable backend for launch.</p>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a40]">📁 Projects In Progress</h2>
        <ul className="space-y-4">
          <li className="border border-[#ddd] p-4 rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-[#1a1a40]">Math Mastermind App</h3>
            <p className="text-sm text-[#555]">
              An educational mobile game to help kids master math skills in a fun and gamified way.
            </p>
            <span className="text-xs italic text-[#888]">Coming soon on GitHub</span>
          </li>
          <li className="border border-[#ddd] p-4 rounded-xl shadow-sm bg-white">
            <h3 className="text-lg font-semibold text-[#1a1a40]">Mind Play – Focus Game</h3>
            <p className="text-sm text-[#555]">
              A reaction-speed and logic game designed to boost mental sharpness and attention.
            </p>
            <span className="text-xs italic text-[#888]">Coming soon on GitHub</span>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a40]">🏢 Experience</h2>
        <ul className="space-y-2 text-[#444] text-sm">
          <li><strong>Senior AI Researcher</strong> – Tech Mahindra</li>
          <li><strong>Data Analyst</strong> – NHS Clinical Engineering</li>
          <li><strong>Module Lead / Software Engineer</strong> – Mindtree (7 years)</li>
        </ul>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a40]">👩‍💻 About Me</h2>
        <p className="text-sm text-[#555]">
          I’m a tech leader with deep expertise in AI, full-stack engineering, and strategic product building. 
          I build tools that are not just technically solid, but user-focused, intuitive, and scalable. 
          Now focused on growing <strong>Pikkpro</strong> and shaping the next generation of smart apps.
        </p>
      </section>

      {/* Blog */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a40]">✍️ Blog</h2>
        <p className="text-sm text-[#555]">
          Coming soon! I’ll be sharing insights from AI, app development, and startup building.
        </p>
      </section>
   <section className="mt-8 text-center">
  <h3 className="text-lg font-semibold text-[#1a1a40] mb-2">📱 Scan & Follow</h3>
  <p className="text-sm text-[#555]">Want to share or follow my work? Scan the QR code below:</p>
  <img
    src="https://api.qrserver.com/v1/create-qr-code/?data=https://kiruba.netlify.app&size=200x200"
    alt="QR Code for Kiruba's Portfolio"
    className="mx-auto mt-4 rounded shadow-md w-32"
  />
</section>

    
    
    </main>
  );
}
