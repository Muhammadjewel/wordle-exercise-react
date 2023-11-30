import React from "react";

function GuessResults({ results }) {
  return (
    <div className="guess-results">
      {results.map(({ label, id }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default GuessResults;
