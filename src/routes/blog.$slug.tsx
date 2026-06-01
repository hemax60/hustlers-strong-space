import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";
import { getPost, POSTS } from "@/lib/blog-posts";
import { SITE } from "@/lib/site-config";
import { ArrowLeft, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article not found" }] };
    return {
      meta: [
        { title: `${post.title} — Hustlers Health & Fitness` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Header />
      <section className="pt-40 pb-20 text-center">
        <h1 className="font-display text-4xl font-bold uppercase">Article not found</h1>
        <p className="mt-4 text-muted-foreground">It may have moved. Browse all articles below.</p>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider">
          <ArrowLeft size={16} /> All articles
        </Link>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

/** Render simple plain-text body with "## " headings and blank-line paragraphs. */
function ArticleBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  return (
    <div className="prose-custom">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-12 mb-4 font-display text-2xl sm:text-3xl font-bold uppercase text-foreground">
              {block.replace(/^##\s+/, "")}
            </h2>
          );
        }
        if (block.startsWith("- ") || block.startsWith("* ")) {
          const items = block.split(/\n/).map((l) => l.replace(/^[-*]\s+/, ""));
          return (
            <ul key={i} className="mt-4 mb-4 list-disc pl-6 space-y-2 text-foreground/85">
              {items.map((it, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: inlineMd(it) }} />
              ))}
            </ul>
          );
        }
        if (/^\d+\.\s/.test(block)) {
          const items = block.split(/\n/).map((l) => l.replace(/^\d+\.\s+/, ""));
          return (
            <ol key={i} className="mt-4 mb-4 list-decimal pl-6 space-y-2 text-foreground/85">
              {items.map((it, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: inlineMd(it) }} />
              ))}
            </ol>
          );
        }
        if (block.startsWith("|")) {
          // simple markdown table
          const rows = block.split(/\n/).filter((r) => r.includes("|"));
          const cells = rows.map((r) => r.split("|").slice(1, -1).map((c) => c.trim()));
          const [head, , ...body] = cells;
          return (
            <div key={i} className="my-6 overflow-x-auto">
              <table className="w-full text-sm border border-border rounded-md overflow-hidden">
                <thead className="bg-card">
                  <tr>{head.map((c, j) => <th key={j} className="text-left p-3 border-b border-border font-semibold">{c}</th>)}</tr>
                </thead>
                <tbody>
                  {body.map((row, j) => (
                    <tr key={j} className="border-b border-border last:border-0">
                      {row.map((c, k) => <td key={k} className="p-3 text-foreground/85">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={i} className="mt-5 text-foreground/85 leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineMd(block) }} />
        );
      })}
    </div>
  );
}

function inlineMd(s: string) {
  return s
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-foreground">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-background text-foreground">
      <Header />

      <article className="pt-32 sm:pt-40 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition">
            <ArrowLeft size={14} /> All articles
          </Link>
          <h1 className="mt-6 font-display text-3xl sm:text-5xl font-bold uppercase leading-tight text-balance">
            {post.title}
          </h1>
          <div className="mt-4 text-xs uppercase tracking-widest text-primary font-semibold">
            {post.readingTime} · Hustlers Health & Fitness
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8 mt-10">
          <div className="aspect-[16/9] overflow-hidden rounded-xl border border-border">
            <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 sm:px-8 mt-12">
          <ArticleBody body={post.body} />

          <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-red text-primary-foreground shadow-red">
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">Start Training With Us</h3>
            <p className="mt-3 opacity-95">
              Come visit Hustlers Health & Fitness in Adajan, Surat. We'll help you turn what you just
              read into a plan that fits your body and your life.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-background/90 transition">
                <MessageCircle size={18} /> WhatsApp Now
              </a>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/50 text-primary-foreground px-6 py-3 rounded-md font-bold uppercase tracking-wider hover:bg-primary-foreground/10 transition">
                <Phone size={18} /> Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </article>

      <section className="py-16 border-t border-border bg-card/40">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase">Keep Reading</h3>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/60 transition flex flex-col">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-widest text-primary/90 font-semibold">{p.readingTime}</span>
                  <h4 className="mt-2 font-display text-base font-bold uppercase leading-snug group-hover:text-primary transition">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
