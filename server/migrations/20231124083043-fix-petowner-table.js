'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'petOwners',
        'contact_number',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'petOwners',
        'name',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'petOwners',
        'first_name'
      ),
      queryInterface.removeColumn(
        'petOwners',
        'last_name'
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'petOwners',
        'firstname',
        Sequelize.STRING
      ),
      queryInterface.addColumn(
        'petOwners',
        'lastname',
        Sequelize.STRING
      ),
      queryInterface.removeColumn(
        'petOwners',
        'contact_number'
      ),
      queryInterface.removeColumn(
        'petOwners',
        'name'
      )
    ]);
  }
};
