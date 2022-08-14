'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Intervals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Intervals.init({
    interval: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Intervals',
  });
  return Intervals;
};