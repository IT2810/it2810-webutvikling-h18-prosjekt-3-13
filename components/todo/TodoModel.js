class TodoModel {
    constructor(task, completed, createdAt = new Date()){
        this.task = task;
        this.completed = completed || false;
        this.createdAt = createdAt.getTime();
    }
}

module.exports = TodoModel;