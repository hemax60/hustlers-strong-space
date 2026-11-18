import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import warmUpPhoto from "@/assets/warm-up-google-post.jpg.asset.json";

const postUrl = "https://local.google.com/place?id=17554470431534688864&use=posts&lpsid=CAIQACoeChxtc3BfaDpiRlBsVTg4OEJVX1VDaGg0d0FJaEx3";

export const Route = createFileRoute("/fitness-updates")({
  head: () => ({
    meta: [
      { title: "Fitness Updates — Hustlers Health & Fitness, Surat" },
      { name: "description", content: "Don't skip your warm-up: a fitness update from Hustlers Health & Fitness in Adajan, Surat, originally posted on Google on 12 November 2026." },
      { property: "og:title", content: "Fitness Updates — Hustlers Health & Fitness, Surat" },
      { property: "og:description", content: "Prepare for your workout with light cardio and controlled movements. Read our original Google fitness update." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.hustlershealthandfitness.com/fitness-updates" }],
  }),
  component: FitnessUpdatesPage,
});

function FitnessUpdatesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 sm:pt-40 pb-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase">Fitness <span className="text-primary">Updates</span></h1>
        </div>
      </section>
      <article className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <p className="text-sm text-muted-foreground">Google Business Profile · <time dateTime="2026-11-12">12 November 2026</time></p>
        <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">DON’T SKIP YOUR WARM-UP! 🔥</h2>
        <figure className="mt-8">
          <img src={warmUpPhoto.url} width={288} height={512} alt="Gym interior from Hustlers Health & Fitness’s original warm-up Google post" className="block w-72 max-w-full h-auto mx-auto" />
        </figure>
        <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
          <p>A few minutes of preparation can make a difference to your workout.</p>
          <p>Before starting strength training, try some light cardio and controlled movements that prepare the muscles and joints you'll be using.</p>
          <p>A proper warm-up can help you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gradually increase your heart rate;</li>
            <li>Improve readiness for movement;</li>
            <li>Prepare for your working sets.</li>
          </ul>
          <p>At Hustlers Health & Fitness in Adajan, Surat, our trainers can help you understand how to prepare for your workout.</p>
          <p className="font-semibold text-primary">Train Smart. Stay Consistent.</p>
        </div>
        <Button asChild variant="outline" className="mt-8 h-auto py-3 whitespace-normal">
          <a href={postUrl} target="_blank" rel="noopener noreferrer">View Original Post on Google <ExternalLink aria-hidden="true" /></a>
        </Button>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}