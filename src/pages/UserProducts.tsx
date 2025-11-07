import { ShoppingBag, Star, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserProducts = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Products</h1>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-10 bg-secondary/50 border-border"
            />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((product) => (
            <Card key={product} className="cursor-pointer hover:shadow-[var(--shadow-gold)] transition-all bg-card border-border">
              <CardContent className="p-3 space-y-3">
                <div className="relative h-32 rounded-lg overflow-hidden bg-secondary/50">
                  <img
                    src={`https://images.unsplash.com/photo-${['1608248543803-ba4f8c70ae0b', '1527799820374-dcf8d9d4a388', '1616394584738-fc6e612e71b9', '1535585209827-a15fcdbc4c2d', '1522338242992-e1a54906a8da', '1571781926291-c477dae?w=300'][product - 1]}`}
                    alt={`Product ${product}`}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    New
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm text-foreground line-clamp-2">
                    Premium Hair Serum - Product {product}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-primary fill-primary" />
                    <span className="text-xs font-semibold text-foreground">4.{8 + (product % 2)}</span>
                    <span className="text-xs text-muted-foreground">(120)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-bold text-primary">₹{(product * 150) + 299}</span>
                      <span className="text-xs text-muted-foreground line-through ml-2">₹{(product * 150) + 499}</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" className="w-full">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProducts;
