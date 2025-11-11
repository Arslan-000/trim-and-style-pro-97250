import { Calendar, Clock, MapPin, ToggleLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBookings = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed" | "cancelled">("upcoming");

  const upcomingBookings = [
    {
      id: 1,
      date: "Dec 22, 2024 - 10:00 AM",
      salon: "Lighthouse Barbers",
      address: "5940 Hudson Plaza",
      services: ["Staff Haircut", "Trim Shaving", "Aloe Vera Cream Hair Mask"],
      status: "Confirmed",
      image: "1560066984-138dadb4c035",
      reminder: true
    },
    {
      id: 2,
      date: "Nov 20, 2024 - 13:00 PM",
      salon: "Quinostura Salon",
      address: "7812 Pinnsylvania Avenue",
      services: ["Undercut Haircut", "Regular Shaving", "Serum Hair Mask"],
      status: "Confirmed",
      image: "1503951914381-dfad4bba012d",
      reminder: true
    }
  ];

  const completedBookings = [
    {
      id: 3,
      date: "Nov 20, 2024 - 15:00 PM",
      salon: "Modern Men Barber",
      address: "456 Burterfield Place",
      services: ["Undercut Haircut", "Regular Shaving"],
      status: "Completed",
      image: "1622287162716-f54bebf5f5d0",
      reminder: false
    },
    {
      id: 4,
      date: "Dec 08, 2024 - 15:00 PM",
      salon: "Barborella Inova",
      address: "6993 Meadow Valley Terrace",
      services: ["Staff Haircut", "Trim Shaving", "After tight, Serum Hair Mask"],
      status: "Completed",
      image: "1585747860715-adbbc2cb6e43",
      reminder: false
    },
    {
      id: 5,
      date: "Oct 18, 2024 - 11:00 AM",
      salon: "Wicked Barber",
      address: "4002 Ardent Alley",
      services: ["Staff Haircut", "Trim Shaving", "Aloe Vera Mask"],
      status: "Completed",
      image: "1503951914381-dfad4bba012d",
      reminder: false
    }
  ];

  const cancelledBookings = [
    {
      id: 6,
      date: "Dec 23, 2024 - 10:00 AM",
      salon: "Barborella Inova",
      address: "5940 Meadow Valley Terrace",
      services: ["Staff Haircut", "Trim Shaving", "After tight, Serum Hair Mask"],
      status: "Cancelled",
      image: "1560066984-138dadb4c035",
      reminder: false
    }
  ];

  const getCurrentBookings = () => {
    switch (activeTab) {
      case "upcoming":
        return upcomingBookings;
      case "completed":
        return completedBookings;
      case "cancelled":
        return cancelledBookings;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">My Booking</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1"/>
                <circle cx="12" cy="5" r="1"/>
                <circle cx="12" cy="19" r="1"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-secondary/30 rounded-full">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
              activeTab === "upcoming"
                ? "bg-primary text-background shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
              activeTab === "completed"
                ? "bg-primary text-background shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab("cancelled")}
            className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all ${
              activeTab === "cancelled"
                ? "bg-primary text-background shadow-md"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Cancelled
          </button>
        </div>

        {/* Booking Cards */}
        <div className="space-y-4">
          {getCurrentBookings().map((booking) => (
            <Card key={booking.id} className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="flex gap-4 p-4">
                  {/* Salon Image */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={`https://images.unsplash.com/photo-${booking.image}?w=200&h=200&fit=crop`}
                      alt={booking.salon}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-foreground">{booking.salon}</h3>
                      {activeTab === "upcoming" && (
                        <Badge className="bg-green-500/20 text-green-600 hover:bg-green-500/30 border-0 text-xs px-2 py-0.5">
                          {booking.status}
                        </Badge>
                      )}
                      {activeTab === "cancelled" && (
                        <Badge className="bg-red-500/20 text-red-600 hover:bg-red-500/30 border-0 text-xs px-2 py-0.5">
                          {booking.status}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{booking.address}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {booking.services.map((service, idx) => (
                        <span key={idx} className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date and Actions */}
                <div className="px-4 pb-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{booking.date}</span>
                    </div>
                    {booking.reminder && activeTab === "upcoming" && (
                      <div className="flex items-center gap-2 text-primary">
                        <ToggleLeft className="h-4 w-4" />
                        <span className="text-xs">Remind me</span>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {activeTab === "upcoming" && (
                      <>
                        <Button
                          variant="outline"
                          className="flex-1 h-9 border-primary/30 text-primary hover:bg-primary/10"
                        >
                          Cancel Booking
                        </Button>
                        <Button
                          onClick={() => navigate("/user/book-appointment")}
                          className="flex-1 h-9 bg-primary hover:bg-primary/90 text-background"
                        >
                          View E-Receipt
                        </Button>
                      </>
                    )}
                    {activeTab === "completed" && (
                      <>
                        <Button
                          variant="outline"
                          className="flex-1 h-9 border-primary/30 text-primary hover:bg-primary/10"
                        >
                          Cancel Booking
                        </Button>
                        <Button
                          className="flex-1 h-9 bg-primary hover:bg-primary/90 text-background"
                        >
                          View E-Receipt
                        </Button>
                      </>
                    )}
                    {activeTab === "cancelled" && (
                      <>
                        <Button
                          onClick={() => navigate("/user/book-appointment")}
                          variant="outline"
                          className="flex-1 h-9 border-primary/30 text-primary hover:bg-primary/10"
                        >
                          Cancel Booking
                        </Button>
                        <Button
                          className="flex-1 h-9 bg-primary hover:bg-primary/90 text-background"
                        >
                          View E-Receipt
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
