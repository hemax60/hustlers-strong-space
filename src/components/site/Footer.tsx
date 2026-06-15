import logo from "@/assets/logo-horizontal.png";
import { Mail, MapPin, Phone, Instagram, MessageCircle, Map as MapIcon, Youtube, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { HOURS } from "@/components/site/Hours";

const YEAR = new Date().getFullYear();

const QUICK = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Our Story", to: "/story" as const },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Fitness Articles", to: "/fitness-articles" as const },
  { label: "Contact", to: "/contact" as const },
];

export default function Footer() {
  return (
    <footer className="bg-card/60 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <img src={logo} alt="Hustlers Health & Fitness" className="h-12 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs">
              A modern, premium gym in Adajan, Surat — built to help you train strong,
              stay consistent, and become your best version.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition">
                <Instagram size={18} />
              </a>
              <a href={SITE.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition">
                <Youtube size={18} />
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition">
                <MessageCircle size={18} />
              </a>
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="w-10 h-10 rounded-md border border-border flex items-center justify-center text-foreground/80 hover:text-primary hover:border-primary transition">
                <MapIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Quick Links</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK.map((q) => (
                <li key={q.to}>
                  <Link to={q.to} className="text-muted-foreground hover:text-primary transition">{q.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Visit & Hours</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-muted-foreground hover:text-primary flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{SITE.address}</span>
            </a>
            <div className="mt-4 space-y-2">
              {HOURS.map((h) => (
                <div key={h.day} className="text-sm flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  <div>
                    <div className="text-foreground font-semibold">{h.day}</div>
                    {h.times.map((t) => (
                      <div key={t} className="text-muted-foreground">{t}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-red text-primary-foreground text-[11px] font-bold uppercase tracking-widest shadow-red">
              Open 362 Days a Year
            </span>
          </div>


          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Contact</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <a href={`tel:${SITE.phone}`} className="mt-4 text-sm text-muted-foreground hover:text-primary flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" /><span>{SITE.phoneDisplay}</span>
            </a>
            <a href={`mailto:${SITE.email}`} className="mt-2 text-sm text-muted-foreground hover:text-primary flex items-center gap-3 break-all">
              <Mail className="w-4 h-4 text-primary" /><span>{SITE.email}</span>
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-2 text-sm text-muted-foreground hover:text-primary flex items-center gap-3">
              <MessageCircle className="w-4 h-4 text-primary" /><span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {YEAR} Hustlers Health & Fitness. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Train Strong · Stay Consistent
          </p>
        </div>
      </div>
    </footer>
  );
}
