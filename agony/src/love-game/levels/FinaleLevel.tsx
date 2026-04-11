type FinaleLevelProps = {
  onPlayAgain: () => void
}

export function FinaleLevel({ onPlayAgain }: FinaleLevelProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-rose-200/70 bg-white/85 shadow-2xl backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/75">
      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 10% 20%, rgb(244 114 182 / 0.35) 0%, transparent 40%),
              radial-gradient(circle at 90% 30%, rgb(129 140 248 / 0.35) 0%, transparent 45%)`,
          }}
        />

        <div className="relative space-y-6 text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-600 dark:text-rose-300">
              Finale — from Saksham
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-zinc-900 dark:text-rose-50">
              Tejaswini, my good girl
            </h2>
          </div>

          <p className="text-base leading-relaxed text-zinc-700 dark:text-rose-100/90">
            You played through every silly level I could think of — hearts, choices, memory, hugs —
            and that already tells me something: you showed up. That means the world to me.
          </p>

          <p className="text-base leading-relaxed text-zinc-700 dark:text-rose-100/90">
            I&apos;m <span className="font-semibold text-zinc-900 dark:text-rose-50">Saksham</span>,
            and I want you to carry this in your chest: you are loved loudly, softly, patiently, and
            for real. Not because you had to earn it today — but because you are you.
          </p>

          <p className="text-base leading-relaxed text-zinc-700 dark:text-rose-100/90">
            If the last days hurt, I hate that distance between us. If I was part of the hurt, I
            will keep choosing repair: listening first, pride second. You deserve gentleness —
            especially from me.
          </p>

          <p className="rounded-2xl border border-rose-200/60 bg-rose-50/60 p-5 font-serif text-lg text-zinc-900 dark:border-rose-900/50 dark:bg-rose-950/35 dark:text-rose-50">
            Whenever you forget, come back to this game. Every level is true: I love you, Tejaswini
            Pandey.
          </p>

          <p className="text-sm text-zinc-600 dark:text-rose-200/75">
            — Saksham
            <span className="block pt-1 text-xs font-normal text-zinc-500 dark:text-rose-200/60">
              P.S. You can replay from the start whenever you want more chaos hugs.
            </span>
          </p>

          <div className="pt-4">
            <button
              type="button"
              className="inline-flex min-h-12 w-full max-w-md touch-manipulation items-center justify-center rounded-full border border-rose-300 bg-white px-6 text-sm font-semibold text-rose-800 transition hover:bg-rose-50 dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-100 dark:hover:bg-zinc-900 sm:w-auto"
              onClick={onPlayAgain}
            >
              Play again from the start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
