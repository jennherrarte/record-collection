'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
 up: (queryInterface, Sequelize) => {
    return Promise.all([
    
   
        queryInterface.addColumn("Albums", "testds", {
          type: Sequelize.STRING,
          allowNull: true,
        }),

      




    ])
  },

  down: (queryInterface, Sequelize) => {
   

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
