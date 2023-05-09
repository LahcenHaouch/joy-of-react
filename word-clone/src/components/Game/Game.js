import React from 'react';

import { guessesArray, sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from './GuessResults';

const NUM_OF_GUESSES_ALLOWED = 5;

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(guessesArray);
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const currentIndex = guesses.findLastIndex(guess => Array.isArray(guess)) + 1;

    // console.log({ currentIndex });
    if (currentIndex === NUM_OF_GUESSES_ALLOWED) {
      return;
    }

    setGuesses(prevGuesses => {
      const newGuesses = [...prevGuesses];

      newGuesses[currentIndex] = [...currentGuess]

      return newGuesses;
    })
    setCurrentGuess('');
  }

  return (
    <div>
      <GuessResults guesses={guesses} />
      <form onSubmit={handleGuessSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="\w{5,5}"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value.trim().toUpperCase())}
        />
      </form>
    </div>
  )
}

export default Game;
