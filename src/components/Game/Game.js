import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessForm from "../GuessForm/index";
import GuessResults from "../GuessResults/index";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleAddGuess(result) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Max of ${NUM_OF_GUESSES_ALLOWED} attempts`);
      return;
    }

    setGuesses([...guesses, { label: result, id: crypto.randomUUID() }]);
    console.log(guesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
