import { useEffect, useState } from 'react'
import { mobileNavItems } from '../data/nav'

function NavIcon({ id, active }: { id: string; active: boolean }) {
  const stroke = active ? 'var(--accent)' : 'currentColor'
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke,
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (id) {
    case 'top':
      return (
        <svg {...common}>
          <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" />
        </svg>
      )
    case 'about':
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.25" />
          <path d="M5.5 19.5c1.6-3.2 4-4.8 6.5-4.8s4.9 1.6 6.5 4.8" />
        </svg>
      )
    case 'hyrox':
      return (
        <svg {...common}>
          <path d="M7 20V9.5L12 4l5 5.5V20" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case 'lookbook':
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="m7 16 3.2-3.2a1 1 0 0 1 1.3 0L14 15l1.2-1.2a1 1 0 0 1 1.3 0L19 16" />
        </svg>
      )
    case 'brands':
      return (
        <svg {...common}>
          <path d="M12 3 14.5 9H21l-5 4 1.8 6L12 15.5 6.2 19 8 13 3 9h6.5L12 3Z" />
        </svg>
      )
    default:
      return null
  }
}

export function MobileBottomNav() {
  const [activeId, setActiveId] = useState('top')

  useEffect(() => {
    const sections = mobileNavItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t hairline bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Mobile sections"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-5 px-1 pt-1.5 pb-1">
        {mobileNavItems.map((item) => {
          const active = activeId === item.sectionId
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`flex flex-col items-center gap-0.5 rounded-lg px-1 py-1.5 text-[0.62rem] tracking-[0.06em] uppercase transition-colors ${
                  active
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--fg-muted)] hover:text-[var(--fg)]'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                <NavIcon id={item.sectionId} active={active} />
                <span className="font-medium">{item.shortLabel}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
