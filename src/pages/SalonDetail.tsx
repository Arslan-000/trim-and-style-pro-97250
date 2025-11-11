import { MapPin, Star, Clock, Phone, Globe, MessageCircle, Share2, Navigation, ChevronRight, ArrowLeft, Heart, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const specialists = [
  { id: 1, name: "Sarah", role: "Hair Color Expert", img: '1494790108377-be9c29b29330' },
  { id: 2, name: "Emma", role: "Styling Specialist", img: '1438761681033-6461ffad8d80' },
  { id: 3, name: "Michael", role: "Men's Grooming", img: '1507003211169-0a1dd7228f2d' },
  { id: 4, name: "Lisa", role: "Bridal Makeup", img: '1487412720507-e7ab37603c6f' },
  { id: 5, name: "John", role: "Hair Stylist", img: '1500648767791-00a36c92f2cb' },
  { id: 6, name: "Alex", role: "Beard Specialist", img: '1506794778202-cad84cf45f1d' },
  { id: 7, name: "Sophia", role: "Nail Artist", img: '1524504388940-b1c1722653e1' },
  { id: 8, name: "James", role: "Color Expert", img: '1500648767791-00dcc994a43e' },
];

const serviceCategories = [
  { name: "Haircut", count: 12, icon: "✂️" },
  { name: "Hair Coloring", count: 8, icon: "💧" },
  { name: "Hair Wash", count: 6, icon: "🚿" },
  { name: "Massage", count: 10, icon: "💆" },
  { name: "Makeup", count: 5, icon: "💄" },
  { name: "Facial", count: 8, icon: "🌸" },
];

const haircutTypes = [
  { name: "Classic Haircut", price: "$15", duration: "30 min" },
  { name: "Fade Haircut", price: "$18", duration: "40 min" },
  { name: "Buzz Cut", price: "$12", duration: "20 min" },
  { name: "Undercut", price: "$20", duration: "45 min" },
  { name: "Pompadour", price: "$25", duration: "50 min" },
  { name: "Crew Cut", price: "$14", duration: "25 min" },
  { name: "French Crop", price: "$22", duration: "45 min" },
  { name: "Quiff", price: "$24", duration: "50 min" },
  { name: "Side Part", price: "$18", duration: "35 min" },
  { name: "Textured Crop", price: "$20", duration: "40 min" },
  { name: "Slick Back", price: "$19", duration: "35 min" },
  { name: "Long Layered Cut", price: "$28", duration: "60 min" },
];

const packages = [
  { 
    title: "Haircut & Hairstyle", 
    subtitle: "Special offer valid until Dec 15, 2025", 
    price: "₹1200",
    originalPrice: "₹1800",
    image: "1560066984-138dadb4c035"
  },
  { 
    title: "Bridal Package", 
    subtitle: "Complete bridal makeover with makeup", 
    price: "₹8000",
    originalPrice: "₹12000",
    image: "1519699047591-1282a7bfc7d9"
  },
  { 
    title: "Spa & Massage Combo", 
    subtitle: "Relax and rejuvenate special", 
    price: "₹2500",
    originalPrice: "₹3500",
    image: "1544161515-4ab6ce6db874"
  },
];

const galleryImages = [
  '1562322140-8baeececf3df',
  '1560066984-138dadb4c035',
  '1521590832167-7bcbfaa6381f',
  '1633681926-a233ae6d6cfe',
  '1595476108010-7ad711ff5c8e',
  '1522337660859-02fbefca4702',
  '1519699047591-1282a7bfc7d9',
  '1605497788044-5a32c7078486',
  '1527799820374-dcf8d9d4a388',
];

const reviews = [
  { 
    name: "Sarah Williams", 
    date: "2 days ago", 
    rating: 5, 
    review: "Amazing service! The stylist really understood what I wanted. Professional and friendly staff.", 
    likes: 12,
    img: '1494790108377-be9c29b29330' 
  },
  { 
    name: "Mike Brown", 
    date: "1 week ago", 
    rating: 4, 
    review: "Great atmosphere and professional staff. Will definitely come again.", 
    likes: 8,
    img: '1507003211169-0a1dd7228f2d' 
  },
  { 
    name: "Emma Davis", 
    date: "3 weeks ago", 
    rating: 5, 
    review: "The facial treatment was incredible. My skin feels so refreshed and glowing!", 
    likes: 15,
    img: '1438761681033-6461ffad8d80' 
  },
];

const SalonDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");
  const [showHaircutTypes, setShowHaircutTypes] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Top Header Section - Large Cover Photo */}
      <div className="relative h-[280px]">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200"
          alt="Elite Barber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
        
        {/* Back Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-4 left-4 bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        {/* Open Badge */}
        <Badge className="absolute top-4 right-4 bg-green-500 text-white border-0 px-3 py-1">
          Open
        </Badge>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 space-y-6">
        {/* Salon Name & Rating Card */}
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Elite Barber</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Gulberg III, Lahore</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-primary fill-primary" />
                  <span className="text-lg font-bold text-foreground">4.8</span>
                </div>
                <span className="text-sm text-muted-foreground">(3,279 reviews)</span>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Globe className="h-4 w-4" />
                <span className="text-xs">Website</span>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="text-xs">Message</span>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Phone className="h-4 w-4" />
                <span className="text-xs">Call</span>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Navigation className="h-4 w-4" />
                <span className="text-xs">Direction</span>
              </Button>
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Share2 className="h-4 w-4" />
                <span className="text-xs">Share</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Our Specialists Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Our Specialists</h3>
            <Button variant="ghost" size="sm" className="text-primary">
              See All
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4">
              {specialists.map((specialist) => (
                <div key={specialist.id} className="flex flex-col items-center gap-2 cursor-pointer group">
                  <Avatar className="h-20 w-20 border-2 border-primary/30 group-hover:border-primary transition-colors">
                    <AvatarImage src={`https://images.unsplash.com/photo-${specialist.img}?w=150`} className="object-cover" />
                    <AvatarFallback>{specialist.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-foreground">{specialist.name}</p>
                    <p className="text-xs text-muted-foreground">{specialist.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Navigation Tabs */}
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-2">
            {["about", "services", "packages", "gallery", "reviews"].map((tab) => (
              <Button
                key={tab}
                size="sm"
                variant={activeTab === tab ? "default" : "ghost"}
                onClick={() => setActiveTab(tab)}
                className={`capitalize rounded-full px-6 ${
                  activeTab === tab 
                    ? "bg-primary text-background hover:bg-primary/90" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {tab.replace("_", " ")}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* About Us Section */}
        {activeTab === "about" && (
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">About Us</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                At Elite Barber, we bring luxury grooming and styling to life. Our expert team provides top-quality services in a relaxing atmosphere. With over 10 years of experience, we're dedicated to making you look and feel your best.
              </p>
              <Button variant="ghost" size="sm" className="text-primary px-0">
                Read More
              </Button>

              {/* Working Hours & Contact Info */}
              <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-border">
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-3">Working Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Mon – Fri</span>
                      <span className="text-foreground font-medium">8:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Sat – Sun</span>
                      <span className="text-foreground font-medium">10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-semibold text-foreground mb-3">Contact Us</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">+92 300 1234567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm text-foreground">Gulberg III, Lahore</span>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-2">
                      See on Map
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Our Services Section */}
        {activeTab === "services" && (
          <Card className="bg-card border-border">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
                <Button variant="ghost" size="sm" className="text-primary">
                  See All
                </Button>
              </div>

              <div className="space-y-2">
                {serviceCategories.map((service, idx) => (
                  <div key={idx}>
                    <div
                      onClick={() => {
                        if (service.name === "Haircut") {
                          setShowHaircutTypes(!showHaircutTypes);
                        }
                      }}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{service.icon}</div>
                        <div>
                          <p className="font-semibold text-foreground">{service.name}</p>
                          <p className="text-sm text-muted-foreground">{service.count} types</p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    
                    {/* Show haircut types when clicked */}
                    {service.name === "Haircut" && showHaircutTypes && (
                      <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                        {haircutTypes.map((haircut, hidx) => (
                          <div
                            key={hidx}
                            className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background transition-colors cursor-pointer"
                            onClick={() => navigate("/user/book-appointment")}
                          >
                            <div>
                              <p className="text-sm font-medium text-foreground">{haircut.name}</p>
                              <p className="text-xs text-muted-foreground">{haircut.duration}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-semibold text-primary">{haircut.price}</span>
                              <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                                Book
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Our Packages Section */}
        {activeTab === "packages" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Special Packages</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                See All
              </Button>
            </div>

            <div className="space-y-4">
              {packages.map((pkg, idx) => (
                <Card
                  key={idx}
                  className="bg-card border-border overflow-hidden hover:shadow-[var(--shadow-gold)] transition-all cursor-pointer"
                >
                  <div className="flex gap-4">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <img
                        src={`https://images.unsplash.com/photo-${pkg.image}?w=300`}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{pkg.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{pkg.subtitle}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-primary">{pkg.price}</span>
                          <span className="text-sm text-muted-foreground line-through">{pkg.originalPrice}</span>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-primary hover:bg-primary/90"
                          onClick={() => navigate("/user/book-appointment")}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Our Gallery Section */}
        {activeTab === "gallery" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Salon Gallery</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                See All
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((photo, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={`https://images.unsplash.com/photo-${photo}?w=400&h=400&fit=crop`}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews Section */}
        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">What Our Clients Say</h3>
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-6 w-6 text-primary fill-primary" />
                  <span className="text-2xl font-bold text-foreground">4.8</span>
                  <span className="text-sm text-muted-foreground">(3,279 reviews)</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {reviews.map((review, idx) => (
                <Card key={idx} className="bg-card border-border">
                  <CardContent className="p-5 space-y-3">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={`https://images.unsplash.com/photo-${review.img}?w=100`} />
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="font-semibold text-foreground">{review.name}</p>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-primary fill-primary" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Heart className="h-4 w-4" />
                            <span>{review.likes}</span>
                          </button>
                          <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="outline" className="w-full">
              Add Review
            </Button>
          </div>
        )}
      </div>

      {/* Bottom Booking Button - Sticky */}
      <div className="fixed bottom-20 left-0 right-0 px-6 z-40">
        <div className="max-w-7xl mx-auto">
          <Button
            size="lg"
            onClick={() => navigate("/user/book-appointment")}
            className="w-full h-14 bg-gradient-to-r from-primary to-amber-400 hover:from-primary/90 hover:to-amber-400/90 text-lg font-semibold shadow-[var(--shadow-gold)] rounded-2xl"
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalonDetail;