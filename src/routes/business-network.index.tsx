import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Search, MapPin, Phone, Globe, Instagram, MessageCircle, BadgeCheck, Star, X, ArrowRight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/business-network/")({
  component: BusinessNetworkPage,
});

type Business = {
  id: string;
  business_name: string;
  owner_name: string;
  slug: string;
  primary_category: string;
  secondary_categories: string[];
  keywords: string[];
  services: string[];
  short_description: string;
  logo_url: string | null;
  contact_number: string | null;
  whatsapp_number: string | null;
  website: string | null;
  instagram: string | null;
  google_maps_url: string | null;
  city: string | null;
  years_in_business: number | null;
  is_verified: boolean;
  is_featured: boolean;
};

const POPULAR_SEARCHES = ["CA", "Photographer", "Physiotherapist", "Interior Designer", "Website", "Insurance", "Dentist", "Salon"];

async function fetchBusinesses(): Promise<Business[]> {
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("is_active", true)
    .eq("is_verified", true)
    .order("is_featured", { ascending: false })
    .order("business_name", { ascending: true });
  if (error) throw error;
  return (data ?? []) as Business[];
}

function scoreBusiness(b: Business, q: string): number {
  if (!q) return b.is_featured ? 1 : 0;
  const query = q.toLowerCase().trim();
  const tokens = query.split(/\s+/).filter(Boolean);
  let score = 0;
  for (const t of tokens) {
    if (b.business_name.toLowerCase().includes(t)) score += 10;
    if (b.owner_name.toLowerCase().includes(t)) score += 4;
    if (b.primary_category.toLowerCase().includes(t)) score += 6;
    if (b.secondary_categories.some((c) => c.toLowerCase().includes(t))) score += 5;
    if (b.keywords.some((k) => k.toLowerCase() === t)) score += 8;
    if (b.keywords.some((k) => k.toLowerCase().includes(t))) score += 4;
    if (b.services.some((s) => s.toLowerCase().includes(t))) score += 5;
    if (b.short_description.toLowerCase().includes(t)) score += 2;
  }
  if (b.is_featured) score += 1;
  return score;
}

