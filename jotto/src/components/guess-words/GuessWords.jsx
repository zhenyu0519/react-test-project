import React from "react";
import PropTypes from "prop-types";

const GuessWords = ({ guessWords }) => {
  let contents;
  if (!guessWords.length) {
    contents = <span data-test="guess-instruction">Try to guess a word</span>;
  } else {
    const guessWordsRows = guessWords.map((word, index) => (
      <tr key={index} data-test='guessd-word'>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessd-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessWordsRows}</tbody>
        </table>
      </div>
    );
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
