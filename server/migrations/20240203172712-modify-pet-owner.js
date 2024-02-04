'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'petOwners',
        'pet_list',
        Sequelize.ARRAY(Sequelize.INTEGER),
    
      ),
      queryInterface.addColumn(
        'petOwners',
        'address',
        Sequelize.STRING,
        
      ),

    ]);
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn(
        'petOwners',
        'pet_list',
      ),
      queryInterface.removeColumn(
        'petOwners',
        'address',
      ),
    ]);
  }
};
