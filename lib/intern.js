const Employee = require("./employee");

class Intern extends Employee{
    constructor(firstName, lastName, email, employeeId, schoolName) {
        super(firstName, lastName, email, employeeId);
        this.schoolName = schoolName;
    }
}

module.exports = Intern;