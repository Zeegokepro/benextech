import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Laptop,
  Battery,
  Database,
  Tv,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Water-Damaged MacBook Pro Recovery",
      category: "MacBook Recovery",
      client: "Business Executive, Lagos",
      duration: "48 hours",
      description: "Complete logic board restoration and data recovery for a MacBook Pro 16-inch that suffered severe water damage. Successfully retrieved all client data and restored full functionality.",
      tags: ["MacBook", "Water Damage", "Data Recovery", "Logic Board"],
      icon: Laptop,
      status: "Completed",
      rating: 5,
      details: [
        "Disassembled and cleaned all components",
        "Replaced corroded logic board components",
        "Recovered 100% of client data",
        "Applied protective coating for future resistance"
      ]
    },
    {
      id: 2,
      title: "5kW Residential Solar Installation",
      category: "Solar Install",
      client: "Family Home, Abuja",
      duration: "3 days",
      description: "Complete solar installation with hybrid inverter and lithium battery backup system. Reduced client's electricity bills by 80% with grid-tie functionality.",
      tags: ["Solar Panels", "Hybrid Inverter", "Battery Bank", "Grid-Tie"],
      icon: Battery,
      status: "Completed",
      rating: 5,
      details: [
        "Installed 20x 250W monocrystalline panels",
        "5kW hybrid inverter with MPPT charge controller",
        "200Ah lithium battery bank",
        "Grid-tie system with net metering"
      ]
    },
    {
      id: 3,
      title: "iPhone 14 Pro Screen Restoration",
      category: "Phone Repair",
      client: "Professional Photographer, Port Harcourt",
      duration: "Same day",
      description: "Premium screen replacement for iPhone 14 Pro with camera alignment and Face ID calibration. Maintained all original functionality with 2-year warranty.",
      tags: ["iPhone", "Screen Replacement", "Camera Calibration", "Face ID"],
      icon: Smartphone,
      status: "Completed",
      rating: 5,
      details: [
        "Genuine Apple OLED display replacement",
        "Face ID sensor recalibration",
        "Camera module realignment",
        "Complete water resistance restoration"
      ]
    },
    {
      id: 4,
      title: "Critical Data Recovery Operation",
      category: "Data Recovery",
      client: "Law Firm, Lagos",
      duration: "72 hours",
      description: "Emergency data recovery from a failed RAID array containing 5TB of critical legal documents. Recovered 99.8% of data using advanced forensic techniques.",
      tags: ["RAID Recovery", "Legal Documents", "Forensic Recovery", "Emergency"],
      icon: Database,
      status: "Completed",
      rating: 5,
      details: [
        "RAID 5 array reconstruction",
        "Sector-by-sector data imaging",
        "File system repair and validation",
        "Secure data transfer and verification"
      ]
    },
    {
      id: 5,
      title: "Corporate Laptop Fleet Upgrade",
      category: "Enterprise Service",
      client: "Tech Startup, Lagos",
      duration: "1 week",
      description: "Upgraded 25 company laptops with SSD drives, RAM expansions, and fresh OS installations. Improved overall system performance by 300%.",
      tags: ["Bulk Service", "SSD Upgrade", "RAM Expansion", "OS Installation"],
      icon: Laptop,
      status: "Completed",
      rating: 5,
      details: [
        "25x laptop hardware upgrades",
        "1TB NVMe SSD installations",
        "32GB RAM upgrades per device",
        "Windows 11 Pro deployment"
      ]
    },
    {
      id: 6,
      title: "Smart TV Network Integration",
      category: "Smart TV Setup",
      client: "Luxury Hotel, Abuja",
      duration: "5 days",
      description: "Configured 50 smart TVs with custom hospitality interface, centralized content management, and guest Wi-Fi integration for premium hotel experience.",
      tags: ["Smart TV", "Hospitality", "Network Setup", "Content Management"],
      icon: Tv,
      status: "Completed",
      rating: 5,
      details: [
        "50 smart TV configuration",
        "Custom hospitality interface",
        "Centralized content management system",
        "Guest Wi-Fi integration"
      ]
    }
  ];

  const categories = ["All", "MacBook Recovery", "Solar Install", "Phone Repair", "Data Recovery", "Enterprise Service", "Smart TV Setup"];

  return (
    <div className="w-full bg-red-500">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Our Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore real projects and transformations we've delivered for clients across Nigeria. From emergency repairs to complete solar installations, see how we solve complex tech challenges.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-primary mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-accent mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-primary mb-1">48hr</div>
                <div className="text-sm text-muted-foreground">Avg. Turnaround</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "btn-glow bg-primary hover:bg-primary/90" : "btn-glow border-glow"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card key={project.id} className="card-hover border-glow group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <div className="flex">
                        {[...Array(project.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.client}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2" />
                        Completed in {project.duration}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs border-accent/30">
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Status & Action */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent mr-1" />
                        <span className="text-accent font-medium">{project.status}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-accent">
                        View Details <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Project Details */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <Badge className="mb-4 bg-accent/20 text-accent">Featured Project</Badge>
                    <h2 className="text-2xl font-heading font-bold mb-4">
                      Emergency MacBook Recovery for Business Critical Data
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      A Lagos-based executive's MacBook Pro suffered severe water damage containing 5 years of business presentations and client data. Our team executed a complex recovery operation within 48 hours.
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="font-semibold text-primary">Recovery Process:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                          Complete device disassembly and component analysis
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                          Logic board cleaning and component replacement
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                          Advanced data recovery using forensic tools
                        </div>
                        <div className="flex items-center text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent mr-2" />
                          System restoration and performance optimization
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary mb-1">100%</div>
                        <div className="text-sm text-muted-foreground">Data Recovered</div>
                      </div>
                      <div className="text-center p-4 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent mb-1">48hrs</div>
                        <div className="text-sm text-muted-foreground">Completion Time</div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-secondary/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Client Testimonial:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        "I thought all my business data was lost forever. Benextech not only recovered everything but made my MacBook work better than before. Incredible service!"
                      </p>
                      <div className="flex items-center mt-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          A.O
                        </div>
                        <span className="text-sm font-medium">A.O., Business Executive</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before & After Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              <span className="text-primary">Before</span> & <span className="text-accent">After</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See the dramatic transformations we achieve through expert repair and optimization work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Shield className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <Badge variant="destructive" className="mb-2">Before</Badge>
                  <h3 className="font-semibold">Virus-Infected PC</h3>
                  <p className="text-sm text-muted-foreground">Slow boot, frequent crashes, malware warnings</p>
                </div>
                <div className="text-center border-t pt-4">
                  <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                  <Badge className="mb-2 bg-accent/20 text-accent">After</Badge>
                  <h3 className="font-semibold">Optimized System</h3>
                  <p className="text-sm text-muted-foreground">Fast boot, stable performance, comprehensive security</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Battery className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <Badge variant="destructive" className="mb-2">Before</Badge>
                  <h3 className="font-semibold">High Electricity Bills</h3>
                  <p className="text-sm text-muted-foreground">₦150,000 monthly power costs, frequent outages</p>
                </div>
                <div className="text-center border-t pt-4">
                  <Battery className="w-8 h-8 text-accent mx-auto mb-2" />
                  <Badge className="mb-2 bg-accent/20 text-accent">After</Badge>
                  <h3 className="font-semibold">Solar Independence</h3>
                  <p className="text-sm text-muted-foreground">₦30,000 monthly costs, 24/7 reliable power</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Smartphone className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <Badge variant="destructive" className="mb-2">Before</Badge>
                  <h3 className="font-semibold">Cracked iPhone Screen</h3>
                  <p className="text-sm text-muted-foreground">Unusable display, touch issues, safety concerns</p>
                </div>
                <div className="text-center border-t pt-4">
                  <Smartphone className="w-8 h-8 text-accent mx-auto mb-2" />
                  <Badge className="mb-2 bg-accent/20 text-accent">After</Badge>
                  <h3 className="font-semibold">Like-New Condition</h3>
                  <p className="text-sm text-muted-foreground">Perfect display, responsive touch, 2-year warranty</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="border-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready for Your <span className="text-primary">Success Story</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join the thousands of satisfied clients who have experienced our expert repair and installation services. Your tech challenge is our next success story.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button variant="outline" className="btn-glow border-glow" size="lg" asChild>
                  <Link to="/clients">Read More Reviews</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Projects;