import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, CheckCircle, PlusCircle, Rocket, Send } from "lucide-react";
const SubmitSection = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    category: "",
    website: "",
    twitter: "",
    discord: "",
    contractAddress: "",
    launchUrl: "",
    telegramUrl: "",
    projectImage: null as File | null
  });
  const categories = ["DeFi", "Gaming", "NFT", "Tools", "Social", "Infrastructure"];
  const requirements = [{
    text: "Built on or integrated with $BONK",
    met: true
  }, {
    text: "Working product or demo",
    met: false
  }, {
    text: "Active community",
    met: false
  }, {
    text: "Verified smart contracts",
    met: false
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        projectImage: file
      }));
    }
  };
  return <section id="submit" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-accent">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Submit Your Project
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the growing $BONK ecosystem and showcase your project to thousands of users
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Requirements Card */}
          <Card className="my-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Submission Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {requirements.map((req, index) => <div key={index} className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${req.met ? "bg-green-500" : "bg-muted border-2 border-muted-foreground"}`}>
                      {req.met && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={req.met ? "text-foreground" : "text-muted-foreground"}>
                      {req.text}
                    </span>
                  </div>)}
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Review Process</h4>
                <p className="text-sm text-muted-foreground">
                  All submissions are reviewed within 48 hours. Projects meeting our criteria 
                  will be featured in our discovery section.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Submission Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PlusCircle className="w-5 h-5 text-primary" />
                <span>Project Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Name</label>
                  <input type="text" name="projectName" value={formData.projectName} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your project name" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea name="description" value={formData.description} onChange={handleInputChange} rows={3} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Describe your project in 2-3 sentences" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select name="category" value={formData.category} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" required>
                    <option value="">Select a category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Contract Address (CA)</label>
                  <input type="text" name="contractAddress" value={formData.contractAddress} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-mono" placeholder="Enter your contract address" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Project Image</label>
                  <div className="relative">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required />
                    <div className="w-full p-6 bg-background border border-border border-dashed rounded-lg text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {formData.projectImage ? formData.projectImage.name : "Click to upload project image"}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Launch URL (e.g., letsbonk.fun)</label>
                  <input type="url" name="launchUrl" value={formData.launchUrl} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="https://letsbonk.fun/token/your-token" required />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Website URL</label>
                  <input type="url" name="website" value={formData.website} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="https://yourproject.com" required />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Twitter</label>
                    <input type="text" name="twitter" value={formData.twitter} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="@username" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Discord</label>
                    <input type="text" name="discord" value={formData.discord} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Discord invite" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Telegram</label>
                  <input type="url" name="telegramUrl" value={formData.telegramUrl} onChange={handleInputChange} className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="https://t.me/your-group" />
                </div>

                <Button type="submit" variant="hero" className="w-full">
                  <Rocket className="w-4 h-4 mr-2" />
                  Submit Project
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SubmitSection;