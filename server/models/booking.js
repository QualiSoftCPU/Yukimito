'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init({
    booking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    admin_id: DataTypes.INTEGER,
    pet_id: DataTypes.INTEGER,
    checkIn: DataTypes.DATE,
    checkOut: DataTypes.DATE,
    status: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Booking',
    freezeTableName: true,
  });
  return Booking;
};