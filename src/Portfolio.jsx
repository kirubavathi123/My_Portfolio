
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Portfolio() {
  return (
    <main className="min-h-screen font-sans text-[#f3e5e5] bg-gradient-to-br from-[#0f0f0f] via-[#2a003f] to-[#ff5f00] p-6 md:p-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-10">
        <motion.h1
          className="text-5xl font-extrabold text-[#2a003f]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Kirubavathi Baskaran
        </motion.h1>
        <p className="text-xl text-[#f3e5e5] font-medium">CTO & Founder</p>
        <p className="italic text-[#f3e5e5]/70">
          "Engineering vision with elegance — where innovation meets intelligence."
        </p>
        <div className="flex justify-center gap-6 mt-4 text-[#ffb703] text-2xl">
          <a
            href="https://github.com/kirubavathi123"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/kirubavathi-b-b212944b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:kirubavathibaskaran@gmail.com"
            className="hover:text-white transition"
          >
            <HiOutlineMail />
          </a>
        </div>
      </section>

      {/* Pikkpro Spotlight */}
      <section className="mb-12 bg-white/10 rounded-xl p-6 shadow-md border border-[#f3e5e5]/20">
        <h2 className="text-3xl font-bold text-[#ffb703] mb-2">🚀 Pikkpro — Simplifying Service Access</h2>
        <p>
          As the CTO & Co-Founder of <strong>Pikkpro</strong>, I lead the tech vision to build a powerful, user-first platform 
          that helps everyday people find and access local service professionals with just a few clicks.
        </p>
        <p className="mt-2 text-sm italic">Currently building MVP, business model, and scalable backend for launch.</p>
      </section>

      {/* Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#ffb703]">📁 Projects In Progress</h2>
        <ul className="space-y-4">
          <li className="border border-[#f3e5e5]/20 p-4 rounded-xl shadow-sm bg-white/10">
            <h3 className="text-lg font-semibold text-[#f3e5e5]">Math Mastermind App</h3>
            <p className="text-sm">
              An educational mobile game to help kids master math skills in a fun and gamified way.
            </p>
            <span className="text-xs italic text-[#f3e5e5]/70">Coming soon on GitHub</span>
          </li>
          <li className="border border-[#f3e5e5]/20 p-4 rounded-xl shadow-sm bg-white/10">
            <h3 className="text-lg font-semibold text-[#f3e5e5]">Mind Play – Focus Game</h3>
            <p className="text-sm">
              A reaction-speed and logic game designed to boost mental sharpness and attention.
            </p>
            <span className="text-xs italic text-[#f3e5e5]/70">Coming soon on GitHub</span>
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#ffb703]">🏢 Experience</h2>
        <ul className="space-y-2 text-sm">
          <li><strong>Senior AI Researcher</strong> – Tech Mahindra</li>
          <li><strong>Data Analyst</strong> – NHS Clinical Engineering</li>
          <li><strong>Module Lead / Software Engineer</strong> – Mindtree (7 years)</li>
        </ul>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-[#ffb703]">👩‍💻 About Me</h2>
        <p className="text-sm">
          I’m a tech leader with deep expertise in AI, full-stack engineering, and strategic product building. 
          I build tools that are not just technically solid, but user-focused, intuitive, and scalable. 
          Now focused on growing <strong>Pikkpro</strong> and shaping the next generation of smart apps.
        </p>
      </section>

      {/* Blog + QR */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-2 text-[#ffb703]">✍️ Blog</h2>
        <p className="text-sm">Coming soon! I’ll be sharing insights from AI, app development, and startup building.</p>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#f3e5e5]">📱 Scan & Follow</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://kiruba.netlify.app&size=200x200"
            alt="QR Code"
            className="mx-auto mt-4 w-32 rounded shadow-md"
          />
        </div>
      </section>
    </main>
  );
}
