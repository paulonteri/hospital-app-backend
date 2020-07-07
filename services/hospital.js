const { Hospital } = require("../models/index");

async function getHospitals() {
  const hopitals = await Hospital.findAll({ raw: true });
  return hopitals;
}

module.exports = { getHospitals: getHospitals };
