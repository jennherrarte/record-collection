'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      console.log('test')

    ])
  },

  async down (queryInterface, Sequelize) {
   

return Promise.all([

queryInterface.removeColumn('Artists', 'key'),
queryInterface.removeColumn('Artists', 'key1'),
queryInterface.removeColumn('Artists', 'key11'),
queryInterface.removeColumn('Artists', 'key121'),
queryInterface.removeColumn('Artists', 'jenn'),
queryInterface.removeColumn('Artists', 'jenkn'),
queryInterface.removeColumn('Artists', 'realId'),
queryInterface.removeColumn('Albums', 'test'),




])




  }
};
