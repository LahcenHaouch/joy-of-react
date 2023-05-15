import * as React from 'react';

export default function GuessInput({ handleGuessSubmit, disabled }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleGuessSubmit(guess);
    setGuess('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        pattern="\w{5,5}"
        value={guess}
        onChange={event => setGuess(event.target.value.trim().toUpperCase())}
        disabled={disabled}
      />
    </form>
  )
}
