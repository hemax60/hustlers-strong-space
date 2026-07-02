
CREATE TABLE public.businesses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  business_name text NOT NULL,
  owner_name text NOT NULL,
  slug text NOT NULL UNIQUE,
  primary_category text NOT NULL,
  secondary_categories text[] NOT NULL DEFAULT '{}',
  keywords text[] NOT NULL DEFAULT '{}',
  services text[] NOT NULL DEFAULT '{}',
  description text NOT NULL DEFAULT '',
  short_description text NOT NULL DEFAULT '',
  logo_url text,
  cover_url text,
  contact_number text,
  whatsapp_number text,
  email text,
  website text,
  instagram text,
  google_maps_url text,
  city text,
  years_in_business int,
  is_active boolean NOT NULL DEFAULT true,
  is_verified boolean NOT NULL DEFAULT false,
  is_featured boolean NOT NULL DEFAULT false,
  view_count int NOT NULL DEFAULT 0
);

CREATE INDEX businesses_primary_category_idx ON public.businesses (primary_category);
CREATE INDEX businesses_keywords_gin_idx ON public.businesses USING gin (keywords);
CREATE INDEX businesses_secondary_gin_idx ON public.businesses USING gin (secondary_categories);
CREATE INDEX businesses_services_gin_idx ON public.businesses USING gin (services);
CREATE INDEX businesses_active_verified_idx ON public.businesses (is_active, is_verified);

GRANT SELECT ON public.businesses TO anon;
GRANT SELECT ON public.businesses TO authenticated;
GRANT ALL ON public.businesses TO service_role;

ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view active verified businesses"
  ON public.businesses FOR SELECT
  TO anon, authenticated
  USING (is_active = true AND is_verified = true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_businesses_updated_at
  BEFORE UPDATE ON public.businesses
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
