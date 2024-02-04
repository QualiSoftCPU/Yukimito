'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'petOwners',
        'address',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'petOwners',
        'pets',
        Sequelize.INTEGER
      ),
      queryInterface.addColumn(
        'petOwners',
        'booking_list',
        Sequelize.INTEGER
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'petOwners',
        'address',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'petOwners',
        'pets',
        Sequelize.INTEGER
      ),
      queryInterface.removeColumn(
        'petOwners',
        'booking_list',
        Sequelize.INTEGER
      )
    ]);
  }
};
