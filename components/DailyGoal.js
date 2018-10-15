import React, { Component } from "react";
import { Text, View } from "react-native";

class DailyGoal extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.goalText}</Text>
      </View>
    );
  }
}

export default DailyGoal;
