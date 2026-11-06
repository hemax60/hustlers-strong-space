import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/business-network")({
  head: () => ({
    meta: [
      { title: "Business Network — Hustlers Health & Fitness" },
      { name: "description", content: "Hustlers Business Network is currently under development. Our goal is simple: Connect. Collaborate. Grow. Stay tuned for updates!" },
      { property: "og:title", content: "Hustlers Business Network — Under Development" },
      { property: "og:description", content: "Hustlers Business Network is currently under development. Connect. Collaborate. Grow. Stay tuned for updates!" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BusinessNetworkLayout,
});

function BusinessNetworkLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-24 sm:pt-28">
        <section className="min-h-[60svh] flex items-center justify-center px-5 sm:px-8 py-20 sm:py-24 border-b border-border text-center">
          <div className="max-w-3xl mx-auto w-full">
            <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase text-balance">Hustlers Business Network</h1>
            <div aria-hidden="true" className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
            <p className="mt-8 text-lg sm:text-2xl text-foreground/85 text-balance">Our goal is simple: Connect. Collaborate. Grow.</p>
            <p className="mt-8 text-xl sm:text-2xl font-semibold text-primary text-balance">🚧 Currently Under Development</p>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground">Stay tuned for updates!</p>
          </div>
        </section>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
