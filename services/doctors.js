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

module.exports = { createDoctor: createDoctor };
