import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

const ARTICLE_URL = "https://www.hustlershealthandfitness.com/blogs/how-many-days-a-week-should-beginners-go-to-the-gym";
const TITLE = "How Often Should Beginners Go to the Gym? | Hustlers Surat";
const DESCRIPTION = "New to the gym? Learn how often beginners should train, balance strength and cardio, and build a sustainable fitness routine in Surat.";

export const Route = createFileRoute("/blogs_/how-many-days-a-week-should-beginners-go-to-the-gym")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: ARTICLE_URL },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: ARTICLE_URL }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "How Many Days a Week Should Beginners Go to the Gym?",
        description: DESCRIPTION,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: { "@type": "Organization", name: "Hustlers Health & Fitness", url: "https://www.hustlershealthandfitness.com/" },
        publisher: { "@type": "Organization", name: "Hustlers Health & Fitness", url: "https://www.hustlershealthandfitness.com/" },
        citation: [
          "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
          "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html",
        ],
        inLanguage: "en",
      }),
    }],
  }),
  component: BeginnerFrequencyArticle,
});

function BeginnerFrequencyArticle() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-16">
        <Link to="/blogs" className="text-primary font-semibold underline underline-offset-4">Back to Blogs</Link>
        <header className="mt-8 pb-10 border-b border-border">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Hustlers Health & Fitness</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">How Many Days a Week Should Beginners Go to the Gym?</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">If you are new to training, the most useful answer is usually simpler than expected: two to three gym sessions a week is enough to build a genuine habit, learn the basics and see early progress. Training more often is not automatically better when you are starting out — recovery and consistency matter just as much as the workouts themselves.</p>
        </header>
        <div className="space-y-10 mt-10 text-foreground/85 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-4 [&_p+p]:mt-4">
          <section>
            <h2>Why two to three days is a sensible starting point</h2>
            <p>The <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">World Health Organization’s physical activity guidelines</a> recommend that adults do muscle-strengthening activities involving all major muscle groups on two or more days a week, alongside regular aerobic activity. The <a href="https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">US Centers for Disease Control and Prevention</a> gives the same core advice: at least two days of muscle-strengthening activity each week, plus 150 minutes of moderate-intensity aerobic activity spread across the week.</p>
            <p>Two or three full-body sessions meet that strengthening target while leaving room for rest days, walking and everyday life. This is general public-health guidance, not a personalised prescription — if you have a health condition, an injury or concerns about exercising, speak with a qualified health professional first.</p>
          </section>
          <section>
            <h2>A sample beginner week</h2>
            <p>Spacing sessions apart gives your muscles time to recover between workouts. A simple three-day structure could look like this:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Monday:</strong> full-body strength session (about 40–50 minutes).</li>
              <li><strong>Tuesday:</strong> rest, or a relaxed 20–30 minute walk.</li>
              <li><strong>Wednesday:</strong> full-body strength session.</li>
              <li><strong>Thursday:</strong> rest, or easy cycling or walking.</li>
              <li><strong>Friday:</strong> full-body strength session.</li>
              <li><strong>Weekend:</strong> rest, light activity, or anything active you enjoy.</li>
            </ul>
            <p className="mt-4">If two days suits your schedule better, train on two non-consecutive days such as Tuesday and Saturday. A plan you can repeat for months beats an ambitious plan you abandon after two weeks.</p>
          </section>
          <section>
            <h2>What to do in each session</h2>
            <p>Keep early sessions simple. Begin with five to ten minutes of easy walking or cycling to warm up, then cover the basic movement patterns: a squat, a hinge, a push, a pull and a core exercise. Choose one approachable variation of each — for example a chair squat, a light dumbbell Romanian deadlift, an incline push-up, a seated row and a dead bug — and perform two sets of roughly 8–12 controlled repetitions.</p>
            <p>Our <Link to="/blogs/strength-training-for-beginners" className="text-primary underline underline-offset-4">beginner strength training guide</Link> walks through a complete two-day plan with sets, repetitions and rest times if you want a ready-made starting point.</p>
          </section>
          <section>
            <h2>Technique before weight</h2>
            <p>However many days you train, controlled technique comes first. Use a load that lets you move smoothly through a comfortable range, breathe throughout each repetition and finish every set feeling you could do two or three more good repetitions. Stop a set when your form breaks down, and treat sharp pain or dizziness as a reason to stop rather than push through. If a machine or exercise is unfamiliar, ask for a demonstration before using it.</p>
          </section>
          <section>
            <h2>Where cardio fits in</h2>
            <p>Strength and cardio complement each other. You do not need long cardio sessions on top of lifting: short walks, easy cycling or a relaxed session on a cardio machine on your non-lifting days all count towards the weekly aerobic target. Build up gradually rather than trying to reach 150 minutes in the first week, and keep easy days genuinely easy so they do not interfere with recovery.</p>
          </section>
          <section>
            <h2>Recovery and consistency</h2>
            <p>Progress happens between sessions, not only during them. Leave at least one rest day between full-body workouts, aim for regular sleep, eat balanced meals and drink enough water. Mild soreness in the first couple of weeks is common and usually settles as your body adapts; it is not a measure of a good workout.</p>
            <p>Above all, protect consistency. Two sessions every week for three months will do far more than five sessions in one week followed by a month off. Choose days that fit your routine, treat them like appointments, and increase how often you train only when the current schedule feels comfortable.</p>
          </section>
          <section className="border-t border-border pt-8">
            <h2>Starting out in Adajan, Surat</h2>
            <p>If you are beginning your fitness journey in Adajan, Surat, the team at Hustlers Health & Fitness can help you settle into a routine that fits your schedule. For opening hours, location and first-visit questions, read our <Link to="/faq" className="text-primary underline underline-offset-4">gym FAQs</Link>, or <Link to="/contact" className="text-primary underline underline-offset-4">contact us</Link> to plan your first visit and ask what guidance is currently available.</p>
          </section>
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
