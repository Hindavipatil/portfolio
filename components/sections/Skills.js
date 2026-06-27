"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Python",
    icon: "🐍",
    level: 92,
    color: "#3776AB",
    desc: "Core language for all projects",
  },
  {
    name: "Django & REST APIs",
    icon: "🌐",
    level: 85,
    color: "#092E20",
    desc: "Backend web framework",
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    level: 80,
    color: "#FF6F00",
    desc: "scikit-learn, pandas, numpy",
  },
  {
    name: "NLP",
    icon: "🧠",
    level: 75,
    color: "#8a2be2",
    desc: "NLTK, spaCy, transformers",
  },
  {
    name: "Flask",
    icon: "⚗️",
    level: 78,
    color: "#000000",
    desc: "Lightweight web apps",
  },
  {
    name: "Automation",
    icon: "⚙️",
    level: 85,
    color: "#00f0ff",
    desc: "Scripting & task automation",
  },
  {
    name: "HTML & CSS",
    icon: "🎨",
    level: 88,
    color: "#E34F26",
    desc: "Responsive web design",
  },
  {
    name: "JavaScript",
    icon: "✨",
    level: 72,
    color: "#F7DF1E",
    desc: "Frontend interactivity",
  },
  {
    name: "Git & GitHub",
    icon: "🔧",
    level: 88,
    color: "#F05032",
    desc: "Version control & collaboration",
  },
  {
    name: "Generative AI",
    icon: "🪄",
    level: 85,
    color: "#FF1493",
    desc: "LLMs, Prompt Engineering, RAG",
  },
];

function SkillCard({ skill, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass-card rounded-2xl p-6 flex flex-col gap-4 cursor-default group"
      style={{ "--skill-color": skill.color }}
    >
      {/* Icon and name */}
      <div className="flex items-center gap-3">
        <span className="text-4xl">{skill.icon}</span>
        <div>
          <h3 className="text-white font-bold text-lg">{skill.name}</h3>
          <p className="text-gray-500 text-sm">{skill.desc}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">Proficiency</span>
          <span className="text-sm font-bold" style={{ color: "#00f0ff" }}>
            {skill.level}%
          </span>
        </div>
        <div
          className="w-full h-2 rounded-full overflow-hidden"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.08 + 0.3, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, #8a2be2, #00f0ff)`,
              boxShadow: "0 0 10px rgba(0,240,255,0.5)",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-4" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#00f0ff" }}
          >
            What I Know
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Tech{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arsenal
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            A curated set of technologies and tools I use to build intelligent,
            scalable solutions.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
