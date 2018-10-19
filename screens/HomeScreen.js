import React from "react";
import { Component } from "react";
import DailyGoalContainer from "../components/DailyGoalContainer";
import PedometerSensor from "../components/Pedometer.js";
import { Icon } from "react-native-elements";

import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import { styles } from "./styles.js";

// Class for the HomeScreen component
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  // Values for the Tab in the BottomTabNavigator, title and icon.
  static navigationOptions = {
    title: "Home",
    tabBarIcon: () => (
      <Icon size={26} type="material-community" name="home" color="#00aced" />
    )
  };

  // Renders components for the HomeScreen (Views, with scrollView and a PedometerSensor and a DailyGoalContainer)
  render() {
    return (
      <View style={styles(this.props.screenProps).container}>
        <View style={styles(this.props.screenProps).topBox} />
        <ScrollView
          contentContainerStyle={styles(this.props.screenProps).scrollViewStyle}
        >
          <PedometerSensor screenProps={this.props.screenProps} />
          <DailyGoalContainer screenProps={this.props.screenProps} />
        </ScrollView>
      </View>
    );
  }
}
