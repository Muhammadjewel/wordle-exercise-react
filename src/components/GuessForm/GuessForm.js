import React from "react";

function GuessForm({ isGameOver, handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    setGuess(event.target.value.trim().toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("The guess should be exactly 5 characters length");
      return;
    }

    handleAddGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={isGameOver.status}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessForm;
