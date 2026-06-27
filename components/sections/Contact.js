"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/globals/BrandIcons";
import emailjs from "@emailjs/browser";



export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY }
      );

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after a few seconds
      setTimeout(() => setFormState("idle"), 4000);
    } catch (err) {
      setFormState("error");
      setErrorMsg("Failed to send. Please try again or email directly.");
      console.error("EmailJS error:", err);
    }
  };

  const inputClass = `w-full px-4 py-3 rounded-xl outline-none text-white placeholder-gray-600 transition-all duration-300 focus:border-[#8a2be2]`;
  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-7xl mx-auto">
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
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white"
          >
            Let&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #8a2be2, #00f0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            Have a project in mind or want to collaborate? I&apos;m always open
            to new opportunities and exciting conversations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-black text-white mb-2">
                Open to Opportunities
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Whether you have a project, a collaboration idea, an internship
                offer, or just want to talk tech — my inbox is always open!
              </p>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/hindavi-patil-3b6844356"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, color: "#00f0ff" }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(0,119,181,0.2)", border: "1px solid rgba(0,119,181,0.4)" }}
                  >
                    <LinkedInIcon size={20} style={{ color: "#0077B5" }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-500 text-sm">Connect with me</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/Hindavipatil"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, color: "#00f0ff" }}
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
                  >
                    <GitHubIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-500 text-sm">See my code</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-black text-white mb-6">Send a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-sm mb-2 block">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hey! I'd love to work with you on..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  whileHover={
                    formState === "idle"
                      ? { scale: 1.03, boxShadow: "0 0 30px rgba(138,43,226,0.6)" }
                      : {}
                  }
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl font-bold text-white text-lg flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background:
                      formState === "success"
                        ? "linear-gradient(135deg, #10b981, #059669)"
                        : "linear-gradient(135deg, #8a2be2, #00f0ff)",
                    boxShadow: "0 0 20px rgba(138,43,226,0.4)",
                  }}
                >
                  {formState === "loading" && (
                    <Loader2 size={20} className="animate-spin" />
                  )}
                  {formState === "success" && <CheckCircle size={20} />}
                  {formState === "error" && <AlertCircle size={20} />}
                  {formState === "idle" && <Send size={20} />}
                  {formState === "loading"
                    ? "Sending..."
                    : formState === "success"
                    ? "Message Sent!"
                    : formState === "error"
                    ? "Try Again"
                    : "Send Message"}
                </motion.button>

                {/* Error message */}
                {formState === "error" && errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
