import { Plus, Phone, DollarSign, Calendar, Search, User, Mail, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const staffMembers = [
  { 
    id: 1, 
    name: "John Martinez", 
    role: "Senior Barber", 
    phone: "+1 234 567 8901",
    salary: "$3,500",
    status: "Paid",
    joinDate: "Jan 2023",
    avatar: "/placeholder.svg"
  },
  { 
    id: 2, 
    name: "Alex Johnson", 
    role: "Barber", 
    phone: "+1 234 567 8902",
    salary: "$2,800",
    status: "Unpaid",
    joinDate: "Mar 2023",
    avatar: "/placeholder.svg"
  },
  { 
    id: 3, 
    name: "Mike Wilson", 
    role: "Receptionist", 
    phone: "+1 234 567 8903",
    salary: "$2,000",
    status: "Paid",
    joinDate: "Jun 2023",
    avatar: "/placeholder.svg"
  },
];

const StaffCard = ({ staff }: { staff: typeof staffMembers[0] }) => (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={staff.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {staff.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-1">
            <h3 className="text-lg font-bold text-foreground">{staff.name}</h3>
            <p className="text-sm text-muted-foreground">{staff.role}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Joined {staff.joinDate}
            </div>
          </div>

          <Badge
            className={
              staff.status === "Paid"
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-amber-500/20 text-amber-400 border-amber-500/30"
            }
          >
            {staff.status}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Phone className="h-4 w-4" />
            {staff.phone}
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold">
            <DollarSign className="h-4 w-4" />
            {staff.salary}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
            View Details
          </Button>
          {staff.status === "Unpaid" && (
            <Button size="sm" variant="outline" className="flex-1">
              Mark as Paid
            </Button>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

const BarberStaff = () => {
  const [addStaffOpen, setAddStaffOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Staff Management
          </h1>
          <p className="text-muted-foreground">Manage your salon team</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search staff..." className="pl-10 bg-card border-border" />
          </div>
          <Dialog open={addStaffOpen} onOpenChange={setAddStaffOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Staff Member
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Staff Member</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="John Doe" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="role" placeholder="Senior Barber" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" placeholder="+1 234 567 8900" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="john@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salary">Monthly Salary</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="salary" placeholder="3500" type="number" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="joinDate">Join Date</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="joinDate" type="date" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setAddStaffOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Add Staff</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {staffMembers.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberStaff;
