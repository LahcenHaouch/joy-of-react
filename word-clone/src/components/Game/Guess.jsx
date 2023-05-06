export default function Guess({ letters }) {
  return (
    <p className="guess">
      {
        letters.map(({ id, value }) => (
          <span key={id} className="cell">{value}</span>
        ))
      }
    </p>
  )
}
