import React from "react";
import DailyGoal from "../components/DailyGoal";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<DailyGoal />).toJSON();
  expect(tree).toMatchSnapshot();
});
