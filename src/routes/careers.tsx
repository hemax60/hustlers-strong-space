import { createFileRoute } from "@tanstack/react-router";
import { Dumbbell, MessageCircle, Users, Handshake } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Hustlers Health & Fitness, Adajan, Surat" },
      { name: "description", content: "Explore personal trainer, general fitness trainer and front desk & sales roles at Hustlers Health & Fitness in Adajan, Surat. Apply via WhatsApp." },
      { property: "og:title", content: "Careers — Hustlers Health & Fitness, Adajan, Surat" },
      { property: "og:description", content: "Connect with Hustlers Health & Fitness about training and front desk & sales roles in Adajan, Surat." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.hustlershealthandfitness.com/careers" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.hustlershealthandfitness.com/careers" }],
  }),
  component: CareersPage,
});

const roles = [
  {
    title: "Personal Trainer",
    icon: Dumbbell,
    responsibilities: [
      "Develop personalised training programmes suited to members’ goals.",
      "Provide individual coaching, support safe exercise technique and track progress.",
    ],
  },
  {
    title: "General Fitness Trainer",
    icon: Users,
    responsibilities: [
      "Guide members on the gym floor and support safe exercise technique.",
      "Help members use gym equipment correctly and confidently.",
    ],
  },
  {
    title: "Front Desk & Sales Executive",
    icon: Handshake,
    responsibilities: [
      "Energetic, confident and welcoming, with strong communication skills.",
      "Minimum age: 18 years.",
      "Handle walk-in enquiries, membership sales, renewals and follow-ups.",
      "Ability to manage paperwork, membership records, data entry, sales reports and daily front desk operations efficiently.",
    ],
  },
];

function CareersPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-primary font-semibold uppercase tracking-widest text-sm">Hustlers Health & Fitness · Adajan, Surat</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase">Careers</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed">Bring your energy, professionalism and passion for fitness to Hustlers Health &amp; Fitness. We welcome applications for the roles below in Adajan, Surat.</p>
        </div>
      </section>
      <section aria-label="Career roles" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-6">
          {roles.map(({ title, icon: Icon, responsibilities }) => (
            <article key={title} className="bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col">
              <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
              <h2 className="mt-5 font-display text-2xl font-semibold">{title}</h2>
              <ul className="mt-5 space-y-4 text-muted-foreground leading-relaxed list-disc pl-5 marker:text-primary">
                {responsibilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="mt-auto pt-8">
                <Button asChild className="h-auto min-h-11 w-full whitespace-normal bg-gradient-red shadow-red">
                  <a
                    href={`${SITE.whatsappBase}?text=${encodeURIComponent(`Hi Hustlers Health & Fitness, I would like to apply for the ${title} role in Adajan, Surat. Please let me know the current availability and application requirements.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Apply for ${title} via WhatsApp`}
                  >
                    <MessageCircle aria-hidden="true" /> Apply via WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-5 sm:px-8 mt-8 text-sm text-muted-foreground">Contact our team on WhatsApp to confirm current role availability and discuss your application.</p>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}