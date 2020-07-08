"use strict";
const faker = require("faker");
faker.locale = "de";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Doctors", [
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Surgery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Oncology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Dermatology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Surgery",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Oncology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        speciality: "Dermatology",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Doctors", null, {});
  },
};
