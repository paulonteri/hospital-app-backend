"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Will add a UserId attribute to Hospital to hold the primary key value id 'as' is not specified
      // models.Hospital.belongsTo(models.Users, {
      // this.belongsTo(models.Users, {
      //   onDelete: "CASCADE",
      //   as: "addedBy",
      //   foreignKey: {
      //     allowNull: false,
      //   },
      // });
    }
  }
  Hospital.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: DataTypes.TEXT,

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      addedBy: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Hospital",
    }
  );
  return Hospital;
};
