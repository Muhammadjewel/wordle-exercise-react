import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess">
      {guess.checkedGuess &&
        guess.checkedGuess.map(({ letter, status }, index) => (
          <span key={index} className={`cell ${status}`}>
            {letter}
          </span>
        ))}

      {!guess.checkedGuess &&
        range(5).map((item) => <span key={item} className="cell"></span>)}
    </div>
  );
}

export default Guess;
