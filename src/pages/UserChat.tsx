import type React from "react";
import { Send, Smile, Paperclip, Phone, Video, MoreVertical, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialMessages = [
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
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: "user",
      text: inputMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: false
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-background">
      {/* AppBar - Top Header - FIXED */}
      <div 
        className="flex items-center justify-between px-4 py-3 border-b border-border flex-shrink-0 bg-card shadow-sm"
      >
        <div className="flex items-center gap-3">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full h-9 w-9 mr-1 text-muted-foreground hover:text-primary hover:bg-primary/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="relative">
            <Avatar className="h-11 w-11 border-2 border-primary shadow-sm">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
              <AvatarFallback className="bg-muted text-foreground">EB</AvatarFallback>
            </Avatar>
            <div 
              className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-green-500 shadow-sm"
            />
          </div>

          <div>
            <p className="font-semibold text-foreground text-base">Elite Barber</p>
            <p className="text-xs text-green-500 font-medium">Online</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full h-9 w-9">
            <Phone className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full h-9 w-9">
            <Video className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full h-9 w-9">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Chat Body - Messages - SCROLLABLE */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-24">
        <div className="space-y-4 max-w-4xl mx-auto">
          
          {/* Date Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">Today</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in-50 slide-in-from-bottom-2 duration-300`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                <div
                  className={`px-4 py-2.5 shadow-sm ${
                    message.sender === 'user'
                      ? 'rounded-[18px] rounded-br-sm bg-primary text-primary-foreground'
                      : 'rounded-[18px] rounded-bl-sm bg-card text-foreground border border-border'
                  }`}
                >
                  <p className="text-[15px] leading-relaxed">{message.text}</p>
                </div>
                <div className="flex items-center gap-1 mt-1 px-2">
                  <span className="text-[11px] text-muted-foreground">{message.time}</span>
                  {message.sender === 'user' && message.read && (
                    <span className="text-[11px] text-blue-500 font-semibold">✓✓</span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator placeholder (disabled) */}
          {/* To enable later, drive this block with a real state flag instead of a constant. */}
        </div>
      </div>

      {/* Bottom Input Bar - FIXED */}
      <div 
        className="px-3 py-2 mx-3 mb-3 rounded-3xl flex items-center gap-2 flex-shrink-0 bg-card border border-border shadow-lg"
      >
        <Button 
          size="icon" 
          variant="ghost" 
          className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full flex-shrink-0 h-9 w-9"
        >
          <Paperclip className="h-5 w-5" />
        </Button>
        
        <Input
          placeholder="Type a message…"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 h-9"
        />

        <Button 
          size="icon" 
          variant="ghost" 
          className="text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full flex-shrink-0 h-9 w-9"
        >
          <Smile className="h-5 w-5" />
        </Button>

        <Button 
          size="icon" 
          onClick={handleSendMessage}
          disabled={!inputMessage.trim()}
          className="rounded-full flex-shrink-0 h-9 w-9 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default UserChat;
