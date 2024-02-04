'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      petOwnerId: {
        type: Sequelize.INTEGER
      },
      pets: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      checkIn_date: {
        type: Sequelize.DATE
      },
      checkOut_date: {
        type: Sequelize.DATE
      },
      service_list: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bookings');
  }
};