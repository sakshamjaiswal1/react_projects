# Agent instructions (this repo)

## Skills

Project skills live in [`.agents/skills/`](.agents/skills/). Cursor also resolves them via [`.cursor/skills/`](.cursor/skills/) (symlinks to the same folders).

### Instagram → React portfolio

**Skill:** [`.agents/skills/instagram-portfolio/SKILL.md`](.agents/skills/instagram-portfolio/SKILL.md)  
**Details:** [`.agents/skills/instagram-portfolio/reference.md`](.agents/skills/instagram-portfolio/reference.md)

**When to use:** User shares an Instagram username, `@handle`, `instagram.com/…` URL, or asks for an IG/creator portfolio / brand site / “like Jade” for another creator.

**What to do:** Read that `SKILL.md` first and follow it end-to-end. Use pnpm. Create a new app under this folder as `<handle>-portfolio`. Do not invent posts; research the public profile.

## Package manager

All React apps in this folder use **pnpm** (`packageManager: pnpm@12.8.1`). Prefer `pnpm install` / `pnpm run …`. Do not add new `package-lock.json` files.
