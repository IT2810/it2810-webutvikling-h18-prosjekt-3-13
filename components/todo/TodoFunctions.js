module.exports = {
    move: function(list, fromIndex, toIndex) { // Funksjon for å rearrange emelenter i listen
        return list.splice(toIndex, 0, list.splice(fromIndex, 1)[0]); // setter elementet fra fromIndex inn i toIndex-posisjonen
    },

    deleteTask: function(list, index) {
        return list.splice(index, 1);
    },

    searchForTodoItem: function (todoItem, todoList) {
        return todoList.find((item) => item.task.toLowerCase() === todoItem.task.toLowerCase());
    }
};