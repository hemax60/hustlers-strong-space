import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE } from "@/lib/site-config";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Hustlers Health & Fitness, Surat" },
      { name: "description", content: "Fitness, strength training, weight management and healthy-lifestyle blogs from the coaches at Hustlers Health & Fitness, Adajan, Surat." },
      { property: "og:title", content: "Blogs — Hustlers Health & Fitness" },
      { property: "og:description", content: "Expert blogs on training, nutrition, mindset, and long-term health." },
    ],
  }),
  component: BlogsPage,
});

type Article = { title: string; body: string[]; cta?: string };

const ARTICLES: Article[] = [
  {
    title: "Why Regular Exercise Is Important for Long-Term Health",
    body: [
      "Regular exercise is one of the most powerful tools for improving long-term health... It strengthens the heart, improves circulation, supports healthy weight management, builds stronger muscles and bones, and reduces the risk of many chronic diseases. Exercise also improves mental well-being by reducing stress and supporting better sleep. Consistent activity helps maintain mobility, balance, and independence as people age. Whether through walking, strength training, cycling, or sports, regular movement creates lasting benefits that extend far beyond physical appearance. The key is consistency. Small actions repeated over months and years create significant improvements in health, energy, and quality of life. At Hustlers Health & Fitness, we encourage members to focus on sustainable habits rather than short-term results.",
    ],
    cta: "Ready to start your fitness journey? Visit Hustlers Health & Fitness and take the first step toward a stronger, healthier version of yourself.",
  },
  {
    title: "10 Benefits of Daily Physical Activity",
    body: [
      "Daily physical activity improves heart health, supports weight management, increases energy, strengthens muscles and bones, reduces stress, improves mental health, enhances sleep quality, supports immunity, improves mobility, and contributes to longevity. Physical activity does not always require intense workouts. Walking, cycling, stretching, and recreational sports all contribute to overall fitness. Making movement a daily habit is one of the simplest ways to improve health and well-being.",
    ],
  },
  {
    title: "Strength Training for Beginners",
    body: [
      "Strength training helps build muscle, improve posture, strengthen bones, and increase confidence. Beginners should focus on proper technique before increasing weight. Basic exercises such as squats, presses, rows, and core work create a strong foundation. Training consistently, eating balanced meals, and allowing time for recovery are essential. Progress should be measured over months rather than days. Strength training is a long-term investment in health and performance.",
    ],
  },
  {
    title: "Why Consistency Matters More Than Motivation",
    body: [
      "Motivation comes and goes, but consistency builds results. Showing up regularly, even on low-energy days, creates lasting change. Consistency develops discipline, improves performance, and turns fitness into a lifestyle rather than a temporary goal. Successful members focus on routine, not mood. They build habits that support training, recovery, and nutrition. Over time, these habits create transformation. At Hustlers Health & Fitness, we help members build consistency through structured programs, supportive coaching, and a strong community environment.",
    ],
  },
  {
    title: "Exercise and Weight Management",
    body: [
      "Exercise plays a key role in weight management. It supports calorie balance, improves metabolism, increases muscle mass, and helps maintain long-term results. Sustainable weight management requires a combination of regular movement, balanced nutrition, quality sleep, and stress control. Quick fixes rarely last. The most successful approach is consistent training, proper recovery, and patience. Strength training is especially valuable because it helps maintain lean muscle and improves body composition.",
    ],
  },
  {
    title: "Exercise for Mental Health and Stress Relief",
    body: [
      "Exercise is a powerful tool for mental health. It releases endorphins, reduces stress hormones, improves mood, and supports better sleep. Regular movement helps manage anxiety, depression, and emotional fatigue. Even moderate activity such as walking, stretching, or light strength training can significantly improve mental well-being. Many of our members report feeling more focused, calm, and energized after training. Fitness is not only about the body. It is also about the mind.",
    ],
  },
  {
    title: "Common Gym Mistakes Beginners Should Avoid",
    body: [
      "Common mistakes include skipping warm-ups, using poor form, lifting too heavy too soon, neglecting recovery, following random workout plans, and expecting fast results. Beginners should focus on learning proper technique, training consistently, and progressing gradually. Working with experienced trainers and following structured programs helps avoid injuries and ensures steady progress. Patience and consistency lead to long-term success.",
    ],
  },
  {
    title: "Cardio vs Strength Training",
    body: [
      "Both cardio and strength training are important. Cardio improves heart health, endurance, and calorie burn. Strength training builds muscle, improves metabolism, and supports bone health. A balanced fitness routine includes both. The right mix depends on personal goals, fitness level, and lifestyle. At Hustlers Health & Fitness, we help members combine cardio and strength training in a way that supports their goals and improves overall fitness.",
    ],
  },
  {
    title: "How Fitness Improves Energy and Productivity",
    body: [
      "Regular exercise improves energy levels, focus, and productivity. It enhances blood flow, oxygen delivery, and brain function. People who train regularly often report better concentration, sharper thinking, and more stamina throughout the day. Fitness also improves sleep, which directly impacts daily performance. A consistent training routine creates a strong foundation for personal and professional growth.",
    ],
  },
  {
    title: "Building Healthy Habits for Life",
    body: [
      "Healthy habits are the foundation of long-term fitness. Small daily actions such as drinking enough water, sleeping well, eating balanced meals, moving regularly, and managing stress create lasting results. Habits remove the need for motivation and make healthy living automatic. Building strong habits requires patience, consistency, and a supportive environment. At Hustlers Health & Fitness, we help members create habits that support a healthy lifestyle for life.",
    ],
    cta: "Join Hustlers Health & Fitness and build the habits, strength, and mindset that transform your life.",
  },
];

function BlogsPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Blogs</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-balance">
            Train Smarter. <span className="text-primary">Live Stronger.</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Practical blogs from the coaches at Hustlers Health & Fitness — tap any title below
            to read the full article.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {ARTICLES.map((a, i) => (
              <AccordionItem
                key={i}
                value={`article-${i}`}
                className="border border-border rounded-xl bg-card/60 overflow-hidden data-[state=open]:border-primary/60 transition"
              >
                <AccordionTrigger className="px-5 sm:px-6 py-5 hover:no-underline text-left">
                  <div className="flex items-start gap-4 flex-1">
                    <span className="font-display text-primary text-sm sm:text-base font-bold tabular-nums mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-base sm:text-lg lg:text-xl font-bold uppercase leading-snug text-foreground">
                      {a.title}
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 sm:px-6 pb-6">
                  <div className="pl-0 sm:pl-10 space-y-4">
                    {a.body.map((p, j) => (
                      <p key={j} className="text-foreground/85 leading-relaxed text-[15px] sm:text-base">
                        {p}
                      </p>
                    ))}
                    {a.cta && (
                      <p className="italic text-primary/90 border-l-2 border-primary pl-4 mt-4">
                        {a.cta}
                      </p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 border-t border-border bg-card/40">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase">
            Ready to Start Your Transformation?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reading is the first step. Walking through our doors is the second.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition">
              <MessageCircle size={18} /> WhatsApp Now
            </a>
            <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider transition">
              <Phone size={18} /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
