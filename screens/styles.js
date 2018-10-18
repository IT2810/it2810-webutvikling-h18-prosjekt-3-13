import { StyleSheet } from 'react-native';
import primaryColor from '../App.js';

export const styles = (props) => StyleSheet.create({
  topBox:{
    height: "5%",
    backgroundColor: props.bg,
  },
  container: {
    flex: 1,
    backgroundColor: props.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: props.color,
  },
  textGoal:{
    fontSize: 10,
    color: props.color,
  },
  textCurrentGoal:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: props.color,
  },
  textTypeHere:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: props.color,
  },
  bg:{
    backgroundColor: props.bg
  },
});
