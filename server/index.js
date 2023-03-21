import SubTask from "./classes/SubTask";
import Task from "./classes/Task";
import Project from "./classes/Project";
const express = require("express");
const app = express();

const project = [];
const task = [];
const submit = [];

app.route("/project")
.delete((req,res)=>{

})
.put((req,res)=>{

})
.post((req,res)=>{
project.push(new Project(req.body.name))
})
.get((req,res)=>{

})
app.route("/task")
.delete((req,res)=>{
    
})
.put((req,res)=>{

})
.post((req,res)=>{

})
.get((req,res)=>{

})
app.route("/subtask")
.delete((req,res)=>{
    
})
.put((req,res)=>{

})
.post((req,res)=>{

})
.get((req,res)=>{

})


app.listen(3000,console.log("fut"));