import logo from "@/assets/logo-horizontal.png";
import { Mail, MapPin, Phone, Instagram, MessageCircle, Map as MapIcon, Youtube, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { HOURS } from "@/components/site/Hours";

const YEAR = new Date().getFullYear();

const QUICK = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
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
                <li key={q.href}>
                  <a href={q.href} className="text-muted-foreground hover:text-primary transition">{q.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Visit</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-muted-foreground hover:text-primary flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <span>{SITE.address}</span>
            </a>
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
