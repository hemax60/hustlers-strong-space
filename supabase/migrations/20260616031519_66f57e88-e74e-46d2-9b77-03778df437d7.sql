
DROP POLICY "Anyone can submit franchise leads" ON public.franchise_leads;

CREATE POLICY "Anyone can submit franchise leads"
  ON public.franchise_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 2 AND 120
    AND length(mobile_number) BETWEEN 6 AND 20
    AND length(email) BETWEEN 5 AND 160
    AND email LIKE '%_@_%.__%'
    AND length(city) BETWEEN 2 AND 80
    AND length(investment_capacity) BETWEEN 2 AND 80
    AND length(message) BETWEEN 5 AND 2000
    AND status = 'New'
  );
