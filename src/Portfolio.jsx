import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="p-4 md:p-8 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <motion.h1 className="text-4xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Kirubavathi Baskaran
        </motion.h1>
        <p className="text-lg">Data Scientist | AI Researcher | Startup Founder</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/kirubavathi123" target="_blank"><Github /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank"><Linkedin /></a>
          <a href="mailto:your.email@example.com"><Mail /></a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">NHS SQL Reporting</h3>
              <p className="text-sm text-muted-foreground">
                SQL queries and SSRS dashboards used in NHS Clinical Engineering to track device protocols and maintenance data.
              </p>
              <a href="https://github.com/kirubavathi123/nhs-sql-reporting" target="_blank">
                <Button className="mt-2">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <p>Coming soon – check out my posts on <a href="https://medium.com" className="text-blue-600 underline" target="_blank">Medium</a>.</p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-sm">
          With over 7 years of experience in software engineering and data science, I’ve led AI and analytics projects at NHS, Tech Mahindra, and Mindtree. I’m also building Pikkpro, a service-tech startup to simplify professional access for everyday people.
        </p>
      </section>
    </main>
  );
}
