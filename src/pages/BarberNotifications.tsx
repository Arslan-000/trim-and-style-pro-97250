import { Bell, Calendar, DollarSign, Package, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    type: "booking",
    icon: Calendar,
    title: "New Appointment Booked",
    message: "John Doe booked a haircut for tomorrow at 2:00 PM",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "payment",
    icon: DollarSign,
    title: "Payment Received",
    message: "Payment of $45 received from Alex Johnson",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "stock",
    icon: Package,
    title: "Low Stock Alert",
    message: "Hair gel running low - only 3 units remaining",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "salary",
    icon: AlertCircle,
    title: "Salary Payment Due",
    message: "Alex Johnson's salary payment due in 2 days",
    time: "1 day ago",
    read: true,
  },
  {
    id: 5,
    type: "system",
    icon: CheckCircle,
    title: "System Update Complete",
    message: "Your salon management system has been updated",
    time: "2 days ago",
    read: true,
  },
];

const getNotificationColor = (type: string) => {
  switch (type) {
    case "booking":
      return "bg-blue-500/10 border-blue-500/20 text-blue-400";
    case "payment":
      return "bg-green-500/10 border-green-500/20 text-green-400";
    case "stock":
      return "bg-amber-500/10 border-amber-500/20 text-amber-400";
    case "salary":
      return "bg-red-500/10 border-red-500/20 text-red-400";
    default:
      return "bg-primary/10 border-primary/20 text-primary";
  }
};

const NotificationCard = ({ notification }: { notification: typeof notifications[0] }) => {
  const NotifIcon = notification.icon;
  
  return (
    <Card
      className={`bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300 ${
        !notification.read ? "border-primary/30" : ""
      }`}
    >
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className={`h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationColor(notification.type)}`}>
            <NotifIcon className="h-6 w-6" />
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-bold text-foreground">{notification.title}</h3>
              {!notification.read && (
                <Badge className="bg-primary/20 text-primary border-primary/30 flex-shrink-0">
                  New
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{notification.message}</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{notification.time}</span>
              {!notification.read && (
                <Button size="sm" variant="ghost" className="text-xs">
                  Mark as read
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const BarberNotifications = () => {
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <Badge className="bg-primary/20 text-primary border-primary/30">
                  {unreadCount} New
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground">Stay updated with your salon activities</p>
          </div>
          <Button variant="outline">
            Mark all as read
          </Button>
        </div>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">Unread</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification) => (
              <NotificationCard key={notification.id} notification={notification} />
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((n) => !n.read)
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            {notifications.filter((n) => !n.read).length === 0 && (
              <Card className="bg-gradient-to-br from-card to-secondary border-border">
                <CardContent className="p-12 text-center">
                  <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No unread notifications</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            {notifications
              .filter((n) => n.type === "booking")
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
          </TabsContent>

          <TabsContent value="payments" className="space-y-4">
            {notifications
              .filter((n) => n.type === "payment")
              .map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BarberNotifications;