import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Filter, Smartphone, Laptop, Battery, Database, Tv, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clients = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const testimonials = [
    {
      id: 1,
      name: "T.A.",
      location: "Lagos",
      category: "Phone",
      service: "iPhone Screen Repair",
      rating: 5,
      review: "They brought my MacBook back to life in 48hrs. Top-tier service! The attention to detail and professionalism exceeded my expectations.",
      avatar: "T.A",
      verified: true,
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "M.O.",
      location: "Abuja",
      category: "Solar",
      service: "Solar Installation",
      rating: 5,
      review: "Professional solar installation. My electricity bills dropped 80%! The team was knowledgeable and the system works flawlessly.",
      avatar: "M.O",
      verified: true,
      date: "1 month ago"
    },
    {
      id: 3,
      name: "S.K.",
      location: "Port Harcourt",
      category: "Laptop",
      service: "Data Recovery",
      rating: 5,
      review: "Fast, reliable, and affordable. Benextech is my go-to tech support. They recovered data I thought was lost forever.",
      avatar: "S.K",
      verified: true,
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "A.B.",
      location: "Kano",
      category: "Solar",
      service: "Inverter Setup",
      rating: 5,
      review: "Excellent solar system installation. Professional team, quality equipment, and amazing after-sales support. Highly recommended!",
      avatar: "A.B",
      verified: true,
      date: "1 week ago"
    },
    {
      id: 5,
      name: "F.L.",
      location: "Lagos",
      category: "Phone",
      service: "Android Repair",
      rating: 5,
      review: "My Samsung Galaxy was completely dead after water damage. They fixed it perfectly and it's working like new. Amazing service!",
      avatar: "F.L",
      verified: true,
      date: "2 days ago"
    },
    {
      id: 6,
      name: "D.C.",
      location: "Ibadan",
      category: "Laptop",
      service: "MacBook Repair",
      rating: 5,
      review: "MacBook logic board repair was handled professionally. They kept me updated throughout the process. Excellent work!",
      avatar: "D.C",
      verified: true,
      date: "1 month ago"
    },
    {
      id: 7,
      name: "R.N.",
      location: "Enugu",
      category: "Recovery",
      service: "Data Recovery",
      rating: 5,
      review: "Lost 3 years of business documents due to hard drive failure. Benextech recovered 100% of my data. Lifesavers!",
      avatar: "R.N",
      verified: true,
      date: "2 weeks ago"
    },
    {
      id: 8,
      name: "O.P.",
      location: "Calabar",
      category: "Solar",
      service: "Battery Upgrade",
      rating: 5,
      review: "Upgraded my solar battery system. The improvement in backup time is incredible. Professional installation and fair pricing.",
      avatar: "O.P",
      verified: true,
      date: "3 days ago"
    },
    {
      id: 9,
      name: "I.M.",
      location: "Lagos",
      category: "Phone",
      service: "iPhone Battery",
      rating: 5,
      review: "iPhone battery replacement was quick and affordable. Phone lasts all day now. Great service and warranty coverage.",
      avatar: "I.M",
      verified: true,
      date: "1 week ago"
    },
    {
      id: 10,
      name: "K.A.",
      location: "Kaduna",
      category: "Laptop",
      service: "PC Optimization",
      rating: 5,
      review: "My slow laptop is now blazing fast! They upgraded RAM and SSD, plus optimized everything. Worth every naira spent.",
      avatar: "K.A",
      verified: true,
      date: "4 days ago"
    },
    {
      id: 11,
      name: "U.E.",
      location: "Warri",
      category: "Recovery",
      service: "Virus Removal",
      rating: 5,
      review: "Computer was completely infected with malware. They cleaned everything and set up proper security. No issues since then.",
      avatar: "U.E",
      verified: true,
      date: "2 weeks ago"
    },
    {
      id: 12,
      name: "G.T.",
      location: "Jos",
      category: "Solar",
      service: "Complete Solar Setup",
      rating: 5,
      review: "Full solar installation for my shop. No more generator costs! The system has been running perfectly for 6 months.",
      avatar: "G.T",
      verified: true,
      date: "6 months ago"
    },
    {
      id: 13,
      name: "N.H.",
      location: "Abeokuta",
      category: "Phone",
      service: "Screen Replacement",
      rating: 5,
      review: "Cracked my phone screen badly. They replaced it with high-quality screen and it looks brand new. Excellent craftsmanship!",
      avatar: "N.H",
      verified: true,
      date: "5 days ago"
    },
    {
      id: 14,
      name: "B.S.",
      location: "Lagos",
      category: "Laptop",
      service: "Keyboard Replacement",
      rating: 5,
      review: "Laptop keyboard stopped working. Quick diagnosis and replacement. The new keyboard feels even better than the original.",
      avatar: "B.S",
      verified: true,
      date: "1 week ago"
    },
    {
      id: 15,
      name: "C.O.",
      location: "Owerri",
      category: "Recovery",
      service: "OS Installation",
      rating: 5,
      review: "Fresh Windows installation with all software setup. Computer runs like new and they provided helpful training too.",
      avatar: "C.O",
      verified: true,
      date: "3 weeks ago"
    }
  ];

  const filters = ["All", "Phone", "Laptop", "Solar", "Recovery"];

  const filteredTestimonials = selectedFilter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Phone": return Smartphone;
      case "Laptop": return Laptop;
      case "Solar": return Battery;
      case "Recovery": return Database;
      default: return Settings;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Phone": return "text-primary";
      case "Laptop": return "text-accent";
      case "Solar": return "text-primary";
      case "Recovery": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              What Our <span className="text-primary">Clients</span> Say
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real feedback from satisfied customers across Nigeria. Read authentic reviews from individuals and businesses who trust Benextech for their tech solutions.
            </p>
          </div>

          {/* Overall Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-2xl font-bold font-heading text-primary mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-accent mb-1">2000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-primary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
              </CardContent>
            </Card>
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold font-heading text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Recommend Us</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter by service:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                className={selectedFilter === filter 
                  ? "btn-glow bg-primary hover:bg-primary/90" 
                  : "btn-glow border-glow"
                }
                size="sm"
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => {
              const CategoryIcon = getCategoryIcon(testimonial.category);
              return (
                <Card key={testimonial.id} className="card-hover border-glow relative">
                  <CardContent className="p-6">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    
                    {/* Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs border-primary/30">
                        <CategoryIcon className="w-3 h-3 mr-1" />
                        {testimonial.category}
                      </Badge>
                    </div>

                    {/* Review Text */}
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.review}"
                    </p>

                    {/* Service Type */}
                    <div className="text-sm text-primary mb-4 font-medium">
                      {testimonial.service}
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3 ${
                          testimonial.category === 'Phone' || testimonial.category === 'Solar' 
                            ? 'bg-primary text-white' 
                            : 'bg-accent text-background'
                        }`}>
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="text-sm font-medium">{testimonial.name}</span>
                            {testimonial.verified && (
                              <div className="w-4 h-4 bg-accent rounded-full flex items-center justify-center ml-1">
                                <span className="text-xs text-background">✓</span>
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Featured <span className="text-accent">Client Stories</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Detailed stories from clients who experienced exceptional service and results.
            </p>
          </div>

          <div className="space-y-8">
            {/* Business Client Feature */}
            <Card className="border-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        A.O
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold">Adebayo Ogundimu</h3>
                        <p className="text-sm text-muted-foreground">Business Executive, Lagos</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "I spilled coffee on my MacBook Pro during a crucial client presentation week. The laptop contained 5 years of business data with no recent backup. I was devastated. 
                      Benextech not only recovered 100% of my data but also made my MacBook work better than before the incident. Their professionalism and expertise saved my business."
                    </blockquote>
                    
                    <div className="text-sm text-primary font-medium">
                      MacBook Pro Water Damage Recovery • Completed in 48 hours
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">100%</div>
                      <div className="text-sm text-muted-foreground">Data Recovered</div>
                    </div>
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">2 Years</div>
                      <div className="text-sm text-muted-foreground">Warranty Provided</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Residential Solar Feature */}
            <Card className="border-glow">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-lg font-bold text-background mr-4">
                        M.O
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold">Mrs. Obiageli</h3>
                        <p className="text-sm text-muted-foreground">Homeowner, Abuja</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                    
                    <blockquote className="text-lg italic text-muted-foreground mb-4">
                      "Our electricity bills were crushing our family budget at ₹150,000 monthly. Benextech designed and installed a 5kW solar system that reduced our bills to just ₹30,000. 
                      The installation was professional, clean, and they educated us on maintenance. Six months later, we're still impressed with the performance."
                    </blockquote>
                    
                    <div className="text-sm text-accent font-medium">
                      5kW Residential Solar Installation • 3-day completion
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-accent/10 rounded-lg">
                      <div className="text-2xl font-bold text-accent mb-1">80%</div>
                      <div className="text-sm text-muted-foreground">Bill Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                      <div className="text-sm text-muted-foreground">Reliable Power</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Quality Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Clients Choose <span className="text-primary">Benextech</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Device Expertise</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Certified in Apple, Android, and PC technologies
                </p>
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Solar Solutions</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Professional renewable energy installations
                </p>
                <div className="text-2xl font-bold text-accent">200+</div>
                <div className="text-xs text-muted-foreground">Installations</div>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Data Recovery</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Advanced forensic data recovery services
                </p>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-xs text-muted-foreground">Recovery Rate</div>
              </CardContent>
            </Card>

            <Card className="border-glow text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold mb-2">Fast Service</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Quick turnaround times with quality results
                </p>
                <div className="text-2xl font-bold text-accent">48hr</div>
                <div className="text-xs text-muted-foreground">Average Time</div>
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
                Join Our <span className="text-accent">Satisfied Clients</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Experience the same professional service and exceptional results that our clients rave about. Your tech challenges deserve expert solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-glow bg-primary hover:bg-primary/90" size="lg" asChild>
                  <Link to="/contact">Get Started Today</Link>
                </Button>
                <Button variant="outline" className="btn-glow border-glow" size="lg" asChild>
                  <a href="https://wa.me/2349074839789" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
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

export default Clients;