"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // specializationGroupId
      this.belongsTo(models.SpecializationGroup, {
        onDelete: "CASCADE",
        as: "specializationGroup",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Specialization.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialization",
      unique: true,
      allowNull: false,
    }
  );
  return Specialization;
};
