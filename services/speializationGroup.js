const { SpecializationGroup } = require("../models/index");

async function getSpecializationGroups() {
  const objs = await SpecializationGroup.findAll({ raw: true });
  return objs;
}

module.exports = { getSpecializationGroups: getSpecializationGroups };
