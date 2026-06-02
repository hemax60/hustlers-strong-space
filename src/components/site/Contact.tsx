import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send, Navigation, Clock } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { HoursList, HoursBadge } from "@/components/site/Hours";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const mobile = String(fd.get("mobile") || "");
    const message = String(fd.get("message") || "");
    const text = `Hi Hustlers!%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0A%0A${encodeURIComponent(message)}`;
    window.open(`${SITE.whatsappBase}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Contact</span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase text-balance">
            Get In Touch
          </h2>
          <div className="mt-6 mx-auto h-1 w-20 bg-gradient-red rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Drop by, give us a call, or message us on WhatsApp. We'll help you get started.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <a href={`tel:${SITE.phone}`} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/60 transition group">
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="mt-1 text-lg font-semibold group-hover:text-primary transition">{SITE.phoneDisplay}</div>
              </div>
            </a>

            <a href={`mailto:${SITE.email}`} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/60 transition group">
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 text-lg font-semibold group-hover:text-primary transition break-all">{SITE.email}</div>
              </div>
            </a>

            <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/60 transition group">
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <div className="mt-1 text-base font-medium group-hover:text-primary transition">{SITE.address}</div>
              </div>
            </a>

            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Gym Timings</div>
                    <div className="mt-1 text-lg font-semibold">Open 7 days a week</div>
                  </div>
                </div>
                <HoursBadge />
              </div>
              <div className="mt-5">
                <HoursList compact />
              </div>
            </div>



            <div className="rounded-lg overflow-hidden border border-border bg-card">
              <iframe
                title="Hustlers Health & Fitness on Google Maps"
                src={SITE.mapsEmbed}
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="grid grid-cols-2 gap-0 border-t border-border">
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-4 font-semibold uppercase tracking-wider text-sm hover:text-primary transition border-r border-border">
                  <Navigation size={16} /> Get Directions
                </a>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 py-4 font-semibold uppercase tracking-wider text-sm bg-gradient-red text-primary-foreground hover:opacity-95 transition">
                  <MessageCircle size={16} /> WhatsApp Now
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition">
                <Phone size={18} /> Call
              </a>
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-5 py-4 rounded-md font-bold uppercase tracking-wider transition">
                <MapPin size={18} /> Visit Our Gym
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="p-6 sm:p-8 rounded-lg bg-card border border-border shadow-elevated h-fit">
            <h3 className="font-display text-2xl font-bold uppercase">Send an Enquiry</h3>
            <p className="text-sm text-muted-foreground mt-2">We'll respond via WhatsApp.</p>
            <div className="mt-6 space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                <input id="name" name="name" required className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary" placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Mobile Number</label>
                <input id="mobile" name="mobile" required type="tel" inputMode="tel" className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary" placeholder="+91 ..." />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary resize-none" placeholder="Tell us about your fitness goal..." />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-6 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition">
                <Send size={18} /> Get Started
              </button>
              {sent && (
                <p className="text-sm text-primary text-center">Opening WhatsApp with your message — please tap Send there.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
