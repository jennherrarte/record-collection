const {Sequelize, DataTypes} = require("sequelize");
const db = require('../config/database');

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const Album = sequelize.define("albums", {
   title: {
     type: DataTypes.STRING,
     allowNull: false
   },
   artist: {
     type: DataTypes.STRING,
     allowNull: false
   },
   release_date: {
     type: DataTypes.DATEONLY,
   },
   genre: {
     type: DataTypes.STRING,
   }
});

sequelize.sync().then(() => {
   console.log('Album table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.export = Album;