'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     this.belongsTo(models.Artist, {as: 'Artist'});
    }
  }
  Album.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_year: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Album',
  });

  return Album;
};

// abum has foreign key pointing to artist table 
// look up on columns, keys speeds things up 
