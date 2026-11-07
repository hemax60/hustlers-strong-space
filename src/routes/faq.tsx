import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { HoursList } from "@/components/site/Hours";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Gym FAQs — Hustlers Health & Fitness, Adajan, Surat" },
      { name: "description", content: "Find Hustlers Health & Fitness in Adajan, Surat: gym hours, equipment, first-visit guidance and how to ask about memberships, personal training and amenities." },
      { property: "og:title", content: "Gym FAQs — Hustlers Health & Fitness, Adajan, Surat" },
      { property: "og:description", content: "Location, opening hours, first-visit guidance and contact details for your questions about Hustlers Health & Fitness." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.hustlershealthandfitness.com/faq" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://www.hustlershealthandfitness.com/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const questions = [
    {
      question: "Where is Hustlers Health & Fitness located?",
      answer: <p>Find us at 1st Floor, Piramyd Square, L.P. Savani Road, Adajan, Surat. <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Get directions on Google Maps</a>.</p>,
    },
    {
      question: "What are the gym opening hours?",
      answer: <HoursList compact />,
    },
    {
      question: "Can I start going to the gym as a beginner?",
      answer: <p>You do not need an established workout routine to begin. Start gradually, focus on learning correct technique, and ask the team about suitable equipment and guidance before your first workout.</p>,
    },
    {
      question: "Is personal training available?",
      answer: <p>Please contact the gym to confirm current personal-training availability, what sessions include, and the fees before making arrangements.</p>,
    },
    {
      question: "What strength and cardio equipment does the gym have?",
      answer: <p>Our gym includes strength, functional and cardio equipment. <Link to="/gallery" className="text-primary underline underline-offset-4">View our gym photos</Link>, or contact the team if you want to check a particular machine or piece of equipment.</p>,
    },
    {
      question: "Are steam facilities, showers and temporary lockers available?",
      answer: <p>Please ask the team to confirm current steam, shower and temporary-locker availability and any conditions of use before your visit.</p>,
    },
    {
      question: "Is the gym air-conditioned?",
      answer: <p>Please contact the gym to confirm air-conditioning arrangements before your visit.</p>,
    },
    {
      question: "How much does a gym membership cost?",
      answer: <p>Contact Hustlers Health & Fitness for current membership options, pricing and what each option includes. Confirm the fees directly with the team before joining.</p>,
    },
    {
      question: "How can I contact the gym or arrange a visit?",
      answer: <p>Call <a href={`tel:${SITE.phone}`} className="text-primary underline underline-offset-4">{SITE.phoneDisplay}</a>, <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">message us on WhatsApp</a>, or email <a href={`mailto:${SITE.email}`} className="text-primary underline underline-offset-4 break-all">{SITE.email}</a>. You can also use our <Link to="/contact" className="text-primary underline underline-offset-4">Contact page</Link> to ask questions before visiting during opening hours.</p>,
    },
    {
      question: "What should I do before my first gym visit?",
      answer: <p>Check the opening hours and wear appropriate workout clothing. Clean indoor gym shoes are mandatory: bring them separately inside your gym bag and change into them at the gym — shoes worn outside are not allowed on the workout floor. Also bring a personal towel and a water bottle. Please follow the gym's hygiene, safety and equipment rules, and ask our staff for help with your first workout. This policy helps keep the gym clean, hygienic and comfortable for everyone.</p>,
    },
    {
      question: "Can I wear my outdoor shoes inside the gym?",
      answer: <p>No. Outdoor footwear is strictly prohibited on the workout floor at Hustlers Health & Fitness. All members and visitors must bring a separate pair of clean indoor workout shoes in their gym bag and change into them before entering the workout area. This rule is mandatory for everyone.</p>,
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <Header />
      <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Hustlers Health & Fitness</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase">Gym FAQs</h1>
          <p className="mt-6 text-muted-foreground max-w-2xl">Planning a visit to our gym in Adajan, Surat? Find answers to common questions below.</p>
        </div>
      </section>
      <section aria-label="Frequently asked questions" className="py-6 sm:py-10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 divide-y divide-border">
          {questions.map(({ question, answer }) => (
            <article key={question} className="py-7 sm:py-8">
              <h2 className="font-display text-xl sm:text-2xl font-semibold">{question}</h2>
              <div className="mt-4 text-muted-foreground leading-relaxed">{answer}</div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}