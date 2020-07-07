const { Doctor } = require("../models/index");

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

async function getDoctors() {
  const doctors = await Doctor.findAll({ raw: true });
  return doctors;
}

module.exports = { createDoctor: createDoctor, getDoctors: getDoctors };
