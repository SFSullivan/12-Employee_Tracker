const inquirer = require('inquirer');
const mysql = require ('mysql2');
const ctable = require('console.table')
const db = require('./db/connection')

const showDepartments = require('./src/show_departments')

//prompt questions and functions to follow

const choosePrompt = {
    type: 'list',
    name: 'user_options',
    message: 'What would you like to do?',
    choices: ['View all departments', 'View all employees', 'Add an employee', 'End'],
};

async function promptSelected() {
    const userSelected = await inquirer.prompt(choosePrompt);
        switch(userSelected.user_options) {
            case 'View all departments':
                return showDepartments();
        }
}



//start the app
promptSelected();