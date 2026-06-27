import Navbar from "@/components/globals/Navbar";
import ScrollProgress from "@/components/globals/ScrollProgress";
import BackToTop from "@/components/globals/BackToTop";
import Footer from "@/components/globals/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
