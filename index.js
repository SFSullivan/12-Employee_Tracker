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