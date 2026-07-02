import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, BadgeCheck, MapPin, Phone, Globe, Instagram, MessageCircle, Mail, Calendar, Star, ArrowRight } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/business-network/$slug")({
  component: BusinessProfile,
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug.replace(/-/g, " ")} — Hustlers Business Network` },
      { property: "og:title", content: `${params.slug.replace(/-/g, " ")} — Hustlers Business Network` },
    ],
  }),
  errorComponent: ProfileError,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-5 text-center">
        <h1 className="font-[Oswald] text-4xl font-bold uppercase">Business Not Found</h1>
        <p className="mt-3 text-foreground/60">This business may have been removed or is no longer active.</p>
        <Link to="/business-network" className="inline-flex items-center gap-2 mt-6 text-primary hover:underline">
          <ArrowLeft size={16} /> Back to Business Network
        </Link>
      </main>
      <Footer />
    </div>
  ),
});

function ProfileError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20 max-w-3xl mx-auto px-5 text-center">
        <h1 className="font-[Oswald] text-3xl font-bold uppercase">Couldn't load this business</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider shadow-red"
        >
          Try again
        </button>
      </main>
      <Footer />
    </div>
  );
}

type Business = {
  id: string;
  business_name: string;
  owner_name: string;
  slug: string;
  primary_category: string;
  secondary_categories: string[];
  keywords: string[];
  services: string[];
  description: string;
  short_description: string;
  logo_url: string | null;
  cover_url: string | null;
  contact_number: string | null;
  whatsapp_number: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  google_maps_url: string | null;
  city: string | null;
  years_in_business: number | null;
  is_verified: boolean;
  is_featured: boolean;
};

function BusinessProfile() {
  const { slug } = Route.useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["business", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("slug", slug)
        .eq("is_active", true)
        .eq("is_verified", true)
        .maybeSingle();
      if (error) throw error;
      if (!data) throw notFound();
      return data as Business;
    },
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FloatingWhatsApp />
      <main className="pt-24 sm:pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <Link to="/business-network" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition mb-6">
            <ArrowLeft size={16} /> Back to Business Network
          </Link>

          {isLoading && <p className="text-foreground/60">Loading…</p>}
          {error && !isLoading && <p className="text-primary">Couldn't load this business.</p>}

          {data && <ProfileView b={data} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function ProfileView({ b }: { b: Business }) {
  const initials = b.business_name.split(/\s+/).slice(0, 2).map((s) => s[0]).join("").toUpperCase();
  return (
    <>
      {/* Cover */}
      <div className="relative rounded-2xl overflow-hidden border border-border bg-gradient-to-br from-primary/25 via-primary/5 to-background h-40 sm:h-56">
        {b.cover_url && (
          <img src={b.cover_url} alt="" className="w-full h-full object-cover" />
        )}
      </div>

      {/* Header block */}
      <div className="relative -mt-12 sm:-mt-14 mx-4 sm:mx-8 bg-card border border-border rounded-2xl p-6 shadow-elevated">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-red text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-red shrink-0 -mt-14 sm:mt-0">
            {b.logo_url ? <img src={b.logo_url} alt="" className="w-full h-full object-cover rounded-2xl" /> : initials}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-[Oswald] text-3xl sm:text-4xl font-bold uppercase tracking-tight">{b.business_name}</h1>
              {b.is_verified && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/30 px-2 py-1 rounded-full">
                  <BadgeCheck size={12} /> Verified Hustlers Business
                </span>
              )}
              {b.is_featured && (
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-primary text-primary-foreground px-2 py-1 rounded-full">
                  <Star size={12} /> Featured
                </span>
              )}
            </div>
            <p className="mt-1 text-foreground/70">Owned by <span className="font-semibold text-foreground">{b.owner_name}</span></p>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-foreground/70">
              <span className="text-primary font-semibold">{b.primary_category}</span>
              {b.city && <span className="inline-flex items-center gap-1"><MapPin size={13} />{b.city}</span>}
              {b.years_in_business != null && <span className="inline-flex items-center gap-1"><Calendar size={13} />{b.years_in_business}+ years</span>}
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="mt-5 flex flex-wrap gap-2">
          {b.whatsapp_number && (
            <a href={`https://wa.me/${b.whatsapp_number.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi ${b.owner_name}, I found ${b.business_name} on the Hustlers Business Network.`)}`} target="_blank" rel="noopener noreferrer" className="bg-gradient-red text-primary-foreground px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider shadow-red inline-flex items-center gap-2">
              <MessageCircle size={16} /> WhatsApp
            </a>
          )}
          {b.contact_number && (
            <a href={`tel:${b.contact_number}`} className="border border-primary/60 text-primary px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition inline-flex items-center gap-2">
              <Phone size={16} /> Call
            </a>
          )}
          {b.website && (
            <a href={b.website} target="_blank" rel="noopener noreferrer" className="border border-border px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition inline-flex items-center gap-2">
              <Globe size={16} /> Website
            </a>
          )}
          {b.instagram && (
            <a href={b.instagram} target="_blank" rel="noopener noreferrer" className="border border-border px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition inline-flex items-center gap-2">
              <Instagram size={16} /> Instagram
            </a>
          )}
          {b.google_maps_url && (
            <a href={b.google_maps_url} target="_blank" rel="noopener noreferrer" className="border border-border px-4 py-2.5 rounded-md text-sm font-semibold uppercase tracking-wider hover:border-primary hover:text-primary transition inline-flex items-center gap-2">
              <MapPin size={16} /> Directions
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6 px-0 sm:px-4">
        <div className="lg:col-span-2 space-y-6">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-[Oswald] text-xl font-semibold uppercase tracking-wide">About</h2>
            <p className="mt-3 text-foreground/80 leading-relaxed whitespace-pre-line">{b.description || b.short_description}</p>
          </section>

          {b.services.length > 0 && (
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-[Oswald] text-xl font-semibold uppercase tracking-wide">Services</h2>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {b.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-foreground/85">
                    <ArrowRight size={14} className="text-primary" /> {s}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {b.keywords.length > 0 && (
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-[Oswald] text-xl font-semibold uppercase tracking-wide">Specialities</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {b.keywords.map((k) => (
                  <span key={k} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80">
                    {k}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-6">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-[Oswald] text-lg font-semibold uppercase tracking-wide">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {b.contact_number && (
                <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> <a className="hover:text-primary" href={`tel:${b.contact_number}`}>{b.contact_number}</a></li>
              )}
              {b.email && (
                <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> <a className="hover:text-primary break-all" href={`mailto:${b.email}`}>{b.email}</a></li>
              )}
              {b.website && (
                <li className="flex items-center gap-2"><Globe size={14} className="text-primary" /> <a className="hover:text-primary break-all" href={b.website} target="_blank" rel="noopener noreferrer">{b.website.replace(/^https?:\/\//, "")}</a></li>
              )}
              {b.instagram && (
                <li className="flex items-center gap-2"><Instagram size={14} className="text-primary" /> <a className="hover:text-primary break-all" href={b.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
              )}
              {b.google_maps_url && (
                <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> <a className="hover:text-primary" href={b.google_maps_url} target="_blank" rel="noopener noreferrer">Get Directions</a></li>
              )}
            </ul>
          </section>

          {b.secondary_categories.length > 0 && (
            <section className="rounded-2xl border border-border bg-card p-6">
              <h2 className="font-[Oswald] text-lg font-semibold uppercase tracking-wide">Categories</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                  {b.primary_category}
                </span>
                {b.secondary_categories.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-secondary border border-border text-foreground/80">
                    {c}
                  </span>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </>
  );
}
