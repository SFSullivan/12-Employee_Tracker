const { DataTypes, Model } = require('sequelize');
const Role = require('./Role');

class Department extends Model { }

Department.init({
    dep_name: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    }, {
        sequelize: require('../db/connection'),
        modelName: 'department'
        }
);

Department.hasMany(Role);
Role.belongsTo(Department);

module.exports = Department;