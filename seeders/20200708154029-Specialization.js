"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Specializations", [
      { name: "Surgery", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oncology", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dermatology", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Specializations", null, {});
  },
};
