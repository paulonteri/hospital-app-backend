"use strict";
const faker = require("faker");
faker.locale = "de";
const { Specialization } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const specialization = await Specialization.findAll({
      raw: true,
    });

    return await queryInterface.bulkInsert("Doctors", [
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[0].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[1].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        specializationId: specialization[2].id,
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Doctors", null, {});
  },
};
