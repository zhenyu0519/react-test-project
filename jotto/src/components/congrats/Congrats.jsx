import React from "react";

const Congrats = ({ success }) => {
  if (success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the world
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

export default Congrats;
