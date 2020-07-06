const sequelize = require("sequelize");
const db = require("../config/database");

const Hospital = db.define("hospital", {
  name: {
    type: sequelize.STRING,
  },
  description: {
    type: sequelize.STRING,
  },
});

module.exports = Hospital;
