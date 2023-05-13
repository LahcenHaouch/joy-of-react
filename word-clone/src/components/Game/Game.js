import React from 'react';

import { guessesArray, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessResults from './GuessResults';
import GuessInput from './GuessInput';
import WinnerBanner from './WinnerBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(guessesArray);

  const currentGuessIndex = guesses.findLastIndex(guess => typeof guess === 'string');
  const currentGuess = guesses[currentGuessIndex];

  const handleGuessSubmit = (newGuess) => {
    const currentIndex = guesses.findLastIndex(guess => typeof guess === 'string') + 1;

    if (currentIndex === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses];

      newGuesses[currentIndex] = newGuess

      return newGuesses;
    })
  }

  return (
    <div>
      {
        currentGuess === answer && (
          <WinnerBanner numberOfGuesses={currentGuessIndex + 1} />
        )
      }
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </div>
  )
}

export default Game;
