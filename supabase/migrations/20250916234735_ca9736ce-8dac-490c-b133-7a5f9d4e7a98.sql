-- Create table for contact form submissions
create extension if not exists pgcrypto;

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamp with time zone not null default now(),
  name text not null,
  phone text not null,
  email text,
  service_type text not null,
  device_details text,
  issue_description text not null,
  preferred_contact_time text
);

-- Ensure RLS is enabled and allow anonymous inserts
alter table public.contact_submissions enable row level security;

drop policy if exists "Anyone can insert contact submissions" on public.contact_submissions;
create policy "Anyone can insert contact submissions"
  on public.contact_submissions
  for insert
  to public
  with check (true);

-- Optional index for ordering
create index if not exists idx_contact_submissions_created_at on public.contact_submissions(created_at desc);