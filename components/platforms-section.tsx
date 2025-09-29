import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Server } from "lucide-react"

export function PlatformsSection() {
  const platforms = [
    {
      icon: Monitor,
      title: "Windows",
      description: "Full support for Windows 10/11 with GUI and command-line interfaces.",
      features: ["NTFS & FAT32 support", "Registry cleaning", "Recycle bin wiping"],
    },
    {
      icon: Server,
      title: "Linux",
      description: "Native Linux support with advanced filesystem compatibility.",
      features: ["ext4, XFS, Btrfs support", "Terminal integration", "Automated scripting"],
    },
    {
      icon: Smartphone,
      title: "Android",
      description: "Secure mobile data destruction for Android devices.",
      features: ["Internal storage wiping", "SD card cleaning", "App data removal"],
    },
  ]

  return (
    <section id="platforms" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{"Universal Compatibility"}</h2>
          <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
            {
              "BitShred works seamlessly across all major platforms with native optimizations for each operating system."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-background border-border">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                    <platform.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">{platform.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{platform.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6">{"Download for " + platform.title}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
