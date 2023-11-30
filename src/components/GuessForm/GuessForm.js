import React from "react";

function GuessForm({ handleAddGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleChange(event) {
    setGuess(event.target.value.trim().toUpperCase());
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length < 5) {
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
        pattern="^.{5}$"
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessForm;
