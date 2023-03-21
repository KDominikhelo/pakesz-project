        import { Project } from "./modules/project.js"
        import { Task } from "./modules/task.js"    
        import { SubTask } from "./modules/subtask.js"    
        
        var project = []

        function projectToaddProject(name) {

            project.push(new Project(name));

        }
        function ProjectToAddTaskByINDEX(name,a) {
            for (let i = 0; i < project.length; i++) {
                if (i===a) {
                    project[a].task.push(new Task(name));
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
            const arr = [];
            project[projectIndex].task.map((item)=>{
                arr.push(item);
            })
            return arr;
        }

        function getAllSubtaskFromTaskFromProject(projectIndex,TaskID) {
            project[projectIndex].task[TaskID].map((item)=>{
                console.log(item.name);
            })
        }

        function showTask(index) {
            
          return  getAllTaskFromProject(index).map((element)=>{
                const task = (item)=>{
                return `<div class="card mt-4  " draggable="true">
                <div class="card-header card_post_it">
                  ${item.name}
                </div>
                <div class="card-body" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <h5 class="card-title">${item.name}</h5>
                  <p class="card-text">Itt a leírása a(z) ${item.name} feladatnak.</p>
                </div>
              </div>`
            }
            document.getElementById("tasks").innerHTML += task(element);
            })
        }

          const form = document.getElementById("addProject")
          const projects = document.getElementById("projects");
        
          form.addEventListener("submit",(e)=>{
            e.preventDefault();
            projects.innerHTML = "";
            projectToaddProject(e.target.name.value);
            getAllProject().map((item,index) =>{
                projects.innerHTML += `<li><a class="nav-link text-white" id="${item.name}id" >${item.name}</a></li>`
                console.log(document.getElementById(`${item.name}id`));
                document.getElementById(`${item.name}id`).addEventListener('click',(e)=>{
                    e.preventDefault();
                    document.getElementById("projectName").innerText = item.name;
                    document.getElementById("tasks").innerHTML = "";
                    document.getElementById("tasks").innerHTML = `<button type="button" id="addTask" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#newTaskModal">Add Task</button>`;
                    document.getElementById("task").addEventListener("submit",(e)=>{
                        e.preventDefault();
                        document.getElementById("tasks").innerHTML = "";
                        document.getElementById("tasks").innerHTML = `<button type="button" id="addTask" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#newTaskModal">Add Task</button>`;
                        
                            const taskName = e.target.taskName.value;
                            console.log(index);
                            ProjectToAddTaskByINDEX(taskName,index);
                            console.log(getAllTaskFromProject(index))
                            showTask(index)
                    })
                    showTask(index)

                    
                   
        
                })
            }); 
            
        })

      


        const columns = document.querySelectorAll(".column");

        document.addEventListener("dragstart", (e) => {
          e.target.classList.add("dragging");
        });
        
        document.addEventListener("dragend", (e) => {
          e.target.classList.remove("dragging");
          
        });
        
        columns.forEach((item) => {
          item.addEventListener("dragover", (e) => {
            const dragging = document.querySelector(".dragging");
            const applyAfter = getNewPosition(item, e.clientY);
        
            if (applyAfter) {
              applyAfter.insertAdjacentElement("afterend", dragging);
            } else {
              item.prepend(dragging);
            }
          });
        });
        
        function getNewPosition(column, posY) {
          const cards = column.querySelectorAll(".item:not(.dragging)");
          let result;
        
          for (let refer_card of cards) {
            const box = refer_card.getBoundingClientRect();
            const boxCenterY = box.y + box.height / 2;
        
            if (posY >= boxCenterY) result = refer_card;
          }
        
          return result;
        }
        

            
        