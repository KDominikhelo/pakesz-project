export class SubTask{


    constructor(name,finish,script){

        this.name = name;
        this.finish = finish;
        this.script = script;

    }
    setFinish(finish){
this.finish = finish;
    }
    getAll(){
        const arr = []
        arr.push(this.name)
        arr.push(this.finish)
        arr.push(this.script)
        return arr;
    }

}