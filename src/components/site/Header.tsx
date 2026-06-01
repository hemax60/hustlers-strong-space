import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-horizontal.png";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

const NAV = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-elevated"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Hustlers Health & Fitness" className="h-9 sm:h-11 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 text-foreground/80 hover:text-primary transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 text-foreground/80 hover:text-primary transition"
            >
              <MessageCircle size={18} />
            </a>
          </div>
          <a
            href="/#contact"
            className="bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition shadow-red"
          >
            Join Now
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border">
          <nav className="flex flex-col px-5 py-4 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium uppercase tracking-wide text-foreground/90 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3 py-3">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-md border border-border text-foreground/90 hover:text-primary hover:border-primary transition">
                <Instagram size={18} />
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-md border border-border text-foreground/90 hover:text-primary hover:border-primary transition">
                <MessageCircle size={18} />
              </a>
            </div>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gradient-red text-primary-foreground text-center px-5 py-3 rounded-md font-semibold uppercase tracking-wider shadow-red"
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
