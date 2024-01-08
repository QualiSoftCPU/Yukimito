'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pet.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    size: DataTypes.ENUM('small', 'medium', 'large'),
    petOwnerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'petOwners',
        key: 'id'
      }
    }
  }, { sequelize, modelName: 'pet' });
  return pet;
};