"use strict";
var bCrypt = require("bcrypt-nodejs");

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

var userPassword = generateHash(123456);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        first_name: "John",
        last_name: "Doe",
        password: userPassword,
        email: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        password: userPassword,
        email: "janedoe@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Paul",
        last_name: "Onteri",
        password: userPassword,
        email: "onteripaul@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
