import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Users, Shield, Zap } from "lucide-react"

export function EnterpriseSection() {
  const enterpriseFeatures = [
    {
      icon: Building,
      title: "Centralized Management",
      description: "Deploy and manage BitShred across your entire organization from a single dashboard.",
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Role-based access control with detailed audit logs and compliance reporting.",
    },
    {
      icon: Shield,
      title: "Advanced Compliance",
      description: "Meet GDPR, HIPAA, and SOX requirements with certified destruction certificates.",
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Schedule automatic data destruction and integrate with existing IT infrastructure.",
    },
  ]

  return (
    <section id="enterprise" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Enterprise Solutions"}</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "Scale BitShred across your organization with advanced management tools and enterprise-grade security features."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {enterpriseFeatures.map((feature, index) => (
            <Card key={index} className="bg-card border-border">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">{"Ready for Enterprise?"}</CardTitle>
              <CardDescription className="text-lg">
                {"Contact our sales team for custom pricing and deployment options."}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[160px]">
                {"Contact Sales"}
              </Button>
              <Button size="lg" variant="outline" className="min-w-[160px] bg-transparent">
                {"Request Demo"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
