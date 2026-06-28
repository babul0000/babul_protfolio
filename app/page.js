import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Ecosystem from "../components/Ecosystem";
import Skills from "../components/Skills";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import About from "../components/About";
import GithubActivity from "../components/GithubActivity";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 overflow-hidden font-sans antialiased">
      {/* Light background glow meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-amber-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-orange-50/30 rounded-full blur-3xl" />
      </div>

      {/* Main Sections */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Ecosystem />
        <Skills />
        <Workflow />
        <Projects />
        <Experience />
        <About />
        <GithubActivity />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
