import Guess from './Guess';

export default function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {
        guesses.map(({ id, letters }) => (
          <Guess key={id} letters={letters} />
        ))
      }
    </div>
  )
}
