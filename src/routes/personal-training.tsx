import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ClipboardList, Target, TrendingUp, UserCheck, Phone } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { SITE } from "@/lib/site-config";

const PAGE_URL = "https://www.hustlershealthandfitness.com/personal-training";
const TITLE = "Personal Trainer in Adajan, Surat | Hustlers Health & Fitness";
const DESCRIPTION =
  "One-to-one personal training at Hustlers Health & Fitness in Adajan, Surat: assessment, goal-setting, guided workouts and progress tracking. Enquire on WhatsApp.";

const PILLARS = [
  {
    icon: ClipboardList,
    title: "Initial Assessment",
    text: "Your trainer starts by understanding your current fitness level, training history and any limitations, so your plan begins from where you actually are.",
  },
  {
    icon: Target,
    title: "Goal-Setting",
    text: "Whether you want to build strength, lose weight or simply train consistently, your sessions are organised around clear, realistic goals you agree on together.",
  },
  {
    icon: UserCheck,
    title: "Guided Sessions",
    text: "Train one-to-one with a trainer who demonstrates each movement, corrects your technique and adjusts the workout to how you are progressing.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    text: "Your trainer monitors how your strength, fitness and consistency develop over time and updates your plan as you improve.",
  },
];

export const Route = createFileRoute("/personal-training")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Personal Training",
          serviceType: "Personal training",
          description: DESCRIPTION,
          url: PAGE_URL,
          provider: {
            "@type": "HealthClub",
            name: "Hustlers Health & Fitness",
            url: "https://www.hustlershealthandfitness.com/",
            telephone: SITE.phone,
            address: {
              "@type": "PostalAddress",
              streetAddress: "1st Floor, Piramyd Square, L.P. Savani Road, Adajan",
              addressLocality: "Surat",
              addressRegion: "Gujarat",
              addressCountry: "IN",
            },
          },
          areaServed: [
            { "@type": "City", name: "Surat", containedInPlace: { "@type": "State", name: "Gujarat", containedInPlace: { "@type": "Country", name: "India" } } },
            { "@type": "Place", name: "Adajan, Surat" },
          ],
        }),
      },
    ],
  }),
  component: PersonalTrainingPage,
});

function PersonalTrainingPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Personal Training</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase text-balance">
              Personal Trainer in <span className="text-primary">Adajan, Surat</span>
            </h1>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Hustlers Health &amp; Fitness in Adajan, Surat, personal training means one-to-one coaching built around you.
              Instead of following a generic routine, you train with a trainer who assesses where you are, helps you set
              realistic goals, guides every session and tracks your progress along the way.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {PILLARS.map((p) => (
              <div key={p.title} className="p-6 sm:p-8 rounded-lg bg-card border border-border">
                <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                  <p.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold uppercase">{p.title}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 max-w-3xl space-y-6 text-foreground/85 leading-relaxed">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">Who is personal training for?</h2>
            <p>
              One-to-one coaching suits beginners who want to learn correct technique from day one, members returning after a
              break, and experienced trainees who want structured guidance and accountability. If you are new to strength
              training, our <Link to="/blogs/strength-training-for-beginners" className="text-primary underline underline-offset-4">beginner strength training guide</Link> is
              a useful starting point before your first session.
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground">How to get started</h2>
            <p>
              Message us on WhatsApp or call the gym to ask about current personal-training availability, what sessions
              include and the fees. The team will help you arrange a time that fits our opening hours. You can also visit us
              at Piramyd Square, L.P. Savani Road, Adajan — see our <Link to="/contact" className="text-primary underline underline-offset-4">Contact page</Link> for
              directions and timings.
            </p>
          </div>

          <div className="mt-14 p-8 sm:p-10 rounded-lg bg-card border border-border text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase">Enquire About Personal Training</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Ask about availability, session details and fees — we will help you get started.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-8 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
              >
                <MessageCircle size={18} /> WhatsApp Enquiry
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-8 py-4 rounded-md font-bold uppercase tracking-wider transition"
              >
                <Phone size={18} /> {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
