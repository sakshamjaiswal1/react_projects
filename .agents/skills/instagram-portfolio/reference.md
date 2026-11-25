# Instagram portfolio — reference

Patterns distilled from `react_projects/vegan-athlete-porfolio`. Adapt section **names** to the creator; keep the **structure**.

## File map

```
src/
  App.tsx
  index.css
  main.tsx
  data/
    site.ts      # brand, handle, urls, tagline
    content.ts   # about, focus, places, gallery, brands, heroMedia
    nav.ts       # mobileNavItems + desktopNavItems
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Focus.tsx          # Jade: Hyrox.tsx — rename to niche
    Places.tsx
    Reels.tsx          # Real public video, hosted locally
    Gallery.tsx        # Lookbook
    Brands.tsx
    Footer.tsx
    MobileBottomNav.tsx
public/
  images/
  videos/
  favicon.png
  apple-touch-icon.png
netlify.toml
```

## `site.ts` shape

```ts
export const site = {
  brand: 'Display Name',
  shortBrand: 'Short',
  handle: '@username',
  instagramUrl: 'https://www.instagram.com/username/',
  email: '', // verified public address only; otherwise omit
  tagline: 'WORD · WORD · WORD',
} as const
```

## `content.ts` shapes

```ts
export type GalleryItem = {
  id: string
  src: string       // '/images/….jpg'
  caption: string
  alt: string
  href: string      // Instagram post/reel URL
}

export type Place = {
  id: string
  name: string
  location: string
  blurb: string
  image: string
  href: string
}

export const about = {
  eyebrow: string
  title: string
  body: string[]    // 2–3 short paragraphs
  image: string
  href: string
}

export const focus = {
  eyebrow: string
  title: string
  lead: string
  backgroundImage?: string
  backgroundHref?: string
  highlights: { title: string; text: string; image: string; href: string }[]
  quote?: string
}

export const places: Place[]
export const gallery: GalleryItem[]

export const brands = {
  eyebrow: string
  title: string
  lead: string
  featured?: {
    brand: string
    label: string
    quote: string
    image: string
    href: string
    caption: string
  }
  fits: { title: string; text: string }[]
  audience: string[]
}

export const heroMedia = {
  image: string
  href: string
}
```

## `nav.ts` shape

```ts
export type NavItem = {
  href: string        // '#about'
  label: string
  shortLabel: string  // bottom bar (short)
  sectionId: string   // element id without #
}

// Mobile: exactly 5 (Home + 4). Desktop: can include Places.
export const mobileNavItems: NavItem[]
export const desktopNavItems: NavItem[]
```

Section `id`s must match: `top`, `about`, focus id, `places`, `lookbook`, `brands`.

## Instagram URLs

| Kind | Pattern |
|------|---------|
| Profile | `https://www.instagram.com/<user>/` |
| Post | `https://www.instagram.com/<user>/p/<code>/` or `/p/<code>/` |
| Reel | `https://www.instagram.com/<user>/reel/<code>/` or `/reel/<code>/` |

Always store absolute `https://` links on media.

## Image conventions

- Path: `/images/<kebab>.jpg` (or `.png` / `.webp`)
- Hero: high contrast subject, no IG caption chrome in-frame
- Overlay: strong bottom gradient so type sits on a wash (`--hero-overlay` + `bg-gradient-to-t`)
- Favicon: face/upper-body square crop of hero, 64 + 180 PNG

## Mobile bottom nav

- `fixed inset-x-0 bottom-0 z-50 md:hidden`
- Blurred bar + hairline top border + `env(safe-area-inset-bottom)`
- Lucide map example: Home, UserRound, Dumbbell|Sparkles|Camera (niche), Images, Sparkles
- Active via `IntersectionObserver` on section ids (`rootMargin: '-20% 0px -55% 0px'`)

## Dark tokens (`index.css`)

Put dark vars on `:root` (and `.dark` if `html` has `class="dark"`):

```css
:root,
.dark {
  --bg: #0c0f0e;
  --bg-elevated: #151a18;
  --fg: #f3efe6;
  --fg-muted: #a8b0aa;
  --accent: #3d8a6e;        /* pick per brand — not purple default */
  --accent-hover: #4ea082;
  --line: rgba(243, 239, 230, 0.12);
  --hero-overlay: linear-gradient(
    105deg,
    rgba(12, 15, 14, 0.92) 0%,
    rgba(12, 15, 14, 0.55) 42%,
    rgba(12, 15, 14, 0.25) 100%
  );
  color-scheme: dark;
}
```

Pick accent from the creator’s kit/brand colors when visible.

