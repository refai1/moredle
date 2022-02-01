import { CharStatus } from '../../lib/statuses'
import React from 'react'
import classnames from 'classnames'

type Props = {
  idx?: number
  value?: string
  status?: any
  flip?: number
  setFlip?: (n: number[]) => void
}

export const Cell = ({ idx, value, status, flip, setFlip }: Props) => {

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600':
        !status,
      'border-black dark:border-slate-100': value && !status,
      'bg-slate-400 dark:bg-slate-700 text-white border-slate-400 dark:border-slate-700':
        status === 'absent',
      'bg-green-500 text-white border-green-500': status === 'correct',
      'bg-yellow-500 dark:bg-yellow-700 text-white border-yellow-500 dark:border-yellow-700':
        status === 'present',
      'cell-animation': !!value,
      'animating': 1,
    }
  )
  // const animationArray = (idx: number) => {
  //   let arr = new Array(6).fill(0);
  //   arr[idx] = 1;

  //   return arr;
  // }

  // console.log(flip, idx)
  const clearArray = [0,0,0,0,0,0];
  return <div className={classes} data-flip={flip}>{value}</div>
  // onClick={()=>{if (setFlip && typeof idx !== 'undefined') setFlip(animationArray(idx))}} onAnimationEnd={()=> {if (setFlip && typeof idx !== 'undefined') setFlip(clearArray)}}
}
