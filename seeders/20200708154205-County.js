"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Counties", [
      { name: "Nairobi", createdAt: new Date(), updatedAt: new Date() },
      { name: "Kisii", createdAt: new Date(), updatedAt: new Date() },
      { name: "Nakuru", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Counties", null, {});
  },
};
