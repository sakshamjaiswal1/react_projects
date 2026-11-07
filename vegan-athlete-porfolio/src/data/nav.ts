export type NavItem = {
  href: string
  label: string
  shortLabel: string
  sectionId: string
}

/** Mobile bottom nav (5 items). */
export const mobileNavItems: NavItem[] = [
  { href: '#top', label: 'Home', shortLabel: 'Home', sectionId: 'top' },
  { href: '#about', label: 'Story', shortLabel: 'Story', sectionId: 'about' },
  { href: '#hyrox', label: 'HYROX', shortLabel: 'HYROX', sectionId: 'hyrox' },
  {
    href: '#lookbook',
    label: 'Lookbook',
    shortLabel: 'Looks',
    sectionId: 'lookbook',
  },
  { href: '#brands', label: 'Brands', shortLabel: 'Brands', sectionId: 'brands' },
]

/** Desktop top nav (includes Places). */
export const desktopNavItems: NavItem[] = [
  { href: '#about', label: 'Story', shortLabel: 'Story', sectionId: 'about' },
  { href: '#hyrox', label: 'HYROX', shortLabel: 'HYROX', sectionId: 'hyrox' },
  { href: '#places', label: 'Places', shortLabel: 'Places', sectionId: 'places' },
  {
    href: '#lookbook',
    label: 'Lookbook',
    shortLabel: 'Looks',
    sectionId: 'lookbook',
  },
  { href: '#brands', label: 'Brands', shortLabel: 'Brands', sectionId: 'brands' },
]
