-- GameVault public cover images; only authenticated GameVault admins may upload.
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('gamevault-covers','gamevault-covers',true,5242880,array['image/jpeg','image/png','image/webp'])
on conflict (id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
create policy "gamevault admin cover upload" on storage.objects
for insert to authenticated
with check (bucket_id='gamevault-covers' and exists (select 1 from public.gv_admins where user_id=(select auth.uid())));
create policy "gamevault admin cover delete" on storage.objects
for delete to authenticated
using (bucket_id='gamevault-covers' and exists (select 1 from public.gv_admins where user_id=(select auth.uid())));
