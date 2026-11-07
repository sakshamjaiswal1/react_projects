import { motion } from 'framer-motion'
import { hyrox } from '../data/content'

export function Hyrox() {
  return (
    <section id="hyrox" className="relative overflow-hidden border-t hairline">
      <a
        href={hyrox.backgroundHref}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 block"
        aria-label="View HYROX prep post on Instagram"
      >
        <img
          src={hyrox.backgroundImage}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-30 transition-opacity hover:opacity-40 dark:opacity-25"
        />
        <div className="pointer-events-none absolute inset-0 bg-[var(--bg)]/85" />
      </a>

      <div className="relative section-pad">
        <div className="mx-auto max-w-[1400px]">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[0.75rem] tracking-[0.24em] uppercase text-[var(--accent)]">
              {hyrox.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.02] font-bold tracking-[-0.02em]">
              {hyrox.title}
            </h2>
            <p className="mt-4 text-lg text-[var(--fg-muted)]">{hyrox.lead}</p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {hyrox.highlights.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display mt-4 text-xl font-semibold group-hover:underline">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.text}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.blockquote
            className="font-display mt-14 max-w-3xl border-l-2 border-[var(--accent)] pl-6 text-[clamp(1.35rem,3vw,2rem)] leading-snug font-semibold"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            “{hyrox.quote}”
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
