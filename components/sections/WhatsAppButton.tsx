import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/918882088600";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AdiSolar on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
    >
      <MessageCircle className="w-7 h-7" aria-hidden="true" />
    </a>
  );
}
