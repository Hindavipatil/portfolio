"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/globals/BrandIcons";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(138,43,226,0.4) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.3) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(138,43,226,0.15) 0%, transparent 70%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold tracking-widest uppercase"
            style={{
              background:
                "linear-gradient(135deg, rgba(138,43,226,0.2), rgba(0,240,255,0.2))",
              border: "1px solid rgba(138,43,226,0.4)",
              color: "#00f0ff",
            }}
          >
            👋 Hello World, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-6xl md:text-8xl font-black mb-6 leading-tight"
          style={{
            background: "linear-gradient(135deg, #ffffff 0%, #8a2be2 50%, #00f0ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         Hindavi Patil
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold mb-8 h-12"
          style={{ color: "#00f0ff" }}
        >
          <TypeAnimation
            sequence={[
              "Python Full-Stack Developer",
              2000,
              "ML Enthusiast",
              2000,
              "NLP Engineer",
              2000,
              "AI Systems Builder",
              2000,
              "Django REST API Expert",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Passionate about building intelligent systems using Python, Django,
          Machine Learning, NLP, Automation, and GenAI. I enjoy solving real-world
          problems through scalable and efficient solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg cursor-pointer transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                boxShadow: "0 0 20px rgba(138,43,226,0.5)",
                color: "#fff",
              }}
            >
              View Projects
            </motion.button>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0,240,255,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg cursor-pointer transition-all duration-300"
              style={{
                background: "transparent",
                border: "2px solid #00f0ff",
                color: "#00f0ff",
              }}
            >
              Contact Me
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          <motion.a
            href="https://github.com/Hindavipatil"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#00f0ff" }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <GitHubIcon size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/hindavi-patil-3b6844356"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <LinkedInIcon size={28} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <ChevronDown size={32} className="text-gray-500" />
        </ScrollLink>
      </motion.div>
    </section>
  );
}
