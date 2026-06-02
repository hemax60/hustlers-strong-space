import { Dumbbell, HeartPulse, Target, Users } from "lucide-react";
import about1 from "@/assets/gym-17.jpg";
import about2 from "@/assets/gym-15.jpg";
import about3 from "@/assets/gym-3.jpg";
import { HoursBadge } from "@/components/site/Hours";

const FEATURES = [
  { icon: Dumbbell, title: "Premium Equipment", text: "Strength, functional and cardio gear across an expansive floor." },
  { icon: HeartPulse, title: "InBody Analysis", text: "Track body composition and progress with precision." },
  { icon: Target, title: "Goal-Focused", text: "Strength, fat loss or overall fitness — built for your goals." },
  { icon: Users, title: "Positive Vibe", text: "A welcoming community that pushes you to show up." },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-bold uppercase leading-tight text-balance">
              Welcome to Hustlers
              <span className="block text-primary">Health & Fitness</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full" />
            <p className="mt-8 text-foreground/80 text-lg leading-relaxed">
              A clean and modern fitness environment designed to help people
              achieve their fitness goals through consistency, dedication, and
              hard work. Whether your goal is strength, fitness, weight
              management, or overall well-being, Hustlers Health & Fitness
              provides the space and atmosphere to support your journey.
            </p>

            <div className="mt-6">
              <HoursBadge />
            </div>



            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {FEATURES.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group p-5 rounded-lg bg-card border border-border hover:border-primary/60 transition"
                >
                  <div className="w-10 h-10 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="mt-4 font-semibold uppercase tracking-wide text-sm">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[520px] sm:h-[600px]">
              <div className="col-span-3 row-span-4 rounded-lg overflow-hidden shadow-elevated">
                <img src={about1} alt="Wide view of Hustlers gym floor" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-3 rounded-lg overflow-hidden shadow-elevated">
                <img src={about2} alt="Member training with dumbbells" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-2 row-span-3 rounded-lg overflow-hidden shadow-elevated bg-gradient-red p-6 flex flex-col justify-between">
                <span className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-widest">Hustle Daily</span>
                <div>
                  <div className="font-display text-5xl sm:text-6xl font-bold text-primary-foreground leading-none">24/7</div>
                  <div className="mt-1 text-primary-foreground/90 text-sm uppercase tracking-wide">Commitment</div>
                </div>
              </div>
              <div className="col-span-3 row-span-2 rounded-lg overflow-hidden shadow-elevated">
                <img src={about3} alt="Red strength equipment row" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
