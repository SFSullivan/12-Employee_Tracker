const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctable = require('console.table');
const db = require('./db/connection');

const Department = require('./models/Department');
const Employee = require('./models/Employee');
const Role = require('./models/Role')

//prompt questions and functions to follow

const navOptions = [
    {
        type: 'list',
        name: 'options',
        message: 'What do you want to do?',
        choices: ['View Employees', 'View Departments', 'View Roles', 'Add Department', 'Add Role', 'Add Employee']
    }
];

const roles_prompts = [
    {
        name: 'new_role',
        type: 'input',
        message: 'Title of role:',
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Salary:'
    },
    {
        name: 'department',
        type: 'list',
        message: 'Department the role is in:',
        choices: []
    }
];

const employ_prompts = [
    {
        name: 'first_name',
        type: 'input',
        message: 'First name:'
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Last name:'
    },
    {
        name: 'role',
        type: 'list',
        message: 'Their role:',
        choices: []
    },
    {
        name: 'manager',
        type: 'list',
        message: 'Manager:',
        choices: ['N/A']
    },

];

function menu() {
    inquirer.prompt(navOptions)
        .then(choice => {
            userChoice(choice)
        })
};

function returnToMenu() {
    inquirer.prompt({
        name: 'return',
        message: 'return to the main menu'
    }).then(answer => {
        menu();
    })
}

function userChoice(choice) {
    if (choice.options === 'View Employees') {
        Employee.findAll()
            .then(all_employees => {
                all_employees = all_employees.map(emp => {
                    return { id: emp.id, first_name: emp.first_name, last_name: emp.last_name, roleId: emp.roleId }
                })
                console.table(all_employees)
            })
            .then(() => returnToMenu());

    };

    if (choice.nav === 'View All Departments') {

        Department.findAll()
            .then(all_departments => {
                all_departments = all_departments.map(dep => {
                    return { id: dep.id, dep_name: dep.dep_name }
                })
                console.table(all_departments)
            })
            .then(() => returnToMenu());
    };

    if (choice.nav === 'View All Roles') {

        Role.findAll()
            .then(roles => {
                roles = roles.map(role => {
                    return { id: role.id, title: role.title, salary: role.salary, departmentId: role.departmentId }
                })
                console.table(roles)
            })
            .then(() => returnToMenu());
    };

    if (choice.nav === 'Add Department') {
        inquirer.prompt(
            {
                name: 'new_dep',
                type: 'input',
                message: 'Department name:'
            }
        )
            .then(answer => {
                Department.create({
                    dep_name: answer.new_dep
                })
            })

            .then(() => {
                backToMenu()
            })

    };

};

//start the app

menu();