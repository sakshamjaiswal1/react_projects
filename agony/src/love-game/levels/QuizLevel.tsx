import { useState } from 'react'

type Question = {
  id: string
  prompt: string
  a: { label: string; reaction: string }
  b: { label: string; reaction: string }
}

const QUESTIONS: readonly Question[] = [
  {
    id: 'q1',
    prompt: 'Pick the vibe you want from Saksham today:',
    a: { label: 'Princess treatment + soft voice', reaction: 'Noted. Crown secured.' },
    b: { label: 'Chaos hugs + forehead kisses', reaction: 'Perfect. I volunteer.' },
  },
  {
    id: 'q2',
    prompt: 'If love had a flavour today, you’d choose:',
    a: { label: 'Warm cocoa + safety', reaction: 'I’ll be your warmth.' },
    b: { label: 'Strawberry mischief + loyalty', reaction: 'I’m all in, good girl.' },
  },
  {
    id: 'q3',
    prompt: 'When you think “us”, you want:',
    a: { label: 'Someone who stays', reaction: 'I’m not going anywhere.' },
    b: { label: 'Someone who chooses you loudly', reaction: 'Tejaswini — I choose you.' },
  },
] as const

type QuizLevelProps = {
  onComplete: () => void
}

export function QuizLevel({ onComplete }: QuizLevelProps) {
  const [index, setIndex] = useState(0)
  const [reaction, setReaction] = useState<string | null>(null)

  const q = QUESTIONS[index]
  const isLast = index === QUESTIONS.length - 1

  if (!q) {
    return null
  }

  return (
    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/70 sm:p-8">
      <h2 className="text-center font-serif text-2xl font-semibold text-zinc-900 dark:text-rose-50">
        Level 2 — Sweet choices
      </h2>
      <p className="mt-2 text-center text-sm text-zinc-600 dark:text-rose-200/80">
        No traps. No “wrong” answers. Just you — and what you want.
      </p>

      <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-rose-100 bg-rose-50/50 p-6 dark:border-rose-900/50 dark:bg-rose-950/30">
        <p className="text-xs font-semibold uppercase tracking-widest text-rose-600 dark:text-rose-300">
          Question {index + 1} / {QUESTIONS.length}
        </p>
        <p className="mt-3 text-lg font-medium text-zinc-900 dark:text-rose-50">{q.prompt}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="flex-1 touch-manipulation rounded-2xl border border-rose-200 bg-white px-4 py-4 text-left text-sm font-semibold leading-snug text-zinc-900 shadow-sm transition hover:border-rose-400 hover:shadow-md dark:border-rose-800 dark:bg-zinc-950 dark:text-rose-50 dark:hover:border-rose-500 sm:min-h-0 sm:py-3"
            onClick={() => {
              setReaction(q.a.reaction)
            }}
          >
            {q.a.label}
          </button>
          <button
            type="button"
            className="flex-1 touch-manipulation rounded-2xl border border-indigo-200 bg-white px-4 py-4 text-left text-sm font-semibold leading-snug text-zinc-900 shadow-sm transition hover:border-indigo-400 hover:shadow-md dark:border-indigo-900 dark:bg-zinc-950 dark:text-rose-50 dark:hover:border-indigo-500 sm:min-h-0 sm:py-3"
            onClick={() => {
              setReaction(q.b.reaction)
            }}
          >
            {q.b.label}
          </button>
        </div>

        {reaction ? (
          <div className="mt-6 rounded-xl border border-rose-200/70 bg-white/80 p-4 text-sm text-zinc-700 dark:border-rose-900/60 dark:bg-zinc-900/60 dark:text-rose-100/90">
            <p className="font-medium text-rose-800 dark:text-rose-200">{reaction}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {!isLast ? (
                <button
                  type="button"
                  className="min-h-11 touch-manipulation rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold text-white dark:bg-rose-200 dark:text-zinc-900"
                  onClick={() => {
                    setReaction(null)
                    setIndex((i) => i + 1)
                  }}
                >
                  Next question
                </button>
              ) : (
                <button
                  type="button"
                  className="min-h-11 w-full touch-manipulation rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 px-5 py-2 text-xs font-semibold text-white sm:w-auto"
                  onClick={onComplete}
                >
                  Continue to memory
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
