import { motion } from 'framer-motion'

type ThemeToggleProps = {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex h-9 w-16 items-center rounded-full border hairline bg-[var(--bg-elevated)] px-1 ${
        theme === 'dark' ? 'justify-end' : 'justify-start'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent)] text-[0.65rem] font-semibold text-[var(--bg)]"
      >
        {theme === 'dark' ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
