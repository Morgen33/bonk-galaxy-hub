import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Trophy, Calendar, ExternalLink } from "lucide-react";
const CommunitySection = () => {
  const communityStats = [{
    label: "Platform Status",
    value: "Beta",
    icon: MessageSquare
  }, {
    label: "Early Adopters",
    value: "Join Us",
    icon: Users
  }, {
    label: "Token Submissions",
    value: "Open",
    icon: Trophy
  }, {
    label: "Community Events",
    value: "Coming Soon",
    icon: Calendar
  }];
  const events = [{
    title: "BONK Builder Bootcamp",
    date: "Dec 15, 2024",
    type: "Workshop",
    participants: "500+",
    status: "upcoming"
  }, {
    title: "Meme Coin Summit 2024",
    date: "Dec 20, 2024",
    type: "Conference",
    participants: "2000+",
    status: "upcoming"
  }, {
    title: "BONK Hackathon Finals",
    date: "Jan 10, 2025",
    type: "Competition",
    participants: "1000+",
    status: "registration"
  }];
  const testimonials = [{
    name: "Alex Chen",
    role: "DeFi Developer",
    text: "The BONK community helped me launch my first DeFi protocol. The support and resources are incredible!",
    project: "BONKSwap"
  }, {
    name: "Sarah Kim",
    role: "Game Designer",
    text: "From idea to launch in 3 months thanks to the amazing network and feedback from the community.",
    project: "BONK Wars"
  }, {
    name: "Marcus Rodriguez",
    role: "NFT Artist",
    text: "The community's enthusiasm for creative projects made my NFT collection a massive success.",
    project: "BONK Punks"
  }];
  return <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Join the Community
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with builders, creators, and enthusiasts driving the $BONK ecosystem forward
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {communityStats.map((stat, index) => <Card key={stat.label} className="text-center hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-primary rounded-full">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>)}
        </div>

        {/* Events and Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Upcoming Events</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
                <p className="text-muted-foreground">
                  Exciting events are being planned. Stay tuned for announcements!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Community Stories</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => <div key={index} className="p-4 bg-gradient-accent rounded-lg border border-border/20">
                    <p className="text-sm italic mb-3">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-secondary border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build the Future?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of developers, creators, and enthusiasts building the next generation 
                of meme coin applications and experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" onClick={() => window.open('https://letsbonk.fun/', '_blank')}>
                  Lets bonk
                </Button>
                
                <Button variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Follow Twitter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default CommunitySection;