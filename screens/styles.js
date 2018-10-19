import { StyleSheet } from 'react-native';
import primaryColor from '../App.js';

// Styles file to export stylesheet that can be used by all components. Takes in props passed from App.js to RootStack and further down the component-tree.
export const styles = (props) => StyleSheet.create({
    topBox:{
        height: "5%",
        backgroundColor: props.bgSec,
    },
    container: {
        flex: 1,
        backgroundColor: props.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollViewStyle: {
        backgroundColor: props.bg,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: props.color,
    },
    textGoal:{
        fontSize: 15,
        color: props.color,
    },
    textCurrentGoal:{
        fontSize: 30,
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
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: props.bg,
    },
    container2do: {
        justifyContent: 'center',
        height: "100%",
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
      paddingTop: 0,
      backgroundColor: props.bg,
    },
    inPutBoxTodo: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: props.bg,
        marginBottom: 10,
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
    progressCircleText: {
        fontSize: 18,
        color: "#1d1d1d",
        textAlign: "center",
        fontWeight: 'bold',
    }
});
