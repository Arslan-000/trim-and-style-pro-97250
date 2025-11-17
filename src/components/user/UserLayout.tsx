import { NavLink } from "@/components/NavLink";
import { Home, Scissors, ShoppingBag, Calendar, User, Bell, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const navigation = [
  { name: "Home", href: "/user", icon: Home },
  { name: "Chat", href: "/user/chat", icon: MessageCircle },
  { name: "Bookings", href: "/user/bookings", icon: Calendar },
  { name: "Profile", href: "/user/profile", icon: User },
];

export const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideBottomBar = location.pathname === "/user/notifications" 
    || location.pathname.startsWith("/user/salon/") 
    || location.pathname === "/user/book-appointment"
    || location.pathname === "/user/appointment-detail"
    || location.pathname === "/user/profile/account"
    || location.pathname === "/user/profile/history"
    || location.pathname === "/user/profile/help"
    || location.pathname === "/user/profile/addresses"
    || location.pathname === "/user/chat"
    || location.pathname === "/user/rewards";
  
  const hideTopNav = location.pathname === "/user/chat";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      {!hideTopNav && (
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center">
                <span className="text-xl">✂️</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Elite Barber
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                size="icon" 
                variant="ghost" 
                className="relative"
                onClick={() => navigate("/user/notifications")}
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
              </Button>
              <Avatar className="h-9 w-9 cursor-pointer" onClick={() => navigate("/user/profile")}>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
      )}

      {/* Bottom Navigation for Mobile */}
      {!hideBottomBar && (
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 backdrop-blur-lg bg-card/95">
        <div className="flex items-center justify-around py-2">
          {navigation.map((item) => {
            const ItemIcon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/user"}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground"
                activeClassName="!text-primary"
              >
                <ItemIcon className="h-5 w-5" />
                <span className="text-xs">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
        </div>
      )}

      {/* Main Content */}
      <main className={hideTopNav ? "" : (hideBottomBar ? "" : "pb-20")}>
        {children}
      </main>
    </div>
  );
};
