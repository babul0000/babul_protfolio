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
    <main className="relative min-h-screen bg-gray-950 overflow-hidden font-sans antialiased text-white">
      {/* Dark background glowing meshes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[110px]" />
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
