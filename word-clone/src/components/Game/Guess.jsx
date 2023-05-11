import * as React from 'react';

import { guessesArray } from "../../utils";

export default function Guess({ letters }) {
  const guessLetterArray = React.useMemo(() => guessesArray.slice(0, guessesArray.length - 1), [guessesArray]);

  const guessDisplay = Array.isArray(letters) ? letters : guessLetterArray;

  return (
    <p className="guess">
      {
        guessDisplay.map((letter, index) => (
          <span key={index} className="cell">{typeof letter === 'string' ? letter : ''}</span>
        ))
      }
    </p>
  )
}
