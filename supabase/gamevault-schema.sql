-- GameVault database setup. Run ONLY inside a dedicated GameVault Supabase project.
create table if not exists public.gv_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
create table if not exists public.gv_games (
  id text primary key check (id ~ '^[a-z0-9-]{2,64}$'),
  title text not null check(length(title)>0),
  genre text not null,
  description text not null,
  download_url text not null check (download_url ~ '^https://'),
  cover_url text not null default '' check (cover_url = '' or cover_url ~ '^https://'),
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.gv_admins enable row level security;
alter table public.gv_games enable row level security;
revoke all on public.gv_admins from anon, authenticated;
grant select,insert,update,delete on public.gv_games to authenticated;
grant select on public.gv_games to anon;
drop policy if exists "gv public published" on public.gv_games;
create policy "gv public published" on public.gv_games for select to anon,authenticated using (published=true);
drop policy if exists "gv admin see drafts" on public.gv_games;
create policy "gv admin see drafts" on public.gv_games for select to authenticated using (exists(select 1 from public.gv_admins where user_id=(select auth.uid())));
drop policy if exists "gv admin insert" on public.gv_games;
create policy "gv admin insert" on public.gv_games for insert to authenticated with check (exists(select 1 from public.gv_admins where user_id=(select auth.uid())));
drop policy if exists "gv admin update" on public.gv_games;
create policy "gv admin update" on public.gv_games for update to authenticated using (exists(select 1 from public.gv_admins where user_id=(select auth.uid()))) with check (exists(select 1 from public.gv_admins where user_id=(select auth.uid())));
drop policy if exists "gv admin delete" on public.gv_games;
create policy "gv admin delete" on public.gv_games for delete to authenticated using (exists(select 1 from public.gv_admins where user_id=(select auth.uid())));
-- Bootstrap admin: create a user in Supabase Auth then run using its UUID:
-- insert into public.gv_admins (user_id) values ('YOUR_AUTH_USER_UUID');
-- No browser/client user can modify gv_admins; provisioning is SQL-only.
