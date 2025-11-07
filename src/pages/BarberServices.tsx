import { Plus, Clock, DollarSign, Search, Edit, Trash2, Scissors, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const services = [
  { id: 1, name: "Classic Haircut", category: "Haircut", duration: "30 min", price: "$30", active: true },
  { id: 2, name: "Premium Haircut", category: "Haircut", duration: "45 min", price: "$45", active: true },
  { id: 3, name: "Beard Trim", category: "Beard", duration: "20 min", price: "$20", active: true },
  { id: 4, name: "Hot Towel Shave", category: "Shave", duration: "40 min", price: "$35", active: true },
  { id: 5, name: "Kids Haircut", category: "Haircut", duration: "25 min", price: "$25", active: true },
  { id: 6, name: "Facial Treatment", category: "Facial", duration: "60 min", price: "$65", active: false },
];

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [editOpen, setEditOpen] = useState(false);
  
  return (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground">{service.name}</h3>
            <Badge variant="outline" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <Badge
            className={
              service.active
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-red-500/20 text-red-400 border-red-500/30"
            }
          >
            {service.active ? "Active" : "Inactive"}
          </Badge>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            {service.duration}
          </div>
          <div className="flex items-center gap-1 text-primary font-semibold text-lg">
            <DollarSign className="h-5 w-5" />
            {service.price}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Dialog open={editOpen} onOpenChange={setEditOpen}>
            <DialogTrigger asChild>
              <Button size="sm" variant="outline" className="flex-1 gap-2">
                <Edit className="h-3 w-3" />
                Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Service</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Service Name</Label>
                  <Input id="edit-name" defaultValue={service.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-category">Category</Label>
                  <Input id="edit-category" defaultValue={service.category} placeholder="Haircut, Beard, Shave, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-duration">Duration</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="edit-duration" defaultValue={service.duration.replace(' min', '')} type="number" placeholder="30" className="pl-10" />
                  </div>
                  <p className="text-xs text-muted-foreground">Duration in minutes</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-price">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="edit-price" defaultValue={service.price.replace('$', '')} type="number" placeholder="30" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="edit-active">Active</Label>
                  <Switch id="edit-active" defaultChecked={service.active} />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setEditOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Save Changes</Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button size="sm" variant="outline" className="gap-2 text-destructive hover:text-destructive">
            <Trash2 className="h-3 w-3" />
            Delete
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
  );
};

const BarberServices = () => {
  const [addServiceOpen, setAddServiceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-muted-foreground">Manage your salon services</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search services..." className="pl-10 bg-card border-border" />
          </div>
          <Dialog open={addServiceOpen} onOpenChange={setAddServiceOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Service</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Service Name</Label>
                  <div className="relative">
                    <Scissors className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="name" placeholder="Classic Haircut" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="Haircut, Beard, Shave, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="duration" type="number" placeholder="30" className="pl-10" />
                  </div>
                  <p className="text-xs text-muted-foreground">Duration in minutes</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="price" type="number" placeholder="30" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="active">Active</Label>
                  <Switch id="active" defaultChecked />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setAddServiceOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Create Service</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberServices;
