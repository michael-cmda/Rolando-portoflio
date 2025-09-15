import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, Briefcase } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As a seasoned full-stack developer, I specialize in building high-performance, cross-platform
                applications for mobile (iOS/Android), desktop (Windows/macOS), and web. My expertise lies in
                architecting scalable and maintainable solutions using Clean Architecture, coupled with robust state
                management via Provider and BLoC.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I have a strong background in integrating RESTful APIs to deliver seamless backend connectivity and
                ensure optimal app performance. Throughout my career, I've successfully developed and deployed multiple
                applications, prioritizing clean code, efficient workflows, and exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I thrive on solving complex challenges and delivering solutions that not only meet but exceed
                expectations. My experience spans from enterprise-level applications to innovative startup solutions.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-card border-border glow-accent">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-card-foreground">Education</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-primary">Bachelor of Science in Information Technology</p>
                    <p className="text-muted-foreground">University of Mindanao – Davao City</p>
                    <div className="flex items-center mt-2">
                      <Award className="h-4 w-4 text-accent mr-2" />
                      <span className="text-accent font-medium">Magna Cum Laude</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-8 w-8 text-accent mr-3" />
                    <h3 className="text-xl font-semibold text-card-foreground">Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Successfully published apps on Apple App Store, Google Play Store, and Huawei AppGallery
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Led deployment processes for Microsoft Store, App Store, and Google Play
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">
                        Designed comprehensive Entity-Relationship Diagrams (ERDs) for database architecture
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="text-card-foreground">Lizada Toril DC, Philippines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="text-card-foreground">Full-Stack Development</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Specialization:</span>
                      <span className="text-card-foreground">Cross-Platform Apps</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Architecture:</span>
                      <span className="text-card-foreground">Clean Architecture</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
