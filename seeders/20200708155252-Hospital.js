"use strict";

const { User } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true });

    return await queryInterface.bulkInsert("Hospitals", [
      {
        name: "Nairobi Hospital",
        addedBy: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Galaxy Medicare",
        addedBy: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kenyatta National Hospital",
        addedBy: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hospitals", null, {});
  },
};
