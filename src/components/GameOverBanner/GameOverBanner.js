import React from "react";

function GameOverBanner({ result, attempts, answer }) {
  return (
    <div className={`${result === "win" ? "happy" : "sad"} banner`}>
      {result === "win" ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {attempts} {attempts > 1 ? "guesses" : "guess"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default GameOverBanner;
