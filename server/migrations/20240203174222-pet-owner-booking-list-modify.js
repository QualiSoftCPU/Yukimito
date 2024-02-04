'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'petOwners',
        'booking_list',
      ),
      queryInterface.addColumn(
        'petOwners',
        'booking_list',
        Sequelize.ARRAY(Sequelize.INTEGER)
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'petOwners',
        'booking_list',
        Sequelize.Sequelize.INTEGER,
      ),
      queryInterface.removeColumn(
        'petOwners',
        'booking_list'
      ),
    ]);
  }
};
