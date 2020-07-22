"use strict";

const { Hospital, Doctor } = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hospital = await Hospital.findAll({ raw: true });
    const doctor = await Doctor.findAll({ raw: true });

    var x = 0;
    var data = [];
    while (x < 10) {
      var y = 0;
      while (y < 3) {
        data.push({
          hospitalId: hospital[y].id,
          doctorId: doctor[x].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        y += 1;
      }
      x += 1;
    }

    return await queryInterface.bulkInsert("DoctorHospitals", data);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("DoctorHospitals", null, {});
  },
};

//
