import Guess from './Guess';

export default function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {
        guesses.map((letters, index) => (
          <Guess key={index} letters={letters} />
        ))
      }
    </div>
  )
}
