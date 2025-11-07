import { Store, Bell, CreditCard, Globe, Shield, Palette, Database } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BarberSettings = () => {
  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground">Manage your salon preferences</p>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-card border border-border">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general" className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5 text-primary" />
                  Salon Information
                </CardTitle>
                <CardDescription>Update your salon's basic information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="salon-name">Salon Name</Label>
                  <Input
                    id="salon-name"
                    defaultValue="Elite Barber"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salon-email">Email</Label>
                  <Input
                    id="salon-email"
                    type="email"
                    defaultValue="contact@elitebarber.com"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salon-phone">Phone</Label>
                  <Input
                    id="salon-phone"
                    defaultValue="+1 234 567 8900"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="salon-address">Address</Label>
                  <Input
                    id="salon-address"
                    defaultValue="123 Main Street, New York, NY 10001"
                    className="bg-background border-border"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Regional Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Input
                    id="language"
                    defaultValue="English"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input
                    id="timezone"
                    defaultValue="America/New_York (EST)"
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Input
                    id="currency"
                    defaultValue="USD ($)"
                    className="bg-background border-border"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications" className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>New Appointments</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when a new appointment is booked
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Payment Received</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when a payment is received
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Low Stock Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when products are running low
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Salary Reminders</Label>
                    <p className="text-sm text-muted-foreground">
                      Get reminded when staff salaries are due
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Marketing Updates</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive tips and updates about growing your business
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Payments */}
          <TabsContent value="payments" className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Payment Methods
                </CardTitle>
                <CardDescription>Manage accepted payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Cash Payments</Label>
                    <p className="text-sm text-muted-foreground">Accept cash payments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Card Payments</Label>
                    <p className="text-sm text-muted-foreground">Accept credit/debit cards</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Online Payments</Label>
                    <p className="text-sm text-muted-foreground">Accept online payments</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle>Payment Integration</CardTitle>
                <CardDescription>Connect your payment gateway</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stripe-key">Stripe API Key</Label>
                  <Input
                    id="stripe-key"
                    type="password"
                    placeholder="sk_live_..."
                    className="bg-background border-border"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Connect Stripe
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appearance */}
          <TabsContent value="appearance" className="space-y-6">
            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5 text-primary" />
                  Theme Settings
                </CardTitle>
                <CardDescription>Customize the look and feel</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Use dark theme for the admin panel
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary border-2 border-primary cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-blue-500 border-2 border-transparent hover:border-primary cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-green-500 border-2 border-transparent hover:border-primary cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-purple-500 border-2 border-transparent hover:border-primary cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-red-500 border-2 border-transparent hover:border-primary cursor-pointer" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-secondary border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full">
                  Export All Data
                </Button>
                <Button variant="outline" className="w-full text-red-400 hover:text-red-300 border-red-500/30 hover:border-red-500/50">
                  Clear All Cache
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BarberSettings;