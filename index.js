const inquirer = require('inquirer');
const mysql = require ('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    database: 'employee_db',
    user: 'root',
    password: '1234'
});

//prompt questions and functions