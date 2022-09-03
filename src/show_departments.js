const mysql = require('mysql2/promise');
const db = require('../db/connection')
const cTable = require('console.table');

const chooseDepartment = `
    SELECT
        id as 'ID'
        department_name AS 'Department'
    FROM department_table
`;

async function showDepartments() {

    const departments = await db.query(chooseDepartment);

    console.table(departments[0]);
    return promptSelected();
};

module.exports = showDepartments;

const {promptSelected} = require('../index');