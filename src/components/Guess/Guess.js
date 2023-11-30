import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <div className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {guess.label[index] || ""}
        </span>
      ))}
    </div>
  );
}

export default Guess;
