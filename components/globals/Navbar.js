"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Journey", to: "journey" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 font-bold text-2xl tracking-tighter">
            <span className="text-white">Port</span>
            <span className="neon-text-blue text-[var(--accent)]">folio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-gray-300 hover:text-white cursor-pointer transition-colors hover:neon-text-blue"
              >
                {link.name}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
