import { Bell, Gift, Calendar, Star, CheckCheck, Trash2, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const notifications = [
  {
    id: 1,
    type: "booking",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    title: "Booking Confirmed",
    message: "Your appointment with Emma Davis is confirmed for Friday, 6:30 PM",
    time: "2 hours ago",
    read: false,
    avatar: "1438761681033-6461ffad8d80"
  },
  {
    id: 2,
    type: "offer",
    icon: Gift,
    color: "from-primary to-amber-400",
    title: "Special Offer!",
    message: "Get 30% off on your next haircut. Valid until Friday!",
    time: "5 hours ago",
    read: false,
    avatar: null
  },
  {
    id: 3,
    type: "reminder",
    icon: Bell,
    color: "from-purple-500 to-pink-500",
    title: "Appointment Reminder",
    message: "Don't forget your appointment tomorrow at 6:30 PM with Emma Davis",
    time: "1 day ago",
    read: true,
    avatar: "1438761681033-6461ffad8d80"
  },
  {
    id: 4,
    type: "review",
    icon: Star,
    color: "from-green-500 to-emerald-500",
    title: "Rate Your Experience",
    message: "How was your last appointment? Share your feedback!",
    time: "2 days ago",
    read: true,
    avatar: null
  },
  {
    id: 5,
    type: "booking",
    icon: Calendar,
    color: "from-blue-500 to-cyan-500",
    title: "Booking Rescheduled",
    message: "Your appointment has been rescheduled to Saturday, 3:00 PM",
    time: "3 days ago",
    read: true,
    avatar: "1494790108377-be9c29b29330"
  },
  {
    id: 6,
    type: "offer",
    icon: Gift,
    color: "from-primary to-amber-400",
    title: "Flash Sale Alert!",
    message: "20% off on all spa services today only. Book now!",
    time: "1 week ago",
    read: true,
    avatar: null
  }
];

const UserNotifications = () => {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 pt-6 pb-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-sm text-muted-foreground mt-1">
              You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
            </p>
          </div>
          <Button size="icon" variant="outline" className="rounded-full">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="gap-2">
            <CheckCheck className="h-4 w-4" />
            Mark All Read
          </Button>
          <Button variant="outline" size="sm" className="gap-2 text-destructive hover:text-destructive">
            <Trash2 className="h-4 w-4" />
            Clear All
          </Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
            <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
            <TabsTrigger value="offers">Offers</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3 mt-6">
            {notifications.map((notification) => {
              const NotificationIcon = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className={`cursor-pointer hover:shadow-md transition-all duration-300 ${
                    !notification.read ? 'border-primary/30 bg-primary/5' : 'bg-card/50'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {notification.avatar ? (
                        <Avatar className="h-12 w-12 flex-shrink-0">
                          <AvatarImage src={`https://images.unsplash.com/photo-${notification.avatar}?w=100`} />
                          <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${notification.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <NotificationIcon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground">{notification.title}</h3>
                          {!notification.read && (
                            <Badge className="bg-primary text-primary-foreground">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="unread" className="space-y-3 mt-6">
            {notifications.filter(n => !n.read).map((notification) => {
              const NotificationIcon = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className="cursor-pointer hover:shadow-md transition-all duration-300 border-primary/30 bg-primary/5"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {notification.avatar ? (
                        <Avatar className="h-12 w-12 flex-shrink-0">
                          <AvatarImage src={`https://images.unsplash.com/photo-${notification.avatar}?w=100`} />
                          <AvatarFallback>ST</AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${notification.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                          <NotificationIcon className="h-6 w-6 text-white" />
                        </div>
                      )}
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground">{notification.title}</h3>
                          <Badge className="bg-primary text-primary-foreground">New</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="offers" className="space-y-3 mt-6">
            {notifications.filter(n => n.type === 'offer').map((notification) => {
              const NotificationIcon = notification.icon;
              return (
                <Card 
                  key={notification.id} 
                  className={`cursor-pointer hover:shadow-md transition-all duration-300 ${
                    !notification.read ? 'border-primary/30 bg-primary/5' : 'bg-card/50'
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${notification.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                        <NotificationIcon className="h-6 w-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground">{notification.title}</h3>
                          {!notification.read && (
                            <Badge className="bg-primary text-primary-foreground">New</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground/70 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserNotifications;
