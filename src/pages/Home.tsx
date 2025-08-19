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
            Welcome to Benextech [iFix]
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-6 text-foreground">
            Apple devices | PC | Smart phone | Gadgets | Smart TV and Solar Energy System
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Is your DEVICE ---- Apple or PC, Smartphone, Gadgets, Smart TV and Solar Energy System --- ACTING UP? Don't worry, we've got you covered. Our expert technicians are here to provide top-notch repair service's. Whether it's hardware issues, or software glitches, we're here to diagnose and fix them all!
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
                  Our team consists of certified experts who know the jobs inside and out.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">✅ Quick Turnaround</h3>
                <p className="text-muted-foreground">
                  We aim for speedy repairs, so you can get back to work or play in no time.
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
                  We're dedicated to ensuring you're 100% satisfied with our work.
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
                <h3 className="text-lg font-heading font-semibold mb-2">🔍 Diagnostics and Troubleshooting</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete system analysis to identify and resolve complex technical issues efficiently.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🦠 Virus and Malware Removal</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive security cleanup and protection setup to keep your devices safe.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Wrench className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🖥️ Hardware Repairs and Upgrades</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Expert repair and enhancement of all hardware components for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">💽 Data Recovery</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Advanced data retrieval from damaged or corrupted storage devices with high success rates.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Laptop className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">💻 Operating System Installation and Optimization</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Fresh OS installation, updates, and performance tuning for maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">📱 Smartphone and Laptop Repairs</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Comprehensive repair services for mobile devices and portable computers.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Tv className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">📺 Smart TV Repair</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Expert repair services for all smart TV brands and display technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow group">
              <CardContent className="p-6">
                <Battery className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-heading font-semibold mb-2">🔋 Solar Energy System Installation and Repair</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Complete solar power solutions including installation, maintenance, and repair services.
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
              <span className="text-primary">TECH ENTREPRENEUR / TECHNICIAN</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4 text-accent">
              iFix And iSell
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
              MacBook * iPhone * PC * Laptop * Android smartphone * Smart TV * Solar Energy System * Parts *
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* Apple devices Technician</h3>
                <p className="text-muted-foreground">
                  MacBook, iPhone, iMac, iWatch, and all Apple ecosystem devices repair and service
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Laptop className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* Windows Computer technician</h3>
                <p className="text-muted-foreground">
                  Complete PC solutions, upgrades, and performance optimization services
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* Android Smartphone Technician</h3>
                <p className="text-muted-foreground">
                  All Android brands and models with expert repair and service solutions
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Tv className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* TV Technician</h3>
                <p className="text-muted-foreground">
                  Professional repairs for all smart TV brands and display technologies
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* Solar energy system service Technician</h3>
                <p className="text-muted-foreground">
                  Installation, repair, and maintenance of solar power systems and inverters
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Laptop className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* Windows Computer[Laptops] Technician</h3>
                <p className="text-muted-foreground">
                  Specialized laptop repair and maintenance services for all Windows systems
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Wrench className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold mb-3">* PC and Apple parts dealer</h3>
                <p className="text-muted-foreground">
                  Genuine Apple & PC parts dealership with authentic components and accessories
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Breakdown of What We Do Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Breakdown of What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive breakdown of our specialized repair and service offerings across all device categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Computers Repair Service</h3>
                <p className="text-muted-foreground text-sm">Complete desktop computer repair and maintenance solutions</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Laptop className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* MacBooks Repair Service</h3>
                <p className="text-muted-foreground text-sm">Specialized MacBook repair and restoration services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Laptop className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* iMac and Mac mini repair Service</h3>
                <p className="text-muted-foreground text-sm">Expert repair services for all Mac desktop models</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Tv className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* TV Repair Service</h3>
                <p className="text-muted-foreground text-sm">Professional TV repair for all brands and technologies</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Battery className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Solar Energy System Installation</h3>
                <p className="text-muted-foreground text-sm">Complete solar power system design and installation</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Battery className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Solar Energy System Repair Service</h3>
                <p className="text-muted-foreground text-sm">Expert repair and maintenance of solar power systems</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Solar Inverters Repair Service</h3>
                <p className="text-muted-foreground text-sm">Specialized inverter repair and replacement services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* iPhone Repair Service</h3>
                <p className="text-muted-foreground text-sm">Comprehensive iPhone repair for all models</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* iwatch Repair Service</h3>
                <p className="text-muted-foreground text-sm">Apple Watch repair and screen replacement services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Smartphone className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Apple gadgets/devices Repair Service</h3>
                <p className="text-muted-foreground text-sm">Complete Apple ecosystem device repair solutions</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Computer Maintenance</h3>
                <p className="text-muted-foreground text-sm">Regular maintenance and optimization services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* System Recovery</h3>
                <p className="text-muted-foreground text-sm">Complete system restoration and recovery services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Database className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Data Recovery Service</h3>
                <p className="text-muted-foreground text-sm">Professional data retrieval from damaged devices</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Forgotten Password</h3>
                <p className="text-muted-foreground text-sm">Password recovery and reset services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Windows Re-installation</h3>
                <p className="text-muted-foreground text-sm">Fresh Windows installation and setup services</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Settings className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Computer Setup</h3>
                <p className="text-muted-foreground text-sm">Complete computer configuration and optimization</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Wrench className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Software and Hardware Repair</h3>
                <p className="text-muted-foreground text-sm">Comprehensive software and hardware solutions</p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6">
                <Shield className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">* Viruses Removal</h3>
                <p className="text-muted-foreground text-sm">Complete malware and virus elimination services</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              📞 Contact us now for a free consultation or to schedule a repair!<br />
              Your Device or Gadget's health is our priority.
            </p>
            <Button 
              size="lg" 
              className="btn-glow bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
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