## Copy tone

| Source | Output |
|--------|--------|
| IG caption first-person | Third-person brand pitch |
| Raw vent / drama | Soften or omit unless asked |
| Brand tags / collabs | Brands section + featured quote |
| Locations / gyms / events | Places |
| Training / craft focus | Focus highlights |

## App shell order

```tsx
<Navbar />
<main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
  <Hero />
  <About />
  <Focus />
  <Places />
  <Reels />
  <Gallery />
  <Brands />
</main>
<Footer />
<MobileBottomNav />
```

## Research quality bar

Before coding UI: at least bio + 6–10 real posts with URLs. Prefer pinned + high-engagement stills for hero and lookbook.


## Reels and responsive media

```ts
export type Reel = {
  id: string
  src?: string      // local /videos/*.mp4; absent when inaccessible
  poster: string    // local image
  href: string      // real Instagram /reel/ URL
  title: string
  label: string     // accessible description grounded in observed content
}
```

Default to a dedicated portrait-video section before Lookbook. Keep five mobile navigation items; add a desktop Reels link independently. Preserve an existing hero unless asked to replace it.

Use `muted`, `playsInline`, `loop`, and `preload="none"`. IntersectionObserver (about 60% visible) and Page Visibility start/pause playback. Wait for the reduced-motion preference to resolve before autoplay; reduced motion requires manual start. Track manual pause separately so observer callbacks cannot override it. Clean up listeners, observer, and pending playback on unmount. Catch `play()` rejections and offer manual playback. Native controls or labeled keyboard-accessible buttons allow pause and sound toggling. Retain an original-reel link outside the player. Failed/missing videos render posters and Instagram links without local playback buttons.

Obtain media from accessible public pages and observed resources. Browser `blob:` URLs are temporary handles, not reusable sources. For separate video/audio tracks, obtain complete files, combine them, and verify browser decoding and audible output after unmuting. Do not save byte-range snippets as full reels. Do not bypass login walls or fabricate footage; report unavailable media.

For photos, prefer original post-page images and the largest observed `srcset` candidates. Target ≥1600px hero width and ≥1080px journal width where available; retain the best accessible source when lower. Record real dimensions, generate smaller variants only, and use accurate width descriptors and layout-specific `sizes`. Check sharpness on desktop and ~390px mobile. Never upscale thumbnails or label them originals. Prioritize the hero with `fetchPriority="high"`; lazy-load below-fold photos.


## Netlify account deployment

Apply only when the user requests deployment; building a portfolio alone does not authorize publishing or Git pushes.

1. Read the available Netlify deploy/config guidance and discover actual tools. Verify the authenticated user and team before creating or changing a project. Do not infer a successful account connection from plugin installation or a browser login. Plugin OAuth, browser sessions, and CLI authorization can be separate.
2. Reuse a project already created for this portfolio. Otherwise create a new project in the verified account, record its returned ID immediately, and preserve unrelated sites. Never overwrite an existing professional portfolio based only on a similar name.
3. Run `pnpm run build`. Keep `netlify.toml` configured with `pnpm run build` and publish directory `dist`. When editing that config, follow the Netlify config skill, including the schema key. Add `.netlify/` to `.gitignore` before linking; never commit CLI credentials, auth tickets, tokens, or local state.
4. Prefer an available authenticated deployment/upload tool. If the connector exposes project-management tools but no file-upload operation, use the official Netlify CLI. Check CLI authentication independently; if required, use `netlify login --request "Deploy this portfolio"`, give the user its authorization URL, then finish with `netlify login --check <ticket>` after approval. Never extract connector tokens or browser cookies. Do not store auth links or tickets in source files.
5. Deploy the verified build to the recorded project: `netlify deploy --prod --dir dist --no-build --site <site-id> --json`. Use the official CLI via a temporary package runner if it is not installed; keep the app's pnpm setup intact. A manual deployment to a Git-linked site can be replaced by a later push; disclose that when relevant.
6. Verify the deploy is ready, belongs to the intended account, and is public without password/SSO requirements. Use the available visitor-access tool when the user requests public access; if unavailable, use the dashboard. Never claim settings cannot be changed through tools without checking the current tool inventory.
7. Request the live homepage without authentication and verify portfolio content rather than a password page. Check a local reel URL returns `video/mp4` and supports playback/range requests. Report the permanent HTTPS production URL and any verification limits. A created-but-empty project or an unclaimed temporary Drop URL is not a completed account deployment.

For Git handoff, commit and push only when requested. Stage only the intended portfolio/skill changes, exclude generated builds and local credentials, and verify the push result before reporting success.
