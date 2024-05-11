'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PetOwner.init({
    owner_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    name: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PetOwner',
    freezeTableName: true,
  });
  return PetOwner;
};