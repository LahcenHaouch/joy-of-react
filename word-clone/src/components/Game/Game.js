import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from './GuessResults';

const NUM_OF_GUESSES_ALLOWED = 5;

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [currentGuess, setCurrentGuess] = React.useState('');

  console.log({ guesses })

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
      return;
    }
    setGuesses(prevGuesses => prevGuesses.concat({ id: crypto.randomUUID(), letters: [...currentGuess].map(letter => ({ id: crypto.randomUUID(), value: letter })) }))
    setCurrentGuess('');
  }

  return (
    <div>
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
      <GuessResults guesses={guesses} />
    </div>
  )
}

export default Game;
