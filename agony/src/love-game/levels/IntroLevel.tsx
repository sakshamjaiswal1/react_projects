type IntroLevelProps = {
  onStart: () => void
}

export function IntroLevel({ onStart }: IntroLevelProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-rose-200/70 bg-white/80 p-6 text-center shadow-2xl shadow-rose-200/30 backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/70 dark:shadow-black/40 sm:p-12">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-rose-600 dark:text-rose-300">
        Hey Tejaswini
      </p>
      <h1 className="mt-4 text-balance font-serif text-3xl font-semibold leading-tight text-zinc-900 dark:text-rose-50 sm:text-4xl">
        I built you something to play — and to feel how much I love you.
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-rose-200/85">
        I&apos;m <span className="font-semibold text-zinc-900 dark:text-rose-50">Saksham</span>.
        This is a tiny world of mini games: hearts, choices, memory, hugs, and a finale just for my
        good girl.
      </p>
      <ul className="mt-8 w-full max-w-md space-y-2 text-left text-sm text-zinc-700 dark:text-rose-100/85">
        <li className="flex gap-2">
          <span aria-hidden>🩷</span>
          <span>
            <strong className="text-zinc-900 dark:text-rose-50">Heart hunt</strong> — catch my love
            on screen.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden>✨</span>
          <span>
            <strong className="text-zinc-900 dark:text-rose-50">Sweet choices</strong> — no wrong
            answers, only you.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden>🧠</span>
          <span>
            <strong className="text-zinc-900 dark:text-rose-50">Memory</strong> — find our pairs.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden>🤗</span>
          <span>
            <strong className="text-zinc-900 dark:text-rose-50">Hug meter</strong> — spam the love.
          </span>
        </li>
        <li className="flex gap-2">
          <span aria-hidden>💌</span>
          <span>
            <strong className="text-zinc-900 dark:text-rose-50">Finale</strong> — a note from me.
          </span>
        </li>
      </ul>
      <button
        type="button"
        className="mt-10 inline-flex min-h-12 w-full max-w-md touch-manipulation items-center justify-center self-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-400/40 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 active:scale-[0.98] sm:w-auto sm:px-10"
        onClick={onStart}
      >
        Start the game for us
      </button>
    </div>
  )
}
