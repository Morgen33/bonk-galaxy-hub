import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Rocket, Users, PlusCircle, Zap } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Projects", href: "#projects", icon: Rocket },
    { label: "Community", href: "#community", icon: Users },
    { label: "Submit Project", href: "#submit", icon: PlusCircle },
    { label: "About", href: "#about", icon: Zap },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-full animate-glow"></div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              $BONK HUB
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/90 backdrop-blur-md rounded-lg mt-2 border border-border/20">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation