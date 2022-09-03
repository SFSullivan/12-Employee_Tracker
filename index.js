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
        choices: ['View Employees', 'View Departments', 'View Roles',]
    }
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

};

//start the app

