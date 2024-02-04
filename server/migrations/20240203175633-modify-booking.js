'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'bookings',
        'status',
        Sequelize.ENUM('pending', 'approved', 'rejected')
      ),
      queryInterface.addColumn(
        'bookings',
        'total_price',
        Sequelize.FLOAT
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'bookings',
        'status'
      ),
      queryInterface.removeColumn(
        'bookings',
        'total_price'
      )
    ]);
  }
};
