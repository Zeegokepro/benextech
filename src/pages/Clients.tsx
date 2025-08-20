import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Clients = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}.${names[names.length - 1][0]}`;
    }
    return names[0].slice(0, 2);
  };

  const testimonials = [
    {
      id: 1,
      name: "Adebayo Ogundimu",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Fixed my iPhone screen perfectly. Professional service and quality parts. Highly recommended!"
    },
    {
      id: 2,
      name: "Chidinma Okoro",
      location: "Abuja",
      category: "Solar",
      rating: 5,
      review: "Excellent solar installation. My electricity bills reduced by 80%. Professional and reliable team."
    },
    {
      id: 3,
      name: "Emeka Nwachukwu",
      location: "Port Harcourt",
      category: "Laptop",
      rating: 5,
      review: "Data recovery service was exceptional. Retrieved all my lost business files. Lifesavers!"
    },
    {
      id: 4,
      name: "Fatima Bello",
      location: "Kano",  
      category: "Phone",
      rating: 4,
      review: "Quick Samsung repair service. Screen replacement done within hours. Great customer service."
    },
    {
      id: 5,
      name: "Jide Olawale",
      location: "Ibadan",
      category: "Laptop",
      rating: 5,
      review: "MacBook logic board repair was handled professionally. Works better than before!"
    },
    {
      id: 6,
      name: "Kemi Adewale",
      location: "Lagos",
      category: "Solar",
      rating: 5,
      review: "Complete solar system installation for my home. Team was knowledgeable and efficient."
    },
    {
      id: 7,
      name: "Musa Ibrahim",
      location: "Kaduna",
      category: "Phone",
      rating: 4,
      review: "iPhone battery replacement was affordable and quick. Phone lasts all day now."
    },
    {
      id: 8,
      name: "Ngozi Eze",
      location: "Enugu",
      category: "Laptop",
      rating: 5,
      review: "PC optimization service made my old computer feel brand new. Amazing performance boost."
    },
    {
      id: 9,
      name: "Olamide Durojaiye",
      location: "Oshogbo",
      category: "Solar",
      rating: 5,
      review: "Solar inverter setup was seamless. Quality equipment and excellent after-sales support."
    },
    {
      id: 10,
      name: "Sade Adeyemi",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Water-damaged phone repair was successful. Thought it was beyond repair but they fixed it perfectly."
    },
    {
      id: 11,
      name: "Tunde Olaniyi",
      location: "Ilorin",
      category: "Laptop",
      rating: 4,
      review: "Virus removal and OS installation was thorough. Computer runs smoothly now."
    },
    {
      id: 12,
      name: "Uchechi Nwosu",
      location: "Owerri",
      category: "Solar",
      rating: 5,
      review: "Battery upgrade for my solar system was professional. Backup time improved significantly."
    },
    {
      id: 13,
      name: "Victor Okonkwo",
      location: "Awka",
      category: "Phone",
      rating: 5,
      review: "Screen repair for my Galaxy phone. Quality replacement and reasonable pricing."
    },
    {
      id: 14,
      name: "Yusuf Abubakar",
      location: "Maiduguri",
      category: "Laptop",
      rating: 4,
      review: "Laptop keyboard replacement was quick. New keyboard works perfectly and feels great."
    },
    {
      id: 15,
      name: "Zainab Musa",
      location: "Gombe",
      category: "Solar",
      rating: 5,
      review: "Solar panel installation was done with precision. Already seeing savings on electricity bills."
    },
    {
      id: 16,
      name: "Eddy Jr",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Great experience! The guy is truthful, and he knows his work. My high end laptop damaged by water. He gave me so many options. And even helped me recover all my files. If you have any issue with your system and phones as well, check him out. You will thank me later."
    },
    {
      id: 17,
      name: "Emmanuel Ikechukwu",
      location: "Lagos", 
      category: "Laptop",
      rating: 5,
      review: "I got my PC screen fixed and added an SSD here, and they did an excellent job. Everything is working perfectly now. The service was professional, quick, and reliable. Highly recommend Benextech for anyone needing computer repairs or upgrades."
    },
    {
      id: 18,
      name: "Iseoluwa",
      location: "Lagos",
      category: "Laptop",
      rating: 4,
      review: "The guy is good, He fixed my system working good and fine, but their down side is that u always call the boss for an appointment, he is always busy with outside jobs. i give him four stars anyways. However they are good at what they do shal if it comes to rating."
    },
    {
      id: 19,
      name: "Elizabeth Onyeniche",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I had an issue with my iPhone's charging port and got it fixed here. The service was quick and professional, and my phone is working perfectly now, no issue at all. I highly recommend them!"
    },
    {
      id: 20,
      name: "daniel abiola",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "these fixed my macbook A1235, 12 inch that i thought was a write off due to how it went off, heat up terribly and just went dead on me while working. when i brought it in i didnt believe it will still work buy the guy there just told me to. give a try humbly and by the next day he whatsapp me of the video of my macbook back to life. im so grateful to benextech, they are awesome abd know their job. if yo are around ajah area of lagos and have a computer issues, trust. to call them up, they can fix it."
    },
    {
      id: 21,
      name: "Marianne Favi",
      location: "Lagos",
      category: "Phone", 
      rating: 5,
      review: "I thought my Samsung phone was dead when it fell from my hand at a high level. A friend told me about these guys and I just reluctantly decided to try them and I'm glad I did. They fixed it and my phone working again. These guys are the best. I salute. You guys are doing well. I recommend 1000%."
    },
    {
      id: 22,
      name: "Ayomide Eniola",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Their service is best around the area, these guys iPad 10th gen that a friend sat on mistakenly. Both my screen and touchpad smashed into pieces and frame bent backwards, took it to them and he bought parts from his connection in china,took three weeks, but after the waiting mt iPad back to life again, now it working perfectly . Thumbs up guys. Mr Benextech"
    },
    {
      id: 23,
      name: "Barak Oqua",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Benextech located along Ajah road in Lekki Lagos offers repair services for Apple devices including iPads.They provide both hardware and software solutions for apple products. However I sent my iPad to them from Calaba Cross Rivers State to Lagos after i saw their page online and was satisfied with feedbacks. Now my job has been done and sent back to me, my iPad working like new again. Thanks guys @benextech"
    },
    {
      id: 24,
      name: "Anighemabhar Matthew",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "The professionalist baba oh I greet thanks man for the good job u did for me, the best repair guy at ajah so far.... I beg make unah help me patronize am, but my observation be say u no dey like attend to small job😒 like mine, but aside that the guy good. Thanks man"
    },
    {
      id: 25,
      name: "Ambrycakes'n'pastries",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Am so super excited i came across this guys profile. And after they were done with my phone and i testing it, I finally believe what my friend told about these guys. Them sabi their work. Thumbs up to u benex Tech, you guys too much."
    },
    {
      id: 26,
      name: "Orlu Steadfast",
      location: "Lagos", 
      category: "Laptop",
      rating: 5,
      review: "these guys at benextech workspace are the best, friendly and most importantly know is job. thumbs up guys. you are welcome to patronise them. you won't regret it, sure best."
    },
    {
      id: 27,
      name: "Johnson Ugo Daniel",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "I had the most wonderful experience today! I witnessed diligence and thoroughness in display. Highly recommended. Cheers"
    },
    {
      id: 28,
      name: "Joseph Nwokotubo",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Reliable and trust worthy, the fixed my iPhone 14pm that methylated spirt badly pouted on and started tripping off. Send it through logistics to Benextech and everything working perfectly now, no issues of any sort. Thanks guys, you really deserve the 5 stars."
    },
    {
      id: 29,
      name: "REBECCA ORISEH",
      location: "Lagos",
      category: "Laptop", 
      rating: 5,
      review: "I got back all my lost files after a system crash. They're Best phone and computers repair guy around Ajah.... This guy solved my phone. Issue without much stress. Taken to other places and they couldn't. Thumbs up to benextech."
    },
    {
      id: 30,
      name: "Adebola Elizabeth Damilola Adeyemi",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I was tired of getting my phone fixed by engineers in Ajah, so I searched for an engineer near me. Google suggested him, and I decided to give him a try. I have no regrets—I highly recommend him"
    },
    {
      id: 31,
      name: "Ruth Nwachukwu",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I enjoyed a very seamless experience with this brand. The price was affordable and the customer service was top notch.. y'all should plan to patronize this brand and get value for your for money"
    },
    {
      id: 32,
      name: "Delivery Addo",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Mr Benex ... I salute thanks for the repair man... Y'all should rush and give this man a call today, him Sabi e work..."
    },
    {
      id: 33,
      name: "Emmanuel Olaosebikan",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Wish I could double the stars. I love his craft. He fixed my friend's MBP 2013 15\" GPU perfectly. Gave adequate feedback and he didn't delay at all. He was communicating at all times and he did a great job. I highly recommend him. He's a fantastic Apple expert.!"
    },
    {
      id: 34,
      name: "No Hitch Web",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "My macbook froze and suddenly went off. He took his time, diagnosed the issue, found the fault, fixed it and I am making this review with the said Macbook. Thank you BenexTech, thank you so much."
    },
    {
      id: 35,
      name: "Chibuzo Gabriel",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I brought in my iPhone 11 that just stop charging😫 and I tried all solutions online to fix but to no avail, it took BENEXTECH just 30 minutes to have it working again, I thought it was going to take a day or two but he did it and it working perfectly for just 30 minutes. I'm so impressed and I recommend these guys, you can and should patronize them. You will be happy when leaving. One love"
    },
    {
      id: 36,
      name: "Nwocha Adim",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Blessing is a diligent and professional technician. My MacBook Pro suddenly developed a fault and wouldn't come on again. Blessing took his time with the help of some professional tooling in diagnosing the issue and did a thorough fix. Highly recommend"
    },
    {
      id: 37,
      name: "Glory Usman",
      location: "Lagos",
      category: "Phone", 
      rating: 5,
      review: "I took my phone to benextech hoping to get a perfect job done considering repairer out there spoiling people phones, had a bad experience ones, but this guy did my job and my phone looking like new, nothing to tell it was fixed. And my phone perfectly working now. I will bring my laptop to him too as I trust he will do a good job. Thanks benextech. 100%"
    },
    {
      id: 38,
      name: "Zayden Adebayo",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "They also fix my phone screen perfectly, no errors, just like new. Their service is the best in the area. Benextech."
    },
    {
      id: 39,
      name: "Ajays Gate Global Ltd",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "benextech are great guys, welcoming and always paying attention to details. i brought in my water damanged Macbook pro that got so bad that it didnt come on anymore. these guys fixed it and its working perfectly now, im really exited and happy. i recommend these guys. good job guys."
    },
    {
      id: 40,
      name: "Edidot School",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "They help fix the screen of the school phone which was so bad we couldn't use for daily activities. Thanks @benextech for a good well done job."
    },
    {
      id: 41,
      name: "Ebenezer Oladutemu",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "My MacBook was diagnosed to have a faulty battery which affected the board. The board and battery were fixed well!💯. Man knows his onions. Great service.."
    },
    {
      id: 42,
      name: "Oluwatosin Taiwo",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Great job on fixing my laptop! I really appreciate your professionalism and the time you took to explain everything. Thanks again"
    },
    {
      id: 43,
      name: "Michael Ikharo",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "I had an amazing experience getting my macbook SSD and OS fixed, the team was knowledgeable and quick to resolve the issue. I highly recommend their service for any Mac troubles!"
    },
    {
      id: 44,
      name: "Beta Developer",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Hardly leave reviews but leaving a review in this case is a must. I was really stressed with my laptop being stocked on loading but taking it to Benextech was definitely the best choice I made cause they fixed it and really saved me from having to buy a new one"
    },
    {
      id: 45,
      name: "Gideon Ogbonna",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "best apple devices and gadgets stores in lekki, i went there to fix my macbook 2013 charging port and got a charger and ever since my macbook working perfectly....these guys the best. i recommend them. thankz benextech."
    },
    {
      id: 46,
      name: "Joseph Nwokotubo",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "I thought my ASUS ROG gaming laptop was gone when I suddenly smelled smoke one day, and it switched off. I had given up on the laptop until I stumbled upon Benextech, which is closer to where I live. I decided to give them a shot and sent the laptop over. Despite it being a motherboard issue that they could have easily extorted me for, they were honest and told me exactly what was wrong with the board, then gave me a very fair price. They communicated with me daily and sent the laptop back in excellent condition. If you live around Lekki/Ajah and need any repair service for your phone or laptop, whether it be Apple, Android, or Windows, I wholeheartedly recommend Benextech!"
    },
    {
      id: 47,
      name: "cher blossom",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "guys i invite you all to patronise the guy as they are the best around this axis... they fixed my computer screen issue and my samsung galaxy s7edge and both devies working perfectly... i didn't even reconized my samsung when i saw it at first, thought it was someone elses phone, lolzzz. this guys are the best at what they do. i will surely petronise them again if i have any issue with my device in future."
    },
    {
      id: 48,
      name: "Patrick Emmanuel",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Best store around Ajah/sangotedo area for apple Macbook repair, this guys the best as thet were able to bring my macbook back to life after like two try from other engineers within the area. Thanks benextech for bringing my Macbook back to life and working perfectly. You too much."
    },
    {
      id: 49,
      name: "Evelyn carter",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "fixed my hp elitebook 360 1030 G2 keyboard issue on time for my appointment and working perfectly now. I appreciate. thanks benextech"
    },
    {
      id: 50,
      name: "Olufemi Oredein",
      location: "Lagos",
      category: "Laptop",
      rating: 4,
      review: "I bought my MacBook charger from Benextech last year and it has been working very well This month, I also replaced my MacBook battery and I can say the quality of service is still the same! Excellent customer service as well!"
    },
    {
      id: 51,
      name: "Chizy Desmond",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "He is the best at what he does, his services are topnotch, and most reliable. He delivers with good results. Trust him with all you gadgets. I wish I can give him a million stars 🌟 🌟 🌟 🌟 🌟"
    },
    {
      id: 52,
      name: "Trishawnary Thylacine",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "This guy is truly an expert,like unbelievable...i brought my macbook pro to his office for repair...at first i was not confortable but when i saw the job done i was like wow....i will advice u to take ur jobs to him."
    },
    {
      id: 53,
      name: "Twebbies",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "I had my dell xps 13 repaired at benextech in lekki lagos.The screen had a bad pixel,and they were able to fix it quickly and efficently.The technician was very knowledgeable and friendly ,and he explain the repair process clearly.The price was reasonable,and i was impressed with the quality of the work.I would definitely recommend Benextech for gadget repairs in lagos."
    },
    {
      id: 54,
      name: "Kemi Kafayat",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "The guy knows the job well, fixed my phone screen and my son school laptop 💻perfect. I recommend benextech for you computers and smart phones and gadgets. I will tell my friends about this place."
    },
    {
      id: 55,
      name: "Sarah Aborowa",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "The best tech service store within Ajah/Lekki area,they fixed and perfectly my Samsung tab that other service centre told me could not be fixed. I recommend benextech to anyone around this axis looking for a reliable tech store to fix their devices and gadgets"
    },
    {
      id: 56,
      name: "Adamson Abideen",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I brought my iPhone 15 promax to benextech for screen solution...within 1h it was fixed easily 🙂🙂...this company are doing good job...try them !!!"
    },
    {
      id: 57,
      name: "Lilias Keyan",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Mr Blessing fixed my Samsung A02s screen perfectly and so far no soft touch issues. I recommend Benextech 110%."
    },
    {
      id: 58,
      name: "Maureen Udemeh",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "this guy is superb i mean he us a genius...just fixedmy Samsung a21s at his office.....nd it working perfectly"
    },
    {
      id: 59,
      name: "Benedicta Oyobolo",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Thank you so much Benex Tech for fixing my Samsung phone quickly and stress free, guys feel free to patronise him for all kinds of gadget repairs, he is tested and trusted."
    },
    {
      id: 60,
      name: "Faith Adesogan",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "Their service is top notch and more than satisfactory, in short perfect! Even their hospitality is highly commendable and admirable. I recommend Benextech at all times, it's a brand you can trust!!!"
    },
    {
      id: 61,
      name: "Tochukwu Paul",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Great guy!! Fixed my macbook and now it's working well. I highly recommend Benex any day, any time. 5 Star."
    },
    {
      id: 62,
      name: "Pearl Maryj",
      location: "Lagos",
      category: "Laptop",
      rating: 5,
      review: "Very amazing 🙌🏾 he actually knows everything about gadgets. 100% will recommend. He revived my Mac immediately I found him after one year of trying other and actually given up."
    },
    {
      id: 63,
      name: "Nwadiuto Obuekwe",
      location: "Lagos",
      category: "Phone",
      rating: 5,
      review: "I got my bad screen replaced at benextech and I must say I really enjoyed a very good customer service. Benextech prices are cheap and affordable I would really recommend you try him out."
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
                  {/* Profile Initials */}
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full mx-auto bg-primary/20 border-2 border-primary/30 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">
                        {getInitials(testimonial.name)}
                      </span>
                    </div>
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