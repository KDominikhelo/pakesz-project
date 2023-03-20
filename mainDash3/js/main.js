        import { Project } from "./modules/project.js"
        import { Task } from "./modules/task.js"    
        import { SubTask } from "./modules/subtask.js"    
        
        var project = []

        function projectToaddProject(name) {
            console.log("ff");
            project.push(new Project(name));

        }
        function ProjectToAddTaskByINDEX(name,a) {
            for (let i = 0; i < project.length; i++) {
                if (i===a) {
                    project.push(new Task(name));
                }
            }
        }
        function TaskToAddSubTaskByINDEX(name,finish,script,a) {
            
            for (let i = 0; i < project.length; i++) {
                if (i===a) {
                    project.push(new SubTask(name,finish,script));
                }
            }
        }
        function getAllProject() {
            const arr = [];
            project.map((item)=>{
                arr.push(item);
            })
            return arr;
        }
        function getAllTaskFromProject(projectIndex) {
            project[projectIndex].task.map((item)=>{
                console.log(item.name);
            })
        }
        function getAllSubtaskFromTaskFromProject(projectIndex,TaskID) {
            project[projectIndex].task[TaskID].map((item)=>{
                console.log(item.name);
            })
        }

          const form = document.getElementById("addProject")
          const projects = document.getElementById("projects");
        form.addEventListener("submit",(e)=>{

            e.preventDefault();
            projects.innerHTML = "";
            projectToaddProject(e.target.name.value);
            getAllProject().map((item) =>{
                projects.innerHTML += `<li><a class="nav-link text-white">${item.name}</a></li>`
              }); 
            
        })

        

/*
            document.getElementById("makeProject").onsubmit = (e)=>{
                e.preventDefault();
                    project.push (new Project(e.target.name.value) );
                    document.getElementById("projects").innerHTML  = "";
                    project.map((item)=>{
                        
                        document.getElementById("projects").innerHTML += `<button id="${item.name}">${item.name}</button>`
                        
                        innerProject = document.getElementById("projects");
                        
                        
                    })
                    for (let i = 0; i < innerProject.childNodes.length; i++) {
                        innerProject.childNodes[i].onclick = ()=>{

                            document.getElementById("tasks").innerHTML = "";
                            getfun(i)
                           document.getElementById("projectupdating").innerHTML = `
                           
                           <h1> ${innerProject.childNodes[i].id} </h1>

                           <form id="${innerProject.childNodes[i].id}ID">
            <input type="text" id="taskName" name="taskName">
            <input type="area" id="taskAreaName" name="taskAreaName">
            <input type="submit">
        </form>

                           `

                           document.getElementById(innerProject.childNodes[i].id+"ID").onsubmit = (e)=>{
                            e.preventDefault();

                            project.map((item)=>{
                                if (innerProject.childNodes[i].id == item.name) {
                                    item.addTask(new Task(e.target.taskName.value,e.target.taskAreaName.value))
                                    item.getTask().map((item)=>{
                                        document.getElementById("tasks").innerHTML += item.name
                                    })
                                }
                            })

                        }

                        }
                        
                       
                        
                        
                    }
                }
       
function getfun(i) {
    project.map((item)=>{
        if (innerProject.childNodes[i].id == item.name) {
            //item.addTask(new Task(e.target.taskName.value,e.target.taskAreaName.value))
            item.getTask().map((item)=>{
                document.getElementById("tasks").innerHTML += item.name
            })
        }
    })
}
            */
           

            
        

            
        