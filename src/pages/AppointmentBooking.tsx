import { useState } from "react";
import { ArrowLeft, Check, Calendar, Clock, User, CreditCard, Download, Home, Sparkles, MapPin, ChevronDown, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("23");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedSpecialist, setSelectedSpecialist] = useState("Nathan Alexander");
  const [selectedBranch, setSelectedBranch] = useState("Gulberg III");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showSuccess, setShowSuccess] = useState(false);

  const branches = [
    { value: "gulberg-3", label: "Gulberg III, Lahore" },
    { value: "dha", label: "DHA Phase 5, Lahore" },
    { value: "johar-town", label: "Johar Town, Lahore" },
    { value: "model-town", label: "Model Town, Lahore" },
  ];

  const dates = [
    { day: "Mon", date: "20" },
    { day: "Tue", date: "21" },
    { day: "Wed", date: "22" },
    { day: "Thu", date: "23" },
    { day: "Fri", date: "24" },
    { day: "Sat", date: "25" },
    { day: "Sun", date: "26" },
  ];

  const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM"];

  const specialists = [
    {
      name: "Nathan Alexander",
      role: "Master Barber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      rating: 4.9,
      experience: "8 years",
      specialty: "Hair Styling",
    },
    {
      name: "Marcus Johnson",
      role: "Senior Stylist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
      rating: 5.0,
      experience: "10 years",
      specialty: "Color Expert",
    },
    {
      name: "David Chen",
      role: "Beard Specialist",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
      rating: 4.8,
      experience: "6 years",
      specialty: "Beard Care",
    },
  ];

  const handleContinueStep1 = () => {
    setCurrentStep(2);
  };

  const handleContinueStep2 = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setCurrentStep(3);
      setShowSuccess(false);
    }, 1500);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Loading Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm animate-fade-in">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            <Sparkles className="absolute inset-0 m-auto h-12 w-12 text-primary animate-pulse" />
          </div>
        </div>
      )}

      <div className="relative z-20 max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBack}
            className="relative z-30 text-foreground hover:bg-card hover:text-primary transition-all cursor-pointer"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">
            {currentStep === 1 && "Book Appointment"}
            {currentStep === 2 && "Payment Method"}
            {currentStep === 3 && "Confirmation"}
          </h1>
          <div className="w-10" />
        </div>

        {/* Step 1: Book Appointment */}
        {currentStep === 1 && (
          <div className="space-y-8 animate-fade-in">
            {/* Select Branch */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Select Branch
              </h2>
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger className="w-full h-14 text-base border-border bg-card hover:bg-card/80 transition-all">
                  <SelectValue placeholder="Choose a branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch.value} value={branch.value} className="text-base py-3">
                      {branch.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Select Date */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Select Date
              </h2>
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {dates.map((d) => (
                  <button
                    key={d.date}
                    onClick={() => setSelectedDate(d.date)}
                    className={`flex-shrink-0 flex flex-col items-center gap-2 px-6 py-4 rounded-2xl transition-all duration-300 ${
                      selectedDate === d.date
                        ? "bg-gradient-to-br from-primary via-amber-400 to-primary text-background shadow-[0_8px_25px_rgba(255,213,79,0.4)] scale-105"
                        : "bg-card text-foreground hover:bg-card/80 hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    <span className="text-sm font-medium">{d.day}</span>
                    <span className="text-2xl font-bold">{d.date}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Select Time */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Select Hours
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`px-4 py-4 rounded-xl font-semibold transition-all duration-300 ${
                      selectedTime === time
                        ? "bg-gradient-to-br from-primary via-amber-400 to-primary text-background shadow-[0_6px_20px_rgba(255,213,79,0.3)] scale-105"
                        : "bg-card text-foreground hover:bg-card/80 hover:scale-105"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Select Specialist */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Select Specialist
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {specialists.map((specialist) => (
                  <button
                    key={specialist.name}
                    onClick={() => setSelectedSpecialist(specialist.name)}
                    className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      selectedSpecialist === specialist.name
                        ? "ring-2 ring-primary shadow-[0_8px_30px_rgba(255,213,79,0.3)] scale-[1.02]"
                        : "ring-1 ring-border hover:ring-primary/50 hover:shadow-lg hover:scale-[1.01]"
                    }`}
                  >
                    <Card className="border-0 bg-gradient-to-br from-card via-card to-muted/20">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 p-4">
                          {/* Avatar Section */}
                          <div className="relative flex-shrink-0">
                            <Avatar className="h-20 w-20 ring-2 ring-background shadow-lg">
                              <AvatarImage src={specialist.image} className="object-cover" />
                              <AvatarFallback className="text-lg font-bold">{specialist.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            {selectedSpecialist === specialist.name && (
                              <div className="absolute -top-1 -right-1 h-7 w-7 bg-gradient-to-br from-primary to-amber-400 rounded-full flex items-center justify-center shadow-lg animate-scale-in">
                                <Check className="h-4 w-4 text-white" />
                              </div>
                            )}
                            <div className="absolute -bottom-1 -right-1 h-6 w-6 bg-green-500 rounded-full border-2 border-card shadow-md" />
                          </div>

                          {/* Info Section */}
                          <div className="flex-1 text-left min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-1">
                              <h3 className="font-bold text-lg text-foreground truncate">{specialist.name}</h3>
                              <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-full flex-shrink-0">
                                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                                <span className="text-sm font-bold text-foreground">{specialist.rating}</span>
                              </div>
                            </div>
                            <p className="text-sm text-primary font-medium mb-2">{specialist.role}</p>
                            
                            <div className="flex items-center gap-3 flex-wrap">
                              <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                <Award className="h-3.5 w-3.5 text-primary" />
                                <span className="text-xs font-medium text-foreground">{specialist.experience}</span>
                              </div>
                              <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-lg">
                                <Sparkles className="h-3.5 w-3.5 text-primary" />
                                <span className="text-xs font-medium text-foreground">{specialist.specialty}</span>
                              </div>
                            </div>
                          </div>

                          {/* Selection Indicator */}
                          <div className={`flex-shrink-0 transition-all duration-300 ${
                            selectedSpecialist === specialist.name 
                              ? "opacity-100 scale-100" 
                              : "opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100"
                          }`}>
                            <ChevronDown className="h-6 w-6 text-primary rotate-[-90deg]" />
                          </div>
                        </div>

                        {/* Bottom gradient accent */}
                        <div className={`h-1 bg-gradient-to-r from-primary via-amber-400 to-primary transition-all duration-300 ${
                          selectedSpecialist === specialist.name ? "opacity-100" : "opacity-0"
                        }`} />
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <Button
              onClick={handleContinueStep1}
              className="w-full h-14 bg-gradient-to-r from-primary via-amber-400 to-primary hover:from-primary/90 hover:via-amber-400/90 hover:to-primary/90 text-background font-bold text-lg rounded-xl shadow-[0_8px_30px_rgba(255,213,79,0.4)] hover:shadow-[0_10px_40px_rgba(255,213,79,0.6)] transition-all hover:scale-105"
            >
              Continue to Payment
            </Button>
          </div>
        )}

        {/* Step 2: Payment Method */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
              {[
                { id: "paypal", label: "PayPal", icon: "💳" },
                { id: "google", label: "Google Pay", icon: "G" },
                { id: "apple", label: "Apple Pay", icon: "" },
                { id: "card", label: "Credit/Debit Card", detail: "**** **** **** 4679" },
              ].map((method) => (
                <Card key={method.id} className={`overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                  paymentMethod === method.id 
                    ? "border-primary shadow-[0_6px_20px_rgba(255,213,79,0.3)]" 
                    : "border-border hover:border-primary/50 hover:shadow-lg"
                }`}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <RadioGroupItem
                        value={method.id}
                        id={method.id}
                        className="border-2 border-muted-foreground data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                      />
                      <Label
                        htmlFor={method.id}
                        className="flex-1 flex items-center gap-3 cursor-pointer"
                      >
                        <div className="w-14 h-14 rounded-xl bg-secondary/30 flex items-center justify-center text-2xl border border-border">
                          {method.icon || <CreditCard className="h-6 w-6 text-primary" />}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-foreground">{method.label}</p>
                          {method.detail && (
                            <p className="text-sm text-muted-foreground">{method.detail}</p>
                          )}
                        </div>
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </RadioGroup>

            <button className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">+</span>
              Add New Card
            </button>

            <Button
              onClick={handleContinueStep2}
              className="w-full h-14 bg-gradient-to-r from-primary via-amber-400 to-primary hover:from-primary/90 hover:via-amber-400/90 hover:to-primary/90 text-background font-bold text-lg rounded-xl shadow-[0_8px_30px_rgba(255,213,79,0.4)] hover:shadow-[0_10px_40px_rgba(255,213,79,0.6)] transition-all hover:scale-105"
            >
              Confirm & Pay
            </Button>
          </div>
        )}

        {/* Step 3: Success Confirmation */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-fade-in text-center">
            {/* Success Icon with Animation */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center animate-scale-in">
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-[0_0_40px_rgba(255,213,79,0.5)]">
                    <Check className="h-12 w-12 text-background stroke-[3]" />
                  </div>
                </div>
                {/* Confetti Effect */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-4 -right-6 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Payment Successful!</h2>
              <p className="text-muted-foreground">Your appointment has been successfully booked.</p>
            </div>

            {/* Booking Summary Card */}
            <Card className="bg-card border-border text-left">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-primary mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Barber</span>
                    <span className="font-semibold text-foreground">Elite Barber</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Specialist</span>
                    <span className="font-semibold text-foreground">{selectedSpecialist}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-semibold text-foreground">Dec {selectedDate}, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-semibold text-foreground">{selectedTime}</span>
                  </div>
                  <div className="h-px bg-border my-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">Total</span>
                    <span className="text-2xl font-bold text-primary">$16.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                className="w-full h-14 bg-gradient-to-r from-primary via-amber-400 to-primary hover:from-primary/90 hover:via-amber-400/90 hover:to-primary/90 text-background font-bold text-lg rounded-xl shadow-[0_8px_30px_rgba(255,213,79,0.4)] transition-all"
              >
                <Download className="h-5 w-5 mr-2" />
                Download E-Receipt
              </Button>
              <Button
                onClick={() => navigate("/user")}
                variant="outline"
                className="w-full h-14 border-2 border-primary/30 text-primary hover:bg-primary/10 hover:text-primary font-bold text-lg rounded-xl transition-all"
              >
                <Home className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentBooking;
