export class SubTask{

    subTaskName;
    subTaskId;
    checked = false;

    constructor(subTaskId,subTaskName){

        this.subTaskId = subTaskId;
        this.subTaskName = subTaskName;

    }

    checkSubTask(){
        //fetch ami elküldi hogy ki lett jelölve a checkbox
        this.checked = true;


        //bootstrap+
    }

}