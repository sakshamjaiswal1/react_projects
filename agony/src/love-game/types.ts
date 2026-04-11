export type Phase = 'intro' | 'hearts' | 'quiz' | 'memory' | 'hug' | 'finale'

export const PHASE_ORDER: readonly Phase[] = [
  'intro',
  'hearts',
  'quiz',
  'memory',
  'hug',
  'finale',
] as const

export type MemoryPairId = 0 | 1 | 2 | 3

export type MemoryCard = {
  id: number
  pairId: MemoryPairId
  symbol: string
  label: string
}
