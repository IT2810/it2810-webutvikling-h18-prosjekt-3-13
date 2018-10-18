class TodoModel { // General model used when creating a new Task. CreatedAt wil be in ms and work as a key.
    constructor(task, completed, createdAt = new Date()){
        this.task = task;
        this.completed = completed || false;
        this.createdAt = createdAt.getTime();
    }
}

module.exports = TodoModel;