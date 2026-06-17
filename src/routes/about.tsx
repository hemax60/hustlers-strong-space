import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import About from "@/components/site/About";
import Hours from "@/components/site/Hours";
import BrandStory from "@/components/site/BrandStory";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hustlers Health & Fitness, Adajan, Surat" },
      {
        name: "description",
        content:
          "Learn about Hustlers Health & Fitness — our founder Hemax Bhandari, vision, mission, core values, and the Hustler's mindset behind the brand.",
      },
      { property: "og:title", content: "About — Hustlers Health & Fitness" },
      {
        property: "og:description",
        content:
          "Meet the founder, our vision, mission, and the values that shape Hustlers Health & Fitness in Adajan, Surat.",
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
      <BrandStory />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
