const Employee = require("./employee");

class Engineer extends Employee{
    constructor(firstName, lastName, email, employeeId, githubUsername) {
        super(firstName, lastName, email, employeeId);
        this.githubUsername = githubUsername;
    }
}

module.exports = Engineer;