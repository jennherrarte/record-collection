'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    console.log('ehe')
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Artists", "key1", "key", "key11", "key121", "jenn", "jennknn", "realId")
    await queryInterface.removeColumn("artists", "key1", "key", "key11", "key121", "jenn", "jennknn", "realId")
    await queryInterface.removeColumn("Albums", "test")
    await queryInterface.removeColumn("albums", "test")
    
  }
};
