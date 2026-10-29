# GameVault v1.0 release acceptance checklist

Run this checklist only after the bundled deployment is READY. Keep test data in Draft until every applicable check passes.

## 1. Admin and security
- [ ] Log in with authorized admin account: editor and catalog appear.
- [ ] Log out: editor disappears.
- [ ] Non-admin Supabase account: access restricted; cannot read drafts or change records.
- [ ] Existing PUBG Mobile (Published) and PUBG Mobile (Copy) (Draft) remain unchanged.
- [ ] Create, edit, Duplicate as Draft, preview, publish, unpublish and Cancel Delete all work.
- [ ] Use the manual official-link check control to inspect URLs. Replace placeholder links before launch.
- [ ] Image uploads, screenshot ordering, use-as-cover, storage scan and statistics work.
- [ ] Storage cleanup remains NOT TESTED unless explicitly approved.

## 2. Bulk publication (no destructive bulk deletion)
- [ ] Select a Published and a Draft game using checkboxes.
- [ ] Cancel the PUBLISH confirmation: no records change.
- [ ] Cancel the UNPUBLISH confirmation: no records change.
- [ ] If approved, complete one bulk status change and verify in Supabase.
- [ ] Selection clears after success, and Published/Draft tabs reflect results.

## 3. Catalog
- [ ] Edit one Draft and set Featured and Display order, then Save.
- [ ] When deliberately published, Featured and Display order affect its home placement.
- [ ] Genre, platform, search and A-Z sorting all filter expected games.
- [ ] Download link opens the intended official, authorized provider (manual review).
- [ ] Gallery, primary cover, metadata, canonical URL and Open Graph remain accurate.
- [ ] Admin page remains noindex; sitemap excludes drafts.

## 4. Responsive design
- [ ] Mobile: no horizontal scrolling or overlapping buttons; game names do not stack letter by letter.
- [ ] Tablet: Admin panel layout and image cards retain readable widths.
- [ ] Desktop: admin editor LEFT, database games RIGHT; dashboard spans full width.
- [ ] Home, game details, search/filter, player-less external download and image gallery work.

## 5. Final SEO, performance and safety
- [ ] Confirm Search Console verification and sitemap submitted.
- [ ] Run fresh mobile and desktop PageSpeed; baseline mobile 89/96/100/100.
- [ ] Review missing / incorrect cover images, 404 games, placeholder links and license claims.
- [ ] Security advisor: leaked password protection warning outstanding; enable in Supabase Auth settings when supported.
- [ ] No service role credentials in client bundle or repository.
- [ ] Production Vercel deployment READY; review logs for runtime errors.

## Release rule
Mark GameVault v1.0 STABLE only when all required acceptance checks pass. This checklist is not evidence of user testing by itself.
