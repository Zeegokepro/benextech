import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  MessageCircle, 
  Youtube, 
  MapPin, 
  Clock, 
  Mail,
  Zap,
  CheckCircle2
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      title: "Call Us Directly",
      description: "Speak with our experts immediately",
      primary: "07036399365",
      secondary: "08169711467",
      icon: Phone,
      action: "Call Now",
      href: "tel:07036399365",
      available: "24/7 Emergency Support"
    },
    {
      title: "WhatsApp Chat",
      description: "Quick responses and media sharing",
      primary: "Chat instantly",
      secondary: "Share photos of issues",
      icon: MessageCircle,
      action: "Start Chat",
      href: "https://wa.me/2349074839789",
      available: "9AM - 9PM Daily"
    },
    {
      title: "YouTube Channel",
      description: "Tech tips and service showcase",
      primary: "Benextech Channel",
      secondary: "Watch repair tutorials",
      icon: Youtube,
      action: "Subscribe",
      href: "https://youtube.com/@benextech_techserviceexpert?si=sWx_CSqmUeoPdYsh&sub_confirmation=1",
      available: "New videos weekly"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Get Expert <span className="text-primary">Tech Support</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to fix, upgrade, or install? Our certified technicians are standing by to help with your Apple devices, PCs, smartphones, and solar systems.
            </p>
          </div>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading text-primary mb-1">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading text-accent mb-1">Free</div>
                <div className="text-sm text-muted-foreground">Diagnostics</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Line</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading text-accent mb-1">Lagos</div>
                <div className="text-sm text-muted-foreground">Service Hub</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Multiple Ways to <span className="text-accent">Reach Us</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the contact method that works best for your situation and urgency level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card key={index} className="card-hover border-glow group">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/30 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold mb-3">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="font-medium text-primary">{method.primary}</div>
                      <div className="text-sm text-muted-foreground">{method.secondary}</div>
                      <Badge variant="outline" className="border-accent/30 text-accent">
                        {method.available}
                      </Badge>
                    </div>
                    
                    <Button 
                      className="btn-glow bg-primary hover:bg-primary/90 w-full" 
                      asChild
                    >
                      <a 
                        href={method.href} 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to get your device fixed or upgrade your tech? Multiple ways to reach our expert team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Direct Contact */}
            <Card className="border-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">Call Direct</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="font-medium text-primary text-lg">07036399365</p>
                    <p className="text-sm text-muted-foreground">Primary Line</p>
                  </div>
                  <div>
                    <p className="font-medium text-lg">08169711467</p>
                    <p className="text-sm text-muted-foreground">Secondary Line</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent mb-4">24/7 Emergency Support</Badge>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="tel:07036399365">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="border-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">WhatsApp Chat</h3>
                <div className="space-y-3 mb-6">
                  <p className="text-muted-foreground">Quick responses and media sharing</p>
                  <p className="font-medium">Share photos of your device issues</p>
                  <p className="text-sm text-muted-foreground">Usually respond within 30 minutes</p>
                </div>
                <Badge variant="outline" className="border-primary/30 text-primary mb-4">9AM - 9PM Daily</Badge>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <a href="https://wa.me/2349074839789" target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-glow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">Email Support</h3>
                <div className="space-y-3 mb-6">
                  <p className="font-medium text-primary">benextech@gmail.com</p>
                  <p className="text-sm text-muted-foreground">For quotes and non-urgent inquiries</p>
                  <p className="text-sm text-muted-foreground">Detailed technical questions welcome</p>
                </div>
                <Badge variant="outline" className="border-accent/30 text-accent mb-4">24-48hr Response</Badge>
                <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:benextech@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas & Business Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Areas */}
            <Card className="border-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  Service Coverage
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Lagos Areas</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Victoria Island</li>
                      <li>• Ikoyi</li>
                      <li>• Lekki</li>
                      <li>• Ikeja</li>
                      <li>• Yaba</li>
                      <li>• Surulere</li>
                      <li>• All Lagos areas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-accent mb-3">Other Cities</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Abuja (FCT)</li>
                      <li>• Port Harcourt</li>
                      <li>• Ibadan</li>
                      <li>• Kano</li>
                      <li>• Enugu</li>
                      <li>• On-request service</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    📦 Nationwide mail-in service available for device repairs
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours & Why Choose Us */}
            <Card className="border-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6 flex items-center">
                  <Clock className="w-6 h-6 text-accent mr-3" />
                  Business Hours
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-primary">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="font-medium">Emergency Service</span>
                    <span className="text-accent font-bold">24/7 Available</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Why Choose BenexTech?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">Free diagnostics & transparent pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Certified technicians, 5+ years experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm">Up to 2 years warranty on repairs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">Same-day service for urgent issues</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="border-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-primary">How quickly can you fix my device?</h3>
                <p className="text-sm text-muted-foreground">
                  Most repairs are completed within 24-48 hours. Simple fixes like screen replacements can often be done same-day. Emergency service available for critical business needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-accent">Do you use genuine parts?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we use original manufacturer parts whenever possible. For older devices, we use high-quality OEM equivalents with the same warranty coverage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-primary">What if my data needs to be recovered?</h3>
                <p className="text-sm text-muted-foreground">
                  We have advanced data recovery tools and cleanroom facilities. Most data recovery operations have a 95% success rate, and we only charge if we successfully recover your data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-glow">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3 text-accent">How much does solar installation cost?</h3>
                <p className="text-sm text-muted-foreground">
                  Solar system pricing varies by size and components. Basic residential systems start around ₦1.5M. We provide free consultations and customized quotes based on your energy needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="border-glow bg-gradient-to-r from-destructive/10 to-accent/10">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                <span className="text-destructive">Emergency</span> Tech Support
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Critical device failure? Data emergency? Don't wait - our emergency team is available 24/7 for urgent repairs and data recovery.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-glow bg-destructive hover:bg-destructive/90" size="lg" asChild>
                  <a href="tel:07036399365">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Line
                  </a>
                </Button>
                <Button variant="outline" className="btn-glow border-accent text-accent hover:bg-accent/10" size="lg" asChild>
                  <a href="https://wa.me/2349074839789" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Emergency WhatsApp
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

export default Contact;