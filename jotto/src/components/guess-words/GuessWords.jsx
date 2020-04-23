import React from "react";
import PropTypes from "prop-types";

const GuessWords = ({ guessWords }) => {
  let contents;
  if (!guessWords.length) {
    contents = <span data-test="guess-instruction">Try to guess a word</span>;
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessWords.prototype = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWords: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWords;
