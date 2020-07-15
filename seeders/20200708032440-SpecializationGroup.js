"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("SpecializationGroups", [
      { name: "Surgery", createdAt: new Date(), updatedAt: new Date() },
      { name: "Oncology", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SpecializationGroups", null, {});
  },
};
