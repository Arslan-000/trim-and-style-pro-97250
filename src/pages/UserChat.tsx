import { Send, Image, Smile, Paperclip, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const barbers = [
  {
    id: 1,
    name: "Emma Davis",
    avatar: "1438761681033-6461ffad8d80",
    specialty: "Styling Specialist",
    online: true,
    lastMessage: "Sure! Looking forward to seeing you tomorrow.",
    time: "2m ago",
    unread: 0
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "1494790108377-be9c29b29330",
    specialty: "Hair Color Expert",
    online: true,
    lastMessage: "That color would look amazing on you!",
    time: "1h ago",
    unread: 2
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "1507003211169-0a1dd7228f2d",
    specialty: "Men's Grooming",
    online: false,
    lastMessage: "I can do that style for you.",
    time: "1d ago",
    unread: 0
  }
];

const messages = [
  {
    id: 1,
    sender: "barber",
    text: "Hi John! How can I help you today?",
    time: "10:30 AM",
    avatar: "1438761681033-6461ffad8d80"
  },
  {
    id: 2,
    sender: "user",
    text: "Hi Emma! I'd like to book an appointment for Friday.",
    time: "10:32 AM"
  },
  {
    id: 3,
    sender: "barber",
    text: "Great! What time works best for you?",
    time: "10:33 AM",
    avatar: "1438761681033-6461ffad8d80"
  },
  {
    id: 4,
    sender: "user",
    text: "Would 6:30 PM be available?",
    time: "10:34 AM"
  },
  {
    id: 5,
    sender: "barber",
    text: "Perfect! I've got you booked for Friday at 6:30 PM. Would you like your usual haircut and styling?",
    time: "10:35 AM",
    avatar: "1438761681033-6461ffad8d80"
  },
  {
    id: 6,
    sender: "user",
    text: "Yes, that sounds perfect! Thanks!",
    time: "10:36 AM"
  },
  {
    id: 7,
    sender: "barber",
    text: "Sure! Looking forward to seeing you tomorrow.",
    time: "10:37 AM",
    avatar: "1438761681033-6461ffad8d80"
  }
];

const UserChat = () => {
  const [selectedBarber, setSelectedBarber] = useState(barbers[0]);
  const [showConversation, setShowConversation] = useState(false);
  const [messageText, setMessageText] = useState("");
  const navigate = useNavigate();

  const handleBarberSelect = (barber: typeof barbers[0]) => {
    setSelectedBarber(barber);
    setShowConversation(true);
  };

  const handleBack = () => {
    setShowConversation(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 h-full">
          {/* Chat List - Hidden on mobile when conversation is open */}
          <div className={`${showConversation ? 'hidden md:block' : 'block'} md:border-r border-border`}>
            <div className="p-6 border-b border-border">
              <h1 className="text-2xl font-bold text-foreground">Messages</h1>
              <p className="text-sm text-muted-foreground mt-1">Chat with your barbers</p>
            </div>

            <ScrollArea className="h-[calc(100%-100px)]">
              <div className="p-4 space-y-2">
                {barbers.map((barber) => (
                  <Card
                    key={barber.id}
                    className={`cursor-pointer hover:shadow-md transition-all duration-300 ${
                      selectedBarber.id === barber.id ? 'border-primary/50 bg-primary/5' : 'bg-card/50'
                    }`}
                    onClick={() => handleBarberSelect(barber)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={`https://images.unsplash.com/photo-${barber.avatar}?w=100`} />
                            <AvatarFallback>{barber.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          {barber.online && (
                            <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <p className="font-semibold text-foreground truncate">{barber.name}</p>
                            <span className="text-xs text-muted-foreground whitespace-nowrap">{barber.time}</span>
                          </div>
                          <p className="text-xs text-muted-foreground truncate">{barber.specialty}</p>
                          <p className="text-sm text-muted-foreground mt-1 truncate">{barber.lastMessage}</p>
                        </div>

                        {barber.unread > 0 && (
                          <Badge className="bg-primary text-primary-foreground">{barber.unread}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Conversation */}
          <div className={`${showConversation ? 'block' : 'hidden md:block'} md:col-span-2 flex flex-col h-full`}>
            {/* Chat Header */}
            <div className="p-4 border-b border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="md:hidden"
                    onClick={handleBack}
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://images.unsplash.com/photo-${selectedBarber.avatar}?w=100`} />
                      <AvatarFallback>{selectedBarber.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {selectedBarber.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-background" />
                    )}
                  </div>

                  <div>
                    <p className="font-semibold text-foreground">{selectedBarber.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedBarber.online ? 'Online' : 'Offline'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="flex-1 p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-2 ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}
                  >
                    {message.sender === 'barber' && (
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarImage src={`https://images.unsplash.com/photo-${message.avatar}?w=100`} />
                        <AvatarFallback>EM</AvatarFallback>
                      </Avatar>
                    )}

                    <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} max-w-[70%]`}>
                      <div
                        className={`rounded-2xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-primary to-amber-400 text-white'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">{message.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border bg-card/50 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="rounded-full flex-shrink-0">
                  <Paperclip className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="rounded-full flex-shrink-0">
                  <Image className="h-5 w-5" />
                </Button>
                
                <div className="relative flex-1">
                  <Input
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="pr-12 rounded-full"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8"
                  >
                    <Smile className="h-5 w-5" />
                  </Button>
                </div>

                <Button size="icon" className="rounded-full flex-shrink-0 shadow-md">
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChat;
