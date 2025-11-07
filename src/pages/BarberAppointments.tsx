import { Calendar, Clock, DollarSign, Filter, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const appointments = {
  upcoming: [
    { id: 1, client: "Michael Johnson", service: "Haircut & Beard", time: "10:00 AM", date: "Today", price: "$45", status: "Confirmed", paid: true },
    { id: 2, client: "David Williams", service: "Premium Haircut", time: "11:30 AM", date: "Today", price: "$35", status: "Pending", paid: false },
    { id: 3, client: "James Brown", service: "Beard Trim", time: "02:00 PM", date: "Tomorrow", price: "$20", status: "Confirmed", paid: true },
  ],
  completed: [
    { id: 4, client: "Robert Davis", service: "Full Service", time: "09:00 AM", date: "Yesterday", price: "$65", status: "Completed", paid: true },
    { id: 5, client: "Thomas Wilson", service: "Kids Haircut", time: "03:00 PM", date: "Dec 20", price: "$25", status: "Completed", paid: true },
  ],
  canceled: [
    { id: 6, client: "John Smith", service: "Haircut", time: "04:00 PM", date: "Dec 19", price: "$30", status: "Canceled", paid: false },
  ],
};

const AppointmentCard = ({ appointment }: { appointment: typeof appointments.upcoming[0] }) => (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">{appointment.client}</h3>
            <p className="text-sm text-muted-foreground">{appointment.service}</p>
          </div>
          <Badge
            className={
              appointment.status === "Confirmed"
                ? "bg-primary/20 text-primary border-primary/30"
                : appointment.status === "Completed"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : appointment.status === "Pending"
                ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                : "bg-destructive/20 text-destructive border-destructive/30"
            }
          >
            {appointment.status}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {appointment.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {appointment.time}
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-4 w-4" />
            {appointment.price}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant={appointment.paid ? "default" : "secondary"} className={appointment.paid ? "bg-green-500/20 text-green-400 border-green-500/30" : ""}>
            {appointment.paid ? "Paid" : "Unpaid"}
          </Badge>
        </div>

        {appointment.status === "Pending" && (
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="bg-primary hover:bg-primary/90">Confirm</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
);

const BarberAppointments = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Appointments
          </h1>
          <p className="text-muted-foreground">Manage all your salon appointments</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by client name..." className="pl-10 bg-card border-border" />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter by Date
          </Button>
        </div>

        <Tabs defaultValue="upcoming" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="canceled">Canceled</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {appointments.upcoming.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {appointments.completed.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="canceled" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {appointments.canceled.map((apt) => (
                <AppointmentCard key={apt.id} appointment={apt} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BarberAppointments;
