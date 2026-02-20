import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Architecture from "@/components/Architecture";
import Metrics from "@/components/Metrics";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Skills />
      <Architecture />
      <Metrics />
      <Projects />
      <Writing />
      <Contact />
      <Footer />
    </main>
  );
}
