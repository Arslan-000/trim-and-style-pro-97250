import { ArrowLeft, MapPin, Calendar, Clock, User, Phone, MessageCircle, Navigation, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const AppointmentDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-lg bg-card/95">
        <div className="flex items-center gap-4 px-6 py-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-primary/10"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Appointment Details</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Status Badge */}
        <div className="flex justify-center">
          <Badge className="bg-primary/20 text-primary border-primary/30 px-6 py-2 text-base font-semibold">
            <Check className="h-4 w-4 mr-2" />
            Confirmed
          </Badge>
        </div>

        {/* Appointment Info Card */}
        <Card className="bg-card border-border shadow-lg">
          <CardContent className="p-6 space-y-6">
            {/* Date & Time */}
            <div className="flex items-center justify-between pb-4 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="text-lg font-semibold text-foreground">Dec 23, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="text-lg font-semibold text-foreground">10:00 AM</p>
                </div>
              </div>
            </div>

            {/* Salon Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Salon Information</h3>
              <div className="flex items-start gap-4">
                <div className="h-20 w-20 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=200"
                    alt="Elite Barber"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-1">Elite Barber</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-primary fill-primary" />
                      <span className="text-sm font-semibold text-foreground">4.8</span>
                    </div>
                    <span className="text-sm text-muted-foreground">(3,279 reviews)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Gulberg III, Lahore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialist Info */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground">Your Specialist</h3>
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16 border-2 border-primary/30">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-lg font-bold text-foreground">Nathan Alexander</p>
                  <p className="text-sm text-muted-foreground">Master Barber</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 text-primary fill-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-3 pt-4 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground">Services</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <span className="text-foreground">Haircut & Styling</span>
                  <span className="font-semibold text-foreground">$12.00</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/30">
                  <span className="text-foreground">Beard Trim</span>
                  <span className="font-semibold text-foreground">$4.00</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span className="text-lg font-semibold text-foreground">Total</span>
                <span className="text-2xl font-bold text-primary">$16.00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <Button variant="outline" className="flex-col h-auto py-4 gap-2 border-primary/30 hover:bg-primary/10">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-xs">Call</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-4 gap-2 border-primary/30 hover:bg-primary/10">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span className="text-xs">Message</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-4 gap-2 border-primary/30 hover:bg-primary/10">
            <Navigation className="h-5 w-5 text-primary" />
            <span className="text-xs">Direction</span>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-background font-semibold">
            Reschedule Appointment
          </Button>
          <Button variant="outline" className="w-full h-12 border-destructive/50 text-destructive hover:bg-destructive/10">
            Cancel Appointment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetail;
