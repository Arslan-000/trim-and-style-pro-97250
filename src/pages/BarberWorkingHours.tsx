import { Clock, Calendar as CalendarIcon, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const weekDays = [
  { id: "monday", name: "Monday", open: true, hours: "9:00 AM - 7:00 PM" },
  { id: "tuesday", name: "Tuesday", open: true, hours: "9:00 AM - 7:00 PM" },
  { id: "wednesday", name: "Wednesday", open: true, hours: "9:00 AM - 7:00 PM" },
  { id: "thursday", name: "Thursday", open: true, hours: "9:00 AM - 7:00 PM" },
  { id: "friday", name: "Friday", open: true, hours: "9:00 AM - 8:00 PM" },
  { id: "saturday", name: "Saturday", open: true, hours: "10:00 AM - 6:00 PM" },
  { id: "sunday", name: "Sunday", open: false, hours: "Closed" },
];

const holidays = [
  { date: "Dec 25, 2024", reason: "Christmas" },
  { date: "Jan 1, 2025", reason: "New Year" },
];

const BarberWorkingHours = () => {
  const [editHoursOpen, setEditHoursOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("");
  const [addHolidayOpen, setAddHolidayOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Working Hours
          </h1>
          <p className="text-muted-foreground">Manage your salon's operating hours</p>
        </div>

        {/* Salon Status */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-foreground">Salon Status</h3>
                <p className="text-sm text-muted-foreground">Currently accepting appointments</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  Open
                </Badge>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Schedule */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Weekly Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {weekDays.map((day) => (
              <div
                key={day.id}
                className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Switch defaultChecked={day.open} />
                  <div>
                    <p className="font-semibold text-foreground">{day.name}</p>
                    <p className="text-sm text-muted-foreground">{day.hours}</p>
                  </div>
                </div>
                <Dialog open={editHoursOpen} onOpenChange={setEditHoursOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => setSelectedDay(day.name)}
                    >
                      Edit Hours
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Edit Hours - {selectedDay}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="opening-time">Opening Time</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="opening-time" type="time" defaultValue="09:00" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="closing-time">Closing Time</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input id="closing-time" type="time" defaultValue="19:00" className="pl-10" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1" onClick={() => setEditHoursOpen(false)}>Cancel</Button>
                      <Button className="flex-1 bg-primary hover:bg-primary/90">Save Hours</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Holidays & Closed Days */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Holidays & Closed Days
            </CardTitle>
            <Dialog open={addHolidayOpen} onOpenChange={setAddHolidayOpen}>
              <DialogTrigger asChild>
                <Button size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4" />
                  Add Holiday
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Add Holiday / Closed Day</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="holiday-date">Date</Label>
                    <div className="relative">
                      <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="holiday-date" type="date" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="holiday-reason">Reason</Label>
                    <Textarea id="holiday-reason" placeholder="Christmas, New Year, Special Event, etc." rows={3} />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1" onClick={() => setAddHolidayOpen(false)}>Cancel</Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90">Add Holiday</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent className="space-y-4">
            {holidays.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No holidays scheduled
              </p>
            ) : (
              holidays.map((holiday, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                >
                  <div>
                    <p className="font-semibold text-foreground">{holiday.date}</p>
                    <p className="text-sm text-muted-foreground">{holiday.reason}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                    Remove
                  </Button>
                </div>
              ))
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BarberWorkingHours;