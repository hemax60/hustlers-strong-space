import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

const PHONE = "+917572926060";
const PHONE_DISPLAY = "+91 75729 26060";
const EMAIL = "hustlerssurat@gmail.com";
const ADDRESS = "1st Floor, Piramyd Square, L.P. Savani Road, Adajan, Surat, Gujarat";
const WHATSAPP_BASE = "https://wa.me/917572926060";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "");
    const mobile = String(fd.get("mobile") || "");
    const message = String(fd.get("message") || "");
    const text = `Hi Hustlers!%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0A%0A${encodeURIComponent(message)}`;
    window.open(`${WHATSAPP_BASE}?text=${text}`, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Contact
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase text-balance">
            Get In Touch
          </h2>
          <div className="mt-6 mx-auto h-1 w-20 bg-gradient-red rounded-full" />
          <p className="mt-6 text-muted-foreground">
            Drop by, give us a call, or message us on WhatsApp. We'll help you get started.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Info card */}
          <div className="space-y-4">
            <a
              href={`tel:${PHONE}`}
              className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/60 transition group"
            >
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call us</div>
                <div className="mt-1 text-lg font-semibold group-hover:text-primary transition">{PHONE_DISPLAY}</div>
              </div>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border hover:border-primary/60 transition group"
            >
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <div className="mt-1 text-lg font-semibold group-hover:text-primary transition break-all">{EMAIL}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
              <div className="w-12 h-12 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Address</div>
                <div className="mt-1 text-base font-medium">{ADDRESS}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
              >
                <Phone size={18} /> Call
              </a>
              <a
                href={`${WHATSAPP_BASE}?text=Hi%20Hustlers%2C%20I%27d%20like%20to%20know%20more.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-5 py-4 rounded-md font-bold uppercase tracking-wider transition"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="p-6 sm:p-8 rounded-lg bg-card border border-border shadow-elevated"
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  id="name" name="name" required
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Mobile Number
                </label>
                <input
                  id="mobile" name="mobile" required type="tel" inputMode="tel"
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="+91 ..."
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message" name="message" required rows={5}
                  className="w-full bg-input border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-primary resize-none"
                  placeholder="Tell us about your fitness goal..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-6 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
              >
                <Send size={18} /> Send Message
              </button>
              {sent && (
                <p className="text-sm text-primary text-center">
                  Opening WhatsApp with your message — please tap Send there.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
