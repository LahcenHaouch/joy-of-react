import Guess from './Guess';

import { range } from '../../utils';

export default function GuessResults({ guesses }) {
  console.log(range(0, 5));

  return (
    <div className="guess-results">
      {
        range(0, 5).map(index => (
          <Guess key={index} letters={guesses[index] || []} />
        ))
      }
    </div>
  )
}
