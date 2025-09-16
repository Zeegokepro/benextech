-- Create user roles system for secure access control
create type if not exists public.app_role as enum ('admin', 'staff', 'user');

-- Create user_roles table
create table if not exists public.user_roles (
    id uuid primary key default gen_random_uuid(),
    user_id uuid references auth.users(id) on delete cascade not null,
    role app_role not null default 'user',
    created_at timestamp with time zone not null default now(),
    unique (user_id, role)
);

-- Enable RLS on user_roles
alter table public.user_roles enable row level security;

-- Create security definer function to check roles (prevents RLS recursion)
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Create function to check if user is admin or staff
create or replace function public.is_authorized_staff(_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role in ('admin', 'staff')
  )
$$;

-- Add SELECT policy to contact_submissions - only authorized staff can read
create policy "Only authorized staff can read contact submissions"
  on public.contact_submissions
  for select
  to authenticated
  using (public.is_authorized_staff(auth.uid()));

-- Add RLS policies for user_roles table
create policy "Users can view their own roles"
  on public.user_roles
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "Admins can view all roles"
  on public.user_roles
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Create default admin user (replace with actual admin user ID when available)
-- This is commented out - you'll need to create an admin account first
-- insert into public.user_roles (user_id, role) 
-- values ('YOUR_ADMIN_USER_ID_HERE', 'admin');