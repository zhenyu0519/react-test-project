import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr } from "./utils/testUtils";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test("renders component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
