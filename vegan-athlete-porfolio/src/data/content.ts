export type GalleryItem = {
  id: string
  src: string
  caption: string
  alt: string
  href: string
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
  eyebrow: 'The story',
  title: 'Started at 36. Still becoming.',
  body: [
    'Jade started the gym at 36 because she needed something for herself — after kids and life changes, she wanted to feel stronger again.',
    'One workout became another. Then running. Then her first HYROX. The biggest transformation was not her body — it was rebuilding confidence and identity again.',
    'Now she trains vegan, races hard, and documents the messy, funny, real side of fitness as a mum. Strong and feminine. Never too late to start.',
  ],
  image: '/images/origin-story.jpg',
  href: 'https://www.instagram.com/veganmileswithjade/p/DZVvIvhguYY/',
}

export const hyrox = {
  eyebrow: 'Race ready',
  title: 'HYROX is the standard.',
  lead:
    'From first race to Birmingham floor time — chasing minutes, owning wall balls, and showing up even when life is life-ing.',
  backgroundImage: '/images/hyrox-prep.jpg',
  backgroundHref: 'https://www.instagram.com/veganmileswithjade/p/DeJbjDJAkbI/',
  highlights: [
    {
      title: 'Shave the minutes',
      text: 'Pinned race energy: always hunting efficiency in every station and every run.',
      image: '/images/hyrox-pinned.jpg',
      href: 'https://www.instagram.com/veganmileswithjade/reel/DZapOseiMqk/',
    },
    {
      title: 'Birmingham battles',
      text: 'Race day chaos, family adventure, and honest recaps when the sub-90 slips away.',
      image: '/images/hyrox-birmingham.jpg',
      href: 'https://www.instagram.com/veganmileswithjade/p/DfEl34DAjgI/',
    },
    {
      title: 'Still showing up',
      text: 'Single mum. Two humans. Barbell after bedtime. Progress is turning up.',
      image: '/images/showing-up.jpg',
      href: 'https://www.instagram.com/veganmileswithjade/reel/DeUF9griyJ2/',
    },
  ],
  quote:
    'Being a single mum and still turning up to do hard things? That counts too.',
}

export const places: Place[] = [
  {
    id: 'birmingham',
    name: 'HYROX Birmingham',
    location: 'Birmingham, UK',
    blurb:
      'Race-floor pressure, wall-ball reckoning, and the kind of day that turns into a family story whether the clock cooperates or not.',
    image: '/images/hyrox-raceday.jpg',
    href: 'https://www.instagram.com/veganmileswithjade/p/DfQF1MBgs7C/',
  },
  {
    id: 'core-gym',
    name: 'The Core Gym',
    location: 'Local community hub',
    blurb:
      'Competition mornings with absolute machines — the gym community that keeps the fire lit between race blocks.',
    image: '/images/core-gym.jpg',
    href: 'https://www.instagram.com/veganmileswithjade/p/Del22AeAqHI/',
  },
  {
    id: 'trails',
    name: 'Trail miles',
    location: 'UK trails',
    blurb:
      'Hybrid training off-road — the runs you maybe should have thought through before setting off.',
    image: '/images/trail-run.jpg',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DeWeGsjib3p/',
  },
]

export const gallery: GalleryItem[] = [
  {
    id: 'hyrox-pinned',
    src: '/images/hyrox-pinned.jpg',
    caption: 'Always thinking of ways to shave off those minutes.',
    alt: 'Jade HYROX race training reel',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DZapOseiMqk/',
  },
  {
    id: 'origin',
    src: '/images/origin-story.jpg',
    caption: 'Gym at 36. Confidence rebuilt from the ground up.',
    alt: 'Jade origin story transformation',
    href: 'https://www.instagram.com/veganmileswithjade/p/DZVvIvhguYY/',
  },
  {
    id: 'raceday',
    src: '/images/hyrox-raceday.jpg',
    caption: 'Race day — strong start, honest finish.',
    alt: 'Jade on HYROX race day',
    href: 'https://www.instagram.com/veganmileswithjade/p/DfQF1MBgs7C/',
  },
  {
    id: 'birmingham',
    src: '/images/hyrox-birmingham.jpg',
    caption: 'Birmingham HYROX — family adventure included.',
    alt: 'Birmingham HYROX event',
    href: 'https://www.instagram.com/veganmileswithjade/p/DfEl34DAjgI/',
  },
  {
    id: 'sportswear',
    src: '/images/sportswear.jpg',
    caption: 'Consistency — and kit that makes you want to train.',
    alt: 'Jade in activewear',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DeezfaJidVr/',
  },
  {
    id: 'run-pb',
    src: '/images/run-pb.jpg',
    caption: 'Sub-25 5K. Channelled the mood into a PB.',
    alt: 'Jade running personal best',
    href: 'https://www.instagram.com/veganmileswithjade/p/DebnI2tiZiG/',
  },
  {
    id: 'trail',
    src: '/images/trail-run.jpg',
    caption: 'Trail miles. Hybrid training. Real terrain.',
    alt: 'Jade trail running',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DeWeGsjib3p/',
  },
  {
    id: 'core',
    src: '/images/core-gym.jpg',
    caption: 'The Core Gym — community that lifts you.',
    alt: 'The Core Gym competition',
    href: 'https://www.instagram.com/veganmileswithjade/p/Del22AeAqHI/',
  },
  {
    id: 'fashion',
    src: '/images/fashion-nivaya.jpg',
    caption: 'Strong and feminine are not opposites.',
    alt: 'Jade styled beyond gym clothes',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DfZsKB2C_hm/',
  },
  {
    id: 'training',
    src: '/images/training-reel.jpg',
    caption: 'Women who lift. Relatable. Unfiltered.',
    alt: 'Jade gym training reel',
    href: 'https://www.instagram.com/veganmileswithjade/reel/DeZ8vvtiwh0/',
  },
]

export const brands = {
  eyebrow: 'Partnerships',
  title: 'Brands — let’s build something real.',
  lead:
    'Jade is open for collaborations. If your brand fits activewear, vegan fuel, fitness tech, or lifestyle that celebrates strong and feminine — reach out. She’s inviting partners who want authentic HYROX, mum-life, and plant-powered storytelling.',
  featured: {
    brand: 'Nivaya',
    label: 'Recent brand collab',
    quote:
      'Feeling strong and feeling feminine don’t have to be mutually exclusive.',
    image: '/images/fashion-nivaya.jpg',
    href: 'https://www.instagram.com/reel/DfZsKB2C_hm/',
    caption:
      'AD partnership with @nivaya.jewelry — fashion-industry roots meeting post-gym polish.',
  },
  fits: [
    {
      title: 'Activewear & footwear',
      text: 'Race kits, daily gym fits, and running shoes that earn the miles — already tagging AYBL, Gymshark, Nike.',
    },
    {
      title: 'Vegan fuel & recovery',
      text: 'Plant-powered nutrition for hybrid athletes who need honesty, not hype.',
    },
    {
      title: 'Fitness tech & apps',
      text: 'HYROX tools and training platforms that help athletes shave minutes — Roxfit-ready audience.',
    },
    {
      title: 'Lifestyle & beauty',
      text: 'Fashion-industry roots meet post-gym polish — jewellery and everyday style that still feel athletic.',
    },
  ],
  audience: [
    'Women 30+ rebuilding strength',
    'HYROX & hybrid athletes',
    'Vegan / plant-curious fitness',
    'Mum life meets high performance',
  ],
}

export const heroMedia = {
  image: '/images/hyrox-raceday.jpg',
  href: 'https://www.instagram.com/veganmileswithjade/p/DfQF1MBgs7C/',
}
