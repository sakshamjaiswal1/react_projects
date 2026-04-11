import { useCallback, useMemo, useState } from 'react'
import type { MemoryCard } from '../types'
import { shuffle } from '../shuffle'

const DECK: readonly Omit<MemoryCard, 'id'>[] = [
  { pairId: 0, symbol: '🩷', label: 'Love' },
  { pairId: 0, symbol: '🩷', label: 'Love' },
  { pairId: 1, symbol: '✨', label: 'Magic' },
  { pairId: 1, symbol: '✨', label: 'Magic' },
  { pairId: 2, symbol: '🌙', label: 'Always' },
  { pairId: 2, symbol: '🌙', label: 'Always' },
  { pairId: 3, symbol: '💌', label: 'Saksham' },
  { pairId: 3, symbol: '💌', label: 'Saksham' },
] as const

type MemoryLevelProps = {
  onComplete: () => void
}

export function MemoryLevel({ onComplete }: MemoryLevelProps) {
  const cards = useMemo(() => {
    const base: MemoryCard[] = DECK.map((c, i) => ({ ...c, id: i }))
    return shuffle(base)
  }, [])

  const [flipped, setFlipped] = useState<readonly number[]>([])
  const [matched, setMatched] = useState<ReadonlySet<number>>(() => new Set())
  const [lock, setLock] = useState(false)

  const matchedPairs = matched.size / 2
  const totalPairs = DECK.length / 2
  const done = matchedPairs === totalPairs

  const onPick = useCallback(
    (cardId: number) => {
      if (lock || matched.has(cardId) || flipped.includes(cardId)) {
        return
      }
      if (flipped.length === 0) {
        setFlipped([cardId])
        return
      }
      if (flipped.length === 1) {
        const firstId = flipped[0]
        if (firstId === undefined) {
          return
        }
        const first = cards.find((c) => c.id === firstId)
        const second = cards.find((c) => c.id === cardId)
        if (!first || !second) {
          return
        }
        setFlipped([firstId, cardId])
        if (first.pairId === second.pairId) {
          setLock(true)
          window.setTimeout(() => {
            setMatched((prev) => new Set([...prev, firstId, cardId]))
            setFlipped([])
            setLock(false)
          }, 450)
        } else {
          setLock(true)
          window.setTimeout(() => {
            setFlipped([])
            setLock(false)
          }, 700)
        }
      }
    },
    [cards, flipped, lock, matched],
  )

  return (
    <div className="rounded-3xl border border-rose-200/70 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-rose-900/50 dark:bg-zinc-900/70 sm:p-8">
      <h2 className="text-center font-serif text-2xl font-semibold text-zinc-900 dark:text-rose-50">
        Level 3 — Memory for us
      </h2>
      <p className="mt-2 text-center text-sm text-zinc-600 dark:text-rose-200/80">
        Flip two cards at a time. Find every pair — they&apos;re all about you and me.
      </p>
      <p className="mt-3 text-center text-sm font-medium text-rose-700 dark:text-rose-300">
        Pairs found: {matchedPairs} / {totalPairs}
      </p>

      <div
        className="mx-auto mt-8 grid max-w-lg grid-cols-4 gap-1.5 sm:gap-3"
        role="group"
        aria-label="Memory cards"
      >
        {cards.map((card) => {
          const isFaceUp = flipped.includes(card.id) || matched.has(card.id)
          const faceClasses = isFaceUp
            ? 'border-transparent bg-gradient-to-br from-rose-500 to-indigo-600 text-white shadow-lg'
            : 'border-rose-200 bg-white text-zinc-900 shadow-sm hover:border-rose-400 dark:border-rose-900 dark:bg-zinc-950 dark:text-rose-50 dark:hover:border-rose-600'
          return (
            <button
              key={card.id}
              type="button"
              aria-label={isFaceUp ? `${card.label} card revealed` : 'Hidden memory card'}
              disabled={lock || matched.has(card.id)}
              className={`flex aspect-square min-w-0 touch-manipulation select-none items-center justify-center rounded-2xl border text-sm font-semibold transition disabled:cursor-default sm:text-base ${faceClasses}`}
              onClick={() => {
                onPick(card.id)
              }}
            >
              {isFaceUp ? (
                <span className="flex flex-col items-center gap-1">
                  <span className="text-2xl sm:text-3xl" aria-hidden>
                    {card.symbol}
                  </span>
                  <span className="text-[0.65rem] font-medium uppercase tracking-wide opacity-90">
                    {card.label}
                  </span>
                </span>
              ) : (
                <span className="text-2xl" aria-hidden>
                  ?
                </span>
              )}
            </button>
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
