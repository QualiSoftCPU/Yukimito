'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.removeColumn('Vaccines', 'pet_id');
    queryInterface.removeColumn('Vaccines', 'expiry_date');
    queryInterface.removeColumn('Vaccines', 'date_administered');
  },

  async down (queryInterface, Sequelize) {
    queryInterface.addColumn('Vaccines', 'pet_id', {
      type: Sequelize.INTEGER
    });
    queryInterface.addColumn('Vaccines', 'expiry_date', {
      type: Sequelize.DATE
    });
    queryInterface.addColumn('Vaccines', 'date_administered', {
      type: Sequelize.DATE
    });
  }
};
