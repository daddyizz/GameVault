# GameVault Admin Setup
The /admin route is prepared but **will not connect until configured**. Keep the existing static catalog intact until the database is initialized.
1. Create a **dedicated** Supabase project named GameVault (do not reuse StreamPilot).
2. In its SQL Editor, review and execute `supabase/gamevault-schema.sql`. This enables row-level security and restricts writes to explicitly authorized users.
3. In Supabase Authentication, create/invite the admin email. Find the Auth user UUID. In SQL Editor, insert it into `public.gv_admins` as described in the schema.
4. Set these Vercel environment variables (Production, Preview as appropriate):
   - `NEXT_PUBLIC_SUPABASE_URL`: project URL
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: public/publishable key (never service role).
5. Redeploy, visit `/admin`, sign in, and manage database entries.
6. Disable public sign-ups or otherwise control who can register; authorization still requires a `gv_admins` record.
**Important:** The landing page and existing game detail pages currently use the built-in static catalog. Database game publishing to the public site is a separate integration step; /admin saves to Supabase now once configured.
Never add a service role key to NEXT_PUBLIC environment variables. Check RLS policies and test an unauthorized account before production use.
