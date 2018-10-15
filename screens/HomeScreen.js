import React from "react";
import { Component } from "react";
import DailyGoalForm from "../components/DailyGoalForm";
import DailyGoalContainer from "../components/DailyGoalContainer";
import saveData from "../utils/localstorage";
import { loadData } from "../utils/localstorage";

import { Text, View } from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home"
  };

  componentDidMount() {
    loadData("HomeScreenState").then(result => this.setState(result));
  }

  componentDidUpdate() {
    saveData("HomeScreenState", this.state);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%"
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Hei og hopp, du er på Home Screen</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start" }}>
          <DailyGoalContainer />
        </View>
      </View>
    );
  }
}

// If calling navigate --> stacknavigator will check for existing route, if no existing, it will add the route to the stack. If you for some reason want to add another route of a preexisting route on the stack (I.E to pass unique params) --> use push() instead of navigate().

//If you want to force user to go back, call this.props.navigation.goBack()
