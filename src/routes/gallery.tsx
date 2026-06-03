import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import Gallery from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hustlers Health & Fitness, Adajan, Surat" },
      {
        name: "description",
        content:
          "Take a look inside Hustlers Health & Fitness — premium equipment, spacious gym floor, and a positive training environment in Adajan, Surat.",
      },
      { property: "og:title", content: "Gallery — Hustlers Health & Fitness" },
      {
        property: "og:description",
        content: "Inside the gym: equipment, training floor, and atmosphere.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <div className="pt-24" />
      <Gallery />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
