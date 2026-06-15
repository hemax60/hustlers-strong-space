import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SITE } from "@/lib/site-config";
import { MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/fitness-articles")({
  head: () => ({
    meta: [
      { title: "Fitness Articles — Hustlers Health & Fitness, Surat" },
      { name: "description", content: "Fitness, strength training, weight management and healthy-lifestyle articles from the coaches at Hustlers Health & Fitness, Adajan, Surat." },
      { property: "og:title", content: "Fitness Articles — Hustlers Health & Fitness" },
      { property: "og:description", content: "Expert articles on training, nutrition, mindset, and long-term health." },
    ],
  }),
  component: FitnessArticlesPage,
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
    cta: "Ready to start your fitness journey? Visit Hustlers Health & Fitness and take the first step toward a stronger, healthier version of yourself.",
  },
  {
    title: "Why Consistency Matters More Than Motivation",
    body: [
      "Motivation comes and goes, but consistency creates results. Many people begin fitness journeys with excitement but struggle when motivation decreases. The most successful individuals rely on routines and habits rather than feelings. Small efforts repeated regularly outperform occasional bursts of intense activity. Consistency builds discipline, improves confidence, and creates sustainable progress over time.",
    ],
    cta: "Ready to start your fitness journey? Visit Hustlers Health & Fitness and take the first step toward a stronger, healthier version of yourself.",
  },
  {
    title: "Exercise and Weight Management",
    body: [
      "Exercise plays a major role in maintaining a healthy weight. Physical activity increases calorie expenditure, supports metabolism, and helps preserve muscle mass during weight loss. Combined with proper nutrition, exercise creates a sustainable approach to body composition improvement. Long-term success comes from balanced habits rather than extreme diets.",
    ],
  },
  {
    title: "Exercise for Mental Health and Stress Relief",
    body: [
      "Exercise benefits the mind as much as the body. Physical activity releases endorphins, improves mood, reduces stress, and helps manage anxiety. Regular workouts provide structure, increase confidence, and improve sleep quality. Even moderate activity can create noticeable improvements in mental well-being.",
    ],
  },
  {
    title: "Common Gym Mistakes Beginners Should Avoid",
    body: [
      "Common mistakes include skipping warm-ups, using poor technique, lifting too heavy too soon, neglecting recovery, and comparing progress to others. Beginners should focus on learning movement patterns, staying consistent, and being patient. Sustainable progress is more important than quick results.",
    ],
  },
  {
    title: "Cardio vs Strength Training",
    body: [
      "Both cardio and strength training offer valuable benefits. Cardio improves cardiovascular health and endurance, while strength training builds muscle and increases strength. The best fitness programs include both forms of exercise. The right balance depends on individual goals, fitness level, and preferences.",
    ],
  },
  {
    title: "How Fitness Improves Energy and Productivity",
    body: [
      "Regular exercise improves circulation and oxygen delivery throughout the body, helping people feel more energized. Physical activity can improve concentration, reduce fatigue, and enhance productivity. People who exercise consistently often experience better focus and performance in work and daily life.",
    ],
  },
  {
    title: "Building Healthy Habits for Life",
    body: [
      "Healthy habits are built through consistency, not perfection. Setting realistic goals, creating routines, and focusing on gradual improvement helps people maintain long-term success. Fitness should become part of a sustainable lifestyle. Small positive actions performed daily create meaningful results over time.",
    ],
  },
];

function FitnessArticlesPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Fitness Articles</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-balance">
            Train Smarter. <span className="text-primary">Live Stronger.</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Practical articles from the coaches at Hustlers Health & Fitness — tap any title below
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
