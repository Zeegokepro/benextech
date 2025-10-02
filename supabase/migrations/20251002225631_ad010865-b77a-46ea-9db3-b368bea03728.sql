-- Add RLS policies for UPDATE and DELETE on contact_submissions
-- Contact submissions should be immutable and only admins can modify/delete them

-- Prevent unauthorized UPDATE operations
CREATE POLICY "Only admins can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Prevent unauthorized DELETE operations
CREATE POLICY "Only admins can delete contact submissions"
  ON public.contact_submissions
  FOR DELETE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));