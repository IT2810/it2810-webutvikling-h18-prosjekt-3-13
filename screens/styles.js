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
    containerTodo: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: props.bg,
    },
    toDoLists1: {
        flex: 7,
        backgroundColor: props.bg,
    },
    toDoLists2:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: props.bg,
    },
    toDoLists3: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 70,
      backgroundColor: props.bg,
    },
    inPutBoxTodo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: props.bg,
    },
    inPutBoxTodoText: {
      flex: 1,
      height: 36,
      fontSize: 16,
      margin: 8,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: '#eee',
      borderRadius: 8,
      backgroundColor: props.bg,
      color: props.color,
    },
});
