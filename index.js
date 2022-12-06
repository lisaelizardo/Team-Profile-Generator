const inquirer = require('inquirer');
const generateHtml = require('./generator.js');
const path = require('path');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?'
        },
    ])
    .then((answers) => {
        console.log(answers)
    })