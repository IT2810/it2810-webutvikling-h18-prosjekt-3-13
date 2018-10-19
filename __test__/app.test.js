import React from "react";
import App from "../App.js";
import renderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

it("renders settings correctly", () => {
  const tree = renderer.create(<App defaultScreen={"Settings"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders todoscreen correctly", () => {
  const tree = renderer.create(<App defaultScreen={"Todo"} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
