export class Task {

    constructor (name){
this.name = name;
this.subTask = [];
    }
addSubTask(task){
this.subTask.push(task);
}
}

