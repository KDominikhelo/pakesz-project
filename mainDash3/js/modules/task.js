export class Task {
static getAllTask(projectID,projectArray){
    
    const arr = null;
    projectArray.map((item)=>{
        if (item.ID == projectID) {
            arr = (item.task)
        }
    })
    return arr;
}
    constructor (name){
this.projectID
this.name = name;
this.subTask = [];
this.whereISIT = 0;
    }
addSubTask(task){
this.subTask.push(task);
}
}



