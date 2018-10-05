import React, { Component } from "react";
import DailyGoal from "./DailyGoal";

class DailyGoalContainer extends Component {
  render() {
    return this.props.currentGoals.map((goal, index) => (
      <DailyGoal goalText={goal.goalText} key={index} />
    ));
  }
}

export default DailyGoalContainer;
