export class Task{

    taskName;
    taskLeiras;
    collaborators = []
    taskId;
    projectId;
    subTask = [];

    constructor(taskName, projectId,taskId,taskLeiras){

        this.taskId = taskId;
        this.taskLeiras = taskLeiras;
        this.taskName = taskName;
        this.projectId = projectId;
    }

    addNewSubTask(subTask,subTaskId){
        //FETCH ELKÜLDI BACKENDNEK
    }





}