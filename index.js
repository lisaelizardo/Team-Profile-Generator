const inquirer = require('inquirer');
const generateHtml = require('./generator.js');
const path = require('path');

const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Team Managers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is their office number?'
        },
        {
            type: 'list',
            message: 'Would you like to...',
            name: 'option',
            choices: ['add an engineer', 'add an Intern', 'finish building my team']
            
        },
    ])



    .then((answers) => {
        console.log(answers)
        const htmlContent = generateHtml(answers);
        console.log(htmlContent)
        fs.writeFile('Team-Roster.html', htmlContent, (err) => err && console.error(err))
    })