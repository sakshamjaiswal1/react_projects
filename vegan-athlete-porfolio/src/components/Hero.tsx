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
        aria-label="View HYROX Birmingham race day post on Instagram"
      >
        <motion.img
          src={heroMedia.image}
          alt="Jade on HYROX Birmingham race day"
          className="h-full w-full object-cover object-[center_30%] transition-transform duration-700 hover:scale-[1.02]"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'var(--hero-overlay)' }}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[var(--bg)] via-[color-mix(in_oklab,var(--bg)_72%,transparent)] to-transparent md:h-[40%] md:via-[color-mix(in_oklab,var(--bg)_45%,transparent)]" />
      </a>

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col justify-end px-[clamp(1.25rem,4vw,4rem)] pt-28 pb-[calc(7rem+env(safe-area-inset-bottom))] md:pb-24">
        <motion.p
          className="mb-4 text-[0.75rem] tracking-[0.28em] uppercase text-[var(--fg-muted)] sm:text-[0.8rem]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {site.tagline}
        </motion.p>

        <motion.h1
          className="font-display max-w-[14ch] text-[clamp(2.45rem,10vw,7.5rem)] leading-[0.92] font-extrabold tracking-[-0.03em] text-balance"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          Vegan Miles
          <span className="block text-[var(--accent)]">With Jade</span>
        </motion.h1>

        <motion.p
          className="mt-5 max-w-md text-[0.95rem] text-[var(--fg-muted)] sm:mt-6 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
        >
          HYROX athlete. Vegan fuel. Mum energy. Partnerships built on real
          training, real life, and a look that sells the lifestyle.
        </motion.p>

        <motion.div
          className="pointer-events-auto mt-7 flex flex-wrap gap-3 sm:mt-8"
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
