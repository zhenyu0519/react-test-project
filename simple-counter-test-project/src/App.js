import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    error: false,
  };

  render() {
    const { counter, error } = this.state;
    return (
      <div className="app" data-test="component-apps">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => {
            error
              ? this.setState({ counter: counter + 1, error: false })
              : this.setState({ counter: counter + 1 });
          }}
        >
          Increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => {
            counter > 0
              ? this.setState({ counter: counter - 1, error: "" })
              : this.setState({ error: true });
          }}
        >
          Decrement counter
        </button>
        <span data-test="error-message" className={error ? "error" : "hidden"}>
          Woops, Error here!
        </span>
      </div>
    );
  }
}

export default App;
