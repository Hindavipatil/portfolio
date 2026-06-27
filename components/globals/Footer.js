"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/globals/BrandIcons";
import { Link as ScrollLink } from "react-scroll";

const quickLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Journey", to: "journey" },
  { name: "Contact", to: "contact" },
];

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 mt-0"
      style={{
        background: "rgba(0,0,0,0.6)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-black text-2xl mb-3 tracking-tighter">
              <span className="text-white">Port</span>
              <span style={{ color: "#00f0ff" }}>folio</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Python Full-Stack Developer & ML Enthusiast building intelligent
              solutions for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="text-gray-500 hover:text-[#00f0ff] transition-colors cursor-pointer text-sm"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/Hindavipatil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <GitHubIcon size={18} className="text-gray-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hindavi-patil-3b6844356"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                style={{
                  background: "rgba(0,119,181,0.15)",
                  border: "1px solid rgba(0,119,181,0.3)",
                }}
              >
                <LinkedInIcon size={18} style={{ color: "#0077B5" }} />
              </motion.a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-gray-600 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by Hindavi Patil
          </p>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
