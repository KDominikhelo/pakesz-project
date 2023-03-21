import { Task } from "./Task";

export class Project{

    projectName;
    userId;
    task = [];

    
    constructor (projectName,userId){
        projectName = this.projectName;
        userId = this.userId;
    }

    addNewTask(task){
        //IDE JÖN A FETCH HOGY ELKÜLDJE A BACKENDNEK
        this.task.push(task);
    }

    getAllTasks(){
        //IDE JÖN A FETCH HOGY LEKÉRJE AZ BACKENDNEK
      return this.task;  

    }

    getTaskByIndex(index){

        //FETCH AMI LEKÉRI A BACKENDTŐL INDEX ALAPJÁN A TASKOT
return this.task[index];

    }
    

    
    }