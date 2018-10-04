import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import TodoModel from './TodoModel';
import InputBox from './InputBox';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from './ListViewItem';
import Functions from './TodoFunctions';

let dataList = [
    new TodoModel('Hello Koding'),
    new TodoModel('Make a Todo App with React Native'),
    new TodoModel('Check to complete a todo'),
    new TodoModel('Long press, drag and drop a todo to sort'),
    new TodoModel('Save data with Realm'),
    new TodoModel('Sync data with Firebase')
];

let dataListOrder = getOrder(dataList);

function getOrder(list) {
    return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
    Functions.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
    if (listView.forceUpdate) listView.forceUpdate();
}

class ListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: dataList
        }
    }

    updateDataList = (dataList) => {
        dataListOrder = getOrder(dataList);
        this.setState({
            dataList: dataList
        });
    }

    onCompletedChange = (dataItem, index) => {
        let fromIndex = dataListOrder.indexOf(index);
        let toIndex = dataItem.completed ? dataListOrder.length -1 : 0;
        moveOrderItem(this, fromIndex, toIndex);
    }

    render() {
        let listView = (<View></View>);
        if (this.state.dataList.length) {
            listView = (
                <SortableListView
                    ref='listView'
                    style={{flex: 1}}
                    data={this.state.dataList}
                    order={dataListOrder}
                    onRowMoved={(e) => moveOrderItem(this, e.from, e.to)}
                    renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} dataIndex={index} onCompletedChange={this.onCompletedChange}/>}
                />
            );
        }

        return (
            <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                <InputBox
                    data={dataList}
                    updateDataList={this.updateDataList}/>
                {listView}
            </View>
        );

    }
};

module.exports = ListView;