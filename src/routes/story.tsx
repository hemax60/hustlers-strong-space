import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import BrandStory from "@/components/site/BrandStory";
import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "Our Story — Hustlers Health & Fitness" },
      {
        name: "description",
        content:
          "The story, vision, mission, and core values behind Hustlers Health & Fitness — founded by Hemax Bhandari in Adajan, Surat.",
      },
      { property: "og:title", content: "Our Story — Hustlers Health & Fitness" },
      {
        property: "og:description",
        content:
          "Meet the founder, our vision, mission, and the values that shape Hustlers Health & Fitness.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />

      <section className="pt-32 sm:pt-40 pb-12 border-b border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Our Story
          </span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-balance">
            The Mindset Behind <span className="text-primary">Hustlers</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            More than a gym — a community built on discipline, consistency, and the belief
            that progress beats perfection, every single day.
          </p>
        </div>
      </section>

      <BrandStory />

      <section className="py-20 border-t border-border bg-card/40">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
            Become Part of the Story
          </h2>
          <p className="mt-4 text-muted-foreground">
            Walk in, train hard, and join a community that shows up — every day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
            >
              <MessageCircle size={18} /> WhatsApp Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider transition"
            >
              <Phone size={18} /> Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
