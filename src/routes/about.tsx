import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import About from "@/components/site/About";
import Hours from "@/components/site/Hours";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hustlers Health & Fitness, Adajan, Surat" },
      {
        name: "description",
        content:
          "Learn about Hustlers Health & Fitness — a premium gym in Adajan, Surat built for strength, consistency, and a strong fitness community.",
      },
      { property: "og:title", content: "About — Hustlers Health & Fitness" },
      {
        property: "og:description",
        content:
          "A modern, premium gym in Adajan, Surat built for strength, consistency, and community.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <div className="pt-24" />
      <About />
      <Hours />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
