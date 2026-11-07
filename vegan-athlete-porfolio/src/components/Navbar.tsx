import { site } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#about', label: 'Story' },
  { href: '#hyrox', label: 'HYROX' },
  { href: '#places', label: 'Places' },
  { href: '#lookbook', label: 'Lookbook' },
  { href: '#brands', label: 'Brands' },
]

type NavbarProps = {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[color-mix(in_oklab,var(--bg)_78%,transparent)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-[clamp(1.25rem,4vw,4rem)] py-3">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.18em] uppercase">
          {site.shortBrand}
        </a>

        <ul className="hidden items-center gap-7 text-[0.8rem] tracking-[0.12em] uppercase text-[var(--fg-muted)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-[var(--fg)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#brands"
            className="hidden rounded-full bg-[var(--accent)] px-4 py-2 text-[0.75rem] font-semibold tracking-[0.08em] uppercase text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)] sm:inline-flex"
          >
            Work with me
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </nav>
    </header>
  )
}
