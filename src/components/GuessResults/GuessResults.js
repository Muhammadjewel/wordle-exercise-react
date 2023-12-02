import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess";

import { range } from "../../utils";

function GuessResults({ guesses }) {
  const emptyItems = range(NUM_OF_GUESSES_ALLOWED - guesses.length).map(() => ({
    id: crypto.randomUUID(),
    label: "",
  }));

  const listToShow = [...guesses, ...emptyItems];

  return (
    <div className="guess-results">
      {listToShow.map((guess) => (
        <Guess key={guess.id} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
