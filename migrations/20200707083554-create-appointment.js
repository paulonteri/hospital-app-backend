"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Appointments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      subject: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      reason: {
        allowNull: false,
        type: Sequelize.TEXT,
      },

      appointment_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      status: {
        type: Sequelize.ENUM("approved", "declined", "pending"),
        allowNull: false,
        defaultValue: "approved",
      },

      // Foreign Keys
      patientId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      hospitalId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Hospitals",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      doctorId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Doctors",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      countyId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Counties",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      specializationId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Specializations",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Appointments");
  },
};
