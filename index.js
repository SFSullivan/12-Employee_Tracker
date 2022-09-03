const inquirer = require('inquirer');
const mysql = require ('mysql2');
const ctable = require('console.table');
const db = require('./db/connection');

const Department = require('./models/Department');
const Employee = require('./models/Employee');
const Role = require('./models/Role')

//prompt questions and functions to follow


//start the app
