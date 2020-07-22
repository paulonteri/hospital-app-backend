const { County, Doctor, Hospital, DoctorHospital } = require("../models/index");

var Sequelize = require("sequelize");
var Op = Sequelize.Op;

async function getCounties(specialization) {
  const doctors = await Doctor.findAll({
    attributes: [["id", "doctorId"]],
    where: {
      specializationId: specialization,
    },
    raw: true,
  });

  const hospitals = await DoctorHospital.findAll({
    attributes: [["hospitalId", "id"]],
    where: {
      [Op.or]: doctors,
    },
    raw: true,
  });

  const countyIds = await Hospital.findAll({
    attributes: [["countyId", "id"]],
    where: {
      [Op.or]: hospitals,
    },
    raw: true,
  });

  const counties = await County.findAll({
    where: {
      [Op.or]: countyIds,
    },
    raw: true,
  });

  return counties;
}

module.exports = { getCounties: getCounties };
