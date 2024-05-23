'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('petOwners', 'status', {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: 'new',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('petOwners', 'status');
  }
};
