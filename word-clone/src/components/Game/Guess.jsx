import * as React from 'react';

import { guessesArray } from "../../utils";
import { checkGuess } from '../../game-helpers';

export default function Guess({ guess, answer }) {
  const guessLetterArray = React.useMemo(() => guessesArray.slice(0, guessesArray.length - 1), [guessesArray]);
  const letters = typeof guess === 'string' ? checkGuess(guess, answer) : undefined;

  const guessDisplay = Array.isArray(letters) ? letters : guessLetterArray;


  return (
    <p className="guess">
      {
        guessDisplay.map((element, index) => (
          <span key={index} className={`cell ${element.status ?? ''}`}>{element.letter ?? ''}</span>
        ))
      }
    </p>
  )
}
