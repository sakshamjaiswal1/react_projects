import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="border-t hairline px-[clamp(1.25rem,4vw,4rem)] py-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">{site.brand}</p>
          <p className="mt-1 text-sm text-[var(--fg-muted)]">{site.handle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-[var(--fg-muted)]">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--fg)]"
          >
            Instagram
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-[var(--fg)]">
            {site.email}
          </a>
          <span>© {new Date().getFullYear()} Jade</span>
        </div>
      </div>
    </footer>
  )
}
