const inquirer = require('inquirer');
const mysql = require ('mysql2');
const Employee = require('./models/Employee');
const Department = require('./models/Department');
const Role = require('./models/Role');

const db = mysql.createPool({
    host: 'localhost',
    database: 'employee_db',
    user: 'root',
    password: '1234'
});

//prompt questions and functions to follow

const navOptions = [
    'view departments',
    'view roles',
    'view employees',
    'add a department',
    'add a role',
    'add employee',
    'update employee role',
]

const navQuestions = [
    {
        type: 'list',
        name: 'selections',
        message: 'What would you like to do?',
        choices: navOptions
    },
];

function startApp() {
    inquirer.prompt(navQuestions)
        .then(answers => {
            if(questions.choices === navOptions[0]) console.log('You chose to view the departments.')

            if(questions.choices === navOptions[1]) console.log('You chose to view the roles in the company.')

            if(questions.choices === navOptions[2]) console.log('You chose to view employees.')

            if(questions.choices === navOptions[3]) console.log('You chose to add a department.')

            if(questions.choices === navOptions[4]) console.log('You chose to add a role.')

            if(questions.choices === navOptions[5]) console.log('You chose to add an employee.')

            if(questions.choices === navOptions[6]) console.log('You chose to update an employee role.')
        });
}

startApp();