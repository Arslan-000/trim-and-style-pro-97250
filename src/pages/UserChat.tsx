import { Send, Smile, Paperclip, Phone, Video, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

const messages = [
  {
    id: 1,
    sender: "barber",
    text: "Hello Arslan 👋",
    time: "10:30 AM"
  },
  {
    id: 2,
    sender: "user",
    text: "Hi! I want to book a haircut.",
    time: "10:32 AM"
  },
  {
    id: 3,
    sender: "barber",
    text: "Sure, tomorrow 5:30 PM available.",
    time: "10:35 AM"
  },
  {
    id: 4,
    sender: "user",
    text: "Perfect! Thanks 😊",
    time: "10:36 AM",
    read: true
  },
  {
    id: 5,
    sender: "barber",
    text: "Great! See you tomorrow. Do you want your usual style?",
    time: "10:38 AM"
  },
  {
    id: 6,
    sender: "user",
    text: "Yes please, the same as last time.",
    time: "10:39 AM",
    read: true
  },
  {
    id: 7,
    sender: "barber",
    text: "Perfect! Looking forward to it 👌",
    time: "10:40 AM"
  }
];

const UserChat = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#121212' }}>
      {/* AppBar - Top Header - FIXED */}
      <div 
        className="flex items-center justify-between px-4 py-4 border-b"
        style={{ backgroundColor: '#121212', borderColor: '#2C2C2E' }}
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="h-10 w-10 border-2 border-[#FFD54F]">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
              <AvatarFallback className="bg-[#2C2C2E] text-white">EB</AvatarFallback>
            </Avatar>
            <div 
              className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2"
              style={{ backgroundColor: '#4CAF50', borderColor: '#121212' }}
            />
          </div>

          <div>
            <p className="font-semibold text-white text-sm">Elite Barber</p>
            <p className="text-xs" style={{ color: '#A0A0A0' }}>Online</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
            <Phone className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
            <Video className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-white hover:bg-white/10 rounded-full">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Chat Body - Messages - SCROLLABLE */}
      <ScrollArea className="flex-1 px-4 py-6">
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Date Divider */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px" style={{ backgroundColor: '#A0A0A0' }} />
            <span className="text-xs font-medium" style={{ color: '#A0A0A0' }}>Today</span>
            <div className="flex-1 h-px" style={{ backgroundColor: '#A0A0A0' }} />
          </div>

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                <div
                  className={`px-4 py-3 ${
                    message.sender === 'user'
                      ? 'rounded-t-2xl rounded-bl-2xl'
                      : 'rounded-t-2xl rounded-br-2xl'
                  }`}
                  style={{
                    backgroundColor: message.sender === 'user' ? '#FFD54F' : '#2C2C2E',
                    color: message.sender === 'user' ? '#121212' : '#FFFFFF'
                  }}
                >
                  <p className="text-sm leading-relaxed font-['Inter']">{message.text}</p>
                </div>
                <div className="flex items-center gap-1 mt-1 px-1">
                  <span className="text-xs" style={{ color: '#A0A0A0' }}>{message.time}</span>
                  {message.sender === 'user' && message.read && (
                    <span className="text-xs" style={{ color: '#FFD54F' }}>✓✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-t-2xl rounded-br-2xl" style={{ backgroundColor: '#2C2C2E' }}>
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0', animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0', animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: '#A0A0A0', animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Bottom Input Bar - FIXED */}
      <div 
        className="px-4 py-3 mx-4 mb-4 rounded-2xl flex items-center gap-3"
        style={{ backgroundColor: '#1E1E1E' }}
      >
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-white/10 rounded-full flex-shrink-0"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-white hover:bg-white/10 rounded-full flex-shrink-0"
        >
          <Smile className="h-5 w-5" />
        </Button>
        
        <Input
          placeholder="Type a message…"
          className="flex-1 border-0 rounded-full text-white placeholder:text-[#A0A0A0] focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{ backgroundColor: '#2C2C2E' }}
        />

        <Button 
          size="icon" 
          className="rounded-full flex-shrink-0 h-12 w-12"
          style={{ backgroundColor: '#FFD54F' }}
        >
          <Send className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default UserChat;
