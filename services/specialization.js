const { Specialization } = require("../models/index");

async function getSpecializations(specializationGroup) {
  const objs = await Specialization.findAll({
    where: {
      specializationGroupId: specializationGroup,
    },
    raw: true,
  });
  return objs;
}

module.exports = { getSpecializations: getSpecializations };
