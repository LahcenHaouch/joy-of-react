import Guess from './Guess';

export default function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {
        guesses.map((guess, index) => (
          <Guess key={index} guess={guess} answer={answer} />
        ))
      }
    </div>
  )
}
