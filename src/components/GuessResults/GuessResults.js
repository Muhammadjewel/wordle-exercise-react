import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results }) {
  const remainingAttempts = NUM_OF_GUESSES_ALLOWED - results.length;
  console.log({ remainingAttempts });

  return (
    <div className="guess-results">
      {results.map(({ label, id }) => (
        <p key={id} className="guess">
          {label.split("").map((char) => (
            <span className="cell">{char}</span>
          ))}
        </p>
      ))}

      {remainingAttempts > 0 &&
        range(remainingAttempts).map((attempt, index) => (
          <p key={index} className="guess">
            {range(5).map((char) => (
              <span className="cell"></span>
            ))}
          </p>
        ))}
    </div>
  );
}

export default GuessResults;
