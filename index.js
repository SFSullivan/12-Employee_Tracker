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

const menu = [
    {
        type: 'list',
        name: 'nav',
        message: 'What do you want to do?',
        choices: ['View employees', 'View roles', 'View departments', 'Add department', 'Add role', 'Add employee']
    }
];

const role_prompt = [
    {
        name: 'new_role',
        type: 'input',
        message: 'type in the name of the new role',
    },
    {
        name: 'salary',
        type: 'input',
        message: 'input the salary of the new role'
    },
    {
        name: 'department',
        type: 'list',
        message: 'what department is this role getting added to',
        choices: []
    },
];