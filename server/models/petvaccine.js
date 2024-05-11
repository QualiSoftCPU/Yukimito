'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetVaccine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PetVaccine.init({
    pet_vaccine_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    pet_id: DataTypes.INTEGER,
    vaccine_id: DataTypes.INTEGER,
    dateGiven: DataTypes.DATE,
    expiryDate: DataTypes.DATE,
    vaccinePhoto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PetVaccine',
    freezeTableName: true,
  });
  return PetVaccine;
};