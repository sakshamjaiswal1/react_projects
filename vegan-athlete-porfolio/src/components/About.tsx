import { motion } from 'framer-motion'
import { about } from '../data/content'

export function About() {
  return (
    <section id="about" className="section-pad border-t hairline">
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-[0.75rem] tracking-[0.24em] uppercase text-[var(--accent)]">
            {about.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] font-bold tracking-[-0.02em] text-balance">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-[var(--fg-muted)]">
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        <motion.a
          href={about.href}
          target="_blank"
          rel="noreferrer"
          className="group relative aspect-[4/5] overflow-hidden"
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          aria-label="View origin story post on Instagram"
        >
          <img
            src={about.image}
            alt="Jade — origin story"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
          <span className="absolute right-4 bottom-4 text-[0.7rem] tracking-[0.16em] uppercase text-[var(--fg)] opacity-80 transition-opacity group-hover:opacity-100">
            View on Instagram →
          </span>
        </motion.a>
      </div>
    </section>
  )
}
