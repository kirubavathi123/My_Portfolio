import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-6 md:p-12 max-w-5xl mx-auto font-sans text-gray-800">
      {/* Hero Section */}
      <section className="text-center space-y-4 mb-10">
        <motion.h1
          className="text-5xl font-extrabold text-purple-900"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Kirubavathi Baskaran
        </motion.h1>
        <p className="text-xl text-gray-700 font-medium">CTO & Founder</p>
        <p className="italic text-gray-600">"Engineering vision with elegance — where innovation meets intelligence."</p>
        <div className="flex justify-center gap-6 mt-4 text-blue-600 font-semibold">
          <a href="https://github.com/kirubavathi123" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </section>

      {/* Pikkpro Spotlight */}
      <section className="mb-12 bg-purple-50 rounded-xl p-6 shadow-md">
        <h2 className="text-3xl font-bold text-purple-800 mb-2">🚀 Pikkpro — Simplifying Service Access</h2>
        <p className="text-gray-700">
          As the CTO & Co-Founder of <strong>Pikkpro</strong>, I’m leading the tech vision to build a powerful, user-first platform 
          that helps everyday people find and access local service professionals with just a few clicks.
        </p>
        <p className="mt-2 text-sm italic">Currently working on MVP, business model, and scalable infrastructure for launch.</p>
      </section>

      {/* GitHub Projects */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">📁 Projects</h2>
        <ul className="space-y-4">
          <li className="border p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-purple-900">NHS SQL Reporting</h3>
            <p className="text-sm text-gray-700">
              Data reporting pipeline for NHS Clinical Engineering using SQL and SSRS to track medical device protocols.
            </p>
            <a
              href="https://github.com/kirubavathi123/nhs-sql-reporting"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              View on GitHub
            </a>
          </li>
          {/* Add more projects below if you have them */}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🏢 Experience</h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li><strong>Senior AI Researcher</strong> – Tech Mahindra</li>
          <li><strong>Data Analyst</strong> – NHS Clinical Engineering</li>
          <li><strong>Module Lead / Software Engineer</strong> – Mindtree (7 years)</li>
        </ul>
      </section>

      {/* About */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">👩‍💻 About Me</h2>
        <p className="text-sm text-gray-700">
          I’m a tech leader and innovator with 7+ years of industry experience in AI, full-stack development, and data science. 
          I build solutions that solve real-world problems with intelligence, empathy, and clean design. I’m currently leading Pikkpro’s development and also applying for the UK Global Talent Visa.
        </p>
      </section>

      {/* Blog */}
      <section>
        <h2 className="text-2xl font-bold mb-4">✍️ Blog</h2>
        <p className="text-sm text-gray-700">
          Coming soon! I’ll be sharing insights on AI, startup building, and lessons from real-world projects. Stay tuned.
        </p>
      </section>
    </main>
  );
}
