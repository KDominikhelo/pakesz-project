export class Project{

    projectName;
    userId;
    projectId;
    task = [];

    
    constructor (projectName,userId,projectId){
        this.projectName = projectName;
        this.userId = userId;
        this.projectId = projectId;
    }

    addNewTask(task){
        //IDE JÖN A FETCH HOGY ELKÜLDJE A BACKENDNEK
        this.task.push(task);
    }

    getAllTasks(){
        //IDE JÖN A FETCH HOGY LEKÉRJE AZ BACKENDNEK
      return this.task;  

    }

    getTaskById(taskId){

        //FETCH AMI LEKÉRI A BACKENDTŐL taskId ALAPJÁN A TASKOT


    }
    

    
    }