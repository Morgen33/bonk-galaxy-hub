import { useState } from "react"
import { Button } from "@/components/ui/button"
import ProjectCard from "./ProjectCard"
import { Filter, Grid3X3, List, Search } from "lucide-react"

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all")
  const [view, setView] = useState("grid")

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "defi", label: "DeFi" },
    { id: "gaming", label: "Gaming" },
    { id: "nft", label: "NFT" },
    { id: "tools", label: "Tools" },
    { id: "social", label: "Social" },
  ]

  const projects = [
    {
      name: "$BOINK",
      description: "Community-driven meme token with explosive growth potential and strong community backing.",
      category: "Meme Token",
      users: "15K",
      growth: "+340%",
      rating: 4.7,
      image: "/lovable-uploads/18ac63c5-3b62-44c3-8edf-24138b039d38.png",
      status: "live" as const,
      launchUrl: "https://letsbonk.fun/token/CdvEbor8zTsVZmQLGFHpn95YwjBairPqwDK21787bonk",
      website: "https://boinkme.xyz/",
      dexUrl: "https://jup.ag/swap/SOL-CdvEbor8zTsVZmQLGFHpn95YwjBairPqwDK21787bonk",
      contractAddress: "CdvEbor8zTsVZmQLGFHpn95YwjBairPqwDK21787bonk",
      analyticsUrl: "https://dexscreener.com/solana/CdvEbor8zTsVZmQLGFHpn95YwjBairPqwDK21787bonk",
      buttonText: "letsbonk.fun",
      telegramUrl: "https://t.me/boinktoken",
    },
    {
      name: "BONKSwap",
      description: "Decentralized exchange for trading $BONK and other meme tokens with lightning-fast swaps and minimal fees.",
      category: "DeFi",
      users: "12.5K",
      growth: "+45%",
      rating: 4.8,
      status: "live" as const,
      launchUrl: "https://bonkswap.io",
      website: "https://bonkswap.io",
    },
    {
      name: "BONK Wars",
      description: "Epic battle royale game where players compete using $BONK tokens to unlock special weapons and abilities.",
      category: "Gaming",
      users: "8.2K",
      growth: "+120%",
      rating: 4.6,
      status: "beta" as const,
      launchUrl: "https://bonkwars.game",
      website: "https://bonkwars.game",
    },
    {
      name: "BONK Punks",
      description: "Unique NFT collection featuring 10,000 procedurally generated BONK-themed punk characters.",
      category: "NFT",
      users: "5.7K",
      growth: "+80%",
      rating: 4.7,
      status: "live" as const,
      launchUrl: "https://magiceden.io/marketplace/bonkpunks",
      website: "https://bonkpunks.com",
    },
    {
      name: "BONK Analytics",
      description: "Real-time analytics and tracking dashboard for $BONK ecosystem projects and market data.",
      category: "Tools",
      users: "15.3K",
      growth: "+25%",
      rating: 4.9,
      status: "live" as const,
      launchUrl: "https://analytics.bonk.io",
      website: "https://analytics.bonk.io",
    },
    {
      name: "BONK Social",
      description: "Social platform connecting BONK enthusiasts with features for token-gated communities and rewards.",
      category: "Social",
      users: "22.1K",
      growth: "+65%",
      rating: 4.5,
      status: "beta" as const,
      launchUrl: "https://social.bonk.io",
      website: "https://social.bonk.io",
    },
    {
      name: "BONK Yield Farm",
      description: "High-yield farming platform offering attractive APY for $BONK staking and liquidity provision.",
      category: "DeFi",
      users: "9.8K",
      growth: "+90%",
      rating: 4.4,
      status: "coming-soon" as const,
      website: "https://farm.bonk.io",
    },
  ]

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the most innovative and popular projects built on the $BONK ecosystem
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category.id)}
                className="text-sm"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Search and View Controls */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4" />
            </Button>
            <div className="flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={view === "grid" ? "default" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setView("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={view === "list" ? "default" : "ghost"}
                size="sm"
                className="rounded-none"
                onClick={() => setView("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 ${
          view === "grid" 
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1"
        }`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection