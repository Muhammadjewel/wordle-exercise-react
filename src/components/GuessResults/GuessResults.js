import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ results }) {
  const remainingAttempts = NUM_OF_GUESSES_ALLOWED - results.length;
  console.log({ remainingAttempts });

  return (
    <div className="guess-results">
      {results.map(({ label, id }) => (
        <div key={id} className="guess">
          {label.split("").map((char, index) => (
            <div key={index} className="cell">
              {char}
            </div>
          ))}
        </div>
      ))}

      {range(remainingAttempts).map((attempt, index) => (
        <div key={index} className="guess">
          {range(5).map((char, index) => (
            <div key={index} className="cell"></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GuessResults;
