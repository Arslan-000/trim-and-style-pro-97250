import { Award, Gift, Star, Zap, Calendar, Crown, Sparkles, TrendingUp, ChevronRight, Clock, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router-dom";

const rewards = [
  {
    id: 1,
    title: "Free Haircut",
    points: 500,
    description: "Get a complimentary haircut service",
    icon: Sparkles,
    available: true,
  },
  {
    id: 2,
    title: "20% Off Any Service",
    points: 300,
    description: "Discount on your next booking",
    icon: Gift,
    available: true,
  },
  {
    id: 3,
    title: "VIP Priority Booking",
    points: 800,
    description: "Skip the queue with priority access",
    icon: Crown,
    available: false,
  },
  {
    id: 4,
    title: "Premium Spa Package",
    points: 1000,
    description: "Full spa treatment experience",
    icon: Star,
    available: false,
  },
];

const earnMethods = [
  {
    id: 1,
    task: "Book an Appointment",
    points: "+50",
    icon: Calendar,
    color: "text-blue-500",
  },
  {
    id: 2,
    task: "Complete a Service",
    points: "+100",
    icon: Check,
    color: "text-green-500",
  },
  {
    id: 3,
    task: "Write a Review",
    points: "+25",
    icon: Star,
    color: "text-amber-500",
  },
  {
    id: 4,
    task: "Refer a Friend",
    points: "+200",
    icon: TrendingUp,
    color: "text-purple-500",
  },
  {
    id: 5,
    task: "Share on Social Media",
    points: "+15",
    icon: Sparkles,
    color: "text-pink-500",
  },
];

const recentActivity = [
  {
    id: 1,
    description: "Haircut service completed",
    points: "+100",
    date: "2 days ago",
  },
  {
    id: 2,
    description: "Review submitted",
    points: "+25",
    date: "5 days ago",
  },
  {
    id: 3,
    description: "Appointment booked",
    points: "+50",
    date: "1 week ago",
  },
];

const UserRewards = () => {
  const navigate = useNavigate();
  const currentPoints = 750;
  const nextReward = 800;
  const progressPercent = (currentPoints / nextReward) * 100;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary via-amber-400 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm shadow-lg"
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </Button>
            <h1 className="text-2xl font-bold">Rewards & Points</h1>
          </div>

          {/* Points Card */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Your Points</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">{currentPoints}</span>
                    <span className="text-sm text-muted-foreground">points</span>
                  </div>
                </div>
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Progress to Next Reward */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Next reward</span>
                  <span className="font-semibold text-foreground">{nextReward - currentPoints} points to go</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {Math.round(progressPercent)}% to VIP Priority Booking
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Available Rewards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-foreground">Available Rewards</h2>
            <Badge variant="secondary" className="text-xs">
              {rewards.filter((r) => r.available).length} Available
            </Badge>
          </div>

          <div className="grid gap-3">
            {rewards.map((reward) => {
              const RewardIcon = reward.icon;
              const canAfford = currentPoints >= reward.points;

              return (
                <Card
                  key={reward.id}
                  className={`overflow-hidden transition-all ${
                    reward.available && canAfford
                      ? "hover:shadow-lg cursor-pointer border-primary/50"
                      : "opacity-60"
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`h-14 w-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                          reward.available && canAfford
                            ? "bg-gradient-to-br from-primary to-amber-400"
                            : "bg-muted"
                        }`}
                      >
                        <RewardIcon
                          className={`h-7 w-7 ${
                            reward.available && canAfford ? "text-white" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{reward.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{reward.description}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant={canAfford ? "default" : "secondary"} className="text-xs">
                            {reward.points} points
                          </Badge>
                          {!reward.available && (
                            <Badge variant="outline" className="text-xs">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                      </div>
                      {reward.available && canAfford && (
                        <Button size="sm" className="flex-shrink-0 h-8">
                          Redeem
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How to Earn Points */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              How to Earn Points
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {earnMethods.map((method) => {
              const MethodIcon = method.icon;
              return (
                <div key={method.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-full bg-background flex items-center justify-center ${method.color}`}>
                      <MethodIcon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground">{method.task}</span>
                  </div>
                  <Badge variant="secondary" className="font-semibold">
                    {method.points}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium text-foreground">{activity.description}</p>
                    <p className="text-sm text-muted-foreground">{activity.date}</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {activity.points}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sticky Book Now Button */}
        <div className="fixed bottom-20 left-0 right-0 px-4 z-10">
          <Button
            onClick={() => navigate("/user/book-appointment")}
            className="w-full max-w-md mx-auto h-11 text-sm font-semibold shadow-xl hover:scale-[1.02] transition-transform"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Book Now & Earn Points
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserRewards;
