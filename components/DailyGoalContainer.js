import React, { Component } from "react";
import { View, Text } from "react-native";
import saveData from "../utils/localstorage";
import { loadData } from "../utils/localstorage";
import DailyGoalForm from "./DailyGoalForm";
import { styles } from "../screens/styles.js";

// initial state
const init = { goals: [], mainGoal: "" };

class DailyGoalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { goals: [], mainGoal: "" };
  }

  // adding a new goal – callback
  addNewGoal = goalObject => {
    // mainly for scalability in case you want more goals at a time
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

  // if the state does not equal inital state, set to inital state – callback
  clearGoals = () => {
    if (this.state !== init) {
      this.setState(init);
    }
  };

  // if goal is empty, return default statement
  // else, return the goal
  getPlaceholderGoal = () => {
    if (this.state.mainGoal === "") {
      return (
        <Text style={styles(this.props.screenProps).textCurrentGoal}>
          What's your goal?
        </Text>
      );
    } else {
      return (
        <View style={{ alignItems: "center" }}>
          <Text style={styles(this.props.screenProps).textGoal}>
            Current goal:
          </Text>
          <Text style={styles(this.props.screenProps).textCurrentGoal}>
            {this.state.mainGoal}
          </Text>
        </View>
      );
    }
  };

  // asyncstorage for loading and saving the state
  componentDidMount() {
    loadData("GoalContainerState").then(result => this.setState(result));
  }

  componentDidUpdate() {
    saveData("GoalContainerState", this.state);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50
        }}
      >
        <View style={{ flex: 2 }}>{this.getPlaceholderGoal()}</View>
        <View style={{ flex: 8 }}>
          <DailyGoalForm
            onNewGoal={this.addNewGoal}
            clearAllGoals={this.clearGoals}
            style={{ margin: 20 }}
            screenProps={this.props.screenProps}
          />
        </View>
      </View>
    );
  }
}

export default DailyGoalContainer;
