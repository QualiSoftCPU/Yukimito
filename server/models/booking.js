'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking.init({
    petOwnerId: DataTypes.INTEGER,
    pets: DataTypes.ARRAY(DataTypes.INTEGER),
    checkIn_date: DataTypes.DATE,
    checkOut_date: DataTypes.DATE,
    status: DataTypes.ENUM('pending', 'approved', 'rejected'),
    service_list: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'booking',
  });
  return booking;
};