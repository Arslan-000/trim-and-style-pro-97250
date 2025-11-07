import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const RevenueChart = () => {
  const data = [
    { day: 'Mon', revenue: 1200 },
    { day: 'Tue', revenue: 1800 },
    { day: 'Wed', revenue: 1500 },
    { day: 'Thu', revenue: 2200 },
    { day: 'Fri', revenue: 2800 },
    { day: 'Sat', revenue: 3200 },
    { day: 'Sun', revenue: 1600 },
  ];

  const maxRevenue = Math.max(...data.map(d => d.revenue));

  return (
    <Card className="bg-gradient-to-br from-card to-secondary border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Weekly Revenue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end justify-between gap-2 h-48">
            {data.map((item) => (
              <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                <div className="w-full bg-muted rounded-t-lg overflow-hidden relative group">
                  <div
                    className="bg-gradient-to-t from-primary to-amber-400 rounded-t-lg transition-all duration-500 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                    style={{ height: `${(item.revenue / maxRevenue) * 192}px` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-medium">{item.day}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Total: $12,300</span>
            <span className="text-primary font-semibold">+18.2% from last week</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
