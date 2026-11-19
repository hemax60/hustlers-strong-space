import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import warmUpPhoto from "@/assets/warm-up-google-post.jpg.asset.json";

type FitnessUpdate = {
  id: string;
  date: string; // ISO yyyy-mm-dd, original Google post date
  dateLabel: string;
  title: string;
  postUrl: string;
  image?: { src: string; width: number; height: number; alt: string };
  intro: string[];
  bullets?: { lead: string; items: string[] };
  outro: string[];
  tagline?: string;
};

// Add only individually owner-approved Google Business Profile posts here.
const UPDATES: FitnessUpdate[] = [
  {
    id: "dont-skip-your-warm-up",
    date: "2026-11-12",
    dateLabel: "12 November 2026",
    title: "DON’T SKIP YOUR WARM-UP! 🔥",
    postUrl: "https://local.google.com/place?id=17554470431534688864&use=posts&lpsid=CAIQACoeChxtc3BfaDpiRlBsVTg4OEJVX1VDaGg0d0FJaEx3",
    image: { src: warmUpPhoto.url, width: 288, height: 512, alt: "Gym interior from Hustlers Health & Fitness’s original warm-up Google post" },
    intro: [
      "A few minutes of preparation can make a difference to your workout.",
      "Before starting strength training, try some light cardio and controlled movements that prepare the muscles and joints you'll be using.",
    ],
    bullets: {
      lead: "A proper warm-up can help you:",
      items: ["Gradually increase your heart rate;", "Improve readiness for movement;", "Prepare for your working sets."],
    },
    outro: ["At Hustlers Health & Fitness in Adajan, Surat, our trainers can help you understand how to prepare for your workout."],
    tagline: "Train Smart. Stay Consistent.",
  },
];

const SORTED = [...UPDATES].sort((a, b) => b.date.localeCompare(a.date));

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

function UpdateArticle({ u }: { u: FitnessUpdate }) {
  return (
    <article id={u.id} className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
      <p className="text-sm text-muted-foreground">Google Business Profile · <time dateTime={u.date}>{u.dateLabel}</time></p>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold leading-tight">{u.title}</h2>
      {u.image && (
        <figure className="mt-8">
          <img src={u.image.src} width={u.image.width} height={u.image.height} alt={u.image.alt} className="block w-72 max-w-full h-auto mx-auto" />
        </figure>
      )}
      <div className="mt-8 space-y-5 text-foreground/85 leading-relaxed">
        {u.intro.map((p, i) => <p key={i}>{p}</p>)}
        {u.bullets && (
          <>
            <p>{u.bullets.lead}</p>
            <ul className="list-disc pl-6 space-y-2">
              {u.bullets.items.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </>
        )}
        {u.outro.map((p, i) => <p key={i}>{p}</p>)}
        {u.tagline && <p className="font-semibold text-primary">{u.tagline}</p>}
      </div>
      <Button asChild variant="outline" className="mt-8 h-auto py-3 whitespace-normal">
        <a href={u.postUrl} target="_blank" rel="noopener noreferrer">View Original Post on Google <ExternalLink aria-hidden="true" /></a>
      </Button>
    </article>
  );
}

function FitnessUpdatesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="pt-32 sm:pt-40 pb-10 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <h1 className="font-display text-4xl sm:text-5xl font-bold uppercase">Fitness <span className="text-primary">Updates</span></h1>
        </div>
      </section>
      <div className="divide-y divide-border">
        {SORTED.map((u) => <UpdateArticle key={u.id} u={u} />)}
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
