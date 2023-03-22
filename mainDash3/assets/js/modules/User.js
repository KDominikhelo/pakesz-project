export default class User{

    userName;
    email;
    userId;
    projects = [];



constructor(userName,email,userId){

    userName = this.userName;
    email = this.email;    
    userId = this.userId;


}

addNewProject(project){

    fetch("../JSON/Project.json")

        .then(response => response.json())
        .then(json => console.log(json));

    //fetch ami hozzáad egy új projectet backendnek
    this.projects.push(project);

    console.log(projects);
}

getAllProject(userId){
    //lekérés ami lekéri backendről az összes userhez tartozó projectet
}

getProjectById(userId,projectId){

    //lekérés ami lekér egy bizonyos projektet userId és projectId alapján

}







}