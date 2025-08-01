import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Wrench, 
  Zap, 
  Youtube, 
  Star, 
  Shield, 
  Clock, 
  Users,
  Smartphone,
  Laptop,
  Tv,
  Battery,
  Database,
  Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(28, 28, 30, 0.8), rgba(0, 123, 255, 0.1)), url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We Fix, Upgrade, and Power Your Digital Life
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Benextech is your one-stop hub for fixing Apple & Android devices, PCs, Smart TVs, and solar systems — with expert hands, advanced tools, and trusted support.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">
                <Wrench className="w-5 h-5 mr-2" />
                Book Repair
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-glow border-glow text-lg px-8 py-6"
              asChild
            >
              <Link to="/services">
                <Zap className="w-5 h-5 mr-2" />
                View Services
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="btn-glow-accent hover:bg-accent/10 text-lg px-8 py-6"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Watch on YouTube
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose <span className="text-primary">Benextech</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional expertise meets cutting-edge technology to deliver unmatched service quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Expert Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Trained professionals with years of experience in Apple, Android, and solar technology.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Most repairs completed within 24-48 hours with same-day service available.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Trusted by Thousands</h3>
                <p className="text-muted-foreground">
                  Serving individuals and businesses with 95%+ customer satisfaction rate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Highlighted Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-accent">Premium</span> Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From device repairs to solar installations, we've got your tech needs covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">Device Repairs</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Expert repair for Apple, Android, PCs, Smart TVs, and gadgets
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-accent" asChild>
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Battery className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">Solar Systems</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Solar inverter setup, panel installation, and battery upgrades
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-accent" asChild>
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">Data & Software</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Data recovery, OS setup, virus removal, speed optimization
                </p>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:text-accent" asChild>
                  <Link to="/services">Learn More →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Teaser */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Recent <span className="text-primary">Success</span> Stories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we've helped customers restore and upgrade their tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">MacBook Recovery</span>
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Water-Damaged MacBook Pro</h3>
                <p className="text-muted-foreground text-sm">Complete logic board restoration and data recovery within 48 hours.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-accent/20 text-accent px-2 py-1 rounded">Solar Install</span>
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">5kW Solar System</h3>
                <p className="text-muted-foreground text-sm">Complete solar installation with hybrid inverter and battery backup.</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm bg-primary/20 text-primary px-2 py-1 rounded">Phone Repair</span>
                  <Star className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">iPhone 14 Pro Screen</h3>
                <p className="text-muted-foreground text-sm">Same-day screen replacement with premium quality parts and warranty.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="btn-glow border-glow" asChild>
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our <span className="text-accent">Clients</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "They brought my MacBook back to life in 48hrs. Top-tier service!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    T.A
                  </div>
                  <span className="text-sm font-medium">T.A., Lagos</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Professional solar installation. My electricity bills dropped 80%!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    M.O
                  </div>
                  <span className="text-sm font-medium">M.O., Abuja</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Fast, reliable, and affordable. Benextech is my go-to tech support."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    S.K
                  </div>
                  <span className="text-sm font-medium">S.K., Port Harcourt</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="btn-glow border-glow" asChild>
              <Link to="/clients">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Fast Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Get <span className="text-primary">Quick</span> Support
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell us about your tech issue and we'll get back to you within hours.
              </p>
            </div>

            <Card className="border-glow">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <Input placeholder="Enter your name" className="border-glow" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="Enter your phone" className="border-glow" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Device/Service Type</label>
                    <Input placeholder="e.g., iPhone screen, MacBook repair, Solar installation" className="border-glow" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Describe the Issue</label>
                    <Textarea 
                      placeholder="Tell us what's wrong or what service you need..."
                      className="border-glow min-h-[100px]"
                    />
                  </div>
                  
                  <Button className="w-full btn-glow bg-primary hover:bg-primary/90" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;