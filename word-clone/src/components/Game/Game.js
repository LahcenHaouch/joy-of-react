import React from 'react';

import { guessesArray, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessResults from './GuessResults';
import GuessInput from './GuessInput';
import HappyBanner from './HappyBanner';
import SadBanner from './SadBanner';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState(guessesArray);

  const currentGuessIndex = guesses.findLastIndex(guess => typeof guess === 'string');
  const currentGuess = guesses[currentGuessIndex];
  const userHasWon = currentGuess === answer;
  const gameHasEnded = userHasWon || currentGuessIndex === guesses.length - 1;

  const handleGuessSubmit = (newGuess) => {
    if (gameHasEnded) {
      return;
    }

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

  const handleReplayClick = () => {
    setAnswer(sample(WORDS));
    setGuesses(guessesArray);
  }

  return (
    <div>
      {
        userHasWon && (
          <HappyBanner numberOfGuesses={currentGuessIndex + 1} />
        )
      }
      {
        gameHasEnded && !userHasWon && (
          <SadBanner answer={answer} />
        )
      }
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} disabled={gameHasEnded} />
      {gameHasEnded && (<button onClick={handleReplayClick}>Replay</button>)}
    </div>
  )
}

export default Game;
