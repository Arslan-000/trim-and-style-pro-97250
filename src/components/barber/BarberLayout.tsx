import { NavLink } from "@/components/NavLink";
import { LayoutDashboard, Calendar, Scissors, ShoppingBag, Users, DollarSign, Percent, Image, Settings, Clock, Bell, UserCircle, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/barber", icon: LayoutDashboard },
  { name: "Appointments", href: "/barber/appointments", icon: Calendar },
  { name: "Services", href: "/barber/services", icon: Scissors },
  { name: "Products", href: "/barber/products", icon: ShoppingBag },
  { name: "Staff", href: "/barber/staff", icon: Users },
  { name: "Customers", href: "/barber/customers", icon: UserCircle },
  { name: "Deals", href: "/barber/deals", icon: Percent },
  { name: "Gallery", href: "/barber/gallery", icon: Image },
  { name: "Finance", href: "/barber/finance", icon: DollarSign },
  { name: "Working Hours", href: "/barber/hours", icon: Clock },
  { name: "Notifications", href: "/barber/notifications", icon: Bell },
  { name: "Settings", href: "/barber/settings", icon: Settings },
];

export const BarberLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-lg bg-card/95">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center">
                <span className="text-xl">✂️</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
                Elite Barber Admin
              </span>
            </div>
            <div className="flex items-center gap-4">
              {/* Mobile Menu Trigger */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
                    <Menu className="h-6 w-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] p-0">
                  <div className="py-6 px-4 border-b border-border">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center">
                        <span className="text-xl">✂️</span>
                      </div>
                      <span className="text-lg font-bold">Menu</span>
                    </div>
                  </div>
                  <nav className="p-4 space-y-2">
                    {navigation.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          end={item.href === "/barber"}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-muted-foreground hover:bg-muted hover:text-foreground"
                          activeClassName="!bg-primary/10 !text-primary border border-primary/20"
                        >
                          <ItemIcon className="h-5 w-5" />
                          <span className="font-medium">{item.name}</span>
                        </NavLink>
                      );
                    })}
                  </nav>
                </SheetContent>
              </Sheet>

              <NavLink
                to="/user"
                className="hidden md:block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                View User App
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 backdrop-blur-lg bg-card/95 md:hidden">
        <div className="flex items-center justify-around py-2">
          {navigation.slice(0, 5).map((item) => {
            const ItemIcon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/barber"}
                className="flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground data-[active]:text-primary"
                activeClassName="!text-primary"
              >
                <ItemIcon className="h-5 w-5" />
                <span className="text-xs">{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Side Navigation for Desktop */}
      <div className="hidden md:block fixed left-0 top-16 bottom-0 w-64 bg-card border-r border-border overflow-y-auto">
        <nav className="p-4 space-y-2">
          {navigation.map((item) => {
            const ItemIcon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === "/barber"}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-muted-foreground hover:bg-muted hover:text-foreground"
                activeClassName="!bg-primary/10 !text-primary border border-primary/20"
              >
                <ItemIcon className="h-5 w-5" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Main Content */}
      <main className="md:ml-64 pt-0 pb-20 md:pb-0">
        {children}
      </main>
    </div>
  );
};
