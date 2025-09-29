import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Monitor, FileCheck } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Secure Overwriting",
      description:
        "Multiple-pass overwriting algorithms ensure data is completely unrecoverable, meeting NIST 800-88 standards.",
    },
    {
      icon: Monitor,
      title: "Cross-Platform",
      description: "Native support for Windows and Linux systems with unified interface.",
    },
    {
      icon: FileCheck,
      title: "Complete Destruction",
      description: "Wipe entire drives, specific partitions and get a signed verifying certificate.",
    },
  ]

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Uncompromising Security"}</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "BitShred employs military-grade encryption and deletion techniques to ensure your sensitive data can never be recovered."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 border border-primary/20">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
