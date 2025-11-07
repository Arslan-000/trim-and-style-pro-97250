import { Plus, Trash2, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  { id: 1, title: "Classic Fade", category: "Haircut", image: "/placeholder.svg" },
  { id: 2, title: "Beard Sculpting", category: "Beard", image: "/placeholder.svg" },
  { id: 3, title: "Modern Style", category: "Haircut", image: "/placeholder.svg" },
  { id: 4, title: "Traditional Cut", category: "Haircut", image: "/placeholder.svg" },
  { id: 5, title: "Beard Grooming", category: "Beard", image: "/placeholder.svg" },
  { id: 6, title: "Pompadour Style", category: "Haircut", image: "/placeholder.svg" },
  { id: 7, title: "Hot Shave", category: "Shave", image: "/placeholder.svg" },
  { id: 8, title: "Kids Haircut", category: "Kids", image: "/placeholder.svg" },
];

const GalleryCard = ({ item }: { item: typeof galleryImages[0] }) => (
  <Card className="bg-gradient-to-br from-card to-secondary border-border hover:shadow-[0_8px_30px_rgba(251,191,36,0.15)] transition-all duration-300 overflow-hidden group">
    <CardContent className="p-0">
      <div className="relative aspect-square">
        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
          <ImageIcon className="h-16 w-16 text-primary/30" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            <h3 className="text-white font-bold text-lg">{item.title}</h3>
            <Badge variant="outline" className="text-xs border-white/30 text-white">
              {item.category}
            </Badge>
          </div>
          
          <Button 
            size="sm" 
            variant="destructive" 
            className="absolute top-4 right-4 gap-2"
          >
            <Trash2 className="h-3 w-3" />
            Delete
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

const BarberGallery = () => {
  return (
    <div className="min-h-screen bg-background p-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-amber-400 bg-clip-text text-transparent">
            Gallery
          </h1>
          <p className="text-muted-foreground">Showcase your best work</p>
        </div>

        <div className="flex justify-end">
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Upload Photos
          </Button>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarberGallery;
