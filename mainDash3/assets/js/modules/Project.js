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

    getTaskByIndex(index){

        //FETCH AMI LEKÉRI A BACKENDTŐL INDEX ALAPJÁN A TASKOT

       return this.task[index];

    }
    

    
    }