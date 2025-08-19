import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Wrench, 
  Zap, 
  Youtube, 
  MapPin,
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
            Welcome to Benextech [iFix] 👨‍💻🔧
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-6 text-foreground">
            Apple devices | PC | Smartphone | Gadgets | Smart TV | Solar Energy System
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Is your DEVICE (Apple, PC, Smartphone, Gadget, Smart TV, or Solar Energy System) ACTING UP? Don't worry, we've got you covered. Our expert technicians are here to provide top-notch repair services. Whether it's hardware issues or software glitches, we're here to diagnose and fix them all!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 flex-wrap">
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
              className="btn-glow btn-youtube text-lg px-8 py-6"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 mr-2" />
                Watch on YouTube
              </a>
            </Button>
            
            <Button 
              size="lg" 
              className="btn-glow btn-google text-lg px-8 py-6"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5 mr-2" />
                Google My Business
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
                <h3 className="text-xl font-heading font-semibold mb-3">✅ Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Our team consists of certified experts who know the job inside out.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">✅ Quick Turnaround</h3>
                <p className="text-muted-foreground">
                  Speedy repairs so you can get back to work or play in no time.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">✅ Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Quality service doesn't have to break the bank.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">✅ Customer Satisfaction</h3>
                <p className="text-muted-foreground">
                  We're dedicated to ensuring you're 100% satisfied.
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
              Services We <span className="text-accent">Offer</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional tech solutions for all your devices and energy needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🔍 Diagnostics</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Diagnostics and Troubleshooting
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🦠 Virus Removal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Virus and Malware Removal
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Wrench className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🖥️ Hardware Repairs</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Hardware Repairs and Upgrades
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">💽 Data Recovery</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Professional Data Recovery Services
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Laptop className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">💻 OS Installation</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Operating System Installation and Optimization
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">📱 Mobile Repairs</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Smartphone and Laptop Repairs
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Tv className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">📺 Smart TV Repairs</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Professional Smart TV Repairs
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Battery className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🔋 Solar Systems</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Solar Energy System Installation and Repairs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We specialize in comprehensive solutions for all your tech needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Apple Devices</h3>
                <p className="text-muted-foreground">
                  MacBook, iPhone, iMac, iWatch, and all Apple ecosystem devices
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Laptop className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Windows PC & Laptops</h3>
                <p className="text-muted-foreground">
                  Complete PC solutions, upgrades, and performance optimization
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Android Smartphones</h3>
                <p className="text-muted-foreground">
                  All Android brands and models with expert repair services
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Tv className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Smart TV Repairs</h3>
                <p className="text-muted-foreground">
                  Professional repairs for all smart TV brands and technologies
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Solar Energy Systems</h3>
                <p className="text-muted-foreground">
                  Installation, repair, and maintenance of solar power systems
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Wrench className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">Parts Dealership</h3>
                <p className="text-muted-foreground">
                  Apple & PC parts dealership with genuine components
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Projects Teaser */}
      <section className="py-20">
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
                📞 Contact us now for a <span className="text-primary">free consultation</span> or to schedule a repair!
              </h2>
              <p className="text-muted-foreground text-lg">
                Your Device or Gadget's health is our priority.
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