"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AI Resume-Based Interview Call Assistant",
    description:
      "An AI-powered interview automation system that analyzes candidate resumes, generates personalized interview questions using Generative AI, and conducts automated voice interviews. The workflow uses n8n for automation, Google Sheets for data management, and Vapi for AI-powered voice calls.",
    icon: "📞",
    tech: ["n8n", "Vapi", "Generative AI", "Google Sheets", "Automation"],
    gradient: "linear-gradient(135deg, #8a2be2, #4b0082)",
    glowColor: "rgba(138,43,226,0.5)",
    github: "https://github.com/Hindavipatil",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Diabetes Prediction System",
    description:
      "An ML-powered Flask web app for early diabetes prediction. Features an intuitive input form, real-time predictions with confidence scores, and data visualization of risk factors.",
    icon: "🏥",
    tech: ["Python", "Flask", "Machine Learning", "scikit-learn", "Pandas"],
    gradient: "linear-gradient(135deg, #00f0ff, #0080ff)",
    glowColor: "rgba(0,240,255,0.4)",
    github: "https://github.com",
    demo: "#",
    featured: false,
  },
  {
    id: 3,
    title: "PollApp",
    description:
      "A web-based polling application developed using Django that allows users to create polls, vote securely, and view real-time results. The project implements user authentication, poll management, and live result tracking in an interactive environment.",
    icon: "🗳️",
    tech: ["Django", "Python", "SQLite", "HTML", "CSS", "PythonAnywhere"],
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    glowColor: "rgba(16,185,129,0.4)",
    github: "https://github.com/Hindavipatil",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Art Gallery App",
    description:
      "A full-stack web application that enables users to upload, manage, view, download, and delete artwork with image support. The application includes file validation and provides an interactive gallery experience for managing digital artwork.",
    icon: "🎨",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Firebase", "Render"],
    gradient: "linear-gradient(135deg, #f59e0b, #d97706)",
    glowColor: "rgba(245,158,11,0.4)",
    github: "https://github.com/Hindavipatil",
    demo: "#",
    featured: false,
  },
];

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className={`glass-card rounded-2xl overflow-hidden group cursor-default ${project.featured ? "md:col-span-2" : ""}`}
      style={{
        "--glow-color": project.glowColor,
      }}
    >
      {/* Top gradient bar */}
      <div className="h-1.5 w-full" style={{ background: project.gradient }} />

      <div className="p-8">
        <div className={`flex flex-col ${project.featured ? "md:flex-row" : ""} gap-6`}>
          <div className={project.featured ? "md:flex-1" : ""}>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{project.icon}</span>
                <div>
                  {project.featured && (
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2 py-1 rounded-full mb-1 inline-block"
                      style={{
                        background: "rgba(138,43,226,0.2)",
                        color: "#8a2be2",
                        border: "1px solid rgba(138,43,226,0.4)",
                      }}
                    >
                      Featured
                    </span>
                  )}
                  <h3 className={`font-black text-white group-hover:text-[#00f0ff] transition-colors ${project.featured ? "text-2xl" : "text-xl"}`}>
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#00f0ff",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto">
      <div ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#00f0ff" }}
          >
            What I&apos;ve Built
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
