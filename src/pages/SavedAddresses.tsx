import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Plus, Trash2 } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Address = {
  id: number;
  label: string;
  line1: string;
  city: string;
  state: string;
  zip: string;
};

const SavedAddresses = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 1, label: "Home", line1: "123 Main Street", city: "Mumbai", state: "MH", zip: "400001" },
    { id: 2, label: "Work", line1: "45 Park Avenue", city: "Pune", state: "MH", zip: "411001" },
  ]);

  const [form, setForm] = useState({ label: "", line1: "", city: "", state: "", zip: "" });

  const addAddress = () => {
    if (!form.label || !form.line1) return;
    setAddresses((prev) => [
      ...prev,
      { id: Date.now(), label: form.label, line1: form.line1, city: form.city, state: form.state, zip: form.zip },
    ]);
    setForm({ label: "", line1: "", city: "", state: "", zip: "" });
  };

  const remove = (id: number) => setAddresses((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Saved Addresses</h1>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Saved Addresses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {addresses.map((a) => (
                <div key={a.id} className="p-4 rounded-lg border border-border bg-muted/30 flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{a.label}</p>
                    <p className="text-sm text-muted-foreground">{a.line1}</p>
                    <p className="text-sm text-muted-foreground">{a.city}, {a.state} {a.zip}</p>
                  </div>
                  <Button variant="outline" size="icon" onClick={() => remove(a.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Add New Address</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="label" className="text-foreground">Label</Label>
                <Input id="label" value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} placeholder="Home / Work" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="line1" className="text-foreground">Address Line</Label>
                <Input id="line1" value={form.line1} onChange={(e) => setForm({ ...form, line1: e.target.value })} placeholder="Street, Area" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-foreground">City</Label>
                <Input id="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-foreground">State</Label>
                <Input id="state" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zip" className="text-foreground">ZIP</Label>
                <Input id="zip" value={form.zip} onChange={(e) => setForm({ ...form, zip: e.target.value })} />
              </div>
            </div>
            <Button onClick={addAddress} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Address
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SavedAddresses;
