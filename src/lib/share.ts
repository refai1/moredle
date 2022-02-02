import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { WORDLE_TITLE } from '../constants/strings'
import {isMobile} from 'react-device-detect';

export const shareStatus = (guesses: string[], lost: boolean) => {
  const mainText = `${WORDLE_TITLE} ${solutionIndex+1} ${lost ? 'X' : guesses.length}/6\n\n` + generateEmojiGrid(guesses);
  if (isMobile && navigator.share){
    navigator.share({
      title: "Moredle",
      text: mainText,
    })
  } else {
    navigator.clipboard.writeText(mainText)
  }
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
