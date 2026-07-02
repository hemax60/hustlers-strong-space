import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/business-network")({
  head: () => ({
    meta: [
      { title: "Business Network — Hustlers Health & Fitness" },
      {
        name: "description",
        content:
          "Find trusted businesses owned by verified Hustlers members. Search products, services and professionals across categories.",
      },
      { property: "og:title", content: "Hustlers Business Network" },
      {
        property: "og:description",
        content:
          "Discover verified businesses and services from the Hustlers Health & Fitness member community.",
      },
    ],
  }),
  component: () => <Outlet />,
});
