import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm/index";
import GuessResults from "../GuessResults/index";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleAddGuess(result) {
    if (results.length >= 6) {
      window.alert("Max of 6 attempts");
      return;
    }

    setResults([...results, { label: result, id: crypto.randomUUID() }]);
    console.log(results);
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessForm handleAddGuess={handleAddGuess} />
    </>
  );
}

export default Game;
