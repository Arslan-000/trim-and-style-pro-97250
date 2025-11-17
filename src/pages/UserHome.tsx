import { Bell, Search, Scissors, Droplet, Wind, Sparkles, Users, Calendar, Star, Clock, MapPin, Plus, Phone, ChevronRight, ChevronUp, ChevronDown, Gift, Zap, Video, Lightbulb, PartyPopper, Play, ShoppingBag, MessageCircle, Award, X, Heart, Share2 } from "lucide-react";
import { useState } from "react";
import storyOffersImg from "@/assets/story-offers.jpg";
import storyTransformationImg from "@/assets/story-transformation.jpg";
import storySalonWorkImg from "@/assets/story-salon-work.jpg";
import storyTipsImg from "@/assets/story-tips.jpg";
import storyEventsImg from "@/assets/story-events.jpg";
import storyTutorialsImg from "@/assets/story-tutorials.jpg";
import storyProductsImg from "@/assets/story-products.jpg";
import storyReviewsImg from "@/assets/story-reviews.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const services = [
  { 
    id: 1, 
    name: "Haircut", 
    icon: Scissors, 
    color: "from-primary to-amber-400",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop"
  },
  { 
    id: 2, 
    name: "Coloring", 
    icon: Droplet, 
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1519699047591-1282a7bfc7d9?w=400&h=400&fit=crop"
  },
  { 
    id: 3, 
    name: "Styling", 
    icon: Wind, 
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"
  },
  { 
    id: 4, 
    name: "Spa", 
    icon: Sparkles, 
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop"
  },
  { 
    id: 5, 
    name: "Facial", 
    icon: Sparkles, 
    color: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop"
  },
  { 
    id: 6, 
    name: "Makeup", 
    icon: Sparkles, 
    color: "from-pink-500 to-rose-500",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop"
  },
  { 
    id: 7, 
    name: "Massage", 
    icon: Wind, 
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop"
  },
  { 
    id: 8, 
    name: "Manicure", 
    icon: Scissors, 
    color: "from-rose-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400&h=400&fit=crop"
  },
  { 
    id: 9, 
    name: "Pedicure", 
    icon: Droplet, 
    color: "from-teal-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop"
  },
  { 
    id: 10, 
    name: "Threading", 
    icon: Scissors, 
    color: "from-amber-500 to-orange-500",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop"
  },
];

