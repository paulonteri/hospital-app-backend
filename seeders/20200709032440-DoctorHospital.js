"use strict";

const { Hospital, Doctor } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hospital = await Hospital.findAll({ raw: true });
    const doctor = await Doctor.findAll({ raw: true });

    return await queryInterface.bulkInsert("DoctorHospitals", [
      {
        hospitalId: hospital[0].id,
        doctorId: doctor[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        hospitalId: hospital[1].id,
        doctorId: doctor[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DoctorHospitals", null, {});
  },
};
