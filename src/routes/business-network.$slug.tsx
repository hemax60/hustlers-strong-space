import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/business-network/$slug")({
  beforeLoad: () => {
    throw redirect({ to: "/business-network", replace: true });
  },
  component: () => null,
});
