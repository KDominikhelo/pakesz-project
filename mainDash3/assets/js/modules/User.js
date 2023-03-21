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
    //fetch ami hozzáad egy új projectet backendnek
    this.projects.push(project);
}

getAllProject(userId){
    //lekérés ami lekéri backendről az összes userhez tartozó projectet
}







}