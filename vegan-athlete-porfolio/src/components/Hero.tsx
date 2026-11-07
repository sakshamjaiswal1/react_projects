import { motion } from 'framer-motion'
import { heroMedia } from '../data/content'
import { site } from '../data/site'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Hero"
    >
      <a
        href={heroMedia.href}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 block"
        aria-label="View sportswear reel on Instagram"
      >
        <motion.img
          src={heroMedia.image}
          alt="Jade training in activewear"
          className="h-full w-full object-cover object-[center_20%] transition-transform duration-700 hover:scale-[1.02]"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'var(--hero-overlay)' }}
        />
      </a>

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col justify-end px-[clamp(1.25rem,4vw,4rem)] pb-16 pt-28 md:pb-24">
        <motion.p
          className="mb-4 text-[0.8rem] tracking-[0.28em] uppercase text-[var(--fg-muted)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {site.tagline}
        </motion.p>

        <motion.h1
          className="font-display max-w-[14ch] text-[clamp(3.2rem,11vw,7.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] text-balance"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Vegan Miles
          <span className="block text-[var(--accent)]">With Jade</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-md text-base text-[var(--fg-muted)] md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          HYROX athlete. Vegan fuel. Mum energy. Partnerships built on real
          training, real life, and a look that sells the lifestyle.
        </motion.p>

        <motion.div
          className="pointer-events-auto mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.65 }}
        >
          <a
            href="#brands"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)]"
          >
            Work with me
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border hairline px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
