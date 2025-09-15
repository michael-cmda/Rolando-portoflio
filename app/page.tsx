import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certifications } from "@/components/certifications"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particles"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background stone-texture relative">
      <ParticleBackground />
      <ScrollAnimation />
      <div className="relative z-10">
        <Header />
        <Hero />
        <section id="about" className="scroll-section slide-up">
          <About />
        </section>
        <section id="experience" className="scroll-section slide-left delay-100">
          <Experience />
        </section>
        <section id="skills" className="scroll-section fade-scale delay-200">
          <Skills />
        </section>
        <section id="projects" className="scroll-section slide-right delay-100">
          <Projects />
        </section>
        <section id="certifications" className="scroll-section slide-up delay-200">
          <Certifications />
        </section>
        <section id="services" className="scroll-section slide-left delay-100">
          <Services />
        </section>
        <section id="contact" className="scroll-section fade-scale delay-200">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  )
}
