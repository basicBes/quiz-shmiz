'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Category }) {
      this.belongsTo(Category, { foreignKey: 'categoryId' });
    }
  }

  Question.init(
    {
      title: DataTypes.STRING,
      wa1: DataTypes.STRING,
      wa2: DataTypes.STRING,
      wa3: DataTypes.STRING,
      ra: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );

  return Question;
};
