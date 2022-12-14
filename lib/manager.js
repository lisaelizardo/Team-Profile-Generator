const Employee = require("./employee");

//discuss constructor and super again

class Manager extends Employee{
    constructor(firstName, lastName, email, employeeId, officeNumber) {
        super(firstName, lastName, email, employeeId);
        this.officeNumber = officeNumber;
    }
}

module.exports = Manager;