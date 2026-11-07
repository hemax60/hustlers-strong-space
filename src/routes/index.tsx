import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Hours from "@/components/site/Hours";
import Gallery from "@/components/site/Gallery";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-config";

const memberReviews = [
  {
    name: "Isha Patel",
    stars: 5,
    excerpt: true,
    quote: "Honestly, this is one of the best and most supportive gyms I’ve been to. ❤️\nThe owner and manager are extremely supportive and understanding. I had to raise a complaint only once, and the manager sir immediately took action, understood my problem properly, made me feel comfortable, and supported me throughout. That really made me feel safe and heard.",
  },
  {
    name: "Femina Saamudree",
    stars: 5,
    excerpt: false,
    quote: "Well maintained, well equipped , helpful trainers, friendly staff , that’s what comes to my mind when it comes to hustlers.\nThey also provide service of taking steam which is plus point. Gym is also open on Sundays for few hours in morning and evening with trainer.\nAs a woman who loves to do workout I can say that I am satisfied with the services of the gym.",
  },
  {
    name: "Kush Patel",
    stars: 5,
    excerpt: false,
    quote: "I have been training in Hustler’s Fitness for a while and it is been a amazing experience for me. The facilities provided by this gym is so good. And the most important thing in the gym is friendly, genuine, and helpful staff. Everyone is very communicative, supportive, and welcoming. Overall, a positive and comfortable environment for the people who want to workout.",
  },
  {
    name: "PANKAJ PATEL",
    stars: 5,
    excerpt: false,
    quote: "Absolutely loved my experience at Hustlers Health & Fitness..The professionalism, positive environment and team coordination are truly impressive. Everyone is respectful, supportive and welcoming…it genuinely feels like a family. One of the best fitness experiences I’ve had. Highly recommended!",
  },
  {
    name: "589_merchent Vishakha",
    stars: 5,
    excerpt: false,
    quote: "My friend and i have been working out at hustlers for the last 1year amd we’ve had a really great experience.we enjoyed our first year so much that we’re renewing for the second year too.❤️💪🏻\nHighly recommend!",
  },
  {
    name: "Dipak Amrani",
    stars: 4,
    excerpt: false,
    quote: "One of the best gym in the surat, Good staff and trainers.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hustlers Health & Fitness — Premium Gym in Adajan, Surat" },
      { name: "description", content: "Modern, premium gym in Adajan, Surat. Strength, cardio, InBody analysis and a positive workout environment. Train Strong. Stay Consistent." },
      { property: "og:title", content: "Hustlers Health & Fitness — Premium Gym in Adajan, Surat" },
      { property: "og:description", content: "Train Strong. Stay Consistent. Become Your Best Version." },
    ],
    links: [{ rel: "canonical", href: "https://www.hustlershealthandfitness.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: "Hustlers Health & Fitness",
          url: "https://www.hustlershealthandfitness.com/",
          telephone: "+917572926060",
          email: "hustlerssurat@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1st Floor, Piramyd Square, L.P. Savani Road, Adajan",
            addressLocality: "Surat",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          hasMap: "https://share.google/p5wNfRukvIQAs2Jdn",
          sameAs: [
            "https://www.instagram.com/hustlershealthandfitness/",
            "https://www.youtube.com/@hustlershealthandfitness",
          ],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "06:00", closes: "23:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "12:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "17:00", closes: "21:00" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Hours />

      {/* Story Teaser */}
      <section className="py-24 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-balance">
            Built on a <span className="text-primary">Hustler's Mindset</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          <div className="mt-10 p-8 sm:p-10 rounded-xl bg-card border border-border relative max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-primary/40 absolute -top-3 left-6 bg-card/40 px-1" />
            <p className="italic text-lg text-foreground/90 leading-relaxed">
              "Fitness isn't about being better than others. It's about being better than
              who you were yesterday."
            </p>
            <div className="mt-5 text-xs uppercase tracking-widest text-primary font-semibold">
              — Hemax Bhandari, Founder
            </div>
          </div>
          <Link
            to="/about"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
          >
            Read Our Story <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Franchise Opportunities
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-balance">
            Bring <span className="text-primary">Hustlers</span> To Your City
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in building a premium fitness business? Explore franchise opportunities with
            Hustlers Health & Fitness and become part of our growth journey.
          </p>
          <Link
            to="/franchise"
            className="mt-10 inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
          >
            Learn More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Gallery />
      <section aria-labelledby="member-reviews-heading" className="py-20 sm:py-24 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <h2 id="member-reviews-heading" className="font-display text-4xl sm:text-5xl font-bold uppercase text-balance">
              What Our Members Say
            </h2>
            <p className="mt-5 text-xl sm:text-2xl font-semibold text-primary">4.9/5 on Google · 736 reviews</p>
            <p className="mt-2 text-sm text-muted-foreground">Owner-verified snapshot · 6 November 2026 · Not live-updated</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {memberReviews.map((review) => (
              <figure key={review.name} className="m-0 min-w-0 rounded-lg border border-border bg-card p-6 flex flex-col">
                <div aria-label={`${review.stars} out of 5 stars`} className="text-primary text-xl leading-none">
                  <span aria-hidden="true">{"★".repeat(review.stars)}</span>
                </div>
                <figcaption className="mt-4 font-semibold text-foreground break-words">{review.name}</figcaption>
                {review.excerpt && <p className="mt-2 text-xs text-muted-foreground">Excerpt from Google review</p>}
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85 whitespace-pre-line break-words">
                  {review.quote}{review.excerpt ? "…" : ""}
                </blockquote>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="h-auto min-h-12 max-w-full whitespace-normal bg-gradient-red shadow-red px-6 py-3 font-bold">
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                View All Reviews on Google <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 text-center">
        <Link to="/faq" className="text-primary font-semibold underline underline-offset-4">
          Planning your first visit? Read our gym FAQs.
        </Link>
      </div>
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
