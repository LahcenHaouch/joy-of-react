import { guessesArray } from "../../utils";

export default function Guess({ letters }) {
  const guessDisplay = Array.isArray(letters) ? letters : guessesArray;

  console.log({ guessDisplay })

  return (
    <p className="guess">
      {
        guessDisplay.map((letter, index) => (
          <span key={index} className="cell">{letter}</span>
        ))
      }
    </p>
  )
}
