import React, { Component } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";

class DailyGoalForm extends Component {
  constructor(props) {
    super(props);

    // only state is the input from the form
    this.state = { inputText: "" };
  }

  // add whatever is in the input form as a goal, unless it is an empty string
  addDailyGoal = () => {
    if (this.state.inputText !== "") {
      this.props.onNewGoal({ goalText: this.state.inputText });
    }

    this.mainInput.clear();
  };

  // simple callback
  clearGoals = () => {
    this.props.clearAllGoals();
  };

  // render function is pretty straight forward
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <View style={{ width: 300, margin: 20 }}>
          <Input
            placeholderTextColor={this.props.screenProps.color}
            ref={input => {
              this.mainInput = input;
            }}
            placeholder={"Type here"}
            inputContainerStyle={{
              width: "70%",
              margin: 10,
              marginLeft: 50,
              alignSelf: "stretch"
            }}
            inputStyle={{
              color: this.props.screenProps.color
            }}
            onChangeText={text => this.setState({ inputText: text })}
          />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "stretch"
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              title="New goal"
              buttonStyle={{ backgroundColor: "orange", width: 120 }}
              onPress={this.addDailyGoal}
            />
            <Button
              title="Remove goal"
              buttonStyle={{
                backgroundColor: "skyblue",
                marginBottom: 30,
                width: 120
              }}
              onPress={this.clearGoals}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default DailyGoalForm;
