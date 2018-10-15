import React, { Component } from "react";
import DailyGoal from "./DailyGoal";
import { View, Text } from "react-native";
import saveData from "../utils/localstorage";
import { loadData } from "../utils/localstorage";
import DailyGoalForm from "./DailyGoalForm";

class DailyGoalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { goals: [], mainGoal: "" };
  }

  addNewGoal = goalObject => {
    let prevGoals = [...this.state.goals];
    let existingText = false;

    prevGoals.forEach(goal => {
      if (goal.goalText === goalObject.goalText) {
        existingText = true;
      }
    });

    if (!existingText) {
      prevGoals.push(goalObject);
    } else {
      alert("A goal with this text already exists.");
    }

    this.setState({ goals: prevGoals, mainGoal: goalObject.goalText });
    saveData("goals", prevGoals);
  };

  clearGoals = () => {
    this.setState({ goals: [], mainGoal: "" });
  };

  getPlaceholderGoal = () => {
    if (this.state.mainGoal === "") {
      return (
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          What's your goal?
        </Text>
      );
    } else {
      return (
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 10 }}>Current goal:</Text>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}
          >
            {this.state.mainGoal}
          </Text>
        </View>
      );
    }
  };

  componentDidMount() {
    loadData("GoalContainerState").then(result => this.setState(result));
  }

  componentDidUpdate() {
    saveData("GoalContainerState", this.state);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1 }}>{this.getPlaceholderGoal()}</View>
        <View style={{ flex: 8 }}>
          <DailyGoalForm
            onNewGoal={this.addNewGoal}
            clearAllGoals={this.clearGoals}
            style={{ margin: 20 }}
          />
        </View>
      </View>
    );
  }
}

export default DailyGoalContainer;
