const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Doctor, DoctorHospital } = require("../models/index");

async function createDoctor(firstName, lastName) {
  if (!firstName) {
    throw "firstName is required";
  }
  if (!lastName) {
    throw "lastName is required";
  }

  const obj = await Doctor.create({
    firstName: firstName,
    lastName: lastName,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return obj;
}

async function getDoctors(specialization, hospital) {
  //
  const doctorIds = await DoctorHospital.findAll({
    attributes: [["doctorId", "id"]],
    where: {
      hospitalId: hospital,
    },
    raw: true,
  });

  const doctors = await Doctor.findAll({
    where: {
      [Op.or]: doctorIds,
      specializationId: specialization,
    },
    raw: true,
  });

  return doctors;
}

module.exports = { createDoctor: createDoctor, getDoctors: getDoctors };
