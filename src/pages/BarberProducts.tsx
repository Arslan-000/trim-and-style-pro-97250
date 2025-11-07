import { Plus, Search, Edit, Trash2, Package, Tag, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const products = [
  { id: 1, name: "Premium Hair Wax", category: "Styling", price: "$25", stock: 45, sold: 120, image: "/placeholder.svg" },
  { id: 2, name: "Beard Oil", category: "Beard Care", price: "$18", stock: 32, sold: 89, image: "/placeholder.svg" },
  { id: 3, name: "Shampoo Pro", category: "Hair Care", price: "$22", stock: 15, sold: 156, image: "/placeholder.svg" },
  { id: 4, name: "Hair Gel", category: "Styling", price: "$20", stock: 0, sold: 78, image: "/placeholder.svg" },
  { id: 5, name: "Pomade Classic", category: "Styling", price: "$28", stock: 28, sold: 92, image: "/placeholder.svg" },
  { id: 6, name: "Conditioner", category: "Hair Care", price: "$24", stock: 19, sold: 134, image: "/placeholder.svg" },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [editOpen, setEditOpen] = useState(false);
  
  return (
    <Card className="group bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-amber-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Package className="h-10 w-10 text-primary" />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="text-lg font-bold text-foreground line-clamp-1">{product.name}</h3>
              <Badge variant="outline" className="text-xs">
                {product.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>{product.sold} sold</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="text-primary font-bold text-2xl">{product.price}</div>
            <Badge
              className={
                product.stock > 10
                  ? "bg-green-500/20 text-green-400 border-green-500/30"
                  : product.stock > 0
                  ? "bg-amber-500/20 text-amber-400 border-amber-500/30"
                  : "bg-red-500/20 text-red-400 border-red-500/30"
              }
            >
              {product.stock > 0 ? `${product.stock} in stock` : "Out of Stock"}
            </Badge>
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
                  <DialogTitle>Edit Product</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="edit-product-name">Product Name</Label>
                    <Input id="edit-product-name" defaultValue={product.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-category">Category</Label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input id="edit-category" defaultValue={product.category} className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-price">Price</Label>
                    <Input id="edit-price" type="number" defaultValue={product.price.replace('$', '')} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-stock">Stock Quantity</Label>
                    <Input id="edit-stock" type="number" defaultValue={product.stock} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea id="edit-description" placeholder="Product description..." rows={3} />
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

const BarberProducts = () => {
  const [addProductOpen, setAddProductOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Products
          </h1>
          <p className="text-muted-foreground">Manage your salon products</p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[250px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-10 bg-card border-border" />
          </div>
          <Dialog open={addProductOpen} onOpenChange={setAddProductOpen}>
            <DialogTrigger asChild>
              <Button className="gap-2 bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="product-name">Product Name</Label>
                  <div className="relative">
                    <Package className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="product-name" placeholder="Premium Hair Wax" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="category" placeholder="Styling, Hair Care, Beard Care" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" placeholder="25" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="stock">Initial Stock</Label>
                  <Input id="stock" type="number" placeholder="50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Product description..." rows={3} />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setAddProductOpen(false)}>Cancel</Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90">Add Product</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberProducts;
