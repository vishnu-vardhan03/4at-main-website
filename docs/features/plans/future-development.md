# Future Development — Deferred Work & Good-to-Haves

Canonical log of everything deliberately pushed beyond current scope: separate tickets, later phases, future enhancements, and nice-to-haves. Source plans link here instead of carrying their own deferral lists.

---

## Academy form persistence & wiring (register + inquiry)

- **Type**: Separate ticket
- **Source**: Plan "Restore persistence (live path), UI skill, perf wins" — `~/.claude/plans/sharded-sauteeing-puppy.md`; xhigh code review of commit `fdeda37` (2026-07-24)
- **Status**: Idea
- **What**: The two academy API endpoints are still DB-stubbed and their forms are orphaned. Fix + wire end-to-end:
  - `src/app/api/academy-register/route.ts` — persists nothing (`{ id: null }` stub) yet returns 201 (finding #1); duplicate email/username guard hard-coded `existingUser = null` so the 409 branch is dead (finding #4); `bcrypt.hash` runs then result is discarded (finding #6); remove stub/`void` scaffolding.
  - `src/app/api/academy-inquiry/route.ts` — echoes input back and returns 201, persists nothing (finding #3).
  - `src/components/academy/RegisterForm.tsx` and `src/components/contact/ContactPage.tsx` `handleSubmit` currently **simulate** success (no `fetch`) — wire them to their endpoints.
  - `/api/academy-inquiry` has **no** form feeding it — decide whether to add one or remove the endpoint.
- **Why deferred**: Current scope was "live path only" — only `/api/contact` (the lead-collection widget) actually loses live data. The academy routes have zero UI callers, so they lose nothing today.
- **Links / deps**: DB is already reconnected — the restored `prisma/schema.prisma` includes the `Registration` and `Inquiry` models, so this ticket is DB-ready. Once done, re-run `ReportFindings` marking these findings resolved.
- **Approach**: Mirror the `/api/contact` fix — `import { prisma }`, replace the stub with `prisma.registration.create(...)` / `prisma.inquiry.create(...)`, restore the `findFirst` duplicate check in register, keep the bcrypt hash as `passwordHash`, then add real `fetch` calls in the two forms.

---

## Media compression (served hero video + large source PNGs)

- **Type**: Good-to-have
- **Source**: Plan "Restore persistence (live path), UI skill, perf wins" — performance workstream (2026-07-24)
- **Status**: Idea
- **What**: Re-encode `public/hero-bg.mp4` (11.85 MB, autoplayed by `ProductHero`) to a smaller bitrate + add a poster/lazy-load; optionally downscale multi-MB source PNGs (`src/assets/team-photo.png` ~7.5 MB, exec portraits ~2 MB, `public/Generated_Assets/globe.png` 6.25 MB, `stairway.png` 5.55 MB).
- **Why deferred**: `ffmpeg` is not available in the current environment, so video re-encoding can't be done here. The large PNGs are already runtime-optimized by `next/image` (they're statically imported), so downscaling them is repo-hygiene, not a user-facing win.
- **Links / deps**: The ~163 MB of dead/duplicate videos was already deleted in the perf workstream.
- **Approach**: `ffmpeg -i hero-bg.mp4 -vcodec libx264 -crf 28 -preset slow -an hero-bg.min.mp4` (tune CRF); consider a WebM alt source; add `poster=` + `preload="none"` on the `<video>`.

---
