const Sequelize = require("sequelize");

const connection = new Sequelize('crud','root','u123456',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;