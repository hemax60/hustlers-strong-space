import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

const ARTICLE_URL = "https://www.hustlershealthandfitness.com/blogs/strength-training-for-beginners";
const TITLE = "Strength Training for Beginners: A Two-Day Plan | Hustlers";
const DESCRIPTION = "Start strength training with a practical two-day full-body plan, simple form cues, gradual progression, recovery tips and advice on combining lifting with cardio.";

export const Route = createFileRoute("/blogs_/strength-training-for-beginners")({
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
        headline: "Strength Training for Beginners: A Practical Two-Day Plan",
        description: DESCRIPTION,
        url: ARTICLE_URL,
        mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        author: { "@type": "Organization", name: "Hustlers Health & Fitness", url: "https://www.hustlershealthandfitness.com/" },
        publisher: { "@type": "Organization", name: "Hustlers Health & Fitness", url: "https://www.hustlershealthandfitness.com/" },
        citation: "https://www.who.int/news-room/fact-sheets/detail/physical-activity",
        inLanguage: "en",
      }),
    }],
  }),
  component: BeginnerStrengthArticle,
});

function BeginnerStrengthArticle() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <article className="max-w-4xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-16">
        <Link to="/blogs" className="text-primary font-semibold underline underline-offset-4">Back to Blogs</Link>
        <header className="mt-8 pb-10 border-b border-border">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest">Hustlers Health & Fitness</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold leading-tight">Strength Training for Beginners: A Practical Two-Day Plan</h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">Starting strength training does not require a complicated programme or heavy weights. Your first goal is to learn a few repeatable movements and finish sessions with enough energy to recover. Two manageable full-body workouts each week can help you build a routine without making the gym your entire schedule.</p>
        </header>
        <div className="space-y-10 mt-10 text-foreground/85 leading-relaxed [&_h2]:font-display [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-4 [&_p+p]:mt-4">
          <section>
            <h2>Begin with consistency, not intensity</h2>
            <p>The <a href="https://www.who.int/news-room/fact-sheets/detail/physical-activity" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">World Health Organization’s physical activity guidance</a> recommends that adults do muscle-strengthening activities involving all major muscle groups at moderate or greater intensity on two or more days a week. This is general public-health guidance, not a personalised prescription or a reason to lift heavily on day one.</p>
            <p>Choose two non-consecutive days, such as Monday and Thursday. Keep the early sessions simple. If you are unsure how to use equipment, ask for a demonstration before starting. If you have a health condition, an injury or concerns about exercising, seek individual guidance from a qualified health professional.</p>
          </section>
          <section>
            <h2>Learn controlled form before adding weight</h2>
            <p>Use a load that lets you complete each repetition smoothly, without rushing or holding your breath for long periods. Keep your feet stable, move through a comfortable range and avoid forcing a position. Breathe throughout the movement; gently exhaling during the harder part is a useful starting cue.</p>
            <p>Finish each set feeling you could perform about two or three more controlled repetitions. This is not a test of your maximum strength. Stop a set when your technique deteriorates. Sharp pain, dizziness or unusual discomfort are reasons to stop, rather than push through.</p>
          </section>
          <section>
            <h2>A sample two-day full-body plan</h2>
            <p>Use the following as a starting example, adapting movements to your comfort and equipment familiarity. Before each session, warm up with five to ten minutes of easy walking or cycling, then practise the day’s movements without weight. Add a light practice set before loaded exercises.</p>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Day A</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Squat:</strong> chair squat or light goblet squat — 2 sets of 8–10 repetitions.</li>
              <li><strong>Hinge:</strong> light dumbbell Romanian deadlift — 2 sets of 8–10; send your hips back and keep weights close.</li>
              <li><strong>Push:</strong> incline push-up against a stable support — 2 sets of 6–10.</li>
              <li><strong>Pull:</strong> seated cable row — 2 sets of 8–12; avoid jerking your torso.</li>
              <li><strong>Core:</strong> dead bug — 2 sets of 5–8 slow repetitions per side.</li>
            </ul>
            <h3 className="font-display text-xl font-semibold text-foreground mt-6 mb-3">Day B</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Squat:</strong> chair squat or light goblet squat — 2 sets of 8–10.</li>
              <li><strong>Hinge:</strong> glute bridge — 2 sets of 10–12; lift without arching your lower back.</li>
              <li><strong>Push:</strong> light machine chest press — 2 sets of 8–12.</li>
              <li><strong>Pull:</strong> lat pulldown — 2 sets of 8–12; pull in front, not behind your neck.</li>
              <li><strong>Core:</strong> bird dog — 2 sets of 5–8 controlled repetitions per side.</li>
            </ul>
            <p className="mt-4">Rest about 60–120 seconds between sets, or longer until your breathing settles and you feel ready. One set per exercise is reasonable initially if two feels too demanding. Allow around 35–50 minutes, without treating the clock as a target.</p>
          </section>
          <section>
            <h2>Progress gradually and record the basics</h2>
            <p>Write down exercises, weights and repetitions. When you reach the top of a repetition range with controlled form across both sets for a couple of sessions, consider the smallest available weight increase. Return to the lower end of the range. Change one thing at a time; more weight, sets and sessions all at once can make recovery difficult.</p>
          </section>
          <section>
            <h2>Recovery and common beginner mistakes</h2>
            <p>Leave a day between these workouts, aim for regular sleep, eat balanced meals and drink water. Mild soreness can happen, but soreness is not proof of a productive session. Reduce the workload if fatigue or soreness disrupts normal movement.</p>
            <p>Avoid copying someone else’s heavy weights, skipping practice sets, rushing repetitions and replacing the plan every week. Consistent, manageable sessions are more useful than occasional exhausting workouts. If an exercise feels unfamiliar, choose a simpler variation and ask about technique.</p>
          </section>
          <section>
            <h2>FAQ: Should beginners do cardio as well?</h2>
            <p>Yes, strength training and aerobic activity serve complementary purposes. WHO also recommends 150–300 minutes of moderate-intensity aerobic activity weekly for adults, or 75–150 minutes of vigorous activity, or an equivalent combination. Work towards this gradually rather than trying to meet the full amount immediately. Short walks or easy cycling on other days are approachable options; keep them manageable while you learn to lift.</p>
          </section>
          <section className="border-t border-border pt-8">
            <h2>Your next step</h2>
            <p>Start with a repeatable schedule, controlled movements and small improvements. For location, hours and first-visit questions, read our <Link to="/faq" className="text-primary underline underline-offset-4">gym FAQs</Link>. <Link to="/contact" className="text-primary underline underline-offset-4">Contact Hustlers Health & Fitness</Link> to discuss visiting the gym and ask what guidance is currently available.</p>
          </section>
        </div>
      </article>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}