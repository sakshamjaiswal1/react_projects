import { motion } from 'framer-motion'
import { brands } from '../data/content'
import { site } from '../data/site'

export function Brands() {
  const { featured } = brands

  return (
    <section id="brands" className="section-pad border-t hairline bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-[0.75rem] tracking-[0.24em] uppercase text-[var(--accent)]">
            {brands.eyebrow}
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5.5vw,3.8rem)] font-bold tracking-[-0.02em]">
            {brands.title}
          </h2>
          <p className="mt-4 text-lg text-[var(--fg-muted)]">{brands.lead}</p>
        </motion.div>

        <motion.a
          href={featured.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-12 grid overflow-hidden border hairline md:grid-cols-[0.9fr_1.1fr]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          aria-label="View Nivaya brand collab reel on Instagram"
        >
          <div className="aspect-[3/4] overflow-hidden md:aspect-auto md:min-h-[420px]">
            <img
              src={featured.image}
              alt={`${featured.brand} collaboration with Jade`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-8 md:px-10 md:py-12">
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[var(--accent)]">
              {featured.label}
            </p>
            <h3 className="font-display mt-3 text-3xl font-bold md:text-4xl">
              {featured.brand}
            </h3>
            <p className="font-display mt-5 text-xl leading-snug font-semibold md:text-2xl">
              “{featured.quote}”
            </p>
            <p className="mt-4 text-[var(--fg-muted)]">{featured.caption}</p>
            <span className="mt-6 text-sm tracking-[0.1em] uppercase text-[var(--accent)] group-hover:underline">
              Watch the collab reel →
            </span>
          </div>
        </motion.a>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {brands.fits.map((fit, index) => (
            <motion.div
              key={fit.title}
              className="border-t hairline pt-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <h3 className="font-display text-xl font-semibold">{fit.title}</h3>
              <p className="mt-2 text-[var(--fg-muted)]">{fit.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {brands.audience.map((tag) => (
            <span
              key={tag}
              className="border hairline px-4 py-2 text-[0.75rem] tracking-[0.1em] uppercase text-[var(--fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${site.email}?subject=Brand%20collaboration%20with%20Jade`}
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase text-[var(--bg)] transition-colors hover:bg-[var(--accent-hover)]"
          >
            Let’s collaborate
          </a>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border hairline px-6 py-3 text-sm font-semibold tracking-[0.08em] uppercase transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Reach out on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
