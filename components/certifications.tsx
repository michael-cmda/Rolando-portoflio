"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Calendar, Award, Building } from "lucide-react"

const certifications = [
  {
    title: "Bachelor of Science in Information Technology - Magna Cum Laude",
    issuer: "University of Mindanao",
    instructor: "Dean Ramcis N. Vilchez & President Guillermo P. Torres Jr.",
    date: "Aug 5, 2024",
    duration: "4-Year Degree Program",
    image: "/images/cert-magna-cum-laude.jpeg",
    category: "Academic Achievement",
  },
  {
    title: "Certificate of Progression - Second Honors (GPA 3.36)",
    issuer: "University of Mindanao",
    instructor: "Dean Ramcis N. Vilchez & University Registrar",
    date: "May 25, 2022",
    duration: "Academic Year 2021-2022",
    image: "/images/cert-progression.jpeg",
    category: "Academic Achievement",
  },
  {
    title: "Flutter REST Movie App: Master Flutter REST API Development",
    issuer: "Udemy",
    instructor: "Hussain Mustafa",
    date: "Dec 3, 2023",
    duration: "3.5 total hours",
    image: "/images/cert-flutter-rest.jpeg",
    category: "Mobile Development",
  },
  {
    title: "1st Davao Student Startup Summit 2023",
    issuer: "DICE Foundation",
    instructor: "Liam James Mendoza",
    date: "Sept 20, 2023",
    duration: "Event Participation",
    image: "/images/cert-startup-summit.jpeg",
    category: "Innovation & Entrepreneurship",
  },
  {
    title: "Code Your Future: 40 Mins Coding Workshop for Non-Coders",
    issuer: "StackTrek Enterprise & University of Mindanao",
    instructor: "Haifa Carina S. Baluyos & Ramcis Vilchez",
    date: "March 22, 2023",
    duration: "40 minutes",
    image: "/images/cert-code-future.jpeg",
    category: "Programming Fundamentals",
  },
  {
    title: "Python Development Essentials",
    issuer: "Udemy",
    instructor: "MTF Institute of Management, Technology and Finance",
    date: "March 10, 2024",
    duration: "42 total mins",
    image: "/images/cert-python-essentials.jpeg",
    category: "Backend Development",
  },
  {
    title: "QR Code Generator Using JavaScript",
    issuer: "Udemy",
    instructor: "Narendra Dwivedi",
    date: "Jan 27, 2024",
    duration: "1 total hour",
    image: "/images/cert-qr-generator.jpeg",
    category: "Web Development",
  },
  {
    title: "Flutter & Firebase Chat App: Master Flutter and Firebase",
    issuer: "Udemy",
    instructor: "Hussain Mustafa",
    date: "May 22, 2024",
    duration: "10.5 total hours",
    image: "/images/cert-flutter-firebase.jpeg",
    category: "Mobile Development",
  },
  {
    title: "Computer Systems Servicing - National Certificate II",
    issuer: "TESDA (Technical Education and Skills Development Authority)",
    instructor: "Government Certification",
    date: "Oct 24, 2023",
    duration: "Professional Certification",
    image: "/images/cert-tesda.png",
    category: "Technical Certification",
  },
  {
    title: "Build from Scratch a Modern REST API with PHP 8",
    issuer: "Udemy",
    instructor: "Pierre-Henry Soria",
    date: "Jan 26, 2024",
    duration: "17.5 total hours",
    image: "/images/cert-php-api.jpeg",
    category: "Backend Development",
  },
  {
    title: "Information Technology Specialist - Networking",
    issuer: "Pearson VUE / Certiport",
    instructor: "Dr. Gary A. Gates",
    date: "Dec 17, 2022",
    duration: "Professional Certification",
    image: "/images/cert-networking.jpeg",
    category: "IT Infrastructure",
  },
  {
    title: "Foundations of Web Development: CSS, Bootstrap, JS, React",
    issuer: "Udemy",
    instructor: "Proper Dot Institute",
    date: "Dec 2, 2023",
    duration: "5.5 total hours",
    image: "/images/cert-web-foundations.jpeg",
    category: "Web Development",
  },
  {
    title: "Django for Beginners",
    issuer: "Udemy",
    instructor: "Surya Teja Koka",
    date: "March 29, 2024",
    duration: "1.5 total hours",
    image: "/images/cert-django.jpeg",
    category: "Backend Development",
  },
  {
    title: "Cyber Security's Frontier: Emerging Trends and Technologies",
    issuer: "Udemy",
    instructor: "Prabh Kirpa Classes",
    date: "Feb 12, 2024",
    duration: "1 total hour",
    image: "/images/cert-cyber-frontier.jpeg",
    category: "Cybersecurity",
  },
  {
    title: "Learn Web Design using WordPress & Start Freelancing",
    issuer: "Udemy",
    instructor: "Khadin Akbar, Hustlix Academy, Khadin Akbar Support",
    date: "March 10, 2024",
    duration: "4 total hours",
    image: "/images/cert-wordpress.jpeg",
    category: "Web Development",
  },
  {
    title: "Master Course in Cyber Security & Cyber Security Awareness",
    issuer: "Udemy",
    instructor: "Dr. José J",
    date: "Feb 10, 2024",
    duration: "1 total hour",
    image: "/images/cert-cyber-master.jpeg",
    category: "Cybersecurity",
  },
  {
    title: "Information Technology Specialist - Network Security",
    issuer: "Pearson VUE / Certiport",
    instructor: "Dr. Gary A. Gates",
    date: "July 12, 2023",
    duration: "Professional Certification",
    image: "/images/cert-network-security.jpeg",
    category: "Cybersecurity",
  },
]

const categories = [
  "All",
  "Academic Achievement",
  "Mobile Development",
  "Web Development",
  "Backend Development",
  "Cybersecurity",
  "Technical Certification",
  "Innovation & Entrepreneurship",
  "Programming Fundamentals",
  "IT Infrastructure",
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
            Certifications & Professional Development
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card border-border hover:glow-accent transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="cursor-pointer">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-primary font-semibold">View Certificate</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <img
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.title}
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </DialogContent>
                  </Dialog>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="border-accent/30 text-foreground text-xs">
                      {cert.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-card-foreground text-lg leading-tight line-clamp-2">
                    {cert.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3 pt-0">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-accent" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span>{cert.instructor}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span>{cert.date}</span>
                    </div>

                    <div className="text-xs text-muted-foreground/80">Duration: {cert.duration}</div>
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
