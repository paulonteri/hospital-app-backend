"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Foreign keys

      // patientId
      this.belongsTo(models.User, {
        onDelete: "CASCADE",
        as: "patient",
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

      // patientId
      this.belongsTo(models.Doctor, {
        onDelete: "CASCADE",
        as: "doctor",
        foreignKey: {
          allowNull: false,
        },
      });
    }
  }
  Appointment.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      subject: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      reason: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      appointment_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },

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
      modelName: "Appointment",
    }
  );
  return Appointment;
};
