import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/business-network/")({
  head: () => ({
    meta: [
      { title: "Business Network — Hustlers Health & Fitness" },
      { name: "description", content: "Hustlers Business Network is currently under development. Our goal is simple: Connect. Collaborate. Grow. Stay tuned for updates!" },
      { property: "og:title", content: "Hustlers Business Network — Under Development" },
      { property: "og:description", content: "Hustlers Business Network is currently under development. Connect. Collaborate. Grow. Stay tuned for updates!" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.hustlershealthandfitness.com/business-network" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.hustlershealthandfitness.com/business-network" }],
  }),
  component: () => null,
});
