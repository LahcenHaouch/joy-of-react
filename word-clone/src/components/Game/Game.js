import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    console.log(guess);
    setGuess('');
  }

  return (
    <form on onSubmit={handleGuessSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        value={guess}
        onChange={event => setGuess(event.target.value.trim().toUpperCase())}
      />
    </form>
  )
}

export default Game;
