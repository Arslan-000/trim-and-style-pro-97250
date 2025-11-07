import { Plus, Percent, Calendar, Search, Edit, Trash2, Tag, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const deals = [
  { 
    id: 1, 
    title: "Weekend Special", 
    discount: "20% OFF", 
    description: "Get 20% off on all haircuts",
    validUntil: "Dec 31, 2024",
    active: true,
    code: "WEEKEND20"
  },
  { 
    id: 2, 
    title: "New Customer Deal", 
    discount: "30% OFF", 
    description: "First visit special discount",
    validUntil: "Ongoing",
    active: true,
    code: "NEWCLIENT30"
  },
  { 
    id: 3, 
    title: "Combo Package", 
    discount: "$15 OFF", 
    description: "Haircut + Beard trim package",
    validUntil: "Jan 15, 2025",
    active: true,
    code: "COMBO15"
  },
  { 
    id: 4, 
    title: "Holiday Special", 
    discount: "25% OFF", 
    description: "Special holiday season offer",
    validUntil: "Dec 25, 2024",
    active: false,
    code: "HOLIDAY25"
  },
];

const DealCard = ({ deal }: { deal: typeof deals[0] }) => {
  const [editOpen, setEditOpen] = useState(false);
  
  return (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{deal.title}</h3>
            <p className="text-sm text-muted-foreground">{deal.description}</p>
          </div>
          <Badge
            className={
              deal.active
                ? "bg-green-500/20 text-green-400 border-green-500/30"
                : "bg-red-500/20 text-red-400 border-red-500/30"
            }
          >
            {deal.active ? "Active" : "Inactive"}
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <div className="px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg">
            <div className="flex items-center gap-2">
              <Percent className="h-5 w-5 text-primary" />
              <span className="text-2xl font-bold text-primary">{deal.discount}</span>
            </div>
          </div>
          <div className="flex-1 space-y-1">
            <div className="text-xs text-muted-foreground">Promo Code</div>
            <div className="font-mono font-bold text-foreground">{deal.code}</div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          Valid until {deal.validUntil}
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
                <DialogTitle>Edit Deal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title">Deal Title</Label>
                  <Input id="edit-title" defaultValue={deal.title} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-description">Description</Label>
                  <Textarea id="edit-description" defaultValue={deal.description} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-discount">Discount</Label>
                  <Input id="edit-discount" defaultValue={deal.discount} placeholder="20% OFF or $15 OFF" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-code">Promo Code</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="edit-code" defaultValue={deal.code} className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-valid">Valid Until</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="edit-valid" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="edit-active">Active</Label>
                  <Switch id="edit-active" defaultChecked={deal.active} />
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

const BarberDeals = () => {
  const [addDealOpen, setAddDealOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Deals & Offers
          </h1>
          <p className="text-muted-foreground">Manage special promotions and discounts</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search deals..." className="pl-10 bg-card border-border" />
          </div>
          <Dialog open={addDealOpen} onOpenChange={setAddDealOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add New Deal
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Deal</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Deal Title</Label>
                  <Input id="title" placeholder="Weekend Special" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Get 20% off on all haircuts" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="discount">Discount</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="discount" placeholder="20% OFF or $15 OFF" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">Promo Code</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="code" placeholder="WEEKEND20" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="validUntil">Valid Until</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="validUntil" type="date" className="pl-10" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="active">Active</Label>
                  <Switch id="active" defaultChecked />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setAddDealOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Create Deal</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberDeals;
