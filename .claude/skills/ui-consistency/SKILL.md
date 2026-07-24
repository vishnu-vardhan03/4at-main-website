---
name: ui-consistency
description: Design-system rules for the 4AT website so any new or edited UI matches what already exists. Consult BEFORE writing JSX/CSS for a new component, section, or page, before adding a button/card/input, before picking colors/spacing/radii, and before adding animation. Covers where the Tailwind v4 tokens live, the route-scoped theming model, the brand palette, which existing utilities/primitives to reuse, and how Nav/Footer are composed. Triggers on "new component", "new section", "new page", "add a button/card/form", "style this", "match the design", "make it consistent", "build a UI", or any transition into writing or editing UI code.
---

# 4AT UI consistency

Rules for building UI that looks like the rest of this site. **Trust the code, not the docs** —
`DESIGN_SYSTEM.md` and `UI_AND_PAGE_STRUCTURE.md` are useful background but partly aspirational
(they describe light-mode editorial layouts and a `#0a0e23` base that the live tokens don't use).
The source of truth is `src/app/globals.css` and the components under `src/components/`.

## 1. Where the tokens live — Tailwind **v4**, CSS-first

Design tokens are defined in **`src/app/globals.css`** inside the `@theme` block and `:root`
(colors, radii, fonts, section spacing). This is a **Tailwind v4** project — add/extend tokens
**there**, not in `tailwind.config.ts` (that file is legacy v3 leftover and largely **stale/vestigial** under v4).

## 2. Theming = route-scoped wrapper classes (no theme provider)

The site is **always dark**. There is **no `next-themes`, no ThemeProvider, no runtime toggle**.
"Theming" happens by wrapping each route's page root in a class that **redefines the CSS variables**:
`.home-page`, `.services-page`, `.product-page`, `.academy-page`, `.about-page`.

- A new page should pick/define a wrapper class and set its tokens, following the existing pattern
  in `globals.css` (`.services-page { ... }`) or the per-route CSS (`src/styles/academy.css`,
  `src/app/product/product.css`).
- Don't hardcode a one-off background/foreground on a page — override the CSS vars on the wrapper.

## 3. Brand palette (memorize)

- **Canvas:** `#04060f` (base dark background)
- **Brand gradient:** teal `#2dd4bf` → sky `#7dd3fc` → violet `#a78bfa` → light-violet `#c084fc`
- **Accent text on dark:** `#7dd3fc`
- **Borders:** `border-white/10` (also `/8`, `/12`, `/20` on hover)
- **Glass fills:** `bg-white/[0.03]`–`bg-white/[0.06]` + `backdrop-blur`

Use the gradient via the existing helper classes below rather than re-writing the stops.

## 4. Reuse what exists — don't re-derive spacing/type/effects

**`@utility` classes (in `globals.css`)** — use these for layout & type:
- `site-section` → `py-14 md:py-24 px-6 md:px-12 lg:px-20` (standard section frame)
- `site-hero-heading`, `site-heading`, `site-subheading` (type scale)
- `section-badge`, `no-scrollbar`, `site-section-y`

**Helper classes:** `.glass`, `.glass-card`, `.text-brand-gradient`, `.text-brand-gradient-flow`,
`.text-brand-accent`, `.eyebrow`, `.bg-grid`, `.constant-site-background`.

**Layout constants:**
- Container widths: `max-w-7xl` (standard, 1280px), `max-w-6xl` (footer), `max-w-5xl` (focused).
- Section padding triad recurs literally: `px-6 md:px-12 lg:px-20`.
- Radii: cards `rounded-2xl` / `rounded-[20px]`, pills & badges `rounded-full`, inputs `rounded-lg`
  (tokens: `--radius: 0.75rem`, `--radius-card: 20px`, `--radius-frame: 28px`, `--radius-pill: 999px`).
- Colored glow shadows: `shadow-[0_12px_30px_rgba(125,211,252,0.25)]`; ambient
  `shadow-[0_28px_80px_rgba(0,0,0,.55)]`.

## 5. Components, variants, forms, icons, motion

- **No shared `Button`/`Card` primitive.** Variants are hand-rolled with **`cn()`**
  (`src/lib/utils.ts` = clsx + tailwind-merge) and boolean class strings — **no `cva`**. Follow the
  pattern in `src/components/academy/Button.tsx` (a `sizeClasses` record + `cn(base, cond && "...", size)`).
- **Cards** are expressed as classes (`.glass`, `.glass-card`), not a React `<Card>`.
- **Forms:** reuse `src/components/lead-collection/FormFields.tsx` (`TextField`, `SelectField`,
  `TextareaField`). Canonical input style: `w-full rounded-lg border border-white/10 bg-white/[0.04]
  px-4 py-3 text-sm text-white placeholder-white/25 focus:border-[#7dd3fc]/60 focus:ring-1
  focus:ring-[#7dd3fc]/25`. Labels `text-[11px] font-bold uppercase tracking-widest text-white/45`,
  errors `text-red-400`.
- **Icons:** `lucide-react` (named imports) + the custom finance SVG set in `src/components/ui/Glyph.tsx`.
- **Motion:** `framer-motion`. Use the shared `src/components/ui/Reveal.tsx` for scroll-in; standard
  easing is `[0.22, 1, 0.36, 1]`. Academy uses GSAP + Lenis (via its layout) — don't add a new
  animation engine.
- **Hovers:** use the **`hover-fine:`** (and `group-hover-fine:`) custom variants so hover effects only
  fire on real pointers (touch-safe). Typical hover: `hover-fine:-translate-y-0.5 transition duration-300 ease-out`.

## 6. Layout composition — Nav/Footer are per-page

The root `src/app/layout.tsx` does **NOT** render Nav or Footer. Each `*Page` root component composes
its own chrome:

```tsx
export default function HomePage() {
  return (
    <div className="home-page constant-site-background min-h-screen text-white">
      <Nav />           {/* src/components/layout/MainNav.tsx, exported as Nav */}
      <main>{/* sections */}</main>
      <Footer />        {/* src/components/layout/Footer.tsx */}
      <FloatingWidget />
    </div>
  );
}
```

A **new page must** include its wrapper class + `<Nav/>` + `<Footer/>` itself. Product & Academy have
their own `layout.tsx` (wrapper class, fonts, effects); Home/About/Services/Contact do not.

## 7. Fonts

- **Body/display font = Space Grotesk**, loaded via `next/font` in the root layout and bound to
  `--font-display` (used by `body`). Don't re-introduce a Google Fonts `@import` (render-blocking).
- **Geist** (`--font-geist-sans`) is used by `MainNav`. Academy also loads **Cormorant Garamond** for
  serif accents. Reference these via their CSS variables, e.g. `font-[family-name:var(--font-geist-sans)]`.
- Don't reference fonts that aren't loaded (e.g. a bare `Inter`) — it silently falls back.

## 8. Known debt (flag, don't copy)

- `tailwind.config.ts` is stale under Tailwind v4 — extend `@theme` in `globals.css` instead.
- `TiltCard` is triplicated (`ui/`, `home/`, `services/`) — reuse `ui/TiltCard.tsx`, don't add a 4th.
- Two inline `<style dangerouslySetInnerHTML>` blocks exist for keyframes; prefer `globals.css` keyframes.

## 9. Pre-flight checklist for any UI change

1. Is it inside the right route **wrapper class** (`.home-page` / `.services-page` / …)?
2. Did I reuse `site-section` / `site-heading` / `.glass` etc. instead of re-deriving spacing/type?
3. Are colors from the **brand palette** (canvas `#04060f`, gradient teal→sky→violet, accent `#7dd3fc`,
   `border-white/10`)?
4. Variants via **`cn()`** (not cva); inputs via **FormFields**; icons via **lucide-react/Glyph**.
5. Motion via **framer-motion `Reveal`** with easing `[0.22,1,0.36,1]`; hovers use **`hover-fine:`**.
6. New page includes its **wrapper class + `<Nav/>` + `<Footer/>`**.
