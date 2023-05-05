import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import PreviousGuesses from './PreviousGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [currentGuess, setCurrentGuess] = React.useState('');

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    setGuesses(prevGuesses => prevGuesses.concat({ id: crypto.randomUUID(), value: currentGuess }))
    setCurrentGuess('');
  }

  return (
    <div>
      <form on onSubmit={handleGuessSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="\w{5,5}"
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value.trim().toUpperCase())}
        />
      </form>
      <PreviousGuesses guesses={guesses} />
    </div>
  )
}

export default Game;
