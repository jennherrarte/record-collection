'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([

  //     queryInterface.addColumn("Artists", "realId", {
  //       type: Sequelize.UUID,
  // defaultValue: Sequelize.UUIDV4,
  // allowNull: false,
  // //primaryKey: true
  //     }),





  //     queryInterface.addColumn("Albums", "artistId", {
  //       type: Sequelize.UUID,
  //       allowNull: false,
  //       foreignKey: true,
  //       references: {
  //         model: 'Artists',
  //         key: 'realId'
  //       }
  //     }),
     // Album.belongsTo(Artist)
    ]);
  },

  async down (queryInterface, Sequelize) {
 
     return Promise.all([queryInterface.removeColumn("Artists", "key1")]);
    
  }
};
