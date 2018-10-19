import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import {Button, Input} from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry, TextInput } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import saveData from "../utils/localstorage.js";
import { loadData } from "../utils/localstorage.js";
import { styles } from '../screens/styles.js';


export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
    inputText: "",
    stepGoal: 10000,
  };

  componentDidMount() {
    loadData("stepGoal").then(result => this.setState({stepGoal: result}))
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  updateStepGoal = () => {
    // Only change goal if it is a number greater than 0 and does not contain '.'
    if(!(isNaN(this.state.inputText)) && this.state.inputText > 0 && !(this.state.inputText.indexOf('.') > -1)){
      this.setState({
      stepGoal: this.state.inputText,
      }
    );
      saveData("stepGoal", this.state.inputText);
    }
    this.setState({
        inputText: ''
    })
  };

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount(result => {
      this.setState({
        currentStepCount: result.steps
      });
    });

    Pedometer.isAvailableAsync().then(
      result => {
        this.setState({
          isPedometerAvailable: String(result)
        });
      },
      error => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      result => {
        this.setState({ pastStepCount: result.steps });
      },
      error => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error
        });
      }
    );
  };

  getProgressPercent(){
    const progressPercent = this.state.pastStepCount/this.state.stepGoal;
    return Math.floor(progressPercent*100);
  }

  getProgressColor(){
    if(this.state.pastStepCount/this.state.stepGoal >= 1){
      return "skyblue";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.9){
      return "#b819fc";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.5){
      return "#d3f2ff";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.33){
      return "#e8f8ff";
    }
    else{
      return "#ffffff";
    }
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    const {textStyle} = this.props;
    const progressColor = this.getProgressColor();
    const leftText = this.getProgressPercent("left");
    const rightText = this.getProgressPercent("right");
    return (
      <View style={{alignItems: "center"}}>
          <View style={{marginTop: 25}}/>
          <ProgressCircle radius={110} percent={this.getProgressPercent()} borderWidth={10} color={"orange"} bgColor={this.getProgressColor()}><Text style={styles(this.props.screenProps).progressCircleText}>{"step count: " + this.state.pastStepCount.toString() + "\nCurrent goal: " + this.state.stepGoal}</Text></ProgressCircle>
        <Text style={styles(this.props.screenProps).text}>
          {textStyle}
        </Text>
          <Input
              placeholderTextColor={this.props.screenProps.color}
              placeholder={"New step goal"}
              inputContainerStyle={{
                  width: "60%",
                  margin: 10,
                  alignSelf: "stretch",
              }}
              inputStyle={{
                  color: this.props.screenProps.color
              }}
              onChangeText={(text) => this.setState({text})}
              onChangeText={text => this.setState({ inputText: text })}
              value={this.state.inputText}
          />




        <Button
          title="Set goal"
          buttonStyle={{ backgroundColor: "orange", marginBottom: 20}} //MarginBottom her
          onPress={this.updateStepGoal}
        />
      </View>
    );
  }
}

Expo.registerRootComponent(PedometerSensor);
