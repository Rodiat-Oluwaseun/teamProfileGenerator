//code to define and export the Employee class.
const Employee = require('./Employee');

class intern extends Employee {
constructor ( name, id,email,school){
    super(name,id,email);
    this.school = school ;

}
getSchool(){
    return this.school;
}

getRole(){
    return "Intern";
}
}

module.exports = intern;