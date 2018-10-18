import React from "react";
import { Component } from "react";
import DailyGoalForm from "../components/DailyGoalForm";
import DailyGoalContainer from "../components/DailyGoalContainer";
import saveData from "../utils/localstorage";
import { loadData } from "../utils/localstorage";
import PedometerSensor from "../components/Pedometer.js";

import { StyleSheet, Text, View, Button } from "react-native";
import { styles } from "./styles.js";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    const { navigation, screenProps } = this.props;
    return (
      <View style={styles(this.props.screenProps).container}>
        <View style={styles(this.props.screenProps).topBox}></View>
        <View
          style={[
            styles(this.props.screenProps).container,
          ]}
        >
            <PedometerSensor screenProps={this.props.screenProps}/>
          <DailyGoalContainer screenProps={this.props.screenProps}/>
        </View>
      </View>
    );
  }
}

// If calling navigate --> stacknavigator will check for existing route, if no existing, it will add the route to the stack. If you for some reason want to add another route of a preexisting route on the stack (I.E to pass unique params) --> use push() instead of navigate().

//If you want to force user to go back, call this.props.navigation.goBack()
