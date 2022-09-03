const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    database: 'employee_db',
    user: 'root',
    password: '1234'
})

module.exports = connection