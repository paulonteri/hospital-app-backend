"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },

      first_name: {
        type: Sequelize.STRING,
      },

      last_name: {
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      last_login: {
        type: Sequelize.DATE,
      },

      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable("Users");
  },
};
