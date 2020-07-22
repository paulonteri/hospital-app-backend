"use strict";

const {
  User,
  Hospital,
  Doctor,
  County,
  Specialization,
} = require("../models/index");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const patient = await User.findAll({ raw: true });
    const hospital = await Hospital.findAll({ raw: true });
    const doctor = await Doctor.findAll({ raw: true });
    const county = await County.findAll({ raw: true });
    const specialization = await Specialization.findAll({ raw: true });

    return await queryInterface.bulkInsert("Appointments", [
      {
        subject: "Head Ache",
        reason: "Head Ache for two weeks.",
        appointment_date: new Date(),
        patientId: patient[1].id,
        hospitalId: hospital[0].id,
        doctorId: doctor[0].id,
        countyId: county[2].id,
        specializationId: specialization[0].id,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: "Fever",
        reason: "Chills, fever and sweating. Pain in the abdomen and muscles",
        appointment_date: new Date(),
        patientId: patient[0].id,
        hospitalId: hospital[1].id,
        doctorId: doctor[2].id,
        countyId: county[0].id,
        specializationId: specialization[1].id,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        subject: "Leg Pain",
        reason: "Constant pain in the knee.",
        appointment_date: new Date(),
        patientId: patient[2].id,
        hospitalId: hospital[2].id,
        doctorId: doctor[1].id,
        countyId: county[1].id,
        specializationId: specialization[2].id,
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Appointments", null, {});
  },
};
