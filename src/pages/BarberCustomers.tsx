import { Search, Phone, Mail, Star, Calendar, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const customers = [
  {
    id: 1,
    name: "Michael Anderson",
    email: "michael.a@email.com",
    phone: "+1 234 567 8901",
    avatar: "/placeholder.svg",
    totalVisits: 24,
    lastVisit: "Dec 15, 2024",
    totalSpent: "$1,240",
    loyaltyPoints: 240,
    tier: "Gold",
    appointments: [
      { date: "Dec 15, 2024", service: "Premium Haircut", amount: "$55" },
      { date: "Nov 20, 2024", service: "Haircut + Beard Trim", amount: "$65" },
      { date: "Oct 28, 2024", service: "Premium Haircut", amount: "$55" },
    ],
  },
  {
    id: 2,
    name: "David Wilson",
    email: "david.w@email.com",
    phone: "+1 234 567 8902",
    avatar: "/placeholder.svg",
    totalVisits: 15,
    lastVisit: "Dec 18, 2024",
    totalSpent: "$780",
    loyaltyPoints: 156,
    tier: "Silver",
    appointments: [
      { date: "Dec 18, 2024", service: "Haircut", amount: "$45" },
      { date: "Nov 25, 2024", service: "Haircut + Shave", amount: "$60" },
    ],
  },
  {
    id: 3,
    name: "James Brown",
    email: "james.b@email.com",
    phone: "+1 234 567 8903",
    avatar: "/placeholder.svg",
    totalVisits: 8,
    lastVisit: "Dec 10, 2024",
    totalSpent: "$360",
    loyaltyPoints: 72,
    tier: "Bronze",
    appointments: [
      { date: "Dec 10, 2024", service: "Haircut", amount: "$45" },
      { date: "Oct 15, 2024", service: "Haircut", amount: "$45" },
    ],
  },
];

const getTierColor = (tier: string) => {
  switch (tier) {
    case "Gold":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    case "Silver":
      return "bg-gray-400/20 text-gray-300 border-gray-400/30";
    case "Bronze":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";
    default:
      return "bg-primary/20 text-primary border-primary/30";
  }
};

const CustomerCard = ({ customer }: { customer: typeof customers[0] }) => (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16 border-2 border-primary/20">
            <AvatarImage src={customer.avatar} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {customer.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground">{customer.name}</h3>
                <p className="text-sm text-muted-foreground">{customer.email}</p>
              </div>
              <Badge className={getTierColor(customer.tier)}>
                {customer.tier}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                {customer.phone}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 rounded-lg bg-primary/5 border border-primary/10">
            <p className="text-2xl font-bold text-primary">{customer.totalVisits}</p>
            <p className="text-xs text-muted-foreground">Total Visits</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-2xl font-bold text-green-400">{customer.totalSpent}</p>
            <p className="text-xs text-muted-foreground">Total Spent</p>
          </div>
          <div className="text-center p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
            <p className="text-2xl font-bold text-amber-400">{customer.loyaltyPoints}</p>
            <p className="text-xs text-muted-foreground">Points</p>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-foreground">Recent Appointments</h4>
          <div className="space-y-2">
            {customer.appointments.slice(0, 2).map((apt, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 text-sm"
              >
                <div>
                  <p className="font-medium text-foreground">{apt.service}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {apt.date}
                  </p>
                </div>
                <span className="font-semibold text-primary">{apt.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
            View Full History
          </Button>
          <Button size="sm" variant="outline" className="flex-1 gap-2">
            <Gift className="h-4 w-4" />
            Send Offer
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const BarberCustomers = () => {
  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Customer Management
          </h1>
          <p className="text-muted-foreground">View and manage your clients</p>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-gradient-to-br from-card to-secondary border-border">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-primary">{customers.length}</p>
              <p className="text-sm text-muted-foreground">Total Customers</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-green-400">
                {customers.filter(c => c.tier === "Gold").length}
              </p>
              <p className="text-sm text-muted-foreground">Gold Tier</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-blue-400">
                {customers.reduce((sum, c) => sum + c.totalVisits, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Visits</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20">
            <CardContent className="p-6 text-center">
              <p className="text-3xl font-bold text-amber-400">
                {customers.reduce((sum, c) => sum + c.loyaltyPoints, 0)}
              </p>
              <p className="text-sm text-muted-foreground">Total Points</p>
            </CardContent>
          </Card>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search customers..." className="pl-10 bg-card border-border" />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="all">All Customers</TabsTrigger>
            <TabsTrigger value="gold">Gold Tier</TabsTrigger>
            <TabsTrigger value="silver">Silver Tier</TabsTrigger>
            <TabsTrigger value="bronze">Bronze Tier</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {customers.map((customer) => (
              <CustomerCard key={customer.id} customer={customer} />
            ))}
          </TabsContent>

          <TabsContent value="gold" className="space-y-4">
            {customers
              .filter((c) => c.tier === "Gold")
              .map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
          </TabsContent>

          <TabsContent value="silver" className="space-y-4">
            {customers
              .filter((c) => c.tier === "Silver")
              .map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
          </TabsContent>

          <TabsContent value="bronze" className="space-y-4">
            {customers
              .filter((c) => c.tier === "Bronze")
              .map((customer) => (
                <CustomerCard key={customer.id} customer={customer} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BarberCustomers;