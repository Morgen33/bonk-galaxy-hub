import { Button } from "@/components/ui/button"
import { ArrowDown, Rocket, Star, Sparkles } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow rounded-full animate-float opacity-80" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-primary rounded-full animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute bottom-60 right-1/3 w-4 h-4 bg-accent rounded-full animate-float opacity-70" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-up">
          {/* Mascot */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/5154f45d-550b-4570-87e6-2e7f31112763.png" 
                alt="Bonk Mascot" 
                className="w-32 h-32 md:w-48 md:h-48 animate-float"
              />
              <div className="absolute -inset-4 bg-gradient-primary/20 rounded-full blur-xl animate-glow"></div>
            </div>
          </div>

          {/* Main title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              $BONK HUB
            </span>
            <br />
            <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground">
              Where Meme Dreams Take Flight
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, explore, and showcase the most innovative projects built on the $BONK ecosystem. 
            Join the community driving the future of meme coins in the Solana space.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" className="text-lg">
              <Rocket className="w-5 h-5 mr-2" />
              Explore Projects
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <Sparkles className="w-5 h-5 mr-2" />
              Submit Your Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:border-primary/20 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Active Projects</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:border-primary/20 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/20 hover:border-primary/20 transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
              <div className="text-muted-foreground">Total Value Locked</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}

export default HeroSection