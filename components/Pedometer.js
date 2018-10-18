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

  getProgressPercent(direction){
    const progressPercent = this.state.pastStepCount/this.state.stepGoal;
    if(direction == "left"){
      if(progressPercent > 0.5){
        return Math.floor(progressPercent*100);
      }
      else return 0;
    }
    if(direction == "right"){
      if(1 - progressPercent > 0.5){
        return Math.floor(progressPercent*100);
      }
      else return 0;
    }
  }

  getProgressColor(){
    if(this.state.pastStepCount/this.state.stepGoal >= 1){
      return "#49e800";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.9){
      return "#a5ff00";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.5){
      return "yellow";
    }
    else if(this.state.pastStepCount/this.state.stepGoal >= 0.33){
      return "orange";
    }
    else{
      return "#a30000";
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
          <View style={{marginTop: 30}}/>
          <ProgressCircle radius={110} percent={this.getProgressPercent("left")} borderWidth={10} color={"lightblue"} bgColor={this.getProgressColor()}><Text style={styles(this.props.screenProps).progressCircleText}>{"step count: " + this.state.currentStepCount.toString() + "\nCurrent goal: " + this.state.stepGoal}</Text></ProgressCircle>
        <Text style={styles(this.props.screenProps).text}>
          {textStyle}
        </Text>

          <Input
              placeholderTextColor={this.props.screenProps.color}
              placeholder={"New step goal"}
              inputContainerStyle={{
                  width: "70%",
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
          title="Set as your goal"
          buttonStyle={{ backgroundColor: "orange", width: 300, marginBottom: 30 }}
          onPress={this.updateStepGoal}
        />
      </View>
    );
  }
}

Expo.registerRootComponent(PedometerSensor);
