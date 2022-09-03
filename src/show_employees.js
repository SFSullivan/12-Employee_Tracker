const db = require('../db/connection');
const ctable = require('console.table');

const employs = `
    SELECT
        e.id AS 'ID',
        e.first_name AS 'First Name',
        e.last_name AS 'Last Name',
        employee_role.title AS 'Job Title',
        CONCAT(m.first_name, ' ', m.last_name) AS 'Manager'
    FROM employee e
        LEFT JOIN employee m 
            ON m.id = e.manager_id
        LEFT JOIN employee_role
            ON employee_role.id = e.role_id
`;

async function showEmployees() {
    const employees = await db.query(employs);
    console.table(employees[0]);
    return promptSelected();
};

module.exports = showEmployees;

const {promptSelected} = require('../index');
