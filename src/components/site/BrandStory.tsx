import {
  Heart,
  Brain,
  ShieldCheck,
  Flag,
  Trophy,
  Quote,
  Eye,
  Target,
  Sparkles,
  User,
} from "lucide-react";

const MISSION = [
  "Help people achieve lasting health and fitness results.",
  "Create a welcoming and motivating fitness environment.",
  "Promote discipline, consistency, and self-improvement.",
  "Deliver quality facilities, equipment, and support.",
  "Build a strong fitness community.",
  "Continuously grow and improve to serve more people.",
];

const VALUES = [
  {
    icon: Heart,
    title: "Loyalty",
    text: "Through genuine care, trust, and long-term relationships with our members.",
  },
  {
    icon: Brain,
    title: "Work Smart & Hard",
    text: "We combine hard work with scientific, proven methods in every aspect of fitness.",
  },
  {
    icon: ShieldCheck,
    title: "Honesty",
    text: "No fake promises or unrealistic expectations. Real results come through consistency.",
  },
  {
    icon: Flag,
    title: "Leadership",
    text: "We encourage discipline, a positive mindset, and persistence in every member.",
  },
  {
    icon: Trophy,
    title: "Achievement",
    text: "Every small step matters. We celebrate progress and strive for continuous growth.",
  },
];

export default function BrandStory() {
  return (
    <>
      {/* Founder */}
      <section id="founder" className="py-24 sm:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <User className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Meet the Founder
              </span>
            </div>
            <h2 className="mt-6 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-balance">
              Built on a <span className="text-primary">Hustler's Mindset</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />

            <div className="mt-10 inline-block px-8 py-5 rounded-xl bg-gradient-red text-primary-foreground shadow-red">
              <div className="text-[10px] uppercase tracking-widest opacity-90">Founder</div>
              <div className="font-display text-3xl sm:text-4xl font-bold uppercase leading-tight">
                Hemax Bhandari
              </div>
            </div>

            <p className="mt-10 text-foreground/85 text-lg leading-relaxed">
              Hustlers Health & Fitness was founded with a vision to create more than just
              a gym. The goal is to build a place where people can improve their health,
              confidence, discipline, and lifestyle through consistency and hard work.
            </p>
            <div className="mt-10 p-6 sm:p-8 rounded-xl bg-card border border-border relative text-left">
              <Quote className="w-8 h-8 text-primary/40 absolute -top-3 left-5 bg-background px-1" />
              <p className="italic text-foreground/90 leading-relaxed">
                "Fitness isn't about being better than others. It's about being better than
                who you were yesterday."
              </p>
              <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">
                — Hemax Bhandari, Founder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hustlers */}
      <section id="why" className="py-24 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Why Hustlers?
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
            More Than a Word.<span className="block text-primary">It's a Mindset.</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          <p className="mt-8 text-foreground/85 text-lg leading-relaxed">
            A Hustler is someone who keeps moving forward regardless of obstacles, remains
            consistent when motivation is low, and understands that success comes through
            discipline, persistence, and daily effort.
          </p>
          <p className="mt-6 font-display text-2xl sm:text-3xl uppercase text-foreground">
            Fitness is not about perfection.
            <span className="block text-primary">It is about progress.</span>
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-xl bg-card border border-border hover:border-primary/60 transition">
            <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
              <Eye className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase">Our Vision</h3>
            <div className="mt-4 h-1 w-16 bg-gradient-red rounded-full" />
            <p className="mt-6 text-foreground/85 leading-relaxed">
              To become one of the most trusted fitness brands in Surat and expand across
              Gujarat through premium fitness facilities, exceptional member experiences,
              and a strong fitness culture.
            </p>
            <p className="mt-4 text-foreground/85 leading-relaxed">
              Our long-term vision is to develop a network of fitness centers that inspire
              healthier lifestyles and positively impact communities across Gujarat and beyond.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-xl bg-card border border-border hover:border-primary/60 transition">
            <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
              <Target className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold uppercase">Our Mission</h3>
            <div className="mt-4 h-1 w-16 bg-gradient-red rounded-full" />
            <ul className="mt-6 space-y-3">
              {MISSION.map((m) => (
                <li key={m} className="flex items-start gap-3 text-foreground/85">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="py-24 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Our Core Values
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight">
              What We Stand For
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="group p-7 rounded-xl bg-card border border-border hover:border-primary/60 transition relative overflow-hidden"
              >
                <div className="absolute top-4 right-5 font-display text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition">
                  0{i + 1}
                </div>
                <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="p-10 sm:p-14 rounded-2xl bg-gradient-red text-primary-foreground shadow-red text-center relative overflow-hidden">
            <Sparkles className="w-10 h-10 mx-auto opacity-80" />
            <div className="mt-4 text-xs uppercase tracking-widest opacity-90">
              Our Brand Promise
            </div>
            <p className="mt-4 font-display text-3xl sm:text-4xl font-bold uppercase leading-tight text-balance">
              "Your fitness journey,<br className="hidden sm:block" /> supported every day."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
