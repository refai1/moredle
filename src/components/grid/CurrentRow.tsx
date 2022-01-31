import React, { useEffect } from 'react'
import { Cell } from './Cell'

type Props = {
  guess: string
  animateRow: number
  flip: number[]
  setFlip: (n: number[]) => void
}

export const CurrentRow = ({ guess, animateRow, flip, setFlip }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(6 - splitGuess.length))

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} idx={i} value={letter} flip={flip[i]} setFlip={setFlip} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} idx={i}/>
      ))}
    </div>
  )
}
