"use client"

import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Get In Touch</h2>

          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Let's Work Together</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need a mobile app, web
                application, or technical consultation, I'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-lg text-accent">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Email</p>
                  <a
                    href="mailto:rolandomondillajr3032@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    rolandomondillajr3032@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-lg text-accent">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Phone</p>
                  <a
                    href="tel:+639515199546"
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    PH 0951 519 9546
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-accent/20 rounded-lg text-accent">
                  <MapPin className="h-8 w-8" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Location</p>
                  <p className="text-muted-foreground text-sm">Lizada Toril Davao City, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/rolando3230"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://ph.linkedin.com/in/rolando-mondilla-jr-62a210334"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="outline"
                  className="border-accent/30 text-accent hover:bg-accent/10 bg-transparent"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
