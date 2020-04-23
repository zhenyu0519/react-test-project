import React from "react";
import enzyme, { shallow } from "enzyme";
import { findByTestAttr } from "../../utils/testUtils";

import GuessWords from "./GuessWords";
const defaultProps = [
  {
    guessWords: [{ guessWords: "train", letterMatchCount: 3 }],
  },
];

const setup = (props) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessWords {...setupProps} />);
};

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords: [] });
  });
  test("render component without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("render instructions to guess a word", () => {
    const instructions = findByTestAttr(wrapper, "guess-instruction");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  const guessWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessWords });
  });
  test("render component withour error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("render guess word section", () => {
    const guessWordsNode = findByTestAttr(wrapper, "guessd-words");
    expect(guessWordsNode.length).toBe(1);
  });

  test("correct number of guess word", () => {
    const guessWordNodes = findByTestAttr(wrapper, "guessd-word");
    expect(guessWordNodes.length).toBe(guessWords.length);
  });
});
