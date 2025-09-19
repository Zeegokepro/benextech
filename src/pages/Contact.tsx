import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase";
import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  Youtube, 
  MapPin, 
  Clock, 
  Mail,
  Send,
  Zap,
  Wrench,
  Battery,
  Database,
  CheckCircle2,
  Loader2
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service_type: "",
      device_details: "",
      issue_description: "",
      preferred_contact_time: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      if (!isSupabaseConfigured) {
        throw new Error('Supabase not configured');
      }
      const supabase = getSupabase();
      
      // First, save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([{
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          service_type: data.service_type,
          device_details: data.device_details || null,
          issue_description: data.issue_description,
          preferred_contact_time: data.preferred_contact_time || null,
        }]);

      if (dbError) throw dbError;

      // Then, send emails
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-emails', {
          body: data
        });

        if (emailError) {
          console.error('Error sending emails:', emailError);
          // Don't fail the whole process if email fails
          toast({
            title: "Request Submitted Successfully!",
            description: "We'll contact you within 24 hours. (Note: Confirmation email may be delayed)",
          });
        } else {
          toast({
            title: "Request Submitted Successfully!",
            description: data.email 
              ? "We'll contact you within 24 hours. Check your email for confirmation!"
              : "We'll contact you within 24 hours to discuss your service needs.",
          });
        }
      } catch (emailError) {
        console.error('Email function error:', emailError);
        toast({
          title: "Request Submitted Successfully!",
          description: "We'll contact you within 24 hours. (Note: Confirmation email may be delayed)",
        });
      }

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly at 07036399365.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
      href: "#",
      available: "New videos weekly"
    }
  ];

  const services = [
    { name: "iPhone/Android Repair", icon: Wrench, urgent: true },
    { name: "MacBook/PC Repair", icon: Wrench, urgent: true },
    { name: "Solar Installation", icon: Battery, urgent: false },
    { name: "Data Recovery", icon: Database, urgent: true },
    { name: "System Optimization", icon: Zap, urgent: false },
    { name: "Virus Removal", icon: Zap, urgent: true }
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
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Book Your <span className="text-primary">Service</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Fill out the form below and we'll get back to you within hours with a solution and quote.
              </p>

              <Card className="border-glow">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  className="border-glow" 
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="e.g., 07036399365" 
                                  className="border-glow" 
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your.email@example.com" 
                                className="border-glow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                              >
                                {services.map((service, index) => {
                                  const ServiceIcon = service.icon;
                                  return (
                                    <div key={index} className="flex items-center space-x-2">
                                      <RadioGroupItem value={service.name} id={service.name} />
                                      <label
                                        htmlFor={service.name}
                                        className="flex items-center cursor-pointer flex-1 border rounded-lg p-3 border-glow hover:bg-secondary/50 transition-colors"
                                      >
                                        <ServiceIcon className="w-4 h-4 mr-2" />
                                        <div>
                                          <div className="text-sm font-medium">{service.name}</div>
                                          {service.urgent && (
                                            <Badge variant="destructive" className="text-xs mt-1">Urgent</Badge>
                                          )}
                                        </div>
                                      </label>
                                    </div>
                                  );
                                })}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="device_details"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Device/Model Details</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., iPhone 14 Pro, MacBook Pro 16-inch, Samsung Galaxy S23" 
                                className="border-glow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="issue_description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Describe the Issue *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe the problem in detail. What happened? When did it start? Have you tried any fixes?"
                                className="border-glow min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferred_contact_time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Time</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g., Weekdays 9AM-5PM, ASAP, Evening hours" 
                                className="border-glow"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full btn-glow bg-primary hover:bg-primary/90" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Service Request
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <Card className="border-glow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6 flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-2" />
                    Visit Our Service Center
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Main Service Hub</h4>
                      <p className="text-muted-foreground text-sm">
                        Lagos Technology District<br />
                        Professional repair facility with latest equipment<br />
                        Free parking and comfortable waiting area
                      </p>
                      <div className="mt-3 pt-3 border-t border-border">
                        <h4 className="font-medium mb-2 text-primary">Email Support</h4>
                        <a 
                          href="mailto:support@benextech.com" 
                          className="text-sm text-accent hover:text-primary transition-colors font-medium"
                        >
                          support@benextech.com
                        </a>
                        <p className="text-xs text-muted-foreground mt-1">
                          For non-urgent inquiries and quotes
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-primary">Business Hours</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Mon - Fri: 8:00 AM - 8:00 PM</div>
                          <div>Saturday: 9:00 AM - 6:00 PM</div>
                          <div>Sunday: 10:00 AM - 4:00 PM</div>
                          <div className="text-accent font-medium">24/7 Emergency Service</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2 text-accent">Emergency Service</h4>
                        <div className="text-sm text-muted-foreground space-y-1">
                          <div>Critical business devices</div>
                          <div>Data recovery emergencies</div>
                          <div>Same-day repairs available</div>
                          <div>On-site service for enterprises</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-glow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6 flex items-center">
                    <Zap className="w-5 h-5 text-accent mr-2" />
                    Service Areas
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Primary Coverage</h4>
                      <div className="text-muted-foreground space-y-1">
                        <div>• Lagos (All areas)</div>
                        <div>• Abuja (FCT)</div>
                        <div>• Port Harcourt</div>
                        <div>• Ibadan</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-accent">Extended Service</h4>
                      <div className="text-muted-foreground space-y-1">
                        <div>• Kano</div>
                        <div>• Enugu</div>
                        <div>• Kaduna</div>
                        <div>• Other cities (on request)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      📦 Mail-in service available nationwide for device repairs
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-glow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold mb-6">
                    Why Choose <span className="text-primary">Benextech</span>?
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Free Diagnostics</h4>
                        <p className="text-sm text-muted-foreground">No charge for initial problem assessment</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Transparent Pricing</h4>
                        <p className="text-sm text-muted-foreground">Clear quotes before we start any work</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <h4 className="font-medium">Quality Warranty</h4>
                        <p className="text-sm text-muted-foreground">Up to 2 years warranty on repairs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Certified Technicians</h4>
                        <p className="text-sm text-muted-foreground">Apple, Android, and solar certified experts</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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