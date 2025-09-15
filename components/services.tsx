import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Globe, Database, Palette, Store, Cog } from "lucide-react"

const services = [
  {
    title: "Web & Mobile App Development",
    description:
      "Full-stack development of responsive web applications and cross-platform mobile apps for iOS, Android, Windows, and macOS.",
    icon: <Smartphone className="h-8 w-8" />,
    features: ["Cross-platform compatibility", "Responsive design", "Performance optimization", "App store deployment"],
  },
  {
    title: "API Integration & Development",
    description:
      "Design and implement robust RESTful APIs and seamless third-party service integrations for enhanced functionality.",
    icon: <Globe className="h-8 w-8" />,
    features: ["RESTful API design", "Third-party integrations", "Real-time data sync", "Security implementation"],
  },
  {
    title: "UI/UX Prototyping & Frontend Design",
    description:
      "Create intuitive, user-friendly interfaces with modern design principles and interactive prototypes using Figma.",
    icon: <Palette className="h-8 w-8" />,
    features: ["Interactive prototypes", "Modern UI design", "User experience optimization", "Design system creation"],
  },
  {
    title: "Database Architecture & ERD Mapping",
    description:
      "Comprehensive database design and Entity-Relationship Diagram mapping to ensure optimal data structure and relationships.",
    icon: <Database className="h-8 w-8" />,
    features: ["Database optimization", "ERD mapping", "Data modeling", "Performance tuning"],
  },
  {
    title: "App Deployment & Publishing",
    description:
      "Complete deployment process management for publishing apps on Apple App Store, Google Play Store, and Microsoft Store.",
    icon: <Store className="h-8 w-8" />,
    features: ["Multi-platform publishing", "Store optimization", "Release management", "Update deployment"],
  },
  {
    title: "Technical Consulting & Support",
    description:
      "Provide expert technical guidance, code reviews, and ongoing support for software development projects.",
    icon: <Cog className="h-8 w-8" />,
    features: ["Code reviews", "Architecture consulting", "Performance analysis", "Technical mentoring"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Services I Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:glow-accent transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-accent/20 rounded-lg text-accent group-hover:bg-accent/30 transition-colors">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-card-foreground text-xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        {feature}
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
