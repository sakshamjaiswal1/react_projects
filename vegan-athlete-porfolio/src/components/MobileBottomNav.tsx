import { Dumbbell, Home, Images, Sparkles, UserRound } from 'lucide-react'
import { useEffect, useState } from 'react'
import { mobileNavItems } from '../data/nav'

const icons = {
  top: Home,
  about: UserRound,
  hyrox: Dumbbell,
  lookbook: Images,
  brands: Sparkles,
} as const

function NavIcon({ id }: { id: string }) {
  const Icon = icons[id as keyof typeof icons]
  if (!Icon) return null
  return <Icon size={22} strokeWidth={1.75} aria-hidden />
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
                <NavIcon id={item.sectionId} />
                <span className="font-medium">{item.shortLabel}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
