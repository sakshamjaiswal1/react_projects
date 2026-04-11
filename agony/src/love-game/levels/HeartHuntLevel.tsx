import { useState } from 'react'

const HEART_COUNT = 10

/** Fixed % positions so hearts stay on-screen on phones. */
const HEART_LAYOUT: readonly { top: string; left: string }[] = [
  { top: '8%', left: '12%' },
  { top: '18%', left: '72%' },
  { top: '32%', left: '8%' },
  { top: '28%', left: '48%' },
  { top: '44%', left: '78%' },
  { top: '58%', left: '18%' },
  { top: '52%', left: '55%' },
  { top: '72%', left: '10%' },
  { top: '68%', left: '70%' },
  { top: '86%', left: '40%' },
] as const

type HeartHuntLevelProps = {
  onComplete: () => void
}

export function HeartHuntLevel({ onComplete }: HeartHuntLevelProps) {
  const [caught, setCaught] = useState<ReadonlySet<number>>(() => new Set())

  const remaining = HEART_COUNT - caught.size
  const done = remaining === 0

  return (
    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/70 sm:p-8">
      <div className="text-center">
        <h2 className="font-serif text-2xl font-semibold text-zinc-900 dark:text-rose-50">
          Level 1 — Heart hunt
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-rose-200/80">
          Tap every heart. Each one is a little piece of my love for you, Tejaswini.
        </p>
        <p className="mt-3 text-sm font-medium text-rose-700 dark:text-rose-300" aria-live="polite">
          {done
            ? 'You caught them all.'
            : `${String(remaining)} heart${remaining === 1 ? '' : 's'} left`}
        </p>
      </div>

      <div
        className="relative mx-auto mt-8 h-[min(420px,55svh)] w-full max-w-lg overflow-hidden rounded-2xl border border-rose-100 bg-gradient-to-b from-rose-50/90 to-white dark:border-rose-900/60 dark:from-rose-950/40 dark:to-zinc-950/60"
        role="application"
        aria-label="Heart hunt play area"
      >
        {HEART_LAYOUT.map((pos, index) => {
          const isCaught = caught.has(index)
          if (isCaught) {
            return null
          }
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2 motion-safe:animate-float"
              style={{ top: pos.top, left: pos.left }}
            >
              <button
                type="button"
                aria-label={`Catch heart ${String(index + 1)}`}
                className="flex size-12 touch-manipulation items-center justify-center rounded-full bg-rose-500/90 text-2xl shadow-lg shadow-rose-500/40 transition hover:scale-110 hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 active:scale-95 sm:size-14 sm:text-[1.75rem]"
                onClick={() => {
                  setCaught((prev) => new Set([...prev, index]))
                }}
              >
                <span aria-hidden>🩷</span>
              </button>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          disabled={!done}
          className="inline-flex min-h-12 w-full max-w-xs touch-manipulation items-center justify-center rounded-full bg-zinc-900 px-8 py-2.5 text-sm font-semibold text-white transition enabled:hover:bg-zinc-800 enabled:focus-visible:outline enabled:focus-visible:outline-2 enabled:focus-visible:outline-offset-2 enabled:focus-visible:outline-zinc-900 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-rose-200 dark:text-zinc-900 dark:enabled:hover:bg-white sm:w-auto"
          onClick={onComplete}
        >
          Next level
        </button>
      </div>
    </div>
  )
}
