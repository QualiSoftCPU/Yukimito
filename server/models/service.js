'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  service.init({
    type: DataTypes.ENUM('errand', 'daycare', 'homecare', 'full-grooming', 'bath_and_blow_dry', 'nail_trimming', 'ear_and_eyes_cleaning', 'annal_shave', 'teeth_brushing', 'dog_walking'),
    rate: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'service',
  });
  return service;
};