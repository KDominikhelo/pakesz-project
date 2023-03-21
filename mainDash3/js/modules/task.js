export class Task {

    constructor (name){
this.name = name;
this.subTask = [];
this.whereISIT = 0;
    }
addSubTask(task){
this.subTask.push(task);
}
}

