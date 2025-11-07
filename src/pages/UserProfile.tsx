import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut, ChevronRight, Shield, Eye, EyeOff } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const menuItems = [
  { icon: Settings, label: "Account Settings", description: "Manage your account" },
  { icon: Calendar, label: "Booking History", description: "View past bookings" },
  { icon: MapPin, label: "Saved Addresses", description: "Manage addresses" },
  { icon: User, label: "Help & Support", description: "Get assistance" },
];

const UserProfile = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });

  const handleAdminLogin = () => {
    // UI only - no backend integration
    console.log("Admin login attempt:", adminCredentials);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Profile Header */}
        <Card className="bg-gradient-to-br from-primary/10 via-card to-accent/10 border-primary/30">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-20 w-20 border-4 border-primary">
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">John Doe</h2>
                <p className="text-sm text-muted-foreground">Member since Jan 2024</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">12</p>
                    <p className="text-xs text-muted-foreground">Bookings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-primary">8</p>
                    <p className="text-xs text-muted-foreground">Reviews</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <span className="text-foreground">john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <span className="text-foreground">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-foreground">123 Main Street, City, State</span>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card className="bg-card border-border">
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center justify-between p-4 cursor-pointer hover:bg-secondary/50 transition-colors ${
                    index !== menuItems.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <ItemIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Admin Login Section */}
        <Card className="bg-gradient-to-br from-primary/10 via-card to-amber-400/10 border-primary/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Shield className="h-5 w-5 text-primary" />
              Admin Access
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="w-full border-primary/30 hover:bg-primary/10">
                  <Shield className="h-4 w-4 mr-2" />
                  Login as Admin
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-card border-border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-foreground">Admin Login</AlertDialogTitle>
                  <AlertDialogDescription className="text-muted-foreground">
                    Enter your admin credentials to access administrative features
                  </AlertDialogDescription>
                </AlertDialogHeader>
                
                <div className="space-y-4 py-4">
                  {/* Admin Username */}
                  <div className="space-y-2">
                    <Label htmlFor="admin-username" className="text-foreground">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-username"
                        type="text"
                        placeholder="admin"
                        value={adminCredentials.username}
                        onChange={(e) =>
                          setAdminCredentials((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }))
                        }
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Admin Password */}
                  <div className="space-y-2">
                    <Label htmlFor="admin-password" className="text-foreground">Password</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={adminCredentials.password}
                        onChange={(e) =>
                          setAdminCredentials((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleAdminLogin}>
                    Login
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button variant="outline" className="w-full text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserProfile;
