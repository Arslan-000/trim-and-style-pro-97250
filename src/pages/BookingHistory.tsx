import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, RefreshCw, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const bookings = [
  {
    id: "BK-1023",
    service: "Classic Haircut",
    date: "Oct 12, 2025",
    time: "3:30 PM",
    location: "Elite Barber Studio, Mumbai",
    status: "Completed",
  },
  {
    id: "BK-0977",
    service: "Beard Trim",
    date: "Sep 28, 2025",
    time: "6:00 PM",
    location: "Elite Barber Studio, Mumbai",
    status: "Completed",
  },
  {
    id: "BK-0931",
    service: "Spa Package",
    date: "Sep 10, 2025",
    time: "2:00 PM",
    location: "Elite Barber Studio, Pune",
    status: "Cancelled",
  },
];

const BookingHistory = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-6 py-6 space-y-6">
        {/* Header with Back Button */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Booking History</h1>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Booking History</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{b.service}</p>
                    <div className="mt-2 grid gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" /> {b.date}</div>
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {b.time}</div>
                      <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {b.location}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant={b.status === "Completed" ? "secondary" : "outline"}>{b.status}</Badge>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <RefreshCw className="h-4 w-4" /> Rebook
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingHistory;
