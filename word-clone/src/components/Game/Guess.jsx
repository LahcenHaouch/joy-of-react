import { range } from "../../utils";

export default function Guess({ letters }) {
  const guessDisplay = letters.length === 0 ? range(0, 5) : letters;

  return (
    <p className="guess">
      {
        guessDisplay.map(letter => {
          if (typeof letter === 'number') {
            return (
              <span key={letter} className="cell"></span>
            )
          }
          return (
            <span key={letter.id} className="cell">{letter.value}</span>
          )
        })
      }
    </p>
  )
}
