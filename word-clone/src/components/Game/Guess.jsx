import { guessesArray } from "../../utils";

export default function Guess({ letters }) {
  const guessDisplay = Array.isArray(letters) ? letters : guessesArray;

  return (
    <p className="guess">
      {
        guessDisplay.map((letter, index) => (
          <span key={index} className="cell">{typeof letter === 'string' ? letter : ''}</span>
        ))
      }
    </p>
  )
}
