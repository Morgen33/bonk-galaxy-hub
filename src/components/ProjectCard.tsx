import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, TrendingUp, Star, Send, Copy } from "lucide-react"

interface ProjectCardProps {
  name: string
  description: string
  category: string
  users: string
  growth: string
  rating: number
  image?: string
  website?: string
  status: "live" | "beta" | "coming-soon"
  launchUrl?: string
  dexUrl?: string
  contractAddress?: string
  analyticsUrl?: string
  buttonText?: string
  telegramUrl?: string
}

const ProjectCard = ({ 
  name, 
  description, 
  category, 
  users, 
  growth, 
  rating, 
  image, 
  website,
  status,
  launchUrl,
  dexUrl,
  contractAddress,
  analyticsUrl,
  buttonText,
  telegramUrl
}: ProjectCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "live": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "beta": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "coming-soon": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      default: return "bg-muted/20 text-muted-foreground border-muted/30"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "live": return "Live"
      case "beta": return "Beta"
      case "coming-soon": return "Coming Soon"
      default: return "Unknown"
    }
  }

  const handleLaunchApp = () => {
    if (status === "coming-soon") return

    // Priority: launchUrl > dexUrl > analyticsUrl
    const targetUrl = launchUrl || dexUrl || analyticsUrl
    
    if (targetUrl) {
      window.open(targetUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card className="group hover:shadow-glow hover:scale-105 transition-all duration-300 overflow-hidden">
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-secondary overflow-hidden">
        {image ? (
          <div className="w-full h-full flex items-center justify-center p-4">
            <img 
              src={image} 
              alt={name} 
              className="w-32 h-32 object-contain rounded-full bg-white p-2" 
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">
                {name.charAt(0)}
              </span>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4">
          <Badge className={`${getStatusColor(status)} font-medium`}>
            {getStatusText(status)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-black/20 backdrop-blur-sm border-white/20">
            {category}
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
            {name}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm text-muted-foreground">{rating}</span>
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{users} users</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-muted-foreground">{growth} growth</span>
          </div>
        </div>

        {/* Contract Address */}
        {contractAddress && (
          <div className="mb-4 p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Contract Address:</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 px-2"
                onClick={() => navigator.clipboard.writeText(contractAddress)}
              >
                <Copy className="w-3 h-3" />
              </Button>
            </div>
            <p className="text-xs font-mono mt-1 text-foreground break-all">
              {contractAddress}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col space-y-2">
          <Button 
            variant="yellow" 
            size="sm" 
            className="w-full"
            disabled={status === "coming-soon"}
            onClick={handleLaunchApp}
          >
            {status === "coming-soon" ? "Coming Soon" : "Letsbonk.fun"}
          </Button>
          <div className="flex space-x-2">
            {website && (
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1"
                onClick={() => window.open(website, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Website
              </Button>
            )}
            {telegramUrl && (
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1"
                onClick={() => window.open(telegramUrl, '_blank', 'noopener,noreferrer')}
              >
                <Send className="w-4 h-4 mr-1" />
                Telegram
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard