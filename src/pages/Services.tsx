import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Laptop, 
  Tv, 
  Tablet,
  Battery, 
  Zap,
  Sun,
  Database, 
  Settings, 
  Shield,
  Clock,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesDevicesImage from "@/assets/professional-device-repairs.jpg";
import servicesSolarImage from "@/assets/services-solar.jpg";
import servicesDataImage from "@/assets/services-data.jpg";

const Services = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Professional <span className="text-primary">Tech Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From device repairs to solar installations, we provide comprehensive tech solutions with expert hands, advanced tools, and trusted support for individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Device Repairs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-primary">Device Repairs</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Expert repair services for all your favorite devices. We handle everything from screen replacements to complex motherboard repairs with precision and care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Apple & Android smartphones and tablets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>MacBooks, laptops, and desktop computers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Smart TVs and entertainment systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Gaming consoles and smart gadgets</span>
                </div>
              </div>

              <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                <Link to="/contact">Book Repair Service</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={servicesDevicesImage} 
                alt="Device repair services" 
                className="rounded-lg border border-primary/30 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Smartphone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Smartphones</h3>
                <p className="text-sm text-muted-foreground mb-4">Screen repair, battery replacement, camera fixes, water damage recovery</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Laptop className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Laptops & PCs</h3>
                <p className="text-sm text-muted-foreground mb-4">Hardware upgrades, motherboard repair, keyboard replacement, performance optimization</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Tv className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Smart TVs</h3>
                <p className="text-sm text-muted-foreground mb-4">Display issues, software updates, connectivity problems, smart features setup</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Tablet className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Tablets & Gadgets</h3>
                <p className="text-sm text-muted-foreground mb-4">iPad repairs, smartwatch fixes, gaming console maintenance, accessory setup</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solar Systems Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative order-2 lg:order-1">
              <img 
                src={servicesSolarImage} 
                alt="Solar installation services" 
                className="rounded-lg border border-accent/30 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            </div>
            
            <div className="slide-up order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-accent">Solar Power Systems</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Transform your energy consumption with our professional solar installation services. From residential homes to commercial buildings, we design and install sustainable power solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Complete solar system design and installation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Hybrid inverters and battery backup systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Solar panel mounting and electrical connections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>System monitoring and maintenance services</span>
                </div>
              </div>

              <Button className="btn-glow-accent bg-accent hover:bg-accent/90 text-background" size="lg" asChild>
                <Link to="/contact">Get Solar Quote</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Sun className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Solar Panel Installation</h3>
                <p className="text-sm text-muted-foreground mb-4">High-efficiency panels with optimal positioning for maximum energy generation</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Inverter Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">Hybrid and pure sine wave inverters with grid-tie capabilities</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Battery className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Battery Systems</h3>
                <p className="text-sm text-muted-foreground mb-4">Lithium and AGM battery banks for reliable energy storage</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data & Software Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-primary">Data & Software Services</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect your valuable data and optimize your systems with our comprehensive software solutions. From data recovery to system optimization, we ensure your digital life runs smoothly.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Professional data recovery from damaged drives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Operating system installation and setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Virus removal and security optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span>Performance tuning and speed optimization</span>
                </div>
              </div>

              <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                <Link to="/contact">Get Data Support</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={servicesDataImage} 
                alt="Data and software services" 
                className="rounded-lg border border-primary/30 w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Database className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Data Recovery</h3>
                <p className="text-sm text-muted-foreground mb-4">Advanced recovery from damaged, corrupted, or deleted files</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Settings className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">OS Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">Windows, macOS, and Linux installation with software configuration</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Virus Removal</h3>
                <p className="text-sm text-muted-foreground mb-4">Complete malware removal and security system setup</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-6 text-center">
                <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-semibold mb-2">Speed Optimization</h3>
                <p className="text-sm text-muted-foreground mb-4">System cleanup, registry optimization, and performance tuning</p>
                <Button variant="ghost" size="sm" className="text-primary hover:text-accent" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Our <span className="text-primary">Services</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We combine technical expertise with customer-focused service to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover border-glow text-center">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Most repairs completed within 24-48 hours with same-day service available for urgent needs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow text-center">
              <CardContent className="p-8">
                <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Quality Guarantee</h3>
                <p className="text-muted-foreground">
                  All repairs come with warranty coverage and satisfaction guarantee for your peace of mind.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow text-center">
              <CardContent className="p-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Certified Technicians</h3>
                <p className="text-muted-foreground">
                  Expert technicians with industry certifications and years of hands-on experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-glow">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Get <span className="text-accent">Started</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and quote. Our expert team is ready to solve your tech challenges.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link to="/contact">Book Service Now</Link>
                </Button>
                <Button variant="outline" className="btn-glow border-glow" size="lg" asChild>
                  <a href="https://wa.me/2349074839789" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;