const stories = [
  { id: 1, name: "Offers", image: storyOffersImg, color: "from-primary to-amber-400", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  { id: 2, name: "Transformations", image: storyTransformationImg, color: "from-purple-500 to-pink-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  { id: 3, name: "Salon Work", image: storySalonWorkImg, color: "from-blue-500 to-cyan-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  { id: 4, name: "Tips", image: storyTipsImg, color: "from-green-500 to-emerald-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
  { id: 5, name: "Events", image: storyEventsImg, color: "from-orange-500 to-red-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  { id: 6, name: "Tutorials", image: storyTutorialsImg, color: "from-cyan-500 to-blue-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
  { id: 7, name: "Products", image: storyProductsImg, color: "from-pink-500 to-rose-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
  { id: 8, name: "Reviews", image: storyReviewsImg, color: "from-indigo-500 to-purple-500", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
];

const stylists = [
  { 
    id: 1, 
    name: "Sarah Williams", 
    specialty: "Hair Color Expert", 
    rating: 5, 
    img: '1494790108377-be9c29b29330' 
  },
  { 
    id: 2, 
    name: "Emma Davis", 
    specialty: "Styling Specialist", 
    rating: 5, 
    img: '1438761681033-6461ffad8d80' 
  },
  { 
    id: 3, 
    name: "Michael Chen", 
    specialty: "Men's Grooming", 
    rating: 5, 
    img: '1507003211169-0a1dd7228f2d' 
  },
  { 
    id: 4, 
    name: "Lisa Anderson", 
    specialty: "Bridal Makeup", 
    rating: 5, 
    img: '1487412720507-e7ab37603c6f' 
  },
];

const UserHome = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<{ name: string; url: string } | null>(null);
  const [storyList, setStoryList] = useState(stories);

  const handleServiceClick = () => {
    navigate("/user/salon/1");
  };

  const handleVideoClick = (story: typeof stories[0]) => {
    setSelectedVideo({ name: story.name, url: story.videoUrl });
  };

  const handleMoveStory = (index: number, direction: "up" | "down") => {
    setStoryList((prev) => {
      const newList = [...prev];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex >= newList.length) {
        return prev;
      }

      const temp = newList[targetIndex];
      newList[targetIndex] = newList[index];
      newList[index] = temp;

      return newList;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 pt-6 pb-6 space-y-6">
        {/* Welcome Card - Ultra Modern Design */}
        <Card className="relative overflow-hidden border-0 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-all duration-500">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-amber-400 to-primary opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          
          <CardContent className="relative p-5">
            <div className="flex items-center gap-4">
              <div className="relative group/avatar">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-amber-200 to-white rounded-full animate-spin opacity-75" style={{ animationDuration: '3s' }} />
                <Avatar className="relative h-20 w-20 border-4 border-white shadow-2xl">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" />
                  <AvatarFallback className="text-xl font-bold">JD</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                  <div className="h-2.5 w-2.5 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              
              <div className="flex-1 space-y-0.5">
                <h1 className="text-2xl font-bold text-white drop-shadow-lg flex items-center gap-2">
                  Hi, John 
                  <span className="inline-block animate-[wave_1s_ease-in-out_infinite]" style={{ transformOrigin: '70% 70%' }}>👋</span>
                </h1>
                <p className="text-white/90 text-sm font-medium">Welcome back to Elite Barber</p>
                <div className="flex items-center gap-2 mt-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-200 animate-pulse" />
                  <p className="text-amber-100 text-xs font-semibold">Ready for your next transformation?</p>
                </div>
              </div>
              
              <Button 
                size="icon" 
                variant="ghost" 
                className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm h-10 w-10 rounded-full shadow-lg transition-all hover:scale-110"
                onClick={() => navigate("/user/profile")}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Bar - Ultra Modern Design */}
        <div className="relative">
          <Card className="border-0 shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300">
            <CardContent className="p-2">
              <div className="flex items-center gap-3">
                {/* Search Icon */}
                <div className="flex items-center justify-center h-14 w-14 flex-shrink-0">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                
                {/* Search Input */}
                <Input
                  placeholder="Search services, deals, or stylists..."
                  onClick={() => navigate("/user/search")}
                  readOnly
                  className="flex-1 border-0 bg-transparent text-base h-14 px-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/60 cursor-pointer"
                />
                
                {/* Filter Button */}
                <Button 
                  size="icon" 
                  variant="ghost"
                  onClick={() => navigate("/user/search")}
                  className="h-12 w-12 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <line x1="4" y1="21" x2="4" y2="14"></line>
                    <line x1="4" y1="10" x2="4" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12" y2="3"></line>
                    <line x1="20" y1="21" x2="20" y2="16"></line>
                    <line x1="20" y1="12" x2="20" y2="3"></line>
                    <line x1="1" y1="14" x2="7" y2="14"></line>
                    <line x1="9" y1="8" x2="15" y2="8"></line>
                    <line x1="17" y1="16" x2="23" y2="16"></line>
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Promo Banner - Enhanced */}
        <div className="relative h-[200px] rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-amber-400 to-primary" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          <div className="relative h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
            <Badge className="bg-destructive text-destructive-foreground px-5 py-1.5 text-sm font-semibold shadow-lg">
              🎉 Limited Time Offer
            </Badge>
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              Get 30% OFF on First Booking
            </h2>
            <p className="text-white/95 text-sm font-medium">
              Valid for new users this week only!
            </p>
            <Button 
              onClick={() => navigate("/user/book-appointment")}
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary font-semibold mt-2 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Loyalty Points Card */}
        <Card className="border border-amber-200 bg-gradient-to-r from-amber-50 via-amber-50 to-amber-100 rounded-3xl shadow-sm">
          <CardContent className="p-4 sm:p-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Icon */}
            <div className="flex items-start gap-3 flex-1">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center shadow-md flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              {/* Middle: Text + small progress */}
              <div className="space-y-1">
                <p className="text-xs font-semibold text-primary/90 uppercase tracking-wide">Loyalty Points</p>
                <p className="text-sm text-muted-foreground">
                  You have <span className="text-lg font-bold text-primary">750</span> points
                </p>
                <div className="mt-2 space-y-1">
                  <div className="h-1.5 rounded-full bg-amber-100 overflow-hidden max-w-xs">
                    <div className="h-full w-3/4 bg-gradient-to-r from-primary to-amber-400" />
                  </div>
                  <p className="text-[11px] text-amber-700 font-medium">50 more for VIP Priority Booking!</p>
                </div>
              </div>
            </div>

            {/* Right: View Rewards button */}
            <div className="flex sm:block">
              <Button
                size="sm"
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-primary to-amber-400 hover:from-primary/90 hover:to-amber-400/90 text-white font-semibold shadow-md mt-1"
                onClick={() => navigate("/user/rewards")}
              >
                View Rewards
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stories / Highlights Section - Video Style */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-foreground px-1">Latest Updates</h3>
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-3 pb-2">
              {storyList.map((story) => (
                <div key={story.id} className="flex-shrink-0 cursor-pointer group" onClick={() => handleVideoClick(story)}>
                  <div className="relative w-28 h-40 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300">
                    {/* Story Image */}
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent`} />
                    
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Play className="h-5 w-5 text-primary fill-primary ml-0.5" />
                      </div>
                    </div>
                    
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ padding: '2px' }}>
                      <div className="w-full h-full rounded-2xl bg-transparent" />
                    </div>
                    
                    {/* Story Name */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-xs font-bold text-white drop-shadow-lg">{story.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Services - Enhanced */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Our Services</h3>
            <Button variant="link" size="sm" className="text-primary font-semibold px-0">
              View All →
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-1">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="relative flex-shrink-0 w-40 cursor-pointer border border-border/60 hover:border-primary/60 bg-card transition-all duration-300 group hover:shadow-lg rounded-2xl"
                  onClick={handleServiceClick}
                >
                  <CardContent className="p-0 flex flex-col">
                    <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="px-3 py-3 flex flex-col items-center gap-1">
                      <p className="text-sm font-semibold text-foreground text-center group-hover:text-primary transition-colors">
                        {service.name}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Meet Our Experts - Enhanced */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Meet Our Stylists</h3>
            <Button variant="link" size="sm" className="text-primary font-semibold px-0">
              View All →
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-5 pb-2">
              {stylists.map((stylist) => (
                <Card
                  key={stylist.id}
                  className="relative flex-shrink-0 w-72 cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 group overflow-hidden"
                  onClick={handleServiceClick}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="relative p-6 space-y-4">
                    <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <Avatar className="h-20 w-20 border-3 border-primary/50 group-hover:border-primary shadow-[var(--shadow-soft)] transition-all">
                      <AvatarImage src={`https://images.unsplash.com/photo-${stylist.img}?w=150&h=150&fit=crop`} className="object-cover" />
                      <AvatarFallback>{stylist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-background flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                  </div>
                      <div className="flex-1">
                        <p className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{stylist.name}</p>
                        <p className="text-sm text-muted-foreground mb-2">{stylist.specialty}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(stylist.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-primary fill-primary drop-shadow-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full shadow-md hover:shadow-lg transition-all" size="sm" variant="outline">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Ongoing Deals Carousel - Enhanced */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Ongoing Deals</h3>
            <Button variant="link" size="sm" className="text-primary font-semibold px-0">
              View All →
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-5 pb-2">
              {[
                { 
                  title: "Winter Glow Package", 
                  description: "Facial + Hair Spa combo", 
                  discount: "20% Off",
                  image: "1544161515-4ab6ce6db874"
                },
                { 
                  title: "Free Hair Wash", 
                  description: "On any Facial Service", 
                  discount: "Free",
                  image: "1562322140-8baeececf3df"
                },
                { 
                  title: "Hair Spa Deal", 
                  description: "Premium hair treatment", 
                  discount: "Save 25%",
                  image: "1519699047591-1282a7bfc7d9"
                },
              ].map((deal, idx) => (
                <Card
                  key={idx}
                  className="relative flex-shrink-0 w-80 cursor-pointer hover:shadow-[var(--shadow-elevated)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 overflow-hidden group"
                  onClick={handleServiceClick}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${deal.image}?w=600`}
                      alt={deal.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground shadow-xl text-sm font-bold px-4 py-1.5">
                      {deal.discount}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{deal.title}</h4>
                    <p className="text-sm text-muted-foreground mt-2">{deal.description}</p>
                    <Button className="w-full mt-4 shadow-md" size="sm">Book Deal</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Your Next Appointment - Enhanced */}
        <Card className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-amber-400/5 to-primary/10 border-primary/30 backdrop-blur-sm">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
          <CardContent className="relative p-6">
            <h3 className="text-xl font-bold text-foreground mb-5">Your Upcoming Appointment</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-5">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-gold)]">
                  <Scissors className="h-8 w-8 text-white drop-shadow-lg" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-foreground text-lg">💇 Haircut with Emma Davis</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="font-medium">Friday, 6:30 PM</span>
                  </div>
                  <Badge className="mt-2 bg-green-500/20 text-green-600 border-green-500/30">Confirmed</Badge>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  className="flex-1 shadow-md" 
                  size="sm" 
                  onClick={() => navigate("/user/appointment-detail")}
                >
                  View Details
                </Button>
                <Button className="flex-1 shadow-md" size="sm" variant="outline">
                  Reschedule
                </Button>
                <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                  Cancel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gallery Preview - Enhanced */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Our Gallery</h3>
            <Button variant="link" size="sm" className="text-primary font-semibold px-0" onClick={handleServiceClick}>
              View All →
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-4 pb-2">
              {[
                '1521590832167-7bcbfaa6381f',
                '1560066984-138dadb4c035',
                '1562322140-8baeececf3df',
                '1633681926-a233ae6d6cfe',
                '1595476108010-7ad711ff5c8e',
                '1522337660859-02fbefca4702',
                '1519699047591-1282a7bfc7d9',
                '1605497788044-5a32c7078486',
                '1527799820374-dcf8d9d4a388'
              ].map((photo, idx) => (
                <div
                  key={idx}
                  className="relative h-48 w-48 flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300"
                  onClick={handleServiceClick}
                >
                  <img
                    src={`https://images.unsplash.com/photo-${photo}?w=400&h=400&fit=crop`}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-semibold drop-shadow-lg">View More</p>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Customer Reviews - Enhanced */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-foreground">Customer Reviews</h3>
            <Button variant="link" size="sm" className="text-primary font-semibold px-0">
              View All →
            </Button>
          </div>

          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-5 pb-2">
              {[
                { name: "Alex Johnson", rating: 5, review: "Amazing service! The stylist really understood what I wanted. Professional and friendly staff.", time: "2 days ago", img: '1535713875002-d1d0cf377fde' },
                { name: "Sarah Williams", rating: 5, review: "Best haircut I've had in years. Highly recommend this salon!", time: "1 week ago", img: '1494790108377-be9c29b29330' },
                { name: "Mike Brown", rating: 4, review: "Great atmosphere and professional staff. Will definitely come again.", time: "2 weeks ago", img: '1507003211169-0a1dd7228f2d' },
                { name: "Emma Davis", rating: 5, review: "The facial treatment was incredible. My skin feels so refreshed and glowing!", time: "3 weeks ago", img: '1438761681033-6461ffad8d80' },
                { name: "David Wilson", rating: 5, review: "Excellent color treatment. The results exceeded my expectations!", time: "1 month ago", img: '1500648767791-00a36c92f2cb' },
              ].map((review, idx) => (
                <Card key={idx} className="relative flex-shrink-0 w-96 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="relative p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <Avatar className="h-14 w-14 border-2 border-primary/30 flex-shrink-0 shadow-md">
                          <AvatarImage src={`https://images.unsplash.com/photo-${review.img}?w=100`} />
                          <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <p className="font-bold text-foreground truncate">{review.name}</p>
                          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{review.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-primary fill-primary drop-shadow-sm" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{review.review}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Salon Info - Enhanced */}
        <Card className="relative bg-card/50 backdrop-blur-sm border-border overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />
          <CardContent className="relative p-7 space-y-5">
            <h3 className="text-2xl font-bold text-foreground">Salon Info & Contact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Elite Barber Studio is your premier destination for luxury grooming and styling. With over 10 years of experience, 
              our expert stylists are dedicated to providing exceptional service in a comfortable, modern environment.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground mb-1">Opening Hours</p>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground mb-1">📍 Address</p>
                  <p className="text-sm text-muted-foreground">Elite Barber, Gulberg III, Lahore</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground mb-1">☎️ Phone</p>
                  <p className="text-sm text-muted-foreground">+92 300 1234567</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <Button className="flex-1 shadow-md" onClick={handleServiceClick}>
                View Details
              </Button>
              <Button className="flex-1 shadow-md" variant="outline">
                Get Directions
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Action Button - Enhanced */}
      <Button
        size="lg"
        className="fixed bottom-24 right-6 z-40 h-16 px-8 rounded-full shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-gold)] bg-gradient-to-r from-primary to-amber-400 hover:from-primary/90 hover:to-amber-400/90 gap-3 hover:scale-105 transition-all duration-300"
        onClick={handleServiceClick}
      >
        <Plus className="h-6 w-6 text-white" />
        <span className="font-bold text-lg text-white">Book Now</span>
      </Button>

      {/* Video Player Dialog - Shorts style with vertical scroll */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-md w-full p-0 bg-black border-0">
          <DialogTitle className="sr-only">{selectedVideo?.name}</DialogTitle>
          <div className="relative h-[80vh] bg-black">
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 z-50 h-8 w-8 rounded-full bg-black/60 hover:bg-black/80 text-white"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-4 w-4" />
            </Button>

            {selectedVideo && (
              <ScrollArea className="h-full w-full snap-y snap-mandatory overflow-y-auto">
                <div className="flex flex-col">
                  {storyList.map((story, index) => (
                    <div
                      key={story.id}
                      className="relative flex items-center justify-center h-[80vh] snap-start"
                    >
                      {/* Vertical video */}
                      <video
                        key={story.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-auto max-w-full object-cover rounded-3xl shadow-2xl"
                      >
                        <source src={story.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Right-side actions */}
                      <div className="absolute right-3 top-1/3 -translate-y-1/2 flex flex-col items-center gap-4 text-white">
                        <button className="flex flex-col items-center gap-1">
                          <Heart className="h-6 w-6 drop-shadow" />
                          <span className="text-[11px]">9.7k</span>
                        </button>
                        <button className="flex flex-col items-center gap-1">
                          <MessageCircle className="h-6 w-6 drop-shadow" />
                          <span className="text-[11px]">112</span>
                        </button>
                        <button className="flex flex-col items-center gap-1">
                          <Share2 className="h-6 w-6 drop-shadow" />
                          <span className="text-[11px]">Share</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMoveStory(index, "up")}
                          disabled={index === 0}
                          className="mt-2 flex flex-col items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
                            <ChevronUp className="h-4 w-4" />
                          </div>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleMoveStory(index, "down")}
                          disabled={index === storyList.length - 1}
                          className="flex flex-col items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
                            <ChevronDown className="h-4 w-4" />
                          </div>
                        </button>
                      </div>

                      {/* Bottom overlay: creator + title */}
                      <div className="absolute left-0 right-0 bottom-0 px-4 pb-4 pt-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border border-white/30">
                              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80" />
                              <AvatarFallback>EB</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                              <span className="text-xs font-semibold text-white">@elitebarber</span>
                              <span className="text-[11px] text-white/70">Latest updates</span>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            className="h-7 rounded-full bg-white text-black text-xs px-3 py-0 font-semibold shadow-md"
                          >
                            Subscribe
                          </Button>
                        </div>
                        <p className="text-xs text-white leading-snug line-clamp-2">
                          {story.name} · Discover quick tips, salon moments, and behind-the-scenes from Elite Barber.
                        </p>
                        <p className="mt-1 text-[11px] text-white/70">#elitebarber #shorts #grooming</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserHome;
