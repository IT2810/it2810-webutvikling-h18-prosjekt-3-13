import React from "react";
import Pedometer from "../components/Pedometer";
import renderer from "react-test-renderer";

it("renders settings correctly", () => {
  const tree = renderer
    .create(
      <Pedometer
        screenProps={{
          someText: "some text",
          handleThemeChange: this.handleThemeChange,
          bg: "black",
          bgSec: "white",
          color: "white"
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
