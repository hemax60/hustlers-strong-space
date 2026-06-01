import { createFileRoute, Link } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { POSTS } from "@/lib/blog-posts";
import { ArrowRight, MessageCircle } from "lucide-react";
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
          <Link to="/blog/$slug" params={{ slug: featured.slug }} className="group grid md:grid-cols-2 gap-8 items-center bg-card border border-border rounded-xl overflow-hidden hover:border-primary/60 transition">
            <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
              <img src={featured.cover} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <div className="p-6 sm:p-10">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">Featured · {featured.readingTime}</span>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase leading-tight group-hover:text-primary transition">
                {featured.title}
              </h2>
              <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-sm text-primary">
                Read article <ArrowRight size={16} />
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/60 transition flex flex-col"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={post.cover} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs uppercase tracking-widest text-primary/90 font-semibold">{post.readingTime}</span>
                <h3 className="mt-3 font-display text-lg font-bold uppercase leading-snug group-hover:text-primary transition">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-3 flex-1">{post.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-xs text-primary">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
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
