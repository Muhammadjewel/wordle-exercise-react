import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

import GuessForm from "../GuessForm/index";
import GuessResults from "../GuessResults/index";
import GameOverBanner from "../GameOverBanner/index";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState({
    status: false,
    result: null,
  });

  function handleAddGuess(guess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      window.alert(`Max of ${NUM_OF_GUESSES_ALLOWED} attempts`);
      return;
    }

    if (guess === answer) {
      setIsGameOver({ status: true, result: "win" });
    }

    if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED && guess !== answer) {
      setIsGameOver({ status: true, result: "lose" });
    }

    setGuesses([
      ...guesses,
      {
        checkedGuess: checkGuess(guess, answer),
        id: crypto.randomUUID(),
      },
    ]);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessForm isGameOver={isGameOver} handleAddGuess={handleAddGuess} />

      {isGameOver.status && (
        <GameOverBanner
          result={isGameOver.result}
          attempts={guesses.length}
          answer={answer}
        />
      )}
    </>
  );
}

export default Game;
