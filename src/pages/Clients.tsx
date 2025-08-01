import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clients = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const testimonials = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Fixed my iPhone screen perfectly. Professional service and quality parts. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Chidinma Okoro",
      location: "Abuja",
      category: "Solar",
      rating: 5,
      review: "Excellent solar installation. My electricity bills reduced by 80%. Professional and reliable team.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763dad?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emeka Nwachukwu",
      location: "Port Harcourt",
      category: "Laptop",
      rating: 5,
      review: "Data recovery service was exceptional. Retrieved all my lost business files. Lifesavers!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Fatima Bello",
      location: "Kano",
      category: "Phone",
      rating: 4,
      review: "Quick Samsung repair service. Screen replacement done within hours. Great customer service.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Jide Olawale",
      location: "Ibadan",
      category: "Laptop",
      rating: 5,
      review: "MacBook logic board repair was handled professionally. Works better than before!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Kemi Adewale",
      location: "Lagos",
      category: "Solar",
      rating: 5,
      review: "Complete solar system installation for my home. Team was knowledgeable and efficient.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Musa Ibrahim",
      location: "Kaduna",
      category: "Phone",
      rating: 4,
      review: "iPhone battery replacement was affordable and quick. Phone lasts all day now.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Ngozi Eze",
      location: "Enugu",
      category: "Laptop",
      rating: 5,
      review: "PC optimization service made my old computer feel brand new. Amazing performance boost.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Olamide Durojaiye",
      location: "Oshogbo",
      category: "Solar",
      rating: 5,
      review: "Solar inverter setup was seamless. Quality equipment and excellent after-sales support.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Sade Adeyemi",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Water-damaged phone repair was successful. Thought it was beyond repair but they fixed it perfectly.",
      image: "https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "Tunde Olaniyi",
      location: "Ilorin",
      category: "Laptop",
      rating: 4,
      review: "Virus removal and OS installation was thorough. Computer runs smoothly now.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Uchechi Nwosu",
      location: "Owerri",
      category: "Solar",
      rating: 5,
      review: "Battery upgrade for my solar system was professional. Backup time improved significantly.",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 13,
      name: "Victor Okonkwo",
      location: "Awka",
      category: "Phone",
      rating: 5,
      review: "Screen repair for my Galaxy phone. Quality replacement and reasonable pricing.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 14,
      name: "Yusuf Abubakar",
      location: "Maiduguri",
      category: "Laptop",
      rating: 4,
      review: "Laptop keyboard replacement was quick. New keyboard works perfectly and feels great.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 15,
      name: "Zainab Musa",
      location: "Gombe",
      category: "Solar",
      rating: 5,
      review: "Solar panel installation was done with precision. Already seeing savings on electricity bills.",
      image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const filters = ["All", "Phone", "Laptop", "Solar"];

  const filteredTestimonials = selectedFilter === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedFilter);

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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="card-hover bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  {/* Profile Image */}
                  <div className="mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto object-cover border-2 border-primary/20"
                    />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-4 italic text-sm leading-relaxed">
                    "{testimonial.review}"
                  </p>

                  {/* Client Info */}
                  <div className="border-t border-border pt-4">
                    <h4 className="font-bold text-foreground mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Join Our <span className="text-primary">Happy Clients</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the same quality service and satisfaction. Contact us today for your tech needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-glow bg-primary hover:bg-primary/90"
                asChild
              >
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-glow border-glow"
                asChild
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;