"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DoctorHospitals", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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

      hospitalId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "Hospitals",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DoctorHospitals");
  },
};
