import { Clock, Sparkles } from "lucide-react";

export const HOURS = [
  { day: "Monday – Saturday", times: ["6:00 AM – 11:00 PM"] },
  { day: "Sunday", times: ["7:00 AM – 12:00 PM", "5:00 PM – 9:00 PM"] },
];

export function HoursBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-red text-primary-foreground text-xs sm:text-sm font-bold uppercase tracking-widest shadow-red ${className}`}
    >
      <Sparkles size={14} /> Open 362 Days a Year
    </span>
  );
}

export function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`space-y-3 ${compact ? "text-sm" : ""}`}>
      {HOURS.map((h) => (
        <li key={h.day} className="flex items-start justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
          <span className="font-semibold uppercase tracking-wide text-foreground">{h.day}</span>
          <span className="text-right text-foreground/85">
            {h.times.map((t) => (
              <span key={t} className="block">{t}</span>
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Hours() {
  return (
    <section id="hours" className="py-20 sm:py-24 bg-card/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Operating Hours</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-balance">
            Train On <span className="text-primary">Your Schedule</span>
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-md">
            We're here for you almost every single day of the year — early mornings, late nights, and everything in between.
          </p>
          <div className="mt-6">
            <HoursBadge />
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-card border border-border shadow-elevated">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold uppercase">Gym Timings</h3>
          </div>
          <div className="mt-6">
            <HoursList />
          </div>
        </div>
      </div>
    </section>
  );
}
