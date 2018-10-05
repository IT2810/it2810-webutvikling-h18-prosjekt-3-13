import React from "react";
import { Component } from "react";
import DailyGoal from "../components/DailyGoal";
import DailyGoalForm from "../components/DailyGoalForm";
import DailyGoalContainer from "../components/DailyGoalContainer";
import saveData from "../utils/localstorage";
import { loadData } from "../utils/localstorage";

import { StyleSheet, Text, View, Button } from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goals: [{ goalText: "Gå med hunden" }, { goalText: "Tisse på do" }]
    };
  }

  static navigationOptions = {
    title: "Home"
  };

  addNewGoal = goalObject => {
    let prevGoals = [...this.state.goals];
    prevGoals.push(goalObject);

    this.setState({ goals: prevGoals });
    saveData("goals", prevGoals);
  };

  clearGoals = () => {
    this.setState({ goals: [] });
  };

  componentDidMount() {
    loadData("HomeScreenState").then(result => this.setState(result));
  }

  componentDidUpdate() {
    saveData("HomeScreenState", this.state);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", marginTop: "10%" }}>
        <Text>Home Screen</Text>
        <DailyGoalForm
          onNewGoal={this.addNewGoal}
          clearAllGoals={this.clearGoals}
          style={{ margin: 20 }}
        />
        <Text style={{ margin: 20 }}>Tidligere mål:</Text>
        <DailyGoalContainer currentGoals={this.state.goals} />
      </View>
    );
  }
}

// If calling navigate --> stacknavigator will check for existing route, if no existing, it will add the route to the stack. If you for some reason want to add another route of a preexisting route on the stack (I.E to pass unique params) --> use push() instead of navigate().

//If you want to force user to go back, call this.props.navigation.goBack()
