'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Booking', {
      fields: ['admin_id'],
      type: 'foreign key',
      name: 'FK_admin_id',
      references: {
        table: 'Admin',
        field: 'admin_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }), 
    queryInterface.addConstraint('Booking', {
      fields: ['pet_id'],
      type: 'foreign key',
      name: 'FK_pet_id',
      references: {
        table: 'Pet',
        field: 'pet_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('Pet', {
      fields: ['owner_id'],
      type: 'foreign key',
      name: 'FK_owner_id',
      references: {
        table: 'PetOwner',
        field: 'owner_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('PetOwner', {
      fields: ['username'],
      type: 'unique',
      name: 'unique_username'
    }),
    queryInterface.addConstraint('PetOwner', {
      fields: ['emailAddress'],
      type: 'unique',
      name: 'unique_emailAddress'
    }),
    queryInterface.addConstraint('PetOwner', {
      fields: ['contactNumber'],
      type: 'unique',
      name: 'unique_contactNumber'
    }),
    queryInterface.addConstraint('PetVaccine', {
      fields: ['pet_id'],
      type: 'foreign key',
      name: 'FK_pet_id',
      references: {
        table: 'Pet',
        field: 'pet_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('PetVaccine', {
      fields: ['vaccine_id'],
      type: 'foreign key',
      name: 'FK_vaccine_id',
      references: {
        table: 'Vaccine',
        field: 'vaccine_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('BookingService', {
      fields: ['booking_id'],
      type: 'foreign key',
      name: 'FK_booking_id',
      references: {
        table: 'Booking',
        field: 'booking_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }),
    queryInterface.addConstraint('BookingService', {
      fields: ['service_id'],
      type: 'foreign key',
      name: 'FK_service_id',
      references: {
        table: 'Service',
        field: 'service_id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Booking', 'FK_admin_id'),
    queryInterface.removeConstraint('Booking', 'FK_pet_id'),
    queryInterface.removeConstraint('Pet', 'FK_owner_id'),
    queryInterface.removeConstraint('PetOwner', 'unique_username'),
    queryInterface.removeConstraint('PetOwner', 'unique_emailAddress'),
    queryInterface.removeConstraint('PetOwner', 'unique_contactNumber'),
    queryInterface.removeConstraint('PetVaccine', 'FK_pet_id'),
    queryInterface.removeConstraint('PetVaccine', 'FK_vaccine_id'),
    queryInterface.removeConstraint('BookingService', 'FK_booking_id'),
    queryInterface.removeConstraint('BookingService', 'FK_service_id')
  }
};
