import { useState } from 'react'

const STEP = 14
const MAX = 100

type HugMeterLevelProps = {
  onComplete: () => void
}

export function HugMeterLevel({ onComplete }: HugMeterLevelProps) {
  const [meter, setMeter] = useState(0)
  const full = meter >= MAX

  return (
    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/70 sm:p-8">
      <h2 className="text-center font-serif text-2xl font-semibold text-zinc-900 dark:text-rose-50">
        Level 4 — Hug meter
      </h2>
      <p className="mt-2 text-center text-sm text-zinc-600 dark:text-rose-200/80">
        Tap the button and send hugs until the meter overflows. I&apos;ll take every single one,
        Tejaswini.
      </p>

      <div className="mx-auto mt-10 max-w-md">
        <div
          className="h-4 overflow-hidden rounded-full bg-rose-100 dark:bg-rose-950/60"
          role="progressbar"
          aria-valuenow={meter}
          aria-valuemin={0}
          aria-valuemax={MAX}
          aria-label="Hug meter"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 transition-[width] duration-300 ease-out"
            style={{ width: `${String(Math.min(meter, MAX))}%` }}
          />
        </div>
        <p className="mt-2 text-center text-xs font-medium text-zinc-500 dark:text-rose-200/70">
          {full ? 'Meter full — you win my whole heart again.' : `${String(meter)}% love sent`}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <button
            type="button"
            className="inline-flex min-h-14 w-full max-w-md touch-manipulation items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-fuchsia-600 px-6 text-base font-bold text-white shadow-xl shadow-rose-500/35 transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-44 sm:px-8"
            disabled={full}
            onClick={() => {
              setMeter((m) => Math.min(MAX, m + STEP))
            }}
          >
            {full ? 'Full!' : 'Send Saksham a hug 🤗'}
          </button>

          {full ? (
            <button
              type="button"
              className="min-h-12 w-full max-w-xs touch-manipulation rounded-full bg-zinc-900 px-8 py-2.5 text-sm font-semibold text-white dark:bg-rose-200 dark:text-zinc-900 sm:w-auto"
              onClick={onComplete}
            >
              Read the finale
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
