import { Button } from "@/components/ui/button"
import { Shield, Download, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="w-16 h-16 text-primary" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
          <span className="text-primary">Bit</span>Shred
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance max-w-4xl mx-auto">
          {"Military-grade data destruction with encrypted deletion"}
        </p>

        <p className="text-lg text-foreground mb-12 text-balance max-w-3xl mx-auto">
          {
            "Data is encrypted then permanently deleted - ensuring 100% privacy and complete unrecoverability. Once it's gone, it's gone forever."
          }
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Privacy Guaranteed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">35-Pass</div>
            <div className="text-muted-foreground">Overwrite Algorithm</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">NIST 800-88</div>
            <div className="text-muted-foreground">Compliant</div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link href="/api/download/BitshredW.exe" download>
            <Button size="lg" className="min-w-[200px]">
              <Download className="w-5 h-5 mr-2" />
              Windows
            </Button>
          </Link>
          <Link href="/api/download/Bitshred.exe" download>
            <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Linux
            </Button>
          </Link>
          <Link href="https://github.com/0M4NU4L/BitShred/releases/latest/download/BitshredA.apk" download>
            <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
              <Download className="w-5 h-5 mr-2" />
              Android
            </Button>
          </Link>
        </div>

        {/* GitHub Link */}
        <div className="flex justify-center">
          <Link href="https://github.com/0M4NU4L/BitShred" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
