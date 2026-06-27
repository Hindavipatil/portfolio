"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    icon: "🏆",
    title: "Code-A-Thon 2.0 Hackathon",
    subtitle: "Selected Participant",
    description:
      "Selected to participate in the Code-A-Thon 2.0 hackathon, competing with top developers in building innovative tech solutions under time pressure.",
    color: "#f59e0b",
    year: "2024",
  },
  {
    icon: "🎤",
    title: "PPT Round Champion",
    subtitle: "Cleared PPT Round",
    description:
      "Successfully cleared the PPT (Presentation) round by presenting a well-structured project proposal with clear technical depth and innovation.",
    color: "#8a2be2",
    year: "2024",
  },
  {
    icon: "🎯",
    title: "Presentation Round",
    subtitle: "Cleared Final Round",
    description:
      "Delivered a compelling final presentation showcasing the project's impact, technical architecture, and business potential to a panel of judges.",
    color: "#00f0ff",
    year: "2024",
  },
];

const certifications = [
  {
    icon: "🐍",
    title: "Python Developer Internship",
    issuer: "Pythonic Labs",
    year: "2025",
    color: "#3776AB",
    link: "/python_dev_cert.pdf",
  },
  {
    icon: "🌐",
    title: "Django Developer Internship",
    issuer: "Pythonic Labs",
    year: "2025",
    color: "#44c767",
    link: "/django_dev_cert.pdf",
  },
  {
    icon: "⚛️",
    title: "MERN Full Stack Internship",
    issuer: "Mernix Consulting",
    year: "2025",
    color: "#61DAFB",
    link: "/mern_dev_cert.pdf",
  },
  {
    icon: "⚙️",
    title: "Python Automation Internship",
    issuer: "Pythonic Labs",
    year: "2025",
    color: "#f59e0b",
    link: "/python_automation_cert.pdf",
  },
  {
    icon: "✨",
    title: "GenAI & AI Automations",
    issuer: "Kamal Classes Thane",
    year: "2026",
    color: "#ec4899",
    link: "/genai_cert.jpg",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const certRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const certInView = useInView(certRef, { once: true, margin: "-100px" });

  return (
    <>
      {/* Achievements Section */}
      <section id="achievements" className="py-24 px-4 max-w-7xl mx-auto">
        <div ref={ref}>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm tracking-widest uppercase font-semibold mb-3"
              style={{ color: "#00f0ff" }}
            >
              Milestones
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Achievements &{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #8a2be2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Awards
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {item.icon}
                </motion.div>
                <span
                  className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full inline-block mb-3"
                  style={{
                    background: `${item.color}20`,
                    color: item.color,
                    border: `1px solid ${item.color}40`,
                  }}
                >
                  {item.year}
                </span>
                <h3 className="text-xl font-black text-white mb-1">{item.title}</h3>
                <p className="font-semibold mb-3" style={{ color: item.color }}>
                  {item.subtitle}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-4" style={{ background: "rgba(0,0,0,0.3)" }}>
        <div className="max-w-7xl mx-auto" ref={certRef}>
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-sm tracking-widest uppercase font-semibold mb-3"
              style={{ color: "#00f0ff" }}
            >
              Credentials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-white"
            >
              {" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Certifications
              </span>
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={certInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-card rounded-2xl p-6 text-center group cursor-default"
              >
                <span className="text-4xl mb-3 block">{cert.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-xs text-gray-500 mb-2">{cert.issuer}</p>
                <span
                  className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{
                    background: `${cert.color}35`,
                    color: cert.color,
                    border: `1px solid ${cert.color}80`,
                    textShadow: `0 0 8px ${cert.color}60`,
                  }}
                >
                  {cert.year}
                </span>
                <div className="mt-4">
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, background: `${cert.color}30` }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer"
                    style={{
                      background: `${cert.color}30`,
                      border: `1px solid ${cert.color}80`,
                      color: cert.color,
                      textShadow: `0 0 8px ${cert.color}60`,
                      boxShadow: `0 0 10px ${cert.color}20`,
                    }}
                  >
                    View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
