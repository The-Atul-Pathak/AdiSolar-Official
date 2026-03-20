"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Sun, Send, ExternalLink, Calculator } from "lucide-react";

type Message = {
  id: string;
  text: string | React.ReactNode;
  sender: "bot" | "user";
  options?: string[];
  action?: "whatsapp" | "calculator" | null;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi there! 👋 I'm Surya, your solar guide from AdiSolar.\nWhether you're just curious about solar or ready to get a quote — I'm here to help. What brings you here today?",
      options: [
        "How much will I save?",
        "Is solar right for my home?",
        "I want a free site visit",
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activeFlow, setActiveFlow] = useState<string | null>(null);
  const [flowStep, setFlowStep] = useState(0);
  const [userData, setUserData] = useState({ name: "", phone: "", city: "", bill: "" });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom(); }, [messages]);

  // Trigger 1: Pulse after 45s
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setPulse(true);
    }, 45000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Trigger 2: Scroll depth 60%
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (scrolled / total > 0.6) {
        // Send proactive message if not sent yet
        const hasProactive = messages.some(m => typeof m.text === 'string' && m.text.includes("Thinking about going solar"));
        if (!hasProactive && !isOpen && messages.length === 1) {
          setPulse(true);
          addBotMessage("Thinking about going solar? I can help you figure out if it makes sense for your home. 😊", messages[0].options);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [messages, isOpen]);

  const addBotMessage = (text: string | React.ReactNode, options?: string[], action?: "whatsapp" | "calculator") => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev.map(m => ({ ...m, options: undefined })), // clear previous options
        { id: Date.now().toString(), text, sender: "bot", options, action }
      ]);
    }, 600); // Small typing delay
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    setMessages((prev) => [
      ...prev.map(m => ({ ...m, options: undefined })),
      { id: Date.now().toString(), text, sender: "user" }
    ]);
    setInputValue("");
    setPulse(false);
    if (!isOpen) setIsOpen(true);

    processChatLogic(text);
  };

  const processChatLogic = (input: string) => {
    const normalizedInput = input.toLowerCase();

    // Reset flow if they click main options
    if (normalizedInput === "how much will i save?") {
      setActiveFlow("cost");
      setFlowStep(1);
      addBotMessage("Great question! To give you a rough idea — what's your approximate monthly electricity bill?");
      return;
    }
    if (normalizedInput === "is solar right for my home?") {
      setActiveFlow("feasibility");
      setFlowStep(1);
      addBotMessage("I'll ask you two quick things and give you an honest answer.\nFirst — do you own the property, or are you renting?", ["I own it", "I'm renting"]);
      return;
    }
    if (normalizedInput === "i want a free site visit") {
      setActiveFlow("site_visit");
      setFlowStep(1);
      addBotMessage("Wonderful — let's get that sorted. I just need three things from you:\nWhat is your name?");
      return;
    }

    if (normalizedInput.includes("subsidy")) {
      addBotMessage(
        "Great news on this front — the Government of India's PM Surya Ghar Muft Bijli Yojana gives residential customers up to ₹78,000 in central subsidy.\n\nHere's how it breaks down:\n🟢 First 2 kW → ₹30,000/kW\n🟢 Next 1 kW → ₹18,000/kW\n🔝 Maximum subsidy: ₹78,000\n\nThe best part — AdiSolar handles the entire application for you. You don't have to deal with any government portal yourself.",
        ["I want a free site visit", "How much will I save?"]
      );
      return;
    }

    // Process Flows
    if (activeFlow === "cost" && flowStep === 1) {
      setUserData({ ...userData, bill: input });
      addBotMessage(`Nice — with a ${input} bill, you're looking at savings of roughly ₹300–400 per month with a solar setup.\n\nOver 25 years, that's around ₹90,000–₹1,20,000 in savings — and you can get there for under ₹1.5 lakh after govt. subsidy.\nWant to see a full breakdown? Our calculator gives you the exact numbers in 10 seconds. 👇`, ["Open Solar Calculator", "Book free site visit"]);
      setFlowStep(2);
      return;
    }
    if (activeFlow === "cost" && flowStep === 2) {
      if (normalizedInput.includes("calculator")) {
        addBotMessage("Taking you to the calculator now!", undefined, "calculator");
      } else {
        setActiveFlow("site_visit");
        setFlowStep(1);
        addBotMessage("Should I book a free site visit for you? Our engineer will give you the exact figure for your roof.\nWhat is your name?");
      }
      return;
    }

    if (activeFlow === "feasibility") {
      if (flowStep === 1) {
        if (normalizedInput.includes("rent")) {
          addBotMessage("Good to know. Solar works best if you own the property, since the system is installed permanently. If your landlord is open to it, we can absolutely make it work. Want me to explain how that conversation usually goes?", ["Yes", "No, I'll talk to them"]);
          setFlowStep(3);
        } else {
          addBotMessage("Perfect — you're already 50% of the way there. Second question — roughly how much sun does your rooftop get? Is it mostly open, or heavily shaded by trees or other buildings?", ["Mostly Open", "Heavily Shaded"]);
          setFlowStep(2);
        }
        return;
      }
      if (flowStep === 2) {
        if (normalizedInput.includes("shade")) {
          addBotMessage("A heavily shaded roof can still work with the right panel placement — our engineer can assess it for free. Should we book a visit?", ["Yes, book it"]);
        } else {
          addBotMessage("Sounds like your roof could be a great candidate! Should I book a free site visit?", ["Yes, book it"]);
        }
        setActiveFlow("site_visit");
        setFlowStep(0); // Next yes triggers site_visit name ask
        return;
      }
      if (flowStep === 3) {
        addBotMessage("Usually, landlords appreciate it because it increases the property value by 4-6% instantly, and we handle the government subsidies for them!\nShould we set up a call with them?", ["Yes, book it"]);
        setActiveFlow("site_visit");
        setFlowStep(0);
        return;
      }
    }

    if (activeFlow === "site_visit") {
      if (flowStep === 0) {
        setFlowStep(1);
        addBotMessage("Wonderful — let's get that sorted. I just need three things from you:\nWhat is your name?");
        return;
      }
      if (flowStep === 1) {
        setUserData({ ...userData, name: input });
        setFlowStep(2);
        addBotMessage(`Thanks, ${input}! And your phone number?`);
        return;
      }
      if (flowStep === 2) {
        setUserData({ ...userData, phone: input });
        setFlowStep(3);
        addBotMessage("Got it. Lastly, which city or area are you located in?");
        return;
      }
      if (flowStep === 3) {
        // Submit to API
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: userData.name,
            phone: userData.phone,
            message: `City: ${input} | Chatbot Lead`,
            source: 'chatbot'
          })
        });
        
        addBotMessage(`Got it, ${userData.name || "friend"}! I've noted your details. Our team will call you within 24 hours to schedule the visit.\n\nYou'll also get a WhatsApp confirmation shortly. Is there anything specific you'd like the engineer to focus on during the visit?`);
        setFlowStep(4);
        return;
      }
      if (flowStep === 4) {
        addBotMessage("I've passed that context to the team! Our engineer will keep that in mind. Feel free to browse around in the meantime! 😊");
        setActiveFlow(null);
        return;
      }
    }

    // Hinglish check
    if (/kya|hai|kitna|kaise|bhai/i.test(normalizedInput)) {
      addBotMessage("Bilkul! Let me help you with that 😊\nAre you looking for a site visit, or want to know the cost?", ["Site Visit", "Cost Estimate"]);
      return;
    }

    // Fallback/General Curiosity
    if (normalizedInput.length > 0) {
      if (normalizedInput.includes("not interested") || normalizedInput.includes("maybe later")) {
        addBotMessage("Understood — we'll be here whenever you're ready! Good luck 😊");
      } else if (normalizedInput.includes("talk to a person") || normalizedInput.includes("human") || messages.length > 8) {
         addBotMessage("I think our team can help you better directly. The fastest way to reach us is WhatsApp — you'll get a response in minutes.", undefined, "whatsapp");
      } else {
        addBotMessage("No worries at all — take your time. If any questions come up while you're browsing, I'm right here.\n\nOne thing worth checking out if you're curious — our solar calculator gives you a savings estimate in about 10 seconds based on your electricity bill. Zero commitment, just numbers. 😊", ["Try the Calculator"]);
      }
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => { setIsOpen(true); setPulse(false); }}
            className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#00A859] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${pulse ? 'animate-pulse ring-4 ring-[#00A859]/40' : ''}`}
          >
            <Sun className="w-6 h-6" />
            <span className="font-semibold text-sm">Chat with Surya</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#00A859] px-4 py-3 flex items-center justify-between text-white shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold leading-tight">Surya</h3>
                  <p className="text-xs text-white/80">AdiSolar Guide</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 bg-opacity-50">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      message.sender === 'user' 
                        ? 'bg-primary text-white rounded-br-sm' 
                        : 'bg-white border border-gray-100 shadow-sm text-gray-800 rounded-bl-sm'
                    }`}
                  >
                    {typeof message.text === "string" ? (
                      message.text.split('\n').map((line, i) => (
                        <span key={i} className="block min-h-[14px]">
                          {line}
                        </span>
                      ))
                    ) : (
                      message.text
                    )}
                  </div>
                  
                  {/* Actions / Buttons */}
                  {message.sender === 'bot' && message.options && message.options.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2 w-full max-w-[85%]">
                      {message.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSend(opt)}
                          className="bg-white border border-accent/30 text-accent hover:bg-accent hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-colors shadow-sm text-left"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}

                  {message.sender === 'bot' && message.action === 'whatsapp' && (
                    <a 
                      href="https://wa.me/918882088600"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1.5 bg-[#25D366] text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform"
                    >
                      WhatsApp AdiSolar <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {message.sender === 'bot' && message.action === 'calculator' && (
                    <a 
                      href="/solar-calculator"
                      className="mt-2 flex items-center gap-1.5 bg-accent text-white px-4 py-2 rounded-full text-xs font-bold hover:scale-105 transition-transform"
                    >
                      Open Solar Calculator <Calculator className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100 flex items-end gap-2">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(inputValue);
                  }
                }}
                placeholder="Type a message..."
                className="flex-1 max-h-32 min-h-[44px] bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                rows={1}
              />
              <button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim()}
                className="w-11 h-11 shrink-0 bg-[#00A859] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Send message"
              >
                <Send className="w-5 h-5 ml-0.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
