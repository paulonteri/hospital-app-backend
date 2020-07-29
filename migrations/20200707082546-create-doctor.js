"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Doctors", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
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

      bio: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Doctors");
  },
};
