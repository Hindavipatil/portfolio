"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const journeySteps = [
  {
    year: "Phase 1",
    title: "Python Foundations",
    description:
      "Started with Python fundamentals — variables, functions, OOP, data structures, file handling, and scripting. Built automation tools and CLI applications.",
    icon: "🐍",
    color: "#3776AB",
    skills: ["Python Basics", "OOP", "File I/O", "Scripting", "CLI Tools"],
  },
  {
    year: "Phase 2",
    title: "Web Development",
    description:
      "Expanded into web development with HTML, CSS, JavaScript, Flask, and Django. Built REST APIs, authentication systems, and full-stack applications.",
    icon: "🌐",
    color: "#00f0ff",
    skills: ["Django", "Flask", "REST APIs", "HTML/CSS", "JavaScript"],
  },
  {
    year: "Phase 3",
    title: "Machine Learning",
    description:
      "Dived deep into ML — supervised/unsupervised learning, model training, feature engineering, and deploying models as web services.",
    icon: "🤖",
    color: "#f59e0b",
    skills: ["scikit-learn", "Pandas", "NumPy", "Model Deploy", "Data Viz"],
  },
  {
    year: "Phase 4",
    title: "AI & NLP Projects",
    description:
      "Reached the frontier — building NLP pipelines, language models, automated voice interview systems, and participating in hackathons with AI-powered solutions.",
    icon: "🧠",
    color: "#8a2be2",
    skills: ["NLP", "NLTK", "Transformers", "AI Systems", "Hackathons"],
  },
  {
    year: "Phase 5",
    title: "Generative AI",
    description:
      "Harnessing LLMs, prompt engineering, Retrieval-Augmented Generation (RAG), and agentic workflows. Integrating APIs and building intelligent, autonomous applications.",
    icon: "✨",
    color: "#ec4899",
    skills: ["LLMs", "RAG", "Prompt Eng", "LangChain", "Agentic Systems"],
  },
];

export default function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="py-24 px-4" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#00f0ff" }}
          >
            My Path
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            AI Developer{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Journey
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            A visual roadmap of my evolution from Python fundamentals to AI-powered applications.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block"
            style={{
              background: "linear-gradient(180deg, transparent, #8a2be2, #00f0ff, transparent)",
            }}
          />

          <div className="space-y-12">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className="flex-1">
                  <div
                    className="glass-card rounded-2xl p-6 group hover:border-opacity-100 transition-all duration-300"
                    style={{
                      borderColor: `${step.color}30`,
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <span
                          className="text-xs font-bold tracking-widest uppercase"
                          style={{ color: step.color }}
                        >
                          {step.year}
                        </span>
                        <h3 className="text-xl font-black text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}40`,
                            color: step.color,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="hidden md:flex w-14 h-14 rounded-full items-center justify-center flex-shrink-0 z-10"
                  style={{
                    background: `${step.color}20`,
                    border: `2px solid ${step.color}`,
                    boxShadow: `0 0 20px ${step.color}50`,
                  }}
                >
                  <span className="text-xl">{step.icon}</span>
                </motion.div>

                {/* Empty side for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
