import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Wrench, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About <span className="text-primary">Benextech</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Benextech is a trusted Tech Entrepreneur / Repair & Service hub providing complete solutions for gadgets, computers, and energy systems.
              </p>
              <p className="text-muted-foreground mb-8">
                Our mission is to keep your devices and systems running at their best through certified expertise, reliable service, and modern technology solutions.
              </p>
              <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 slide-up">
              <Card className="card-hover border-glow">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold font-heading mb-1">2000+</h3>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-glow">
                <CardContent className="p-6 text-center">
                  <Wrench className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="text-2xl font-bold font-heading mb-1">5000+</h3>
                  <p className="text-sm text-muted-foreground">Devices Fixed</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-glow">
                <CardContent className="p-6 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-2xl font-bold font-heading mb-1">200+</h3>
                  <p className="text-sm text-muted-foreground">Solar Installs</p>
                </CardContent>
              </Card>
              
              <Card className="card-hover border-glow">
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="text-2xl font-bold font-heading mb-1">95%</h3>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              Our <span className="text-accent">Mission</span>
            </h2>
            <Card className="border-glow">
              <CardContent className="p-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  "To empower individuals and businesses with reliable, professional tech solutions that enhance productivity, reduce downtime, and contribute to a sustainable digital future through expert repair services and renewable energy solutions."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Makes Us <span className="text-primary">Unique</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in the tech repair and solar installation industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Premium Quality Parts</h3>
                <p className="text-muted-foreground">
                  We use only original and high-quality replacement parts, ensuring your devices perform like new with extended longevity.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Clock className="w-12 h-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Express Service</h3>
                <p className="text-muted-foreground">
                  Most repairs completed within 24-48 hours, with same-day emergency service available for critical business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-glow">
              <CardContent className="p-8 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-heading font-semibold mb-4">Certified Expertise</h3>
                <p className="text-muted-foreground">
                  Our technicians are certified in Apple, Android, PC, and solar technologies with continuous training on latest innovations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Professional <span className="text-accent">Tools</span> & Certifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We invest in the latest technology and maintain industry certifications to deliver superior results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Advanced Diagnostic Equipment</h3>
                  <p className="text-muted-foreground">Professional-grade tools for accurate diagnosis and precision repairs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Apple Certified Components</h3>
                  <p className="text-muted-foreground">Authorized access to genuine Apple parts and repair protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Solar Installation Certified</h3>
                  <p className="text-muted-foreground">Licensed solar technicians with proven track record in renewable energy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-heading font-semibold mb-2">Data Recovery Specialists</h3>
                  <p className="text-muted-foreground">Advanced software and hardware tools for complex data recovery scenarios.</p>
                </div>
              </div>
            </div>

            <Card className="border-glow">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-semibold mb-6 text-center">Our Certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Apple Authorized Service</span>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Solar PV Installation</span>
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Data Recovery Specialist</span>
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <span className="font-medium">Mobile Device Repair</span>
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our <span className="text-primary">Core Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">Honest diagnosis and transparent pricing for every service.</p>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">Staying ahead with latest technology and repair techniques.</p>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">Your satisfaction and device performance are our top priorities.</p>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Excellence</h3>
                <p className="text-sm text-muted-foreground">Delivering quality results that exceed expectations every time.</p>
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
                Ready to Experience <span className="text-primary">Excellence</span>?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Benextech for their tech repair and solar installation needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" className="btn-glow border-glow" size="lg" asChild>
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;