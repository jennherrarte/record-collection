'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Artists', [
        {
          id: 1,
          name: 'A Tribe Called Quest',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: 'Wu-Tang Clan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: 'Fu-Tang Clan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: 'Lu-Tang Clan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: 'Zu-Tang Clan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]),
      queryInterface.bulkInsert('Albums', [
        {
          id: 1,
          title: 'The Low End Theory',
          genre: 'Rap',
          release_year: '1993-11-01',
          createdAt: new Date(),
          updatedAt: new Date(),
          ArtistId: 1
        },
        {
          id: 2,
          title: 'Enter the Wu-Tang (36 Chambers)',
          genre: 'Rap',
          release_year: '1993-11-01',
          createdAt: new Date(),
          updatedAt: new Date(),
          ArtistId: 2
        },
        {
          id: 3,
          title: 'Enter the Fu-Tang (36 Chambers)',
          genre: 'Rap',
          release_year: '1993-11-01',
          createdAt: new Date(),
          updatedAt: new Date(),
          ArtistId: 3
        },
        {
          id: 4,
          title: 'Enter the Lu-Tang (36 Chambers)',
          genre: 'Rap',
          release_year: '1993-11-01',
          createdAt: new Date(),
          updatedAt: new Date(),
          ArtistId: 4
        },
        {
          id: 5,
          title: 'Enter the Zu-Tang (36 Chambers)',
          genre: 'Rap',
          release_year: '1993-11-01',
          createdAt: new Date(),
          updatedAt: new Date(),
          ArtistId: 5
        }
      ]),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
