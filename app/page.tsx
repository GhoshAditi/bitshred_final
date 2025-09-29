import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { PlatformsSection } from "@/components/platforms-section"
import { EnterpriseSection } from "@/components/enterprise-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <EnterpriseSection />
      <Footer />
    </main>
  )
}
