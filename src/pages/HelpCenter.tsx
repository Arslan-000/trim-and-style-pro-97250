import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, MessageSquare, Phone, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "Go to Book Appointment, choose a service, date and time, and confirm your booking.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Yes, visit Booking History to reschedule or cancel before the lock-in window.",
  },
  {
    q: "How do loyalty points work?",
    a: "Earn points on bookings and activities. Redeem them on the Rewards screen.",
  },
];

const HelpCenter = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-6 space-y-6">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-foreground">Help Center</h1>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Help Center</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input placeholder="Search help articles..." />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                  <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Contact Support</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <div className="p-4 rounded-lg bg-muted/50">
              <Phone className="h-5 w-5 text-primary mb-2" />
              <p className="font-medium text-foreground">Call Us</p>
              <p className="text-sm text-muted-foreground">+91 80000 00000</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <Mail className="h-5 w-5 text-primary mb-2" />
              <p className="font-medium text-foreground">Email</p>
              <p className="text-sm text-muted-foreground">support@example.com</p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <MessageSquare className="h-5 w-5 text-primary mb-2" />
              <p className="font-medium text-foreground">Live Chat</p>
              <p className="text-sm text-muted-foreground">9am - 6pm IST</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HelpCenter;
