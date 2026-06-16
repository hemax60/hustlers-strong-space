import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import {
  ArrowRight,
  Award,
  Building2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Send,
  Phone,
} from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/franchise")({
  head: () => ({
    meta: [
      { title: "Franchise Opportunities | Hustlers Health & Fitness" },
      {
        name: "description",
        content:
          "Explore franchise opportunities with Hustlers Health & Fitness. Join our expansion journey and build a premium fitness business in your city.",
      },
      { property: "og:title", content: "Franchise Opportunities | Hustlers Health & Fitness" },
      {
        property: "og:description",
        content:
          "Own a Hustlers Health & Fitness franchise. Premium brand, proven model, full support.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FranchisePage,
});

const INVESTMENT_OPTIONS = [
  "₹50 Lakhs – ₹75 Lakhs",
  "₹75 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹1.25 Crore",
  "Above ₹1.25 Crore",
];

const schema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(120),
  mobile_number: z
    .string()
    .trim()
    .min(6, "Enter a valid mobile number")
    .max(20)
    .regex(/^[0-9+\-\s()]+$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(160),
  city: z.string().trim().min(2, "Enter your city").max(80),
  investment_capacity: z.string().min(1, "Select an investment capacity"),
  message: z.string().trim().min(5, "Please share a short message").max(2000),
});

const REASONS = [
  {
    icon: Award,
    title: "Strong Brand",
    text: "Build on a premium fitness brand focused on discipline, consistency, and results.",
  },
  {
    icon: TrendingUp,
    title: "Growing Opportunity",
    text: "Become part of our long-term expansion vision across Gujarat.",
  },
  {
    icon: ShieldCheck,
    title: "Business Support",
    text: "Receive guidance on setup, branding, and operational standards.",
  },
  {
    icon: Sparkles,
    title: "Proven Experience",
    text: "Leverage our experience in creating a high-quality fitness environment.",
  },
];

function FranchisePage() {
  const initial = {
    full_name: "",
    mobile_number: "",
    email: "",
    city: "",
    investment_capacity: "",
    message: "",
  };
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);

  const update = (k: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("franchise_leads").insert({
      ...parsed.data,
      status: "New",
    });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit. Please try again.");
      return;
    }
    toast.success("Thank you. Our franchise team will contact you soon.");
    setForm(initial);
  };

  return (
    <main className="bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28 relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">
            Franchise Opportunities
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold uppercase leading-tight text-balance">
            Own a <span className="text-primary">Hustlers Health & Fitness</span> Franchise
          </h1>
          <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join us in building one of Gujarat's most trusted fitness brands. Bring the Hustlers
            mindset, premium training environment, and commitment to excellence to your city.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#enquire"
              className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition"
            >
              Enquire Now <ArrowRight size={18} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border border-border bg-card/60 text-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Why Partner With Us
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold uppercase">
              Why Partner With <span className="text-primary">Hustlers</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((r) => (
              <div
                key={r.title}
                className="group p-7 rounded-xl bg-card border border-border hover:border-primary/60 hover:shadow-red transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                  <r.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase">{r.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-card/40 border-y border-border">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Investment Overview
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold uppercase">
              Investment <span className="text-primary">Overview</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
          </div>

          <div className="mt-12 p-8 sm:p-12 rounded-2xl bg-card border border-primary/40 shadow-elevated relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
              style={{ background: "var(--gradient-red)" }}
            />
            <div className="relative flex flex-col md:flex-row md:items-center gap-8">
              <div className="w-14 h-14 shrink-0 rounded-md bg-gradient-red flex items-center justify-center shadow-red">
                <Building2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-bold uppercase">
                  <span className="text-primary">₹50 Lakhs</span> – <span className="text-primary">₹1.25 Crore</span>
                </div>
                <p className="mt-4 text-base text-foreground/85 leading-relaxed">
                  Opening a Hustlers Health & Fitness franchise typically requires an investment of
                  approximately ₹50 Lakhs to ₹1.25 Crore depending on location, facility size,
                  equipment requirements, and fit-out specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquire" className="py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="text-center">
            <span className="text-primary font-semibold uppercase tracking-widest text-sm">
              Franchise Inquiry
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold uppercase">
              Start Your <span className="text-primary">Conversation</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-red rounded-full mx-auto" />
            <p className="mt-6 text-muted-foreground">
              Fill in your details and our franchise team will reach out shortly.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-12 p-6 sm:p-10 rounded-2xl bg-card border border-border shadow-elevated space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" required>
                <input
                  type="text"
                  value={form.full_name}
                  onChange={update("full_name")}
                  required
                  maxLength={120}
                  className={inputCls}
                />
              </Field>
              <Field label="Mobile Number" required>
                <input
                  type="tel"
                  value={form.mobile_number}
                  onChange={update("mobile_number")}
                  required
                  maxLength={20}
                  className={inputCls}
                />
              </Field>
              <Field label="Email Address" required>
                <input
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  required
                  maxLength={160}
                  className={inputCls}
                />
              </Field>
              <Field label="City" required>
                <input
                  type="text"
                  value={form.city}
                  onChange={update("city")}
                  required
                  maxLength={80}
                  className={inputCls}
                />
              </Field>
            </div>

            <Field label="Investment Capacity" required>
              <select
                value={form.investment_capacity}
                onChange={update("investment_capacity")}
                required
                className={inputCls}
              >
                <option value="" disabled>
                  Select investment range
                </option>
                {INVESTMENT_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </Field>

            <Field label="Message" required>
              <textarea
                value={form.message}
                onChange={update("message")}
                required
                rows={5}
                maxLength={2000}
                className={inputCls}
                placeholder="Tell us about your city, background, and interest in opening a franchise."
              />
            </Field>

            <button
              type="submit"
              disabled={submitting}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider shadow-red hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting…" : (<>Request Franchise Information <Send size={18} /></>)}
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Prefer to talk? Call us at{" "}
              <a href="tel:+917572926060" className="text-primary inline-flex items-center gap-1">
                <Phone size={12} /> +91 75729 26060
              </a>
            </p>
          </form>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

const inputCls =
  "w-full bg-background border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-foreground/80 font-semibold">
        {label} {required && <span className="text-primary">*</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
