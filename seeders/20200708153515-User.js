"use strict";
var bCrypt = require("bcrypt-nodejs");

var generateHash = function (password) {
  return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomId() {
  return getRandomInt(30000000, 39999999);
}

function randomPhoneNumber() {
  var num = getRandomInt(703930999, 729999999);
  return `+254${num}`;
}

var userPassword = generateHash(123456);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        first_name: "John",
        last_name: "Doe",
        password: userPassword,
        email: "example@example.com",
        national_id: randomId(),
        phone: randomPhoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Jane",
        last_name: "Doe",
        password: userPassword,
        email: "janedoe@example.com",
        national_id: randomId(),
        phone: randomPhoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        first_name: "Paul",
        last_name: "Onteri",
        password: userPassword,
        email: "onteripaul@gmail.com",
        national_id: randomId(),
        phone: randomPhoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
