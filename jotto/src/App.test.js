import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "./utils/testUtils";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test("renders component without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});
