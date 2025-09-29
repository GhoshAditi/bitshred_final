import { Button } from "@/components/ui/button"
import { Github, Twitter, Mail, Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">
                <span className="text-primary">Bit</span>Shred
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {
                "Military-grade data destruction with encrypted deletion. Ensuring 100% privacy and complete data unrecoverability."
              }
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-foreground transition-colors">
                  Platforms
                </a>
              </li>
              <li>
                <a href="#enterprise" className="hover:text-foreground transition-colors">
                  Enterprise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">{"© 2025 BitShred. All rights reserved."}</p>
          <p className="text-sm text-muted-foreground">{"NIST 800-88 Compliant • Military-Grade Security"}</p>
        </div>
      </div>
    </footer>
  )
}
