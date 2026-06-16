
CREATE TABLE public.franchise_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  full_name TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  investment_capacity TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'New'
);

GRANT INSERT ON public.franchise_leads TO anon, authenticated;
GRANT ALL ON public.franchise_leads TO service_role;

ALTER TABLE public.franchise_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit franchise leads"
  ON public.franchise_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
