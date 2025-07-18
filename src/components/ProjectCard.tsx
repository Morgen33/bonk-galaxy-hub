import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Users, TrendingUp, Star } from "lucide-react"

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
  status 
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

  return (
    <Card className="group hover:shadow-glow hover:scale-105 transition-all duration-300 overflow-hidden">
      {/* Project Image/Icon */}
      <div className="relative h-48 bg-gradient-secondary overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
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
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{users} users</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-muted-foreground">{growth} growth</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button 
            variant="default" 
            size="sm" 
            className="flex-1"
            disabled={status === "coming-soon"}
          >
            {status === "coming-soon" ? "Coming Soon" : "Launch App"}
          </Button>
          {website && (
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectCard