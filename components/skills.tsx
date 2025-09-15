import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Database, Wrench, Users, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="h-6 w-6" />,
    skills: ["Dart", "JavaScript", "PHP", "CSS", "React", "Flutter", "Laravel"],
  },
  {
    title: "Mobile & Cross-Platform",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      "Flutter",
      "iOS Development",
      "Android Development",
      "Cross-Platform Apps",
      "App Store Deployment",
      "Huawei AppGallery",
      "Microsoft Store",
    ],
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-6 w-6" />,
    skills: ["Firebase", "RESTful APIs", "Database Design", "ERD Mapping", "API Integration", "Third-party APIs"],
  },
  {
    title: "Tools & Development",
    icon: <Wrench className="h-6 w-6" />,
    skills: ["Postman", "GitHub", "GitLab", "ClickUp", "Rocks", "Bubble", "Figma", "CPanel"],
  },
  {
    title: "Architecture & Patterns",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      "Clean Architecture",
      "Provider State Management",
      "BLoC Pattern",
      "Scalable Solutions",
      "Performance Optimization",
    ],
  },
  {
    title: "Collaboration & Process",
    icon: <Users className="h-6 w-6" />,
    skills: ["Sprint Meetings", "Code Reviews", "Wireframing", "Prototyping", "Technical Support", "Mentorship"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:glow-accent transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-card-foreground">
                    <div className="p-2 bg-accent/20 rounded-lg text-accent">{category.icon}</div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-accent/10 text-foreground border border-accent/20 hover:bg-accent/20 hover:text-foreground transition-colors"
                      >
                        {skill}
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
