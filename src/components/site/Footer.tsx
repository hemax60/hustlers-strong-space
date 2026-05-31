import logo from "@/assets/logo-horizontal.png";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card/60 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="Hustlers Health & Fitness" className="h-12 w-auto" />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs">
              A modern, premium gym in Adajan, Surat — built to help you train
              strong, stay consistent, and become your best version.
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Visit</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <p className="mt-4 text-sm text-muted-foreground flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              1st Floor, Piramyd Square, L.P. Savani Road, Adajan, Surat, Gujarat
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-sm text-foreground">Contact</h4>
            <div className="mt-4 h-px w-10 bg-primary" />
            <a href="tel:+917572926060" className="mt-4 text-sm text-muted-foreground hover:text-primary flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" /> +91 75729 26060
            </a>
            <a href="mailto:hustlerssurat@gmail.com" className="mt-2 text-sm text-muted-foreground hover:text-primary flex items-center gap-3 break-all">
              <Mail className="w-4 h-4 text-primary" /> hustlerssurat@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hustlers Health & Fitness. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Train Strong · Stay Consistent
          </p>
        </div>
      </div>
    </footer>
  );
}
