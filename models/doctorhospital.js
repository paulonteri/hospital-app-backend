"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorHospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // doctorId
      this.belongsTo(models.Doctor, {
        onDelete: "CASCADE",
        as: "doctor",
        foreignKey: {
          allowNull: false,
        },
      });

      // hospitalId
      this.belongsTo(models.Hospital, {
        onDelete: "CASCADE",
        as: "hospital",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  DoctorHospital.init(
    {
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "DoctorHospital",
    }
  );
  return DoctorHospital;
};
