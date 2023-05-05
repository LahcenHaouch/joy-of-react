export default function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      {
        guesses.map(({ id, value }) => (
          <p id={id} className="guess">{value}</p>
        ))
      }
    </div>
  )
}
