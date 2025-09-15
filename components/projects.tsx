"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"

const projects = [
  {
    title: "VetInspect - Veterinary Inspection System",
    description:
      "Comprehensive veterinary inspection management system with both desktop dashboard and mobile field app. Features analytics, monthly headcount tracking, inspection status monitoring, government integration, and professional reporting capabilities.",
    images: ["/images/vetinspect-dashboard.png", "/images/vetinspect-mobile.jpeg"],
    technologies: ["React", "Flutter", "Charts.js", "Government Integration", "Analytics", "Cross-Platform"],
  },
  {
    title: "Wagner Meters EMC Calculator",
    description:
      "Professional mobile application for Wagner Meters featuring EMC (Equilibrium Moisture Content) calculations. Includes device connectivity for Orion 950 and PinPro MC meters, real-time data recording, and industrial-grade measurement tools.",
    images: ["/images/emc-calculator.jpeg", "/images/wagner-meters.jpeg"],
    technologies: ["Flutter", "IoT Integration", "Bluetooth", "Industrial Tools", "Real-time Data", "Mobile"],
  },
  {
    title: "TradeSync - Financial Trading Platform",
    description:
      "Modern financial trading application with secure authentication, real-time market data, and professional trading interface. Built for AETOS Financial with focus on user experience and trading efficiency.",
    images: ["/images/tradesync-app.jpeg"],
    technologies: ["Flutter", "Financial APIs", "Real-time Data", "Security", "Trading", "Mobile"],
  },
  {
    title: "Agritify - Agricultural Management",
    description:
      "Agricultural technology platform designed to help farmers and agricultural businesses manage their operations efficiently. Features clean interface design with focus on sustainability and agricultural best practices.",
    images: ["/images/agritify-app.jpeg"],
    technologies: ["Flutter", "Agriculture Tech", "Business Management", "Mobile", "Clean UI", "Sustainability"],
  },
  {
    title: "My Client - Customer Management System",
    description:
      "Professional client management application with contact organization, occupation tracking, and rating system. Features intuitive search functionality and streamlined client interaction workflows.",
    images: ["/images/my-client-app.jpeg"],
    technologies: ["Flutter", "CRM", "Contact Management", "Search", "Rating System", "Business Tools"],
  },
  {
    title: "Assessment Tool - Examination Management",
    description:
      "Comprehensive examination and assessment management system for educational institutions. Features examiner management, status tracking, contact organization, and administrative controls for academic assessment processes.",
    images: ["/images/assessment-tool-updated.jpeg"],
    technologies: ["Web Development", "Education Tech", "Admin Dashboard", "User Management", "Academic Tools"],
  },
  {
    title: "City Loads - Real Estate Platform",
    description:
      "Full-stack real estate and property management platform with both mobile and web interfaces. Features property listings, user authentication, social login integration, and cross-platform accessibility.",
    images: ["/images/city-loads.jpeg"],
    technologies: ["Full-Stack", "Real Estate", "Cross-Platform", "Social Auth", "Property Management", "Responsive"],
  },
]

export function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:glow-accent transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <img
                          src={project.images[0] || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-primary font-semibold">Click to view</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <div className="grid gap-4">
                        {project.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image || "/placeholder.svg"}
                            alt={`${project.title} - View ${imgIndex + 1}`}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <CardHeader>
                  <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-accent/30 text-foreground hover:bg-accent/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
