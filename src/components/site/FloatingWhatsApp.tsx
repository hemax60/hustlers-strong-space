import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917572926060?text=Hi%20Hustlers%2C%20I%27d%20like%20to%20know%20more%20about%20your%20gym."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Hustlers Health & Fitness"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gradient-red text-primary-foreground flex items-center justify-center shadow-red pulse-red hover:scale-105 transition"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
