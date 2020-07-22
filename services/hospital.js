const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Hospital, Doctor, DoctorHospital } = require("../models/index");

async function getHospitals(specialization, county) {
  //
  const doctors = await Doctor.findAll({
    attributes: [["id", "doctorId"]],
    where: {
      specializationId: specialization,
    },
    raw: true,
  });

  const hospitalIds = await DoctorHospital.findAll({
    attributes: [["hospitalId", "id"]],
    where: {
      [Op.or]: doctors,
    },
    raw: true,
  });

  const hospitals = await Hospital.findAll({
    where: {
      [Op.or]: hospitalIds,
      countyId: county,
    },
    raw: true,
  });

  console.log(hospitals);

  return hospitals;
}

module.exports = { getHospitals: getHospitals };
