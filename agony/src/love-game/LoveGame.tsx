import { useCallback, useMemo, useState } from 'react'
import { GameShell } from './GameShell'
import { FinaleLevel } from './levels/FinaleLevel'
import { HeartHuntLevel } from './levels/HeartHuntLevel'
import { HugMeterLevel } from './levels/HugMeterLevel'
import { IntroLevel } from './levels/IntroLevel'
import { MemoryLevel } from './levels/MemoryLevel'
import { QuizLevel } from './levels/QuizLevel'
import { PHASE_ORDER, type Phase } from './types'

function nextPhase(current: Phase): Phase {
  const i = PHASE_ORDER.indexOf(current)
  const next = PHASE_ORDER[i + 1]
  return next ?? 'finale'
}

export function LoveGame() {
  const [phase, setPhase] = useState<Phase>('intro')

  const goNext = useCallback(() => {
    setPhase((p) => nextPhase(p))
  }, [])

  const restart = useCallback(() => {
    setPhase('intro')
  }, [])

  const shellTitle = useMemo(() => {
    if (phase === 'intro') {
      return 'Ready when you are.'
    }
    if (phase === 'finale') {
      return 'You made it to the end.'
    }
    const step = PHASE_ORDER.indexOf(phase)
    const total = PHASE_ORDER.length - 1
    return `Level ${String(step)} of ${String(total)}`
  }, [phase])

  return (
    <GameShell phase={phase} title={shellTitle}>
      {phase === 'intro' ? (
        <IntroLevel
          onStart={() => {
            setPhase('hearts')
          }}
        />
      ) : null}
      {phase === 'hearts' ? <HeartHuntLevel onComplete={goNext} /> : null}
      {phase === 'quiz' ? <QuizLevel onComplete={goNext} /> : null}
      {phase === 'memory' ? <MemoryLevel onComplete={goNext} /> : null}
      {phase === 'hug' ? <HugMeterLevel onComplete={goNext} /> : null}
      {phase === 'finale' ? <FinaleLevel onPlayAgain={restart} /> : null}
    </GameShell>
  )
}
