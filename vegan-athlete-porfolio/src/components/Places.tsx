import { motion } from 'framer-motion'
import { places } from '../data/content'

export function Places() {
  return (
    <section id="places" className="section-pad border-t hairline">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-[0.75rem] tracking-[0.24em] uppercase text-[var(--accent)]">
            On the move
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-bold tracking-[-0.02em]">
            Places that shape the miles.
          </h2>
          <p className="mt-4 text-[var(--fg-muted)]">
            Race floors, gym floors, and trails — the settings behind Jade’s
            training life.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {places.map((place, index) => {
            const reverse = index % 2 === 1
            return (
              <motion.article
                key={place.id}
                className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <a
                  href={place.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group aspect-[16/11] overflow-hidden ${reverse ? 'md:order-2' : ''}`}
                  aria-label={`View ${place.name} on Instagram`}
                >
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </a>
                <div className={reverse ? 'md:order-1' : undefined}>
                  <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--fg-muted)]">
                    {place.location}
                  </p>
                  <h3 className="font-display mt-2 text-2xl font-semibold md:text-3xl">
                    {place.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-[var(--fg-muted)]">
                    {place.blurb}
                  </p>
                  <a
                    href={place.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm tracking-[0.08em] uppercase text-[var(--accent)] hover:underline"
                  >
                    Open on Instagram →
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
