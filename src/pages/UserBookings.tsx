import { Calendar, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const UserBookings = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        <h1 className="text-2xl font-bold text-foreground">My Bookings</h1>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4 mt-6">
            {[1, 2].map((booking) => (
              <Card key={booking} className="bg-card border-border">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground">Elite Barber Studio</CardTitle>
                    <Badge className="bg-primary text-primary-foreground">Confirmed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Monday, Dec {booking + 10}, 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-foreground">{booking === 1 ? '10:00 AM' : '2:30 PM'}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-foreground">123 Main St, Downtown</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Men's Haircut</Badge>
                      <Badge variant="outline">Beard Trim</Badge>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      <Phone className="h-4 w-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1 text-destructive hover:text-destructive">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="past" className="space-y-4 mt-6">
            {[1, 2, 3].map((booking) => (
              <Card key={booking} className="bg-card border-border opacity-75">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground">Elite Barber Studio</CardTitle>
                    <Badge variant="outline">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-foreground">Nov {booking + 5}, 2024</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-foreground">3:00 PM</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Haircut</Badge>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Book Again
                  </Button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserBookings;
