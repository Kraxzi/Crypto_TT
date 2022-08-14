'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bitcoin_price extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bitcoin_price.init({
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Bitcoin_price',
  });
  return Bitcoin_price;
};