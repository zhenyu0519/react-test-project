import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders root component without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-apps");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const conterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(conterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toBe(0);
});

test("error massage is hidden when no error", () => {
  const wrapper = setup();
  const errorMsg = findByTestAttr(wrapper, "error-message");
  const errorHideClass = errorMsg.hasClass("hidden");
  expect(errorHideClass).toBe(true);
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking button increments counter display", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");
    wrapper.update();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter + 1);
  });
});

describe("Decrement", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });
  test("clicking button decrements counter display when count is greater than 0", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");
    wrapper.update();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.text()).toContain(counter - 1);
  });
  // default counter state is 0, you can also set the default counter state to 0
  describe("counter is 0 and decrement is clicked", () => {
    test("counter less than 0, error shows", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
      wrapper.update();
      const errorMsg = findByTestAttr(wrapper, "error-message");
      const errorHideClass = errorMsg.hasClass("hidden");
      expect(errorHideClass).toBe(false);
    });

    test("counter still displays 0", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "decrement-button");
      button.simulate("click");
      wrapper.update();
      const counterDisplay = findByTestAttr(wrapper, "counter-display");
      expect(counterDisplay.text()).toContain(0);
    });

    test("click increment will clear the err", () => {
      const wrapper = setup();
      const button = findByTestAttr(wrapper, "increment-button");
      button.simulate("click");
      wrapper.update();
      const errorMsg = findByTestAttr(wrapper, "error-message");
      const errorHideClass = errorMsg.hasClass("hidden");
      expect(errorHideClass).toBe(true);
    });
  });
});
