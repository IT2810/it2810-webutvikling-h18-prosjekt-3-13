import React from 'react';
import { Text, View } from 'react-native';
import { List } from 'react-native-elements';

import TodoModel from './TodoModel';
import PartList from './PartList';
import InputBox from './InputBox';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: []
        }
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
                        style={{
                            flex: 7
                        }}>
                        <PartList list={notCompleted} handleDelete={this.handleDelete}
                                  handleChange={this.handleChange}/>
                        <PartList list={completed} handleDelete={this.handleDelete} handleChange={this.handleChange}/>
                    </View>
                )
            } else {
                return(
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
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
                style={{
                flex: 1,
                flexDirection: 'column',
                paddingTop: 70
            }}>
                <InputBox
                    style={{
                    flex: 1
                }}
                    onAdd={this.handleAdd}/>
                {renderLists()}
            </View>
        );
    }
}

module.exports = TodoApp;