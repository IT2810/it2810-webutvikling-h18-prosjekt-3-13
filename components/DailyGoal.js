import React, { Component } from "react";
import { Text, View } from "react-native";
import { FormInput, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

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
