import { Button } from "@/components/ui/button"
import { Twitter, MessageSquare, Github, ExternalLink } from "lucide-react"

const Footer = () => {
  const links = {
    ecosystem: [
      { name: "Projects", href: "#projects" },
      { name: "Developers", href: "#developers" },
      { name: "Community", href: "#community" },
      { name: "Events", href: "#events" },
    ],
    resources: [
      { name: "Documentation", href: "#docs" },
      { name: "API Reference", href: "#api" },
      { name: "Tutorials", href: "#tutorials" },
      { name: "Brand Kit", href: "#brand" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Submit Project", href: "#submit" },
      { name: "Bug Reports", href: "#bugs" },
      { name: "Feature Requests", href: "#features" },
    ],
  }

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-full animate-glow"></div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Bonk Deck
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate directory for discovering and showcasing tokens 
              in the $BONK ecosystem. Join the living catalog of meme token innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Ecosystem</h3>
            <ul className="space-y-2">
              {links.ecosystem.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Bonk Deck. Built with 🧡 for the community.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a 
                href="https://bonkcoin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center space-x-1"
              >
                <span>Official $BONK</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer