const { Sequelize } = require('sequelize');

const db = new Sequelize(
    'record_collection_db',
    'root',
     '',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: '3307'
    });

module.exports = db;



