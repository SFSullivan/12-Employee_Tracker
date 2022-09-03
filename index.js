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

