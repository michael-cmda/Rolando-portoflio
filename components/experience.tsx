import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Smartphone, Globe, Wrench } from "lucide-react"

const experiences = [
  {
    title: "Desktop/Mobile Developer",
    company: "Nielsen & Moller Auto Glass USA",
    icon: <Building className="h-6 w-6" />,
    responsibilities: [
      "Designing, implementing, and maintaining API integrations for seamless communication between systems and third-party services",
      "Implemented state management solutions such as Provider and Bloc to ensure scalable and maintainable codebases",
      "Successfully published apps on the Apple App Store, Google Play Store, and Huawei AppGallery",
      "Designed intuitive, user-friendly mobile interfaces with a focus on both aesthetics and functionality",
      "Developed comprehensive Entity-Relationship Diagrams (ERDs) to map out database structure, identify entities, relationships, and define data attributes",
    ],
  },
  {
    title: "Mobile & Web Developer",
    company: "Aetos Financial",
    icon: <Smartphone className="h-6 w-6" />,
    responsibilities: [
      "Designed and developed cross-platform applications for desktop (Windows) and mobile platforms (iOS & Android)",
      "Created interactive wireframes and prototypes using Figma for client and stakeholder approval",
      "Led deployment and release processes for apps published on the Microsoft Store, App Store, and Google Play",
      "Integrated third-party APIs and services to enhance app functionality and business intelligence",
      "Optimized application performance to ensure fast, reliable, and secure user experiences",
      "Built and maintained apps that improved sales tracking, inventory management, and workflow",
    ],
  },
  {
    title: "Intern Bubble.io Web Developer",
    company: "Jairosoft Inc.",
    icon: <Globe className="h-6 w-6" />,
    responsibilities: [
      "Built no-code applications using Bubble.io, implementing workflows, databases, and responsive UIs",
      "Tested and debugged features using Bubble's built-in debugger and manual testing",
      "Received mentorship and feedback to enhance no-code and general software development skills",
      "Participated in sprint meetings and weekly code reviews to improve feature quality",
      "Designed intuitive, user-friendly mobile interfaces with a focus on both aesthetics and functionality",
    ],
  },
  {
    title: "Technical Support",
    company: "University of Mindanao",
    icon: <Wrench className="h-6 w-6" />,
    responsibilities: [
      "Troubleshoot software, browser, or hardware issues (e.g., login errors, slow performance, system bugs)",
      "Perform routine system checks and updates as needed",
      "Monitor and respond to support tickets in a timely and professional manner",
      "Provide step-by-step technical instructions to resolve user issues",
      "Follow up with users to ensure issue resolution and satisfaction",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Work Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:glow-accent transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-accent/20 rounded-lg text-accent">{exp.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground font-normal">{exp.company}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
