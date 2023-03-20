export class Project{

powers = [];
task = [];

constructor (name){
this.name = name;
this.date = new Date();
console.log(this.date.getFullYear()  + "y :"+this.date.getMonth()+"m :"+this.date.getDay()+"d: "+ this.date.getHours()+"h: "+  "készült");
}
addTask(task){
    this.task.push(task);
}
getTask(){

    const array = []
    this.task.map((item)=>{
        array.push(item);
    })

    return array;

}

}
