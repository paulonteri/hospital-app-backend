const { Specialization } = require("../models/index");

async function getSpecializations() {
  const objs = await Specialization.findAll({ raw: true });
  return objs;
}

module.exports = { getSpecializations: getSpecializations };
