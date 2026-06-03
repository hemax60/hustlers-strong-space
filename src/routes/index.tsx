import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Hours from "@/components/site/Hours";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hustlers Health & Fitness — Premium Gym in Adajan, Surat" },
      { name: "description", content: "Modern, premium gym in Adajan, Surat. Strength, cardio, InBody analysis and a positive workout environment. Train Strong. Stay Consistent." },
      { property: "og:title", content: "Hustlers Health & Fitness — Premium Gym in Adajan, Surat" },
      { property: "og:description", content: "Train Strong. Stay Consistent. Become Your Best Version." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Hours />

      {/* Story Teaser */}
      <section className="py-24 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-balance">
            Built on a <span className="text-primary">Hustler's Mindset</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          <div className="mt-10 p-8 sm:p-10 rounded-xl bg-card border border-border relative max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-primary/40 absolute -top-3 left-6 bg-card/40 px-1" />
            <p className="italic text-lg text-foreground/90 leading-relaxed">
              "Fitness isn't about being better than others. It's about being better than
              who you were yesterday."
            </p>
            <div className="mt-5 text-xs uppercase tracking-widest text-primary font-semibold">
              — Hemax Bhandari, Founder
            </div>
          </div>
          <Link
            to="/story"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
          >
            Read Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
