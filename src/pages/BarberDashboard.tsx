import { Users, Calendar, DollarSign, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatsCard } from "@/components/barber/StatsCard";
import { RevenueChart } from "@/components/barber/RevenueChart";
import { UpcomingAppointments } from "@/components/barber/UpcomingAppointments";

const BarberDashboard = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Good Morning, John!
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your salon today</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard
            title="Total Appointments"
            value="156"
            icon={Calendar}
            trend="+12.5%"
            trendUp={true}
          />
          <StatsCard
            title="Today's Appointments"
            value="8"
            icon={Clock}
            trend="2 pending"
            trendUp={true}
          />
          <StatsCard
            title="Monthly Revenue"
            value="$12,450"
            icon={DollarSign}
            trend="+18.2%"
            trendUp={true}
          />
          <StatsCard
            title="Completed"
            value="142"
            icon={CheckCircle}
            trend="91% rate"
            trendUp={true}
          />
        </div>

        {/* Charts and Appointments */}
        <div className="grid gap-6 lg:grid-cols-2">
          <RevenueChart />
          <UpcomingAppointments />
        </div>

        {/* Quick Actions */}
        <Card className="bg-gradient-to-br from-card to-secondary border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <button className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] group">
              <div className="text-primary font-semibold group-hover:scale-105 transition-transform">
                Add Service
              </div>
            </button>
            <button className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] group">
              <div className="text-primary font-semibold group-hover:scale-105 transition-transform">
                Add Product
              </div>
            </button>
            <button className="p-4 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] group">
              <div className="text-primary font-semibold group-hover:scale-105 transition-transform">
                View Clients
              </div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BarberDashboard;
