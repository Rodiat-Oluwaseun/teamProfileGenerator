// // TODO: Write code to define and export the Employee class
// // using Employee constructor 
// const Employee = require('../lib/Employee');

// // creates employee object 
// test('creates an employee object', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.name).toEqual(expect.any(String));
//     expect(employee.id).toEqual(expect.any(Number));
//     expect(employee.email).toEqual(expect.any(String));
// });

// // gets id from getId() 
// test('gets employee name', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.getName()).toEqual(expect.any(String));
// });

// // gets id from getId() 
// test('gets employee ID', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.getId()).toEqual(expect.any(Number));
// });

// // gets emails from getEmail()
// test('gets employee email', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
// });

// // gets role from getRole()
// test('gets role of employee', () => {
//     const employee = new Employee('Nicole', 90, 'nicole.elisaw@gmail.com');

//     expect(employee.getRole()).toEqual("Employee");
// }); 
class Employee {
    constructor (name, id ,email){
        this.name = name;
        this.id = id;
        this.email = email;
        
    }
    getName(){
        return (this.name)
    }
    getId(){
        return(this.id)
    }
    getEmail(){
        return (this.email)
    }

    getRole(){
        return "Employee"
    }
}

module.exports = Employee ;