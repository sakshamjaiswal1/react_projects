import { motion } from 'framer-motion'
import { gallery } from '../data/content'

export function Gallery() {
  return (
    <section id="lookbook" className="section-pad border-t hairline">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          className="mb-10 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="mb-3 text-[0.75rem] tracking-[0.24em] uppercase text-[var(--accent)]">
            Lookbook
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.4rem)] font-bold tracking-[-0.02em]">
            Frames from the feed.
          </h2>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {gallery.map((item, index) => (
            <motion.figure
              key={item.id}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (index % 3) * 0.06 }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
                aria-label={`${item.alt} — open on Instagram`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  loading="lazy"
                />
                <figcaption className="mt-2 text-sm text-[var(--fg-muted)] transition-colors group-hover:text-[var(--fg)] group-hover:underline">
                  {item.caption}
                </figcaption>
              </a>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
