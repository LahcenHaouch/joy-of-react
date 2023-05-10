import React from 'react';

import { guessesArray, sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from './GuessResults';
import GuessInput from './GuessInput';

const NUM_OF_GUESSES_ALLOWED = 5;

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(guessesArray);

  const handleGuessSubmit = (newGuess) => {
    const currentIndex = guesses.findLastIndex(guess => Array.isArray(guess)) + 1;

    if (currentIndex === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses];

      newGuesses[currentIndex] = [...newGuess]

      return newGuesses;
    })
  }

  return (
    <div>
      <GuessResults guesses={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </div>
  )
}

export default Game;
