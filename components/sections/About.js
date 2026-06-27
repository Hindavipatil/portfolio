"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Brain, Zap, Globe } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Hackathons", value: "2+" },
  { label: "Certifications", value: "5+" },
];

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", color: "#00f0ff" },
  { icon: Brain, label: "ML Engineer", color: "#8a2be2" },
  { icon: Zap, label: "Automation", color: "#f59e0b" },
  { icon: Globe, label: "API Expert", color: "#10b981" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm tracking-widest uppercase font-semibold mb-3"
            style={{ color: "#00f0ff" }}
          >
            Who I Am
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Me
            </span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Avatar / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Avatar placeholder with gradient */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                  padding: "3px",
                }}
              >
                <div
                  className="w-full h-full rounded-full flex items-center justify-center text-8xl"
                  style={{ background: "#030014" }}
                >
                  👨‍💻
                </div>
              </div>
              {/* Floating badges */}
              {highlights.map((item, i) => {
                const positions = [
                  "top-0 -right-4",
                  "-bottom-4 right-4",
                  "-bottom-4 left-4",
                  "top-0 -left-4",
                ];
                return (
                  <motion.div
                    key={item.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${positions[i]} glass-card rounded-xl px-3 py-2 flex items-center gap-2`}
                  >
                    <item.icon size={16} style={{ color: item.color }} />
                    <span className="text-xs text-white font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Python Full-Stack Developer
            </h3>
            <p className="font-semibold mb-6" style={{ color: "#8a2be2" }}>
              ML Enthusiast | AI Builder | Problem Solver
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Passionate about building intelligent systems using Python, Django,
              Machine Learning, NLP, Automation, and GenAI. I enjoy solving real-world
              problems through scalable and efficient solutions. With a strong
              foundation in both backend development and AI, I bridge the gap
              between intelligent algorithms and production-ready applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p
                    className="text-3xl font-black"
                    style={{
                      background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV button */}
            <motion.a
              href="/resume.pdf"
              download="Hindavi_Patil_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                boxShadow: "0 0 20px rgba(138,43,226,0.3)",
              }}
            >
              Download Resume ↓
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
