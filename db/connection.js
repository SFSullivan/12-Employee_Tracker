const { Sequelize } = require('sequelize');

const connection = new Sequelize('employee_db', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})


connection.sync({force: false})

module.exports = connection;