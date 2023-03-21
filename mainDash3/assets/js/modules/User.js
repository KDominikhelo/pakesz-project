export class User{

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

    this.projects.push(project);


}


}