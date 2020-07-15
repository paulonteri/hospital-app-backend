"use strict";
const { SpecializationGroup } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const specializationGroup = await SpecializationGroup.findAll({
      raw: true,
    });

    return await queryInterface.bulkInsert("Specializations", [
      {
        name: "Neurosurgeon",
        specializationGroupId: specializationGroup[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "General oncology",
        specializationGroupId: specializationGroup[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "General surgery",
        specializationGroupId: specializationGroup[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Specializations", null, {});
  },
};
