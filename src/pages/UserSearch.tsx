import { Search, SlidersHorizontal, MapPin, Star, Clock, DollarSign, Award, Scissors, Sparkles, Heart, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const stylists = [
  {
    id: 1,
    name: "Sarah Williams",
    specialty: "Hair Color Expert",
    rating: 4.9,
    reviews: 248,
    experience: "8 years",
    price: "$45-80",
    distance: "1.2 km",
    avatar: "1494790108377-be9c29b29330",
    works: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
    ],
  },
  {
    id: 2,
    name: "Emma Davis",
    specialty: "Styling Specialist",
    rating: 5.0,
    reviews: 312,
    experience: "10 years",
    price: "$50-90",
    distance: "2.1 km",
    avatar: "1438761681033-6461ffad8d80",
    works: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400",
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=400",
    ],
  },
  {
    id: 3,
    name: "Michael Chen",
    specialty: "Men's Grooming",
    rating: 4.8,
    reviews: 189,
    experience: "6 years",
    price: "$35-65",
    distance: "0.8 km",
    avatar: "1507003211169-0a1dd7228f2d",
    works: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400",
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400",
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400",
    ],
  },
  {
    id: 4,
    name: "Lisa Anderson",
    specialty: "Bridal Makeup",
    rating: 4.9,
    reviews: 275,
    experience: "12 years",
    price: "$80-150",
    distance: "3.5 km",
    avatar: "1487412720507-e7ab37603c6f",
    works: [
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
    ],
  },
];

const services = [
  { id: 1, name: "Haircut", price: "$25-50", icon: Scissors },
  { id: 2, name: "Coloring", price: "$60-120", icon: Sparkles },
  { id: 3, name: "Styling", price: "$35-70", icon: Sparkles },
  { id: 4, name: "Spa", price: "$80-150", icon: Sparkles },
];

const deals = [
  {
    id: 1,
    title: "30% OFF First Haircut",
    description: "New customer special offer",
    discount: "30%",
    validUntil: "Dec 31, 2024",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600",
  },
  {
    id: 2,
    title: "Spa Package Deal",
    description: "Facial + Massage combo",
    discount: "40%",
    validUntil: "Dec 15, 2024",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600",
  },
  {
    id: 3,
    title: "Color Treatment Special",
    description: "Full color service with conditioning",
    discount: "25%",
    validUntil: "Dec 20, 2024",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600",
  },
];

const UserSearch = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("stylists");
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header with Search */}
      <div className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
          {/* Top Row */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-9 w-9 rounded-full"
            >
              <X className="h-5 w-5" />
            </Button>
            <h1 className="text-lg font-bold text-foreground">Search</h1>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search services, deals, or stylists..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-10 bg-muted/50"
              />
            </div>
            <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10 flex-shrink-0">
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Results</SheetTitle>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">Rating</h3>
                    <div className="flex gap-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <Button key={rating} variant="outline" size="sm" className="flex-1">
                          {rating}+ <Star className="h-3 w-3 ml-1 fill-primary text-primary" />
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">Distance</h3>
                    <div className="space-y-2">
                      {["< 1 km", "< 3 km", "< 5 km", "Any"].map((distance) => (
                        <Button key={distance} variant="outline" className="w-full justify-start">
                          {distance}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm">Price Range</h3>
                    <div className="space-y-2">
                      {["$", "$$", "$$$", "$$$$"].map((price) => (
                        <Button key={price} variant="outline" className="w-full justify-start">
                          {price}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <div className="sticky top-[120px] z-10 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <TabsList className="w-full justify-start h-12 bg-transparent p-0 gap-4">
              <TabsTrigger value="stylists" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                Stylists
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                Services
              </TabsTrigger>
              <TabsTrigger value="deals" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                Deals
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Stylists Tab */}
          <TabsContent value="stylists" className="mt-0 space-y-4">
            {stylists.map((stylist) => (
              <Card key={stylist.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] border-border/50">
                <CardContent className="p-0">
                  {/* Stylist Header */}
                  <div className="p-4 bg-gradient-to-br from-card via-card to-muted/20">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <Avatar className="h-20 w-20 border-2 border-primary shadow-lg ring-2 ring-background">
                          <AvatarImage
                            src={`https://images.unsplash.com/photo-${stylist.avatar}?w=150`}
                          />
                          <AvatarFallback className="text-lg">{stylist.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-card shadow-md flex items-center justify-center">
                          <div className="h-2 w-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-lg text-foreground truncate">{stylist.name}</h3>
                            <p className="text-sm text-primary font-medium">{stylist.specialty}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex-shrink-0">
                            <Heart className="h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-4 mt-3 flex-wrap">
                          <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/20 px-2 py-1 rounded-full">
                            <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                            <span className="text-sm font-bold text-foreground">{stylist.rating}</span>
                            <span className="text-xs text-muted-foreground">({stylist.reviews})</span>
                          </div>
                          <Badge variant="secondary" className="text-xs gap-1">
                            <Award className="h-3 w-3" />
                            {stylist.experience}
                          </Badge>
                          <Badge variant="outline" className="text-xs gap-1">
                            <MapPin className="h-3 w-3" />
                            {stylist.distance}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Latest Works */}
                  <div className="px-4 py-3 bg-muted/30">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Portfolio</h4>
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {stylist.works.map((work, idx) => (
                        <div
                          key={idx}
                          className="relative h-28 w-28 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform shadow-md ring-1 ring-border"
                        >
                          <img src={work} alt={`Work ${idx + 1}`} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between p-4 bg-card">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <DollarSign className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Price Range</p>
                        <span className="font-bold text-foreground">{stylist.price}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="h-9">View Profile</Button>
                      <Button size="sm" className="shadow-md h-9 px-6">Book Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="mt-0 grid grid-cols-2 gap-3">
            {services.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={service.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 overflow-hidden border-border/50">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/5 via-amber-50/50 to-primary/10 dark:from-primary/10 dark:via-amber-950/20 dark:to-primary/5 p-6 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center shadow-lg">
                        <ServiceIcon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4 bg-card">
                      <h3 className="font-bold text-foreground mb-1 text-center">{service.name}</h3>
                      <p className="text-sm text-primary font-semibold text-center mb-3">{service.price}</p>
                      <Button size="sm" className="w-full h-9 shadow-sm">Book Service</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          {/* Deals Tab */}
          <TabsContent value="deals" className="mt-0 space-y-4">
            {deals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01] border-border/50">
                <CardContent className="p-0">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={deal.image} 
                      alt={deal.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-red-500 text-white border-0 shadow-lg text-base px-3 py-1 font-bold">
                        {deal.discount} OFF
                      </Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-bold text-white text-xl mb-1">{deal.title}</h3>
                      <p className="text-white/90 text-sm">{deal.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <div className="text-sm">
                          <span className="text-muted-foreground">Valid until </span>
                          <span className="font-bold text-foreground">{deal.validUntil}</span>
                        </div>
                      </div>
                      <Button size="sm" className="shadow-md h-9 px-6">Redeem Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default UserSearch;
