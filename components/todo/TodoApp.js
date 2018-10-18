import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-elements';

import TodoModel from './TodoModel';
import PartList from './PartList';
import InputBox from './InputBox';

import { styles } from '../../screens/styles.js';
import {loadData} from "../../utils/localstorage";
import saveData from "../../utils/localstorage";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
    }

    componentDidMount() {
        loadData("TodoAppState").then(result => this.setState(result));
    }

    componentDidUpdate() {
        saveData("TodoAppState", this.state);
    }

    addTodoItem = (task) => {
        const midList = this.state.dataList.slice();
        midList.push(new TodoModel(task, false));
        this.setState({
            dataList: midList
        })
    };

    removeTodoItem = (task) => {
        const midList = this.state.dataList.slice()
        const taskIndex = midList.indexOf(task);
        midList.splice(taskIndex, 1);
        this.setState({
            dataList: midList
        })
    };

    changeCompleted = (task) => {
        const midList = this.state.dataList.slice();
        const taskIndex = midList.indexOf(task);
        let midTask = task;
        midTask.completed = !midTask.completed;
        midList.splice(taskIndex, 1, midTask);
        this.setState({
            dataList: midList
        });
    };

    handleDelete = (task) => {
        this.removeTodoItem(task);
    };

    handleChange = (task) => {
        this.changeCompleted(task);
    };

    handleAdd = (task) => {
        this.addTodoItem(task);
    };

    render() {
        const completed = this.state.dataList.filter(task => task.completed);
        const notCompleted = this.state.dataList.filter(task => !task.completed);

        renderLists = () => {
            if (this.state.dataList.length) {
                return (
                    <View
                        style={styles(this.props.screenProps).toDoLists1}>
                        <PartList screenProps={this.props.screenProps} list={notCompleted} handleDelete={this.handleDelete}
                                  handleChange={this.handleChange}/>
                        <View
                            style={(completed.length && notCompleted.length) ? {
                                borderBottomColor: this.props.screenProps.bgSec,
                                borderBottomWidth: 2, marginTop: 20, marginBottom: 20, marginLeft: 150, marginRight: 150} : {}
                            }
                        />
                        <PartList screenProps={this.props.screenProps} list={completed} handleDelete={this.handleDelete} handleChange={this.handleChange}/>
                    </View>
                )
            } else {
                return(
                    <View
                        style={styles(this.props.screenProps).toDoLists2}>
                        <Text
                            style={{fontSize: 50, color: 'lightgrey', textAlign: "center"}}>
                            All todo's completed
                        </Text>
                    </View>
                )
            }
        }
        return (
            <View
                style={styles(this.props.screenProps).toDoLists3}>
                <InputBox screenProps = {this.props.screenProps}
                    style={{
                    flex: 1,
                    marginBottom: 20,
                }}
                    onAdd={this.handleAdd}/>
                {renderLists()}
            </View>
        );
    }
}

module.exports = TodoApp;
