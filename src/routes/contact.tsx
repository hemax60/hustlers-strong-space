import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import Contact from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hustlers Health & Fitness, Adajan, Surat" },
      {
        name: "description",
        content:
          "Visit, call, or WhatsApp Hustlers Health & Fitness in Adajan, Surat. Open 362 days a year. Get directions and gym timings.",
      },
      { property: "og:title", content: "Contact — Hustlers Health & Fitness" },
      {
        property: "og:description",
        content: "Address, phone, WhatsApp, and gym timings.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <div className="pt-24" />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