function BusinessNetworkPage() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<string>("All");

  const { data: businesses = [], isLoading, error } = useQuery({
    queryKey: ["businesses"],
    queryFn: fetchBusinesses,
  });

  const categories = useMemo(() => {
    const set = new Set<string>();
    businesses.forEach((b) => set.add(b.primary_category));
    return ["All", ...Array.from(set).sort()];
  }, [businesses]);

  const suggestions = useMemo(() => {
    if (!q || q.length < 2) return [];
    const query = q.toLowerCase();
    const tags = new Set<string>();
    businesses.forEach((b) => {
      b.keywords.forEach((k) => k.toLowerCase().includes(query) && tags.add(k));
      b.secondary_categories.forEach((c) => c.toLowerCase().includes(query) && tags.add(c));
    });
    return Array.from(tags).slice(0, 6);
  }, [q, businesses]);

  const filtered = useMemo(() => {
    let list = businesses;
    if (category !== "All") list = list.filter((b) => b.primary_category === category);
    if (q.trim()) {
      list = list
        .map((b) => ({ b, s: scoreBusiness(b, q) }))
        .filter((x) => x.s > 0)
        .sort((a, b) => b.s - a.s)
        .map((x) => x.b);
    }
    return list;
  }, [businesses, q, category]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FloatingWhatsApp />
      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-5 sm:px-8 py-14 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
              <BadgeCheck size={14} /> Verified Hustlers Businesses
            </div>
            <h1 className="font-[Oswald] text-4xl sm:text-6xl font-bold tracking-tight uppercase">
              Find Trusted Businesses
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Looking for a product or service? Search businesses owned by verified Hustlers members.
            </p>

            {/* Search bar */}
            <div className="mt-8 relative max-w-2xl mx-auto">
              <div className="flex items-center gap-2 rounded-xl border border-border bg-card/80 backdrop-blur px-4 py-3 shadow-elevated focus-within:border-primary transition">
                <Search size={20} className="text-primary shrink-0" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for any product, service, profession, or business..."
                  className="flex-1 bg-transparent outline-none text-base placeholder:text-foreground/40"
                  aria-label="Search businesses"
                />
                {q && (
                  <button onClick={() => setQ("")} aria-label="Clear" className="text-foreground/50 hover:text-foreground">
                    <X size={18} />
                  </button>
                )}
              </div>
              {suggestions.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-elevated overflow-hidden z-10 text-left">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => setQ(s)}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition flex items-center gap-2"
                    >
                      <Search size={14} className="text-foreground/40" />
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Popular */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="text-foreground/50 uppercase tracking-wider text-xs">Popular:</span>
              {POPULAR_SEARCHES.map((p) => (
                <button
                  key={p}
                  onClick={() => setQ(p)}
                  className="px-3 py-1 rounded-full border border-border hover:border-primary hover:text-primary transition"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
                  category === c
                    ? "bg-primary text-primary-foreground border-primary shadow-red"
                    : "border-border text-foreground/80 hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 sm:py-10">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-[Oswald] text-2xl sm:text-3xl font-semibold uppercase tracking-wide">
              {q ? `Results for "${q}"` : category === "All" ? "All Businesses" : category}
            </h2>
            <span className="text-sm text-foreground/60">{filtered.length} listed</span>
          </div>

          {isLoading && <p className="text-foreground/60">Loading businesses…</p>}
          {error && <p className="text-primary">Couldn't load businesses right now.</p>}

          {!isLoading && filtered.length === 0 && (
            <NoResults query={q} suggestions={businesses.slice(0, 3)} />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((b) => (
              <BusinessCard key={b.id} b={b} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function BusinessCard({ b }: { b: Business }) {
  const initials = b.business_name
    .split(/\s+/)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase();
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 hover:border-primary/60 hover:shadow-elevated transition">
      <div className="flex items-start gap-3">
        <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-red text-primary-foreground flex items-center justify-center font-bold text-lg shadow-red">
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-base truncate">{b.business_name}</h3>
            {b.is_verified && <BadgeCheck size={16} className="text-primary shrink-0" aria-label="Verified" />}
          </div>
          <p className="text-xs text-foreground/60 truncate">by {b.owner_name}</p>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-foreground/70">
            <span className="text-primary font-medium">{b.primary_category}</span>
            {b.city && (
              <>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><MapPin size={11} />{b.city}</span>
              </>
            )}
          </div>
        </div>
        {b.is_featured && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-2 py-1 rounded">
            <Star size={10} /> Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-foreground/75 line-clamp-2">{b.short_description}</p>

      {b.keywords.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.keywords.slice(0, 5).map((k) => (
            <span key={k} className="text-[11px] px-2 py-0.5 rounded-full bg-secondary text-foreground/75 border border-border">
              {k}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-2 text-foreground/60">
        {b.whatsapp_number && (
          <a href={`https://wa.me/${b.whatsapp_number.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-1.5 rounded hover:text-primary transition">
            <MessageCircle size={16} />
          </a>
        )}
        {b.contact_number && (
          <a href={`tel:${b.contact_number}`} aria-label="Call" className="p-1.5 rounded hover:text-primary transition">
            <Phone size={16} />
          </a>
        )}
        {b.website && (
          <a href={b.website} target="_blank" rel="noopener noreferrer" aria-label="Website" className="p-1.5 rounded hover:text-primary transition">
            <Globe size={16} />
          </a>
        )}
        {b.instagram && (
          <a href={b.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 rounded hover:text-primary transition">
            <Instagram size={16} />
          </a>
        )}
        {b.google_maps_url && (
          <a href={b.google_maps_url} target="_blank" rel="noopener noreferrer" aria-label="Location" className="p-1.5 rounded hover:text-primary transition">
            <MapPin size={16} />
          </a>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-border flex gap-2">
        <Link
          to="/business-network/$slug"
          params={{ slug: b.slug }}
          className="flex-1 text-center bg-gradient-red text-primary-foreground px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider hover:opacity-90 transition shadow-red inline-flex items-center justify-center gap-1"
        >
          View Profile <ArrowRight size={14} />
        </Link>
        {b.whatsapp_number && (
          <a
            href={`https://wa.me/${b.whatsapp_number.replace(/\D/g, "")}?text=${encodeURIComponent(
              `Hi ${b.owner_name}, I found ${b.business_name} on the Hustlers Business Network.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/60 text-primary px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition"
          >
            Contact
          </a>
        )}
      </div>
    </article>
  );
}

function NoResults({ query, suggestions }: { query: string; suggestions: Business[] }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 text-center mb-8">
      <h3 className="font-[Oswald] text-2xl font-semibold uppercase">No exact matches found</h3>
      <p className="mt-2 text-foreground/60">
        {query ? `We couldn't find businesses for "${query}". ` : ""}Try a different keyword or explore popular businesses below.
      </p>
      {suggestions.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          {suggestions.map((b) => (
            <BusinessCard key={b.id} b={b} />
          ))}
        </div>
      )}
    </div>
  );
}
