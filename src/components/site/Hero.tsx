import hero from "@/assets/gym-hero.jpg";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/917572926060?text=Hi%20Hustlers%2C%20I%27d%20like%20to%20know%20more%20about%20your%20gym.";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={hero}
        alt="Inside Hustlers Health & Fitness — premium gym floor with red equipment"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-32 sm:py-40 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-red" />
            Adajan, Surat
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold uppercase leading-[1.05] text-foreground text-balance">
            Transform Your Body.
            <span className="block text-primary">Transform Your Life.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/85 max-w-xl">
            Train Strong. Stay Consistent. Become Your Best Version.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
            >
              <Phone size={18} /> Contact Us
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground bg-background/30 backdrop-blur px-7 py-4 rounded-md font-bold uppercase tracking-wider transition"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-foreground/60 text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="mt-2 w-px h-10 bg-gradient-to-b from-foreground/60 to-transparent" />
      </div>
    </section>
  );
}
