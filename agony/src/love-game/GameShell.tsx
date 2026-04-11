import type { ReactNode } from 'react'
import { PHASE_ORDER, type Phase } from './types'

type GameShellProps = {
  phase: Phase
  title?: string
  children: ReactNode
}

export function GameShell({ phase, title, children }: GameShellProps) {
  const stepIndex = PHASE_ORDER.indexOf(phase)
  const isIntro = phase === 'intro'
  const playableSteps = PHASE_ORDER.length - 1
  const progress = isIntro ? 0 : Math.min(stepIndex, playableSteps) / playableSteps

  return (
    <div className="relative isolate flex min-h-dvh flex-col overflow-x-hidden bg-gradient-to-b from-rose-50 via-fuchsia-50/70 to-indigo-50/50 pt-[env(safe-area-inset-top,0px)] text-zinc-900 dark:from-zinc-950 dark:via-rose-950/35 dark:to-indigo-950/40 dark:text-rose-50/95">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 15% 25%, rgb(251 207 232 / 0.55) 0%, transparent 42%),
            radial-gradient(circle at 85% 20%, rgb(233 213 255 / 0.5) 0%, transparent 38%),
            radial-gradient(circle at 50% 100%, rgb(199 210 254 / 0.35) 0%, transparent 55%)`,
        }}
      />

      <header className="relative z-10 shrink-0 border-b border-rose-200/50 bg-white/40 px-4 py-4 backdrop-blur-md dark:border-rose-900/40 dark:bg-zinc-950/40">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
              Saksham&apos;s love game
            </p>
            <p className="text-balance font-serif text-lg font-medium leading-snug text-zinc-900 dark:text-rose-50">
              For Tejaswini — my good girl
            </p>
          </div>
          <p
            className="shrink-0 text-sm text-zinc-600 dark:text-rose-200/75 sm:text-right"
            aria-live="polite"
          >
            {title ??
              (isIntro
                ? 'Ready when you are.'
                : `Level ${String(stepIndex)} of ${String(playableSteps)}`)}
          </p>
        </div>
        {!isIntro ? (
          <div
            className="mx-auto mt-3 h-1.5 max-w-3xl overflow-hidden rounded-full bg-rose-100/80 dark:bg-rose-950/60"
            role="progressbar"
            aria-valuenow={Math.round(progress * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Game progress"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 transition-[width] duration-500 ease-out"
              style={{ width: `${String(progress * 100)}%` }}
            />
          </div>
        ) : null}
      </header>

      <div className="relative z-10 mx-auto w-full max-w-3xl flex-1 px-4 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:py-8">
        {children}
      </div>
    </div>
  )
}
