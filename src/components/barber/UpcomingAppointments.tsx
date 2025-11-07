import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const appointments = [
  { id: 1, client: "Michael Johnson", service: "Haircut & Beard", time: "10:00 AM", status: "confirmed" },
  { id: 2, client: "David Williams", service: "Premium Haircut", time: "11:30 AM", status: "pending" },
  { id: 3, client: "James Brown", service: "Beard Trim", time: "02:00 PM", status: "confirmed" },
  { id: 4, client: "Robert Davis", service: "Full Service", time: "03:30 PM", status: "confirmed" },
];

export const UpcomingAppointments = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-secondary border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Today's Appointments
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {appointments.map((apt) => (
            <div
              key={apt.id}
              className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(251,191,36,0.1)]"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="font-semibold text-foreground">{apt.client}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{apt.service}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {apt.time}
                  </div>
                  <Badge
                    variant={apt.status === "confirmed" ? "default" : "secondary"}
                    className={apt.status === "confirmed" ? "bg-primary/20 text-primary border-primary/30" : ""}
                  >
                    {apt.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
