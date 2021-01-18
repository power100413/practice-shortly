'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class urls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  urls.init({
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    visits: { type: DataTypes.INTEGER, defaultValue: 0 },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP()')
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()')
    // }
  }, {
    sequelize,
    modelName: 'urls',
  });
  return urls;
};