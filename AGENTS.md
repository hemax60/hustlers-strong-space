# Project conventions
- Content pages use TanStack file routes with route-level metadata and existing site Header, Footer and FloatingWhatsApp components to preserve the shared visitor experience.
- Maintain the existing static public sitemap when adding public pages; omit lastmod without authoritative page-specific content timestamps.
- Dedicated blog articles use unnested blogs_ route filenames so they render independently of the existing accordion listing without changing its layout or other items.
- Short Google post republications use the separate Fitness Updates route, linked from Blogs, to keep updates distinct from long-form articles.