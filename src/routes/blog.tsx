import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { POSTS, type Post } from "@/lib/blog-posts";
import { ChevronDown, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Fitness & Health Blog — Hustlers Health & Fitness, Surat" },
      { name: "description", content: "Fitness, strength training, weight management, and healthy-lifestyle articles from the coaches at Hustlers Health & Fitness, Adajan, Surat." },
      { property: "og:title", content: "Fitness & Health Blog — Hustlers Health & Fitness" },
      { property: "og:description", content: "Expert articles on training, nutrition, mindset, and long-term health." },
    ],
  }),
  component: BlogPage,
});

function renderBody(body: string) {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={i} className="mt-8 font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
          {trimmed.replace(/^##\s+/, "")}
        </h3>
      );
    }
    if (/^[-*]\s+/.test(trimmed)) {
      const items = trimmed.split(/\n/).map((l) => l.replace(/^[-*]\s+/, ""));
      return (
        <ul key={i} className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
          {items.map((it, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: it.replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }} />
          ))}
        </ul>
      );
    }
    return (
      <p
        key={i}
        className="mt-4 text-muted-foreground leading-relaxed"
        dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.+?)\*\*/g, "<strong class='text-foreground'>$1</strong>") }}
      />
    );
  });
}

function ExpandablePost({ post, featured = false }: { post: Post; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`bg-card border border-border rounded-xl overflow-hidden transition ${
        open ? "border-primary/60" : "hover:border-primary/60"
      } ${featured ? "" : "flex flex-col"}`}
    >
      <div className={featured ? "grid md:grid-cols-2 gap-0 items-stretch" : ""}>
        <div className={`overflow-hidden ${featured ? "aspect-[4/3] md:aspect-auto md:h-full" : "aspect-[16/10]"}`}>
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        </div>
        <div className={featured ? "p-6 sm:p-10" : "p-6 flex flex-col flex-1"}>
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            {featured ? `Featured · ${post.readingTime}` : post.readingTime}
          </span>
          <h2
            className={`mt-3 font-display font-bold uppercase leading-tight ${
              featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg"
            }`}
          >
            {post.title}
          </h2>
          {!open && (
            <p className={`mt-4 text-muted-foreground ${featured ? "" : "text-sm line-clamp-3 flex-1"}`}>
              {post.excerpt}
            </p>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-5 self-start inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-md font-bold uppercase tracking-wider text-xs shadow-red hover:opacity-95 transition"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="px-6 sm:px-10 pb-8 pt-2 border-t border-border mt-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-3xl mx-auto">{renderBody(post.body)}</div>
          <div className="mt-8 max-w-3xl mx-auto flex flex-col sm:flex-row gap-3">
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm shadow-red hover:opacity-95 transition"
            >
              <MessageCircle size={16} /> Train with us
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wider text-sm transition"
            >
              Collapse article
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />

      <section className="pt-32 sm:pt-40 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <span className="text-primary font-semibold uppercase tracking-widest text-sm">Blog</span>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-balance">
            Fitness, Strength & <span className="text-primary">Healthy Living</span>
          </h1>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Honest, practical articles from the coaches at Hustlers Health & Fitness — written to help
            you train smarter, recover better, and build a stronger lifestyle for the long term.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <ExpandablePost post={featured} featured />
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <ExpandablePost key={post.slug} post={post} />
          ))}
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
            <Link to="/" hash="contact" className="inline-flex items-center justify-center gap-2 border-2 border-foreground/30 hover:border-primary hover:text-primary text-foreground px-7 py-4 rounded-md font-bold uppercase tracking-wider transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
