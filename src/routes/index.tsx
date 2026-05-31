import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

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
      <Gallery />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
