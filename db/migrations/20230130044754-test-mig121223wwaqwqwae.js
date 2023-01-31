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

queryInterface.removeColumn('Artist', 'key'),
queryInterface.removeColumn('Artist', 'key1'),
queryInterface.removeColumn('Artist', 'key11'),
queryInterface.removeColumn('Artist', 'key121'),
queryInterface.removeColumn('Artist', 'jenn'),
queryInterface.removeColumn('Artist', 'jenkn'),
queryInterface.removeColumn('Artist', 'realId'),
queryInterface.removeColumn('Album', 'test'),




])




  }
};
