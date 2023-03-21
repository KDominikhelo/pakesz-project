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
        this.task.push(task);
        //IDE JÖN A FETCH HOGY ELKÜLDJE A BACKENDNEK
    }

    getAllTasks(){
        //IDE JÖN A FETCH HOGY LEKÉRJE AZ BACKENDNEK
      return this.task;  

    }

    getTaskByIndex(index){

        //FETCH AMI LEKÉRI A BACKENDTŐL INDEX ALAPJÁN A TASKOT

        for (let i = index; i < this.task.length; i++) {
            const task = array[i];
            return task;
        }

    }
    

    
    }