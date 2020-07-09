const { County } = require("../models/index");

async function getCounties() {
  const objs = await County.findAll({ raw: true });
  return objs;
}

module.exports = { getCounties: getCounties };
