---
name: instagram-portfolio
description: >-
  Turn an Instagram username or profile URL into a new Vite/React/TypeScript/Tailwind
  dark portfolio site (Jade-style). Use when the user shares an Instagram handle,
  @username, instagram.com URL, or asks for an IG/creator portfolio, brand site,
  or “do what we did for Jade” for another creator.
---

# Instagram → React portfolio

Given one Instagram username, research the public profile and scaffold a content-driven dark portfolio under `react_projects/`.

Reference patterns: [reference.md](reference.md). Example app: `react_projects/vegan-athlete-porfolio`.

## Hard defaults

| Item | Value |
|------|--------|
| Parent dir | `react_projects/` (or cwd if already inside it) |
| Folder | `<handle>-portfolio` (lowercase, hyphens only) |
| Stack | Vite + React + TS + Tailwind v4 + framer-motion + lucide-react |
| Package manager | **pnpm** (`packageManager: pnpm@12.8.1`) |
| Theme | Dark-only — no light toggle |
| Data | `src/data/site.ts`, `content.ts`, `nav.ts` |
| Deploy stub | `netlify.toml` → `pnpm run build`, publish `dist` |

## Progress checklist

Copy and track:

```
- [ ] 1. Normalize handle
- [ ] 2. Research public Instagram
- [ ] 3. Infer brand pitch + sections
- [ ] 4. Scaffold with pnpm
- [ ] 5. Implement shell UI
- [ ] 6. Fill site/content/nav from research
- [ ] 7. Download HQ images, playable reels + favicon
- [ ] 8. Verify build + mobile
- [ ] 9. Hand off path + dev URL
```

## 1. Normalize handle

From `@name`, `https://www.instagram.com/name/`, or bare `name` → `username` (no `@`).

Reject private / missing profiles. Do not invent posts.

## 2. Research public Instagram

Use Chrome DevTools or Safari browser MCP:

1. Open `https://www.instagram.com/<username>/`
2. Capture bio, display name, follower vibe, pinned posts, recent posts/reels
3. For each keep: post/reel URL, caption gist, best still URL
4. If login-walled: use public post pages + `og:image` / meta image URLs — never fabricate content

Capture real reel URLs, descriptions, posters, and publicly accessible video sources. Include a dedicated Reels section when reels are available; keep the photo hero unless requested otherwise. Use supported browser tools available in the session.

Prefer original post-page images or the largest observed `srcset` candidates over profile-grid thumbnails. Skip frames with burned-in Instagram caption UI when used as hero.

## 3. Infer brand pitch

From bio + captions, define:

- Brand / short name / tagline
- Niche (athlete, chef, designer, …)
- Section set (adapt labels — not always HYROX):

Typical: **Hero → Story → Focus → Places → Reels → Lookbook → Brands → Footer**

Mobile bottom nav: 5 items (Home + 4 sections). Desktop top nav may include Places even if Places is omitted from the bottom bar.

## 4. Scaffold

```bash
cd <react_projects>
pnpm create vite@latest <handle>-portfolio --template react-ts
cd <handle>-portfolio
pnpm install
pnpm add framer-motion lucide-react
pnpm add -D tailwindcss @tailwindcss/vite
```

Set `"packageManager": "pnpm@12.8.1"` in `package.json`. Wire Tailwind v4 via `@tailwindcss/vite` in `vite.config`. Add:

```toml
# netlify.toml
[build]
  command = "pnpm run build"
  publish = "dist"
```

## 5. Implement shell

Build components (see [reference.md](reference.md)):

- `Navbar` (brand + desktop links + Work with me → `#brands`)
- `Hero` (full-bleed image, brand-first type, CTAs)
- `About` / Focus / Places / Reels / Gallery / Brands / `Footer`
- `MobileBottomNav` — Lucide icons, `fixed` + `md:hidden`, safe-area, IntersectionObserver active state
- `index.css` — dark tokens on `:root`, hide Netlify badge:

```css
#nl-badge,
#nl-badge-frame,
iframe[src*='app.netlify.com/scripts/hud'] {
  display: none !important;
  visibility: hidden !important;
  pointer-events: none !important;
  width: 0 !important;
  height: 0 !important;
  opacity: 0 !important;
}
```

`main` needs bottom padding for the mobile bar: `pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0`.

## 6. Fill data

Write research into `site.ts` / `content.ts` / `nav.ts`. Every image that represents a post must `href` to the real `/p/…` or `/reel/…` URL. Rewrite first-person captions into third-person brand pitch. Soften sensitive personal details unless the user asks to keep them.

## 7. Assets

- Save stills under `public/images/` with clear kebab names. Inspect actual dimensions: target ≥1600px width for the desktop hero and ≥1080px width for journal photos where publicly available. Never upscale thumbnails or claim unavailable resolution.
- Download originals from public post pages or the largest observed `srcset` candidates. Generate smaller responsive WebP variants with accurate pixel-width descriptors and layout-specific `sizes`, preserving originals and framing. Prioritize the hero; lazy-load below-fold photos.
- Save publicly accessible reels locally under `public/videos/`, with posters and original Instagram links. Prefer complete playable files to expiring CDN hotlinks or embeds, which cannot reliably guarantee autoplay. For separate video/audio tracks, obtain complete observed resources, combine to browser-compatible MP4, and verify decoding and audio. Do not mistake range fragments for full videos.
- Reels play muted, inline, and looping only while mostly visible; pause offscreen and on hidden tabs. Provide keyboard-accessible play/pause and sound controls, preserve manual pause, respect reduced motion with manual playback, and handle rejected `play()` promises.
- If public video acquisition or playback fails, show the poster and working Instagram link without fake playback controls. See [reference.md](reference.md) for the reel type and playback guidance.
- Hero = strongest brand still (face/action readable under overlay); avoid caption burn-in
- Favicon: square crop of hero → `public/favicon.png` (+ optional `apple-touch-icon.png`); link from `index.html`

## 8. Verify

```bash
pnpm run build
pnpm run dev -- --host 127.0.0.1
```

Mobile ~390px: hero readable, no caption clash or horizontal overflow, bottom nav jumps to sections, no theme toggle. Check image dimensions and loading. Verify reel autoplay muted when visible, pause offscreen/hidden, manual controls and persistent pause, reduced motion, rejected autoplay, and failed-media poster/link fallbacks. Report inaccessible or lower-resolution media honestly.

## 9. Hand off

Report: project path, handle used, `pnpm run dev` URL. Do **not** git commit, push, or Netlify-deploy unless asked.

## Design rules (non-negotiable)

- Brand-first hero; one composition; no dashboard clutter in first viewport
- Real photos as the visual anchor — not abstract purple gradients
- Expressive fonts (not Inter/Roboto/Arial); CSS variables for color
- Dark-only; Lucide for bottom nav
- No cards in the hero

## Out of scope

Private accounts, inventing posts, auto-deploy, replacing an existing portfolio unless the user asks to rebuild it.
