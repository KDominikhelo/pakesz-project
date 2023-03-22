export class Task {

    taskName;
    taskLeiras;
    collaborators = []
    taskId;
    projectId;
    checked;
    subTask = [];

    constructor(taskName, projectId, taskId, taskLeiras) {

        this.taskId = taskId;
        this.taskLeiras = taskLeiras;
        this.taskName = taskName;
        this.projectId = projectId;
    }

    addNewSubTask(subTask, subTaskId) {
        //FETCH ELKÜLDI BACKENDNEK
    }

    getAllSubTask() {
        //fetch lekéri az összes subTaskot
    }

    getSubTaskById(subTaskId) {
        //fetch lekéri id alapján a subtaskot
    }

    subTaskCheck() {
        //lekéri az összes subtask checked értékét és ha az összes subtask checked akkor át állítja a task checked értékét és
        //ha az összes true akkor át állítja a task checked értékét true-ra visszaküldi a backendnek hogy kész a task és ha kész csak akkor lehet áthúzni a complete helyre 
    }


}