'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'bookings',
        'service_list',
        Sequelize.ARRAY(Sequelize.INTEGER)
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'bookings',
        'service_list'
      )
    ]);
  }
};
