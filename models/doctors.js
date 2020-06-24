const faker = require("faker");
faker.locale = "de";

function doctors() {
  docs = [];
  for (i = 0; i <= 20; i++) {
    docs.push({
      id: faker.random.number(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    });
  }
  return { myDoctors: docs };
}

module.exports = {
  doctors: doctors(),
};
