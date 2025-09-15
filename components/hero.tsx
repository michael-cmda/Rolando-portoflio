"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail, Github } from "lucide-react"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/resume/Rolando-Mondilla-Jr-Resume.pdf"
    link.download = "Rolando-Mondilla-Jr-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern with 3D effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-secondary rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-accent rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-primary rounded-full animate-spin"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-accent/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-primary/10 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent glow-accent animate-fade-in-up relative">
            <img
              src="/images/rolando-graduation.jpg"
              alt="Rolando Mondilla Jr. - Graduation Photo"
              className="w-full h-full rounded-full object-cover border-4 border-accent/30"
            />
            <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ping"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up animate-delay-100">
            Hi, I'm <span className="text-primary">Rolando Mondilla Jr.</span>
            <br />
            <span className="text-accent">Full-Stack & Mobile Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance animate-fade-in-up animate-delay-200">
            I build scalable, cross-platform solutions that deliver seamless user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-accent transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent transform hover:scale-105 transition-all duration-300"
              onClick={downloadResume}
            >
              Download Resume
              <Download className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-foreground hover:text-accent transform hover:scale-105 transition-all duration-300"
              onClick={() => window.open("https://github.com/rolando3230", "_blank")}
            >
              GitHub
              <Github className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-foreground hover:text-accent transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <ArrowDown className="h-6 w-6 text-accent animate-pulse" />
          <div className="w-px h-8 bg-gradient-to-b from-accent to-transparent mt-2"></div>
        </div>
      </div>
    </section>
  )
}
