"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Specializations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      specializationGroupId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "SpecializationGroups",
          key: "id",
        },
        allowNull: false,
        onDelete: "cascade",
      },

      name: {
        type: Sequelize.STRING,
        unique: true,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Specializations");
  },
};
