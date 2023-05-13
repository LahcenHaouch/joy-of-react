export default function WinnerBanner({ numberOfGuesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in {' '}
        <strong>{numberOfGuesses} guess{numberOfGuesses > 1 ? 'es' : ''}</strong>.
      </p>
    </div>
  )
}
