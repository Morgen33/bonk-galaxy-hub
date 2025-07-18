import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import CommunitySection from "@/components/CommunitySection"
import SubmitSection from "@/components/SubmitSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <CommunitySection />
      <SubmitSection />
      <Footer />
    </div>
  )
}

export default Index
