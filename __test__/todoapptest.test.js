import React from "react";
import TodoApp from "../components/todo/TodoApp";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <TodoApp
        test={true}
        screenProps={{
          someText: "some text",
          handleThemeChange: this.handleThemeChange,
          bg: "white",
          color: "black"
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
