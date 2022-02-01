import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import { CharStatus } from '../../lib/statuses'

type Props = {
  guesses: string[]
  currentGuess: string
  animateRow: number
  flip: number[]
  currentRowStatus: any
  setFlip: (n: number[]) => void
}

export const Grid = ({ guesses, currentGuess, animateRow, flip, currentRowStatus, setFlip }: Props) => {
  const empties =
    guesses.length < 5 ? Array.from(Array(5 - guesses.length)) : []

  return (
    <div className="pb-6">
      {guesses.map((guess, i) => (
        <CompletedRow key={i} guess={guess} />
      ))}
      {guesses.length < 6 && <CurrentRow guess={currentGuess} animateRow={animateRow} currentRowStatus={currentRowStatus} flip={flip} setFlip={setFlip}/>}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </div>
  )
}
