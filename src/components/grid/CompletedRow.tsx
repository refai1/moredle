import React from 'react'
import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CompletedRow = ({ guess }: Props) => {
  const [flip, setFlip] = React.useState([0,0,0,0,0,0])
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} idx={i} value={letter} status={statuses[i]} flip={flip[i]} setFlip={setFlip}/>
      ))}
    </div>
  )
